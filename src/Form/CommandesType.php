<?php
namespace App\Form;use App\Entity\Commandes ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\User;
use App\Entity\Articles;
use App\Entity\Promotions;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
class CommandesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('User', EntityType::class,[
                'class' => User::class,
                'attr'=>[]])
->add('Articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'attr'=>[]])
->add('Promotions', EntityType::class,[
                'class' => Promotions::class,
                'multiple' => true,'attr'=>[]])
->add('Date', DateTimeType::class,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Commandes::class,
]);
}
}