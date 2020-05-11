<?php

namespace App\Form;

use App\Entity\Trick;
use App\Form\VideoType;
use App\Entity\Category;
use App\Form\PictureType;
use App\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class TrickType extends ApplicationType
{    
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, $this->fieldsConfiguration('Veuillez saisir le nom de la figure.')
            )
            ->add('description', TextareaType::class, $this->fieldsConfiguration('Veuillez saisir un descriptif de la figure.')
            )
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name'
            ])
            ->add('pictures', CollectionType::class, [
                'entry_type' => PictureType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'allow_file_upload' => true,
                'required' => false,
                'entry_options' => ['label' => false], 
                'by_reference' => false
            ])
            ->add('videos', CollectionType::class, [
                'entry_type' => VideoType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'required' => false,
            
                'entry_options' => ['label' => false],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trick::class,
            'translation_domain' => 'trick-form'
        ]);
    }
}
