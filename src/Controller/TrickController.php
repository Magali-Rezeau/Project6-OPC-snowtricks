<?php

namespace App\Controller;

use App\Entity\Trick;
use App\Form\TrickType;
use App\Service\UploaderHelper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrickController extends AbstractController
{
    /**
     * @Route("/trick/new", name="trick_new")
     * 
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
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile);
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
     * 
     * @return Response
     */
    public function edit(Trick $trick, Request $request, EntityManagerInterface $entityManagerInterface, UploaderHelper $uploaderHelper)
    {
       
        $originalPictures = new ArrayCollection();
        $form = $this->createForm(TrickType::class, $trick);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
           foreach ($originalPictures as $picture) {
                if (false === $trick->getPictures()->contains($picture)) {
                    // remove the Task from the Tag
                    $picture->getTrick()->removeElement($trick);
    
                    // if it was a many-to-one relationship, remove the relationship like this
                    // $tag->setTask(null);
    
                    $entityManagerInterface->persist($picture);
    
                    // if you wanted to delete the Tag entirely, you can also do that
                    // $entityManager->remove($tag);
                }
            }
            $pictures = $form['pictures']->getData();
            foreach($pictures as $picture) {
                 $uploadedFile = $picture->getFile();
                 if($uploadedFile) {
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile);
                     $picture->setPath($newFilename);
                 } 
                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }

            /*foreach ($originalVideos as $video) {
                if (false === $trick->getVideos()->contains($video)) {
                    // remove the Task from the Tag
                    $video->getTrick()->removeElement($trick);
    
                    // if it was a many-to-one relationship, remove the relationship like this
                    // $tag->setTask(null);
    
                    $entityManagerInterface->persist($video);
    
                    // if you wanted to delete the Tag entirely, you can also do that
                    // $entityManager->remove($tag);
                }
            }*/ 
            /*if (false === $task->getTags()->contains($tag)) {
                // remove the Task from the Tag
                $tag->getTasks()->removeElement($task);

                // if it was a many-to-one relationship, remove the relationship like this
                // $tag->setTask(null);

                $entityManager->persist($tag);

                // if you wanted to delete the Tag entirely, you can also do that
                // $entityManager->remove($tag);
            }
            $pictures = $form['pictures']->getData();
            foreach($pictures as $picture) {
                 $uploadedFile = $picture->getFile();
                 if($uploadedFile) {
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile);
                     $picture->setPath($newFilename);
                 } else {
                    $picture->setPath($newFilename);
                 }

                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }
            $pictureCollection = $trick->getPictures();

            $videos = $form['videos']->getData();
            foreach($videos as $video) {
                $video->setTrick($trick);
                $entityManagerInterface->persist($video);
            }
           /*foreach($trick->getPictures() as $picture ) {
                $path = $picture->getPath();
              
                $uploadedFile = $picture->getFile();
                if($uploadedFile) {
                     $newFilename = $uploaderHelper->uploadPicture($uploadedFile);
                     $picture->setPath($newFilename);
                    
                } else {
                    $picture->setPath($path);
                    $picture->setCaption($picture->getCaption);
                }
               
                $picture->setTrick($trick);
                $entityManagerInterface->persist($picture);
            }
            foreach($trick->getVideos() as $video ) {
                $video->setTrick($trick);
                $entityManagerInterface->persist($video);
            }*/

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
