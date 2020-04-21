<?php

namespace App\Form;

use App\Entity\Trick;
use App\Form\VideoType;
use App\Entity\Category;
use App\Form\PictureType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class TrickType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description', TextareaType::class)
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name'
            ])
            ->add('pictures', CollectionType::class, [
                'entry_type'   		=> PictureType::class,
                'allow_add' => true,
                'allow_delete' => true,
               
            ])
            ->add('videos', CollectionType::class, [
                'entry_type'   		=> VideoType::class,
                'allow_add' => true,
                'allow_delete' => true,
               
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Trick::class,
        ]);
    }
}
