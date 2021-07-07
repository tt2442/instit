<?php

namespace App\Form;

use App\Entity\Categorie;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Article;

use App\Entity\Promotion;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;

class CategorieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('Nom', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])

            ->add('Description', null, ['attr' => []])
            ->add('Etat', CheckboxType::class, ['label' => 'Actif', 'required' => false, 'attr' => []])
            ->add('couleur', ColorType::class, ['attr' => ['data-inputmask' => "'alias': 'color'",]])
            ->add('article', EntityType::class, [
                'class' => Article::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Promotion', EntityType::class, [
                'class' => Promotion::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Categorie::class,
        ]);
    }
}
