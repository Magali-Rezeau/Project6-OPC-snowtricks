<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Service\Mailer;
use App\Form\RegistrationType;
use App\Service\UploaderHelper;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     * @return Response
     */
    public function register(Request $request, EntityManagerInterface $entityManagerInterface, UserPasswordEncoderInterface $userPasswordEncoderInterface, UploaderHelper $uploaderHelper, Mailer $mailer, TokenGeneratorInterface $tokenGeneratorInterface)
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['profile_picture']->getData();
            if ($uploadedFile) {
                $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'profilePictures');
                $user->setProfilePicture($newFilename);
            }

            $user->setPassword($userPasswordEncoderInterface->encodePassword($user, $user->getPassword()));
            $user->setActivationToken($tokenGeneratorInterface->generateToken());
            $entityManagerInterface->persist($user);
            $entityManagerInterface->flush();

            $mailer->sendMessage('noreply@snowtricks.com',$user->getEmail(), $user->getUsername(),'Activer votre compte','email/activation.html.twig',[
                'user' => $user,
                'token' => $user->getActivationToken()
            ]);

            $this->addFlash('success', 'Votre compte a bien été créé. Un email vient de vous être envoyé pour activer votre compte.');
        }
        return $this->render('security/register.html.twig', [
            'controller_name' => 'AccountController',
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/activation/{token}", name="activation")
     */
    public function activation($token, UserRepository $userRepository, EntityManagerInterface $entityManagerInterface)
    {
        $user = $userRepository->findOneBy(['activation_token' => $token]);

        if (!$user) {
            throw $this->createNotFoundException('Cet utilisateur n\'existe pas');
        }

        $user->setActivationToken(null);

        $entityManagerInterface->persist($user);
        $entityManagerInterface->flush();

        $this->addFlash('success', 'Votre compte a bien été activé.');
        return $this->redirectToRoute('login');
    }
}
