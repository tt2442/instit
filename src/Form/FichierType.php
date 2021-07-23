<?php
/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                                         ATTENTION CE FICHIER EST CRÉÉ PAR CRUDMICK */
/* ------------------------------------------------------------------------------------------------------------------ */

namespace App\Form;

use App\Entity\Fichier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;

class FichierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder
            ->add('nom', null, ['attr' => []])
            ->add('description', null, ['attr' => []])
            ->add('fichier', FileType::class, ['required' => false, 'mapped' => false, 'attr' => ['data-inputmask' => "'alias': 'fichier'",]])
            ->add('url', HiddenType::class, ['attr' => ['data-inputmask' => "'alias': 'fichier'",]]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Fichier::class,
        ]);
    }
}
