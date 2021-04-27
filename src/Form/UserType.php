<?php
namespace App\Form;use App\Entity\User ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Articles;
use App\Entity\Commentaires;
use App\Entity\Commandes;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class UserType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('ArticlesAchetes', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'attr'=>[]])
->add('Commentaires', EntityType::class,[
                'class' => Commentaires::class,
                'multiple' => true,'attr'=>[]])
->add('commandes', EntityType::class,[
                'class' => Commandes::class,
                'multiple' => true,'attr'=>[]])
->add('email', null,['attr'=>[]])
->add('roles', ChoiceType::class,['choices'=>['Admin'=>'ROLE_ADMIN', 'Particulier'=>'ROLE_PART', 'Professionnel'=>'ROLE_PRO', 'Imprimeur'=>'ROLE_PRINT'],'multiple'=>true,'expanded'=>true,'attr'=>[]])
->add('password', null,['attr'=>[]])
->add('Nom', null,['attr'=>[]])
->add('Prenom', null,['attr'=>[]])
->add('Sexe', null,['attr'=>[]])
->add('Adresse', null,['attr'=>[]])
->add('CodePostal', null,['attr'=>[]])
->add('Ville', null,['attr'=>[]])
->add('Region', null,['attr'=>[]])
->add('Mobile', null,['attr'=>[]])
->add('Fixe', null,['attr'=>[]])
->add('Pays', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => User::class,
]);
}
}