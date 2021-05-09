<?php

namespace App\Form;

use App\Entity\Categorie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Article;

use App\Entity\Promotions;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class CategorieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('article', EntityType::class, [
            'class' => Article::class,
            'multiple' => true, 'required' => false, 'attr' => ['no_index',]
        ])
            ->add('Promotions', EntityType::class, [
                'class' => Promotions::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Nom', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])

            ->add('Description', null, ['attr' => []])
            ->add('Etat', ChoiceType::class, ['choices' => ['Actif' => 'true', 'Inactif' => 'false'], 'attr' => []]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Categorie::class,
        ]);
    }
}
