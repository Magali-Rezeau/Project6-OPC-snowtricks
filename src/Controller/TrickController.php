<?php

namespace App\Controller;

use App\Entity\Trick;
use App\Entity\Picture;
use App\Form\TrickType;
use App\Repository\TrickRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrickController extends AbstractController
{
    /**
     * @Route("/trick/create", name="trick_create")
     * 
     * @return Response
     */
    public function create(Request $request, EntityManagerInterface $entityManagerInterface)
    {
        $trick = new Trick();
       
        $form = $this->createForm(TrickType::class, $trick);
        $form->handleRequest($request);
        return $this->render('trick/create.html.twig', [
            'controller_name' => 'TrickController',
            
            'form' => $form->createView()
        ]);
    }

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
