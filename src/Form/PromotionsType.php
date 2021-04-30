<?php
namespace App\Form;use App\Entity\Promotions ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Articles;

use App\Entity\Categories;

use App\Entity\Commandes;

use App\Entity\User;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
class PromotionsType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('categories', EntityType::class,[
                'class' => Categories::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('commandes', EntityType::class,[
                'class' => Commandes::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('users', EntityType::class,[
                'class' => User::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])

->add('DateStart', null,['attr'=>[]])

->add('DateEnd', null,['attr'=>[]])
->add('Etat', ChoiceType::class,['choices'=>['Actif'=>'true', 'Passif'=>'false'],'attr'=>[]])
->add('Nom', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Description', null,['attr'=>[]])
->add('Type', ChoiceType::class,['choices'=>["Pourcentage sur l'achat"=>'achat','Pourcentage sur la livraison'=>'livraison',"Montant sur l'achat"=>'montant_achat','...'=>'ect'],'attr'=>[]])

->add('Valeur', null,['attr'=>['data-inputmask'=>"'alias': 'number'",]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Promotions::class,
]);
}
}