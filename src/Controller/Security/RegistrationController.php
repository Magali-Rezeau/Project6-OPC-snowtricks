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
     * @Route("/inscription", name="register")
     * @return Response
     */
    public function register(Request $request, UploaderHelper $uploaderHelper, Mailer $mailer)
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['profile_picture']->getData();
            if ($uploadedFile) {
                $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'profilePictures');
                $user->setProfilePicture($newFilename);
            } else {
                $user->setProfilePicture('profile-picture-default.png');
            }

            $user->setPassword($this->encoder->encodePassword($user, $user->getPassword()));
            $user->setActivationToken($this->tokenGenerator->generateToken());
            $this->manager->persist($user);
            $this->manager->flush();

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
    public function activation($token, UserRepository $userRepository)
    {
        $user = $userRepository->findOneBy(['activation_token' => $token]);

        if (!$user) {
            throw $this->createNotFoundException('Cet utilisateur n\'existe pas');
        }

        $user->setActivationToken(null);

        $this->manager->persist($user);
        $this->manager->flush();

        $this->addFlash('success', 'Votre compte a bien été activé.');
        return $this->redirectToRoute('login');
    }
}
