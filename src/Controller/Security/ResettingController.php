<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Form\ResetPasswordType;
use App\Repository\UserRepository;
use App\Form\ForgottenPasswordType;
use Symfony\Component\Mime\Address;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class ResettingController extends AbstractController
{
    /**
     * @Route("/forgotten_password", name="forgotten_password")
     *
     */
    public function forgottenPassword(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManagerInterface, MailerInterface $mailerInterface, TokenGeneratorInterface $tokenGeneratorInterface)
    {
        $form = $this->createForm(ForgottenPasswordType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $datas = $form->getData();
            $user = $userRepository->findOneByEmail($datas['email']);

            if (!$user) {
                $this->addFlash('danger', 'Cette adresse e-mail est inconnue');
                return $this->redirectToRoute('login');
            }

            $token = $tokenGeneratorInterface->generateToken();

            try {
                $user->setResetToken($token);
                $entityManagerInterface->persist($user);
                $entityManagerInterface->flush();
            } catch (\Exception $e) {
                $this->addFlash('warning', $e->getMessage());
                return $this->redirectToRoute('login');
            }

            $email = (new TemplatedEmail())
                ->from(new Address('noreply@snowtricks.com', 'Snowtricks'))
                ->to(new Address($user->getEmail()))
                ->subject('Mot de passe oublié')
                ->htmlTemplate('email/reset-password.html.twig')
                ->context([
                    'user' => $user,
                    'token' => $user->getResetToken()
                ]);
            $mailerInterface->send($email);

            $this->addFlash('message', 'Un email de réinitialisation du mot de passe vient de vous être envoyé.');

            return $this->redirectToRoute('login');
        }

        return $this->render('account/forgotten-password.html.twig', [
            'controller_name' => 'AccountController',
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/reset_password/{id}/{token}", name="reset_password")
     */
    public function resetPassword(Request $request, User $user, EntityManagerInterface $entityManagerInterface, $token, UserPasswordEncoderInterface $userPasswordEncoderInterface)
    {
        if ($user->getResetToken() === null || $token !== $user->getResetToken()) {

            $this->addFlash('danger', 'Token Inconnu');
            return $this->redirectToRoute('login');
        }
        $form = $this->createForm(ResetPasswordType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword($userPasswordEncoderInterface->encodePassword($user, $user->getPassword()));
            $user->setResetToken(null);
            $entityManagerInterface->persist($user);
            $entityManagerInterface->flush();

            $this->addFlash('message', 'Votre mot de passe a été mis à jour.');

            return $this->redirectToRoute('login');
        }
        return $this->render('account/reset-password.html.twig', [
            'controller_name' => 'AccountController',
            'token' => $token,
            'form' => $form->createView()
        ]);
    }
}
