<?php

namespace App\Form;

use App\Entity\Video;
use App\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class VideoType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,  $this->fieldsConfiguration("Veuillez saisir un titre."))
            ->add('url', UrlType::class, $this->fieldsConfiguration("Veuillez saisir l'adresse url de la vidéo."))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Video::class,
            'translation_domain' => 'video-form'
        ]);
    }
}
