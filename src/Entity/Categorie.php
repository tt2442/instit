<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CategorieRepository::class)
 */
class Categorie
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
     * @ORM\Column(type="string", length=255)
     * ALIAS=texte_propre
     */
    private $Nom;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="boolean")
     * OPT=choices=>['Actif'=>'true','Inactif'=>'false']
     */
    private $Etat;

    /**
     * @ORM\ManyToMany(targetEntity=Article::class, mappedBy="Categorie")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $article;

    /**
     * @ORM\ManyToMany(targetEntity=Promotions::class, inversedBy="categorie")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Promotions;

    public function __construct()
    {
        $this->article = new ArrayCollection();
        $this->Promotions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): self
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getEtat(): ?bool
    {
        return $this->Etat;
    }

    public function setEtat(bool $Etat): self
    {
        $this->Etat = $Etat;

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
            $article->addCategory($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->removeElement($article)) {
            $article->removeCategory($this);
        }

        return $this;
    }

    /**
     * @return Collection|Promotions[]
     */
    public function getPromotions(): Collection
    {
        return $this->Promotions;
    }

    public function addPromotion(Promotions $promotion): self
    {
        if (!$this->Promotions->contains($promotion)) {
            $this->Promotions[] = $promotion;
        }

        return $this;
    }

    public function removePromotion(Promotions $promotion): self
    {
        $this->Promotions->removeElement($promotion);

        return $this;
    }

    public function __toString()
    {
        return $this->getNom();
    }
}
