<?php
namespace App\Form;use App\Entity\Commentaires ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\User;
use App\Entity\Articles;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class CommentairesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('user', EntityType::class,[
                'class' => User::class,
                'required'=>false,'attr'=>[]])
->add('articles', EntityType::class,[
                'class' => Articles::class,
                'required'=>false,'attr'=>[]])
->add('Etat', ChoiceType::class,['choices'=>['Approuvé'=>'approuve','Rejeté'=>'rejete','Caché'=>'cache'],'attr'=>[]])

->add('Message', null,['attr'=>[]])

->add('Date', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Commentaires::class,
]);
}
}