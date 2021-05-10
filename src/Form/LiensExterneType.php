<?php
namespace App\Form;use App\Entity\LiensExterne ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Materiel;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
class LiensExterneType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('Site', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Url', null,['attr'=>[]])
->add('Prix', MoneyType::class,['divisor' => 100,'attr'=>['data-inputmask'=>"'alias': 'prix'",]])

->add('Observation', null,['attr'=>[]])
->add('materiel', EntityType::class,[
                'class' => Materiel::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => LiensExterne::class,
]);
}
}