<?php

namespace App\Controller;

use App\Entity\Trick;
use App\Entity\Picture;
use App\Form\TrickType;
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
       
        if($form->isSubmitted() && $form->isValid()) {
            
            foreach($trick->getPictures() as $picture ) {
                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }
            foreach($trick->getVideos() as $video ) {
                $video->setTrick($trick);
                $entityManagerInterface->persist($video);
            }

            $entityManagerInterface->persist($trick);
            $entityManagerInterface->flush();
            
            $this->addFlash('success', "La nouvelle figure  a bien été enregistrée.");

            return $this->redirectToRoute('trick_show', [
                'slug' => $trick->getSlug()
            ]);
        }
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