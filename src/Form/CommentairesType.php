<?php
namespace App\Form;use App\Entity\Commentaires ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\User;
use App\Entity\Articles;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
class CommentairesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('user', EntityType::class,[
                'class' => User::class,
                'attr'=>[]])
->add('articles', EntityType::class,[
                'class' => Articles::class,
                'attr'=>[]])
->add('Etat', null,['attr'=>[]])
->add('Message', null,['attr'=>[]])
->add('Date', DateTimeType::class,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Commentaires::class,
]);
}
}