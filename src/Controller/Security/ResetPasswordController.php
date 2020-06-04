<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Service\Mailer;
use App\Form\ResetPasswordType;
use App\Repository\UserRepository;
use App\Form\ForgottenPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class ResetPasswordController extends AbstractController
{    
    /**
     * @var EntityManagerInterface
     */
    private $manager;    

    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;    

    /**
     * @var TokenGeneratorInterface
     */
    private $tokenGenerator;

    public function __construct(EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder, TokenGeneratorInterface $tokenGenerator)
    {
        $this->manager = $manager;
        $this->encoder = $encoder;
        $this->tokenGenerator = $tokenGenerator;
    }
    
    /**
     * @Route("/mot-de-passe-oublié", name="forgotten_password")
     *
     */
    public function forgottenPassword(Request $request, UserRepository $userRepository, Mailer $mailer)
    {
        $form = $this->createForm(ForgottenPasswordType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $datas = $form->getData();
            $user = $userRepository->findOneByEmail($datas['email']);

            if (!$user) {
                $this->addFlash('error', 'Cette adresse e-mail est inconnue');
                return $this->redirectToRoute('login');
            }

            $token = $this->tokenGenerator->generateToken();

            try {
                $user->setResetToken($token);
                $this->manager->persist($user);
                $this->manager->flush();
            } catch (\Exception $e) {
                $this->addFlash('error', $e->getMessage());
                return $this->redirectToRoute('login');
            }

            $mailer->sendMessage('noreply@snowtricks.com', $user->getEmail(), $user->getUsername(), 'Mot de passe oublié', 'email/reset-password.html.twig', [
                'user' => $user,
                'token' => $user->getResetToken()
            ]);

            $this->addFlash('success', 'Un email de réinitialisation du mot de passe vient de vous être envoyé.');

            return $this->redirectToRoute('login');
        }

        return $this->render('security/forgotten-password.html.twig', [
            'controller_name' => 'AccountController',
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/réinitialisation/{id}/{token}", name="reset_password")
     */
    public function resetPassword(Request $request, User $user, $token)
    {
        if ($user->getResetToken() === null || $token !== $user->getResetToken()) {

            $this->addFlash('error', 'Token Inconnu');
            return $this->redirectToRoute('login');
        }
        $form = $this->createForm(ResetPasswordType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $user->setResetToken(null);
            $this->manager->persist($user);
            $this->manager->flush();

            $this->addFlash('success', 'Votre mot de passe a été mis à jour.');

            return $this->redirectToRoute('login');
        }
        return $this->render('security/reset-password.html.twig', [
            'controller_name' => 'AccountController',
            'token' => $token,
            'form' => $form->createView()
        ]);
    }
}
