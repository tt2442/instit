<?php
namespace App\Form;use App\Entity\Article ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Promotion;

use App\Entity\Categorie;

use App\Entity\Fichier;

use App\Entity\Materiel;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
class ArticleType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('Titre', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Description', null,['attr'=>[]])
->add('Multimedia', FileType::class,['data_class' => null,'required'=>false,'attr'=>['data-inputmask'=>"'alias': 'fichier'",'no_index',]])
->add('Etat', ChoiceType::class,['choices' =>['Actif'=>'actif', 'En rupture'=>'rupture','Arrêté'=>'arret','En réapprovisionnement'=>'reapprovisionnement',],'attr'=>[]])

->add('Quantite', null,['attr'=>['data-inputmask'=>"'alias': 'number'",]])
->add('FraisEnvoi', MoneyType::class,['divisor' => 100,'label'=>"Frais d'envoi",'attr'=>['data-inputmask'=>"'alias': 'prix'",'no_index',]])
->add('Prix', MoneyType::class,['divisor' => 100,'attr'=>['data-inputmask'=>"'alias': 'prix'",]])
->add('age', ChoiceType::class,['choices' =>['À partir de 3 ans'=>'À partir de 3 ans', 'À partir de 4 ans'=>'À partir de 4 ans', 'À partir de 5 ans'=>'À partir de 5 ans', 'À partir de 6 ans'=>'À partir de 6 ans', 'De 3 à 5 ans'=>'De 3 à 5 ans','De 4 à 6 ans'=>'De 4 à 6 ans' ,],'attr'=>['no_index',]])

->add('date', null,['attr'=>['no_new','no_index',]])
->add('Promotion', EntityType::class,[
                'class' => Promotion::class,
                'required'=>false,'attr'=>['no_index',]])
->add('Categorie', EntityType::class,[
                'class' => Categorie::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('Fichier', EntityType::class,[
                'class' => Fichier::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('Materiel', EntityType::class,[
                'class' => Materiel::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Article::class,
]);
}
}