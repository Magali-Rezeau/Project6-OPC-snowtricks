<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Service\UploaderHelper;
use App\Repository\UserRepository;
use Symfony\Component\Mime\Address;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AccountController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     * @return Response
     */
    public function register(Request $request, EntityManagerInterface $entityManagerInterface, UserPasswordEncoderInterface $userPasswordEncoderInterface, UploaderHelper $uploaderHelper, MailerInterface $mailerInterface)
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['profile_picture']->getData();
            if ($uploadedFile) {
                $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'profilePictures');
                $user->setProfilePicture($newFilename);
            }

            $user->setPassword($userPasswordEncoderInterface->encodePassword($user, $user->getPassword()));
            $user->setActivationToken(md5(uniqid()));
            $entityManagerInterface->persist($user);
            $entityManagerInterface->flush();

            $email = (new TemplatedEmail())
                ->from(new Address('noreply@snowtricks.com', 'Snowtricks'))
                ->to(new Address($user->getEmail(), $user->getUsername()))
                ->subject('Bienvenue dans la communauté Snowtricks')
                ->text("Nice to meet you {$user->getUsername()}! ❤️")
                ->htmlTemplate('email/activation.html.twig')
                ->context([
                'user' => $user,
                'token' => $user->getActivationToken()
                ]);
           $mailerInterface->send($email);
           
            $this->addFlash('success', 'Votre compte a bien été créé. Un email vient de vous être envoyé pour activer votre compte.');
        }
        return $this->render('account/register.html.twig', [
            'controller_name' => 'AccountController',
            'form' => $form->createView()
        ]);
    }
    
    /**
     * @Route("/activation/{token}", name="activation")
     * @return void
     */
    public function activation($token, UserRepository $userRepository, EntityManagerInterface $entityManagerInterface) 
    {
        $user = $userRepository->findOneBy(['activation_token' => $token]);

        if(!$user){
            throw $this->createNotFoundException('Cet utilisateur n\'existe pas');
        }
    
        $user->setActivationToken(null);
       
        $entityManagerInterface->persist($user);
        $entityManagerInterface->flush();

        $this->addFlash('success', 'Votre compte a bien été activé.');
        return $this->redirectToRoute('home');
    }

    /**
    * @Route("/login", name="login")
    * @return Response
    */
    public function login(AuthenticationUtils $authenticationUtils)
    {
        return $this->render('account/login.html.twig', [
            'controller_name' => 'AccountController',
            'lastUsername' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    /**
    * @Route("/logout", name="logout")
    * @return void
    */
    public function logout()
    {
        
    }
}
