<?php

namespace App\Entity;

use App\Repository\MaterielsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MaterielsRepository::class)
 */
class Materiels
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
     * @ORM\ManyToMany(targetEntity=Articles::class, mappedBy="Materiels")
     */
    private $articles;

    /**
     * @ORM\ManyToMany(targetEntity=LiensInternes::class, inversedBy="materiels")
     */
    private $LiensInternes;

    /**
     * @ORM\ManyToMany(targetEntity=LiensExternes::class, inversedBy="materiels")
     */
    private $LiensExternes;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->LiensInternes = new ArrayCollection();
        $this->LiensExternes = new ArrayCollection();
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
     * @return Collection|Articles[]
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Articles $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->addMateriel($this);
        }

        return $this;
    }

    public function removeArticle(Articles $article): self
    {
        if ($this->articles->removeElement($article)) {
            $article->removeMateriel($this);
        }

        return $this;
    }

    /**
     * @return Collection|LiensInternes[]
     */
    public function getLiensInternes(): Collection
    {
        return $this->LiensInternes;
    }

    public function addLiensInterne(LiensInternes $liensInterne): self
    {
        if (!$this->LiensInternes->contains($liensInterne)) {
            $this->LiensInternes[] = $liensInterne;
        }

        return $this;
    }

    public function removeLiensInterne(LiensInternes $liensInterne): self
    {
        $this->LiensInternes->removeElement($liensInterne);

        return $this;
    }

    /**
     * @return Collection|LiensExternes[]
     */
    public function getLiensExternes(): Collection
    {
        return $this->LiensExternes;
    }

    public function addLiensExterne(LiensExternes $liensExterne): self
    {
        if (!$this->LiensExternes->contains($liensExterne)) {
            $this->LiensExternes[] = $liensExterne;
        }

        return $this;
    }

    public function removeLiensExterne(LiensExternes $liensExterne): self
    {
        $this->LiensExternes->removeElement($liensExterne);

        return $this;
    }
}
