<?php

namespace App\Entity;

use App\Repository\FichiersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FichiersRepository::class)
 */
class Fichiers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * PARTIE=admin
     * EXTEND=admin.html.twig
     * @ORM\Column(type="integer")
     * ATTR=no_index
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=texte_propre
     */
    private $Tag;

    /**
     * @ORM\Column(type="boolean")
     * OPT=choices=>['Oui'=>'true', 'Non'=>'false']
     * OPT=expanded=>true
     */
    private $Degrade;

    /**
     * @ORM\Column(type="boolean")
     * OPT=choices=>['Oui'=>'true', 'Non'=>'false']
     * OPT=expanded=>true
     */
    private $Enligne;

    /**
     * @ORM\ManyToMany(targetEntity=Article::class, mappedBy="Fichiers")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $article;

    public function __construct()
    {
        $this->article = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->Image;
    }

    public function setImage(?string $Image): self
    {
        $this->Image = $Image;

        return $this;
    }

    public function getTag(): ?string
    {
        return $this->Tag;
    }

    public function setTag(string $Tag): self
    {
        $this->Tag = $Tag;

        return $this;
    }

    public function getDegrade(): ?bool
    {
        return $this->Degrade;
    }

    public function setDegrade(bool $Degrade): self
    {
        $this->Degrade = $Degrade;

        return $this;
    }

    public function getEnligne(): ?bool
    {
        return $this->Enligne;
    }

    public function setEnligne(bool $Enligne): self
    {
        $this->Enligne = $Enligne;

        return $this;
    }

    /**
     * @return Collection|Article[]
     */
    public function getArticle(): Collection
    {
        return $this->article;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->article->contains($article)) {
            $this->article[] = $article;
            $article->addFichiers($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->removeElement($article)) {
            $article->removeFichiers($this);
        }

        return $this;
    }

    public function __toString()
    {
        return  $this->getImage();
    }
}
