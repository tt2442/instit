<?php
namespace App\Form;use App\Entity\Articles ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\User;
use App\Entity\Promotions;
use App\Entity\Categories;
use App\Entity\Fichiers;
use App\Entity\Materiels;
use App\Entity\Commentaires;
use App\Entity\Commandes;
class ArticlesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('Users', EntityType::class,[
                'class' => User::class,
                'multiple' => true,'attr'=>[]])
->add('Promotions', EntityType::class,[
                'class' => Promotions::class,
                'attr'=>[]])
->add('Categories', EntityType::class,[
                'class' => Categories::class,
                'multiple' => true,'attr'=>[]])
->add('Fichiers', EntityType::class,[
                'class' => Fichiers::class,
                'multiple' => true,'attr'=>[]])
->add('Materiels', EntityType::class,[
                'class' => Materiels::class,
                'multiple' => true,'attr'=>[]])
->add('Commentaires', EntityType::class,[
                'class' => Commentaires::class,
                'multiple' => true,'attr'=>[]])
->add('commandes', EntityType::class,[
                'class' => Commandes::class,
                'multiple' => true,'attr'=>[]])
->add('Titre', null,['attr'=>[]])
->add('Description', null,['attr'=>[]])
->add('Multimedia', null,['attr'=>[]])
->add('Etat', null,['attr'=>[]])
->add('Quantite', null,['attr'=>[]])
->add('FraisEnvoi', null,['attr'=>[]])
->add('Prix', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Articles::class,
]);
}
}