<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SouscategorieRepository;

/**
 * @ORM\Entity(repositoryClass=SouscategorieRepository::class)
 */
class Souscategorie
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=admin
     * EXTEND=admin/admin.html.twig
     * ATTR=sortable
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
     * @ORM\Column(type="string", length=255)
     * ALIAS=fichier
     * ATTR=image=>0x100
     */
    private $image;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {

        $backtrace = debug_backtrace();
        $class = strtolower(array_reverse(explode('\\', $backtrace[0]['class']))[0]);
        $champ = strtolower(substr($backtrace[0]['function'], strlen('set')));
        if ($$champ) {
            @mkdir('uploads');
            @mkdir("uploads/$champ");
            $name = uniqid() . '_' . $_FILES[$class]['name'][$champ];
            rename($$champ, "uploads/$champ/" .  $name);
            $this->$champ = $name;
        }
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
