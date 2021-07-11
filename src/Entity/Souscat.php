<?php

namespace App\Entity;

use App\Repository\SouscatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SouscatRepository::class)
 */
class Souscat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=base
     * EXTEND=base.html.twig
     * ATTR=no_new=>
     * ATTR=no_index
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Titre;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\ManyToMany(targetEntity=Article::class, mappedBy="souscats")
     */
    private $articles;

    /**
     * @ORM\ManyToOne(targetEntity=Categorie::class, inversedBy="souscats")
     */
    private $categorie;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->Titre;
    }

    public function setTitre(string $Titre): self
    {
        $this->Titre = $Titre;

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

    /**
     * @return Collection|Article[]
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        $this->articles->removeElement($article);

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function __toString()
    {
        return $this->getTitre();
    }
}
