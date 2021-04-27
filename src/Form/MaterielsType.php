<?php
namespace App\Form;use App\Entity\Materiels ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver
;use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Articles;
use App\Entity\LiensInternes;
use App\Entity\LiensExternes;
class MaterielsType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder->add('articles', EntityType::class,[
                'class' => Articles::class,
                'multiple' => true,'required'=>false,'attr'=>[]])
->add('LiensInternes', EntityType::class,[
                'class' => LiensInternes::class,
                'multiple' => true,'required'=>false,'attr'=>[]])
->add('LiensExternes', EntityType::class,[
                'class' => LiensExternes::class,
                'multiple' => true,'required'=>false,'attr'=>[]])

->add('Nom', null,['attr'=>[]])

->add('Description', null,['attr'=>[]])

->add('Quantite', null,['attr'=>[]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Materiels::class,
]);
}
}