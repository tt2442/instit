<?php
namespace App\Form;use App\Entity\Promotions ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Articles;
use App\Entity\Categories;
use App\Entity\Commandes;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
class PromotionsType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'attr'=>[]])
->add('categories', EntityType::class,[
                'class' => Categories::class,
                'multiple' => true,'attr'=>[]])
->add('commandes', EntityType::class,[
                'class' => Commandes::class,
                'multiple' => true,'attr'=>[]])
->add('DateStart', DateTimeType::class,['attr'=>[]])
->add('DateEnd', DateTimeType::class,['attr'=>[]])
->add('Etat', null,['attr'=>[]])
->add('Nom', null,['attr'=>[]])
->add('Description', null,['attr'=>[]])
->add('Type', null,['attr'=>[]])
->add('Valeur', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Promotions::class,
]);
}
}