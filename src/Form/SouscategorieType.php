<?php
namespace App\Form;

use App\Entity\Souscategorie ;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
class SouscategorieType extends AbstractType
{
public function buildForm(FormBuilderInterface $builder, array $AtypeOption)
{
$builder
->add('titre',null,['attr'=>[]])
->add('image',FileType::class,['attr'=>['data-inputmask' => "'alias': 'fichier'",'image=>0x100'],'data_class' => null,'required' => false])
->add('description',null,['attr'=>[]]);}

public function configureOptions(OptionsResolver $resolver)
{
$resolver->setDefaults([
            'data_class' => Souscategorie::class,
        ]);
    }
}
