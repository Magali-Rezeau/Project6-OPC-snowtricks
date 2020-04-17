<?php

namespace App\Controller;

use App\Repository\TrickRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrickController extends AbstractController
{
    /**
     * @Route("/trick/{slug}", name="trick")
     * 
     * @return Response
     */
    public function show($slug, TrickRepository $trickRepository)
    {
        $trick = $trickRepository->findOneBySlug($slug);

        return $this->render('trick/show.html.twig', [
            'controller_name' => 'TrickController',
            'trick' => $trick
        ]);
    }
}
