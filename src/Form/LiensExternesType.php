<?php
namespace App\Form;use App\Entity\LiensExternes ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Materiels;
class LiensExternesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('materiels', EntityType::class,[
                'class' => Materiels::class,
                'multiple' => true,'attr'=>[]])
->add('Site', null,['attr'=>[]])
->add('Url', null,['attr'=>[]])
->add('Prix', null,['attr'=>[]])
->add('Observation', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => LiensExternes::class,
]);
}
}