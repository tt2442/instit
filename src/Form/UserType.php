<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Article;

use App\Entity\Commentaires;

use App\Entity\Commandes;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TelType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder->add('ArticleAchetes', EntityType::class, [
            'class' => Article::class,
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
            ->add('email', EmailType::class, ['attr' => ['data-inputmask' => "'alias': 'email'",]])
            ->add('roles', ChoiceType::class, ['choices' => ['Admin' => 'ROLE_ADMIN'], 'multiple' => true, 'expanded' => true, 'attr' => ['no_index',]])
            ->add('password', PasswordType::class, ['attr' => ['data-inputmask' => "'alias': 'password'", 'password', 'no_index',]])
            ->add('Nom', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])
            ->add('Prenom', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'",]])
            ->add('Sexe', ChoiceType::class, ['choices' => ['Homme' => 'm', 'Femme' => 'f'], 'expanded' => true, 'attr' => ['no_index',]])
            ->add('Adresse', CKEditorType::class, ['attr' => ['data-inputmask' => "'alias': 'ckeditor'", 'no_index',]])
            ->add('CodePostal', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'code_postal'", 'no_index',]])
            ->add('Ville', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'", 'no_index',]])
            ->add('Region', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'", 'no_index',]])
            ->add('Mobile', TelType::class, ['attr' => ['data-inputmask' => "'alias': 'phonefr'",]])
            ->add('Fixe', TelType::class, ['attr' => ['data-inputmask' => "'alias': 'phonefr'",]])
            ->add('Pays', TextType::class, ['attr' => ['data-inputmask' => "'alias': 'texte_propre'", 'no_index',]]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
