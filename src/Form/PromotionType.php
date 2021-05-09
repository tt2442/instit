<?php
namespace App\Form;use App\Entity\Promotion ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Categorie;

use App\Entity\Commande;

use App\Entity\User;

use App\Entity\Article;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
class PromotionType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder
->add('DateStart', null,['attr'=>[]])

->add('DateEnd', null,['attr'=>[]])
->add('Etat', ChoiceType::class,['choices' =>['Actif'=>'true', 'Passif'=>'false',],'attr'=>[]])
->add('Nom', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Description', null,['attr'=>[]])
->add('Type', ChoiceType::class,['choices' =>["Pourcentage sur l'achat"=>'achat','Pourcentage sur la livraison'=>'livraison',"Montant sur l'achat"=>'montant_achat','...'=>'ect',],'attr'=>[]])

->add('Valeur', null,['attr'=>['data-inputmask'=>"'alias': 'number'",]])
->add('categorie', EntityType::class,[
                'class' => Categorie::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('commande', EntityType::class,[
                'class' => Commande::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('users', EntityType::class,[
                'class' => User::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('article', EntityType::class,[
                'class' => Article::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Promotion::class,
]);
}
}