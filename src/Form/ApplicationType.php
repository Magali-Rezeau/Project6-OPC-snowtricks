<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;

class ApplicationType extends AbstractType 
{
    /**
     * FieldsConfiguration
     * @param  string $placeholder
     * @param array $options
     * @return array
     */
    protected function fieldsConfiguration($placeholder, $options = [])
    {
        return array_merge_recursive([
            'attr' => [
                'placeholder' => $placeholder
            ]
            ], $options);  
    }
}
