<?php

namespace App\Controller;

use App\Repository\TrickRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(TrickRepository $trickRepository)
    {
        return $this->render('home/home.html.twig', [
            'controller_name' => 'HomeController',
            'tricks' => $trickRepository->findByOrderAndLimit(),
            'tricks_more' => $trickRepository->findForReadMore()
        ]);
    }
}
