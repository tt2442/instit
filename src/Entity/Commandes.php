<?php

namespace App\Entity;

use App\Repository\CommandesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommandesRepository::class)
 */
class Commandes
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
     * @ORM\Column(type="datetime")
     */
    private $Date;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="commandes")
     */
    private $User;

    /**
     * @ORM\ManyToMany(targetEntity=Articles::class, inversedBy="commandes")
     */
    private $Articles;

    /**
     * @ORM\ManyToMany(targetEntity=Promotions::class, inversedBy="commandes")
     */
    private $Promotions;

    public function __construct()
    {
        $this->Articles = new ArrayCollection();
        $this->Promotions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): self
    {
        $this->Date = $Date;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): self
    {
        $this->User = $User;

        return $this;
    }

    /**
     * @return Collection|Articles[]
     */
    public function getArticles(): Collection
    {
        return $this->Articles;
    }

    public function addArticle(Articles $article): self
    {
        if (!$this->Articles->contains($article)) {
            $this->Articles[] = $article;
        }

        return $this;
    }

    public function removeArticle(Articles $article): self
    {
        $this->Articles->removeElement($article);

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
}
