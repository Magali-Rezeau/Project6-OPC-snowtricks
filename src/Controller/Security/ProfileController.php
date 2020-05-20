<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Form\ProfileType;
use App\Form\ResetPasswordType;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     * @return Response
     */
    public function edit(Request $request, EntityManagerInterface $entityManagerInterface, UploaderHelper $uploaderHelper)
    {
        $user = $this->getUser();
        $form = $this->createForm(ProfileType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $uploadedFile = $form['profile_picture']->getData();
            if ($uploadedFile) {
                $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'profilePictures');
                $user->setProfilePicture($newFilename);
            }

            $entityManagerInterface->persist($user);
            $entityManagerInterface->flush();

            $this->addFlash('success', 'Votre compte a bien été modifié.');
        }
        return $this->render('security/profile.html.twig', [
            'controller_name' => 'AccountController',
            'user' => $this->getUser(),
            'form' => $form->createView()  
        ]);
    }
}