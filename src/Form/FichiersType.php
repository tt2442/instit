<?php
namespace App\Form;use App\Entity\Fichiers ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Articles;
class FichiersType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'attr'=>[]])
->add('Image', null,['attr'=>[]])
->add('Tag', null,['attr'=>[]])
->add('Degrade', null,['attr'=>[]])
->add('Enligne', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Fichiers::class,
]);
}
}