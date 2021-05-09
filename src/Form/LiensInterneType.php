<?php

namespace App\Form;

use App\Entity\LiensInterne;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Materiel;

class LiensInterneType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('materiel', EntityType::class, [
            'class' => Materiel::class,
            'multiple' => true, 'required' => false, 'attr' => ['no_index',]
        ])

            ->add('Observation', null, ['attr' => []]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LiensInterne::class,
        ]);
    }
}
