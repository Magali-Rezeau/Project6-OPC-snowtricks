<?php

namespace App\Controller;

use App\Entity\Trick;
use App\Form\TrickType;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Collections\ArrayCollection;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrickController extends AbstractController
{
    /**
     * @Route("/trick/new", name="trick_new")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function create(Request $request, EntityManagerInterface $entityManagerInterface, UploaderHelper $uploaderHelper)
    {  
        $trick = new Trick();
       
        $form = $this->createForm(TrickType::class, $trick);
        
        $form->handleRequest($request);
        
        if($form->isSubmitted() && $form->isValid()) {
             
            $pictures = $form['pictures']->getData();
            foreach($pictures as $picture) {
                 $uploadedFile = $picture->getFile();
                 if($uploadedFile) {
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'pictures');
                     $picture->setPath($newFilename);
                 } 
                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }

            foreach($trick->getVideos() as $video) {
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
        return $this->render('trick/new.html.twig', [
            'controller_name' => 'TrickController',
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/trick/{slug}/edit", name="trick_edit")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function edit(Trick $trick, Request $request, EntityManagerInterface $entityManagerInterface, UploaderHelper $uploaderHelper)
    {
       
        $originalPictures = new ArrayCollection();
        $originalVideos = new ArrayCollection();
        
        $form = $this->createForm(TrickType::class, $trick);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
           foreach ($originalPictures as $picture) {
                if (false === $trick->getPictures()->contains($picture)) {
                    $picture->getTrick()->removeElement($trick);
                    $entityManagerInterface->persist($picture);
                }
            }
            $pictures = $form['pictures']->getData();
            foreach($pictures as $picture) {
                 $uploadedFile = $picture->getFile();
                 if($uploadedFile) {
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile, 'pictures');
                     $picture->setPath($newFilename);
                 } 
                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }
           
            foreach ($originalVideos as $video) {
                if (false === $trick->getVideos()->contains($video)) {
                    $video->getTrick()->removeElement($trick);
                    $entityManagerInterface->persist($video);
                }
            }
 
            $videos = $form['videos']->getData();
            foreach($videos as $video) {
                $video->setTrick($trick);
                $entityManagerInterface->persist($video);
            }

            $entityManagerInterface->persist($trick);
            $entityManagerInterface->flush();
            $this->addFlash('success', "La figure a bien été modifié.");
            return $this->redirectToRoute('trick_show', [
                'slug' => $trick->getSlug()
            ]); 
        }
        return $this->render('trick/edit.html.twig', [
            'controller_name' => 'TrickController',
            'trick' => $trick,
            'form' => $form->createView()
        ]);
    }
    
    /**
     * @Route("/trick/{slug}/delete", name="trick_delete")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function delete(Trick $trick, EntityManagerInterface $entityManagerInterface) {

        $filesystem = new Filesystem();

        foreach ($trick->getPictures() as $picture) {
            $filesystem->remove('uploads/pictures/' .$picture->getPath());
        }
       
        $entityManagerInterface->remove($trick);
        $entityManagerInterface->flush();
        $this->addFlash('success', "La figure {$trick->getName()} a bien été supprimé.");
        return $this->redirectToRoute('home');
           
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
