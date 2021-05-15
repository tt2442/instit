<?php
namespace App\Form;use App\Entity\Commande ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\User;

use App\Entity\Article;

use App\Entity\Promotion;
class CommandeType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder
->add('Date', null,['attr'=>[]])
->add('User', EntityType::class,[
                'class' => User::class,
                'required'=>false,'attr'=>[]])
->add('Article', EntityType::class,[
                'class' => Article::class,
                'multiple' => true,'required'=>false,'attr'=>[]])
->add('Promotion', EntityType::class,[
                'class' => Promotion::class,
                'multiple' => true,'required'=>false,'attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Commande::class,
]);
}
}