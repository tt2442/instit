<?php
namespace App\Form;use App\Entity\Categories ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Articles;

use App\Entity\Promotions;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
class CategoriesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('Promotions', EntityType::class,[
                'class' => Promotions::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('Nom', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Description', null,['attr'=>[]])
->add('Etat', ChoiceType::class,['choices'=>['Actif'=>'true','Inactif'=>'false'],'attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Categories::class,
]);
}
}