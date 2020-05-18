<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     */
    public function register(Request $request, EntityManagerInterface $entityManagerInterface, UserPasswordEncoderInterface $userPasswordEncoderInterface, UploaderHelper $uploaderHelper)
    {
        $user = new User();

        $form = $this->createForm(RegistrationType::class, $user);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['profile_picture']->getData();
            if ($uploadedFile) {
                $newFilename = $uploaderHelper->uploadProfilePicture($uploadedFile);
                $user->setProfilePicture($newFilename);
            }

            $user->setPassword($userPasswordEncoderInterface->encodePassword($user, $user->getPassword()));
            $entityManagerInterface->persist($user);
            $entityManagerInterface->flush();

            $this->addFlash('success', 'Votre compte a bien été créé. Vous pouvez vous connecter.');
        }
        return $this->render('security/register.html.twig', [
            'controller_name' => 'SecurityController',
            'form' => $form->createView()
        ]);
    }
    
}
