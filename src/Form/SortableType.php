<?php
/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                                         ATTENTION CE FICHIER EST CRÉÉ PAR CRUDMICK */
/* ------------------------------------------------------------------------------------------------------------------ */

namespace App\Form;

use App\Entity\Sortable;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SortableType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
    {
        $builder
            ->add('entite', null, ['attr' => []])

            ->add('ordre', null, ['attr' => []]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Sortable::class,
        ]);
    }
}
