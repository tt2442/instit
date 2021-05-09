<?php

namespace App\Form;

use App\Entity\Commandes;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\User;
use App\Entity\Article;
use App\Entity\Promotions;

class CommandesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('User', EntityType::class, [
            'class' => User::class,
            'required' => false, 'attr' => []
        ])
            ->add('Article', EntityType::class, [
                'class' => Article::class,
                'multiple' => true, 'required' => false, 'attr' => []
            ])
            ->add('Promotions', EntityType::class, [
                'class' => Promotions::class,
                'multiple' => true, 'required' => false, 'attr' => []
            ])

            ->add('Date', null, ['attr' => []]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Commandes::class,
        ]);
    }
}
