<?php

namespace App\Controller\Security;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class ProfileController extends AbstractController
{
    /**
     * @Route("/profile/edit", name="profile_edit")
     * @return Response
     */
    public function edit()
    {
        return $this->render('security/profile.html.twig', [
            'controller_name' => 'AccountController',
            
        ]);
    }
}