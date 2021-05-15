<?php
namespace App\Form;use App\Entity\Commentaire ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\User;

use App\Entity\Article;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class CommentaireType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('Etat', ChoiceType::class,['choices' =>['Approuvé'=>'approuve','Rejeté'=>'rejete','Caché'=>'cache',],'attr'=>[]])

->add('Message', null,['attr'=>[]])

->add('Date', null,['attr'=>[]])
->add('user', EntityType::class,[
                'class' => User::class,
                'required'=>false,'attr'=>[]])
->add('article', EntityType::class,[
                'class' => Article::class,
                'required'=>false,'attr'=>['no_index',]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Commentaire::class,
]);
}
}