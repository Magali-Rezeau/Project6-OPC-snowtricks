<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;

class ProfileType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class, $this->fieldsConfiguration('Veuillez saisir un pseudo.'))
            ->add('email', EmailType::class, $this->fieldsConfiguration('Veuillez saisir une adresse email.' ))
            ->add('profile_picture', FileType::class, [
                'constraints' => [
                    new Image([
                        'maxSize' => '2M'
                    ])
                ],
                'mapped' => false,
                'required' => false,
                ] )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'translation_domain' => 'profile-form'
        ]);
    }
}
