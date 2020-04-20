<?php

namespace App\Controller;

use App\Entity\Trick;
use App\Repository\TrickRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrickController extends AbstractController
{
    /**
     * @Route("/trick/{slug}", name="trick_show")
     * 
     * @return Response
     */
    public function show(Trick $trick)
    {
        return $this->render('trick/show.html.twig', [
            'controller_name' => 'TrickController',
            'trick' => $trick
        ]);
    }
}
