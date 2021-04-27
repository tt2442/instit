<?php
namespace App\Form;use App\Entity\Categories ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Articles;
use App\Entity\Promotions;
class CategoriesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'attr'=>[]])
->add('Promotions', EntityType::class,[
                'class' => Promotions::class,
                'multiple' => true,'attr'=>[]])
->add('Nom', null,['attr'=>[]])
->add('Description', null,['attr'=>[]])
->add('Etat', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Categories::class,
]);
}
}