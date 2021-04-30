<?php
namespace App\Form;use App\Entity\LiensExternes ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;

use App\Entity\Materiels;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
class LiensExternesType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('materiels', EntityType::class,[
                'class' => Materiels::class,
                'multiple' => true,'required'=>false,'attr'=>['no_index',]])
->add('Site', TextType::class,['attr'=>['data-inputmask'=>"'alias': 'texte_propre'",]])

->add('Url', null,['attr'=>[]])
->add('Prix', MoneyType::class,['divisor' => 100,'attr'=>['data-inputmask'=>"'alias': 'prix'",]])

->add('Observation', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => LiensExternes::class,
]);
}
}