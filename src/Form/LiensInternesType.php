<?php
namespace App\Form;use App\Entity\LiensInternes ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Materiels;
class LiensInternesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('materiels', EntityType::class,[
                'class' => Materiels::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])

->add('Observation', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => LiensInternes::class,
]);
}
}