<?php

namespace App\Form;

use App\Entity\Article;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\User;

use App\Entity\Promotions;

use App\Entity\Categorie;

use App\Entity\Fichiers;

use App\Entity\Materiels;

use App\Entity\Commentaires;

use App\Entity\Commandes;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('Users', EntityType::class, [
            'class' => User::class,
            'multiple' => true, 'required' => false, 'attr' => ['no_index',]
        ])
            ->add('Promotions', EntityType::class, [
                'class' => Promotions::class,
                'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Categorie', EntityType::class, [
                'class' => Categorie::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Fichiers', EntityType::class, [
                'class' => Fichiers::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Materiels', EntityType::class, [
                'class' => Materiels::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Commentaires', EntityType::class, [
                'class' => Commentaires::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('commandes', EntityType::class, [
                'class' => Commandes::class,
                'multiple' => true, 'required' => false, 'attr' => ['no_index',]
            ])
            ->add('Titre', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])

            ->add('Description', null, ['attr' => []])

            ->add('Multimedia', null, ['attr' => ['no_index',]])
            ->add('Etat', ChoiceType::class, ['choices' => ['Actif' => 'actif', 'En rupture' => 'rupture', 'Arrêté' => 'arret', 'En réapprovisionnement' => 'reapprovisionnement'], 'attr' => []])

            ->add('Quantite', null, ['attr' => ['data-inputmask' => "'alias': 'number'",]])
            ->add('FraisEnvoi', MoneyType::class, ['divisor' => 100, 'label' => "Frais d'envoi", 'attr' => ['data-inputmask' => "'alias': 'prix'",]])
            ->add('Prix', MoneyType::class, ['divisor' => 100, 'attr' => ['data-inputmask' => "'alias': 'prix'",]]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
