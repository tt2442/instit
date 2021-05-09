<?php

namespace App\Entity;

use App\Repository\MaterielRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MaterielRepository::class)
 */
class Materiel
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * PARTIE=admin
     * EXTEND=admin.html.twig
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="integer")
     */
    private $Quantite;

    /**
     * @ORM\ManyToMany(targetEntity=Article::class, mappedBy="Materiel")
     * OPT=required=>false
     */
    private $article;

    /**
     * @ORM\ManyToMany(targetEntity=LiensInterne::class, inversedBy="materiel")
     * OPT=required=>false
     */
    private $LiensInterne;

    /**
     * @ORM\ManyToMany(targetEntity=LiensExterne::class, inversedBy="materiel")
     * OPT=required=>false
     */
    private $LiensExterne;

    public function __construct()
    {
        $this->article = new ArrayCollection();
        $this->LiensInterne = new ArrayCollection();
        $this->LiensExterne = new ArrayCollection();
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

    public function getQuantite(): ?int
    {
        return $this->Quantite;
    }

    public function setQuantite(int $Quantite): self
    {
        $this->Quantite = $Quantite;

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
            $article->addMateriel($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->removeElement($article)) {
            $article->removeMateriel($this);
        }

        return $this;
    }

    /**
     * @return Collection|LiensInterne[]
     */
    public function getLiensInterne(): Collection
    {
        return $this->LiensInterne;
    }

    public function addLiensInterne(LiensInterne $liensInterne): self
    {
        if (!$this->LiensInterne->contains($liensInterne)) {
            $this->LiensInterne[] = $liensInterne;
        }

        return $this;
    }

    public function removeLiensInterne(LiensInterne $liensInterne): self
    {
        $this->LiensInterne->removeElement($liensInterne);

        return $this;
    }

    /**
     * @return Collection|LiensExterne[]
     */
    public function getLiensExterne(): Collection
    {
        return $this->LiensExterne;
    }

    public function addLiensExterne(LiensExterne $liensExterne): self
    {
        if (!$this->LiensExterne->contains($liensExterne)) {
            $this->LiensExterne[] = $liensExterne;
        }

        return $this;
    }

    public function removeLiensExterne(LiensExterne $liensExterne): self
    {
        $this->LiensExterne->removeElement($liensExterne);

        return $this;
    }
}
