<?php
namespace App\Form;
use App\Entity\Souscat ;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Categorie;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SouscatType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder
->add('Titre', null,['attr'=>[]])
->add('image', FileType::class,['data_class' => null,'required'=>true,'attr'=>['data-inputmask'=>"'alias': 'fichier'",'no_index',]])

->add('categorie', EntityType::class,['class' => Categorie::class, 'multiple' => false,'required'=>true,'attr'=>['no_index',]])

;}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
    'data_class' => Souscat::class,
]);
}
}