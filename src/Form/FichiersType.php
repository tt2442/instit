<?php

namespace App\Form;

use App\Entity\Fichiers;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Article;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class FichiersType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('article', EntityType::class, [
            'class' => Article::class,
            'multiple' => true, 'required' => false, 'attr' => ['no_index',]
        ])

            ->add('Image', null, ['attr' => []])
            ->add('Tag', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])
            ->add('Degrade', ChoiceType::class, ['choices' => ['Oui' => 'true', 'Non' => 'false'], 'expanded' => true, 'attr' => []])
            ->add('Enligne', ChoiceType::class, ['choices' => ['Oui' => 'true', 'Non' => 'false'], 'expanded' => true, 'attr' => []]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Fichiers::class,
        ]);
    }
}
