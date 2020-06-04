<?php

namespace App\Controller;

use DateTime;
use App\Entity\Trick;
use App\Entity\Comment;
use App\Form\TrickType;
use App\Form\CommentType;
use App\Service\Paginator;
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
     * @var EntityManagerInterface
     */
    private $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    /**
     * @Route("/trick/création", name="trick_new")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function create(Request $request, UploaderHelper $uploaderHelper)
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
                $this->manager->persist($picture);
            }

            foreach($trick->getVideos() as $video) {
                $video->setTrick($trick);
                $this->manager->persist($video);
            }

            $this->manager->persist($trick);
            $this->manager->flush();
            
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
     * @Route("/trick/{slug}/modification", name="trick_edit")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function edit(Trick $trick, Request $request, UploaderHelper $uploaderHelper)
    {
       
        $originalPictures = new ArrayCollection();
        $originalVideos = new ArrayCollection();
        
        $form = $this->createForm(TrickType::class, $trick);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()) {
           foreach ($originalPictures as $picture) {
                if (false === $trick->getPictures()->contains($picture)) {
                    $picture->getTrick()->removeElement($trick);
                    $this->manager->persist($picture);
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
                $this->manager->persist($picture);
            }
           
            foreach ($originalVideos as $video) {
                if (false === $trick->getVideos()->contains($video)) {
                    $video->getTrick()->removeElement($trick);
                    $this->manager->persist($video);
                }
            }
 
            $videos = $form['videos']->getData();
            foreach($videos as $video) {
                $video->setTrick($trick);
                $this->manager->persist($video);
            }
            $trick->setUpdatedAt(new DateTime());
            $this->manager->persist($trick);
            $this->manager->flush();
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
     * @Route("/trick/{slug}/suppression", name="trick_delete")
     * @IsGranted("ROLE_USER")
     * @return Response
     */
    public function delete(Trick $trick) 
    {
        $filesystem = new Filesystem();

        foreach ($trick->getPictures() as $picture) {
            $filesystem->remove('uploads/pictures/' .$picture->getPath());
        }
       
        $this->manager->remove($trick);
        $this->manager->flush();
        
        $this->addFlash('success', "La figure {$trick->getName()} a bien été supprimé.");
        return $this->redirectToRoute('home');     
    }
    
    /**
     * @Route("/trick/{slug}/{page<\d+>?1}", name="trick_show")
     * 
     * @return Response
     */
    public function show(Trick $trick, Request $request, $page, Paginator $paginator)
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid())
        {  
            $comment->setTrick($trick);
            $comment->setUser($this->getUser());

            $this->manager->persist($comment);
            $this->manager->flush();

            $this->addFlash(
                'success',
                'Votre commentaire a bien été enregistré !'
            );
        }
        $paginator
            ->setEntity(Comment::class)
            ->setOrder(['created_at' => 'DESC'])
            ->setAttribut(['trick' => $trick])
            ->setCurrentPage($page)
            ->setLimit(4)
        ;
        
        return $this->render('trick/show.html.twig', [
            'controller_name' => 'TrickController',
            'trick' => $trick,
            'paginator' => $paginator,
            'user' => $this->getUser(),
            'form' => $form->createView()
        ]);
    }  
}
