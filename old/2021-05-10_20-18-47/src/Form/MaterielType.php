<?php
namespace App\Form;use App\Entity\Materiel ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Article;

use App\Entity\LiensInterne;

use App\Entity\LiensExterne;
class MaterielType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder
->add('Nom', null,['attr'=>[]])

->add('Description', null,['attr'=>[]])

->add('Quantite', null,['attr'=>[]])
->add('article', EntityType::class,[
                'class' => Article::class,
                'multiple' => true,'required'=>false,'attr'=>[]])
->add('LiensInterne', EntityType::class,[
                'class' => LiensInterne::class,
                'multiple' => true,'required'=>false,'attr'=>[]])
->add('LiensExterne', EntityType::class,[
                'class' => LiensExterne::class,
                'multiple' => true,'required'=>false,'attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Materiel::class,
]);
}
}