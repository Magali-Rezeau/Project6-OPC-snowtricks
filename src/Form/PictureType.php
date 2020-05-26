<?php

namespace App\Form;

use App\Entity\Picture;
use App\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PictureType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, $options)
    {
        $builder
            ->add('file', FileType::class,
            [
            'required' => false ])
            ->add('caption', TextType::class, $this->fieldsConfiguration("Veuillez saisir un titre."))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Picture::class,
            'translation_domain' => 'picture-form'
        ]);
    }
}
