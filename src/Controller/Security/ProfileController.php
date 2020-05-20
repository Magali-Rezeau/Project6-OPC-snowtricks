<?php

namespace App\Controller\Security;

use App\Entity\User;
use App\Service\Mailer;
use App\Form\ProfileType;
use App\Form\ResetPasswordType;
use App\Service\UploaderHelper;
use App\Repository\UserRepository;
use App\Form\ForgottenPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class ProfileController extends AbstractController
{
    /**
     * @Route("/profile", name="profile")
     * @IsGranted("ROLE_USER")
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

     /**
     * @Route("/update_password", name="update_password")
     * @IsGranted("ROLE_USER")
     */
    public function updatePassword(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManagerInterface, Mailer $mailer, TokenGeneratorInterface $tokenGeneratorInterface)
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

            $token = $tokenGeneratorInterface->generateToken();

            try {
                $user->setResetToken($token);
                $entityManagerInterface->persist($user);
                $entityManagerInterface->flush();
            } catch (\Exception $e) {
                $this->addFlash('error', $e->getMessage());
                return $this->redirectToRoute('login');
            }

            $mailer->sendMessage('noreply@snowtricks.com', $user->getEmail(), $user->getUsername(), 'Modifier votre mot de passe', 'email/update-password.html.twig', [
                'user' => $user,
                'token' => $user->getResetToken()
            ]);

            $this->addFlash('success', 'Un email de modification du mot de passe vient de vous être envoyé.');

            return $this->redirectToRoute('profile');
        }

        return $this->render('security/update-password.html.twig', [
            'controller_name' => 'AccountController',
            'form' => $form->createView(),
        ]);
    }
}