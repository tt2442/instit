<?php

namespace App\Entity;

use App\Repository\PromotionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PromotionsRepository::class)
 */
class Promotions
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
     * @ORM\Column(type="datetime")
     */
    private $DateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $DateEnd;

    /**
     * @ORM\Column(type="boolean")
     * OPT=choices=>['Actif'=>'true', 'Passif'=>'false']
     */
    private $Etat;

    /**
     * @ORM\Column(type="string", length=255)
     * ALIAS=texte_propre
     */
    private $Nom;

    /**
     * @ORM\Column(type="text", length=255, nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="string", length=255)
     * OPT=choices=>["Pourcentage sur l'achat"=>'achat','Pourcentage sur la livraison'=>'livraison',"Montant sur l'achat"=>'montant_achat','...'=>'ect']
     */
    private $Type;

    /**
     * @ORM\Column(type="integer")
     * ALIAS=number
     */
    private $Valeur;

    /**
     * @ORM\OneToMany(targetEntity=Articles::class, mappedBy="Promotions")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $articles;

    /**
     * @ORM\ManyToMany(targetEntity=Categories::class, mappedBy="Promotions")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $categories;

    /**
     * @ORM\ManyToMany(targetEntity=Commandes::class, mappedBy="Promotions")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $commandes;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="adelete")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $users;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->commandes = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->DateStart;
    }

    public function setDateStart(\DateTimeInterface $DateStart): self
    {
        $this->DateStart = $DateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->DateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $DateEnd): self
    {
        $this->DateEnd = $DateEnd;

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

    public function getType(): ?string
    {
        return $this->Type;
    }

    public function setType(string $Type): self
    {
        $this->Type = $Type;

        return $this;
    }

    public function getValeur(): ?int
    {
        return $this->Valeur;
    }

    public function setValeur(int $Valeur): self
    {
        $this->Valeur = $Valeur;

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
            $article->setPromotions($this);
        }

        return $this;
    }

    public function removeArticle(Articles $article): self
    {
        if ($this->articles->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getPromotions() === $this) {
                $article->setPromotions(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Categories[]
     */
    public function getCategories(): Collection
    {
        return $this->categories;
    }

    public function addCategory(Categories $category): self
    {
        if (!$this->categories->contains($category)) {
            $this->categories[] = $category;
            $category->addPromotion($this);
        }

        return $this;
    }

    public function removeCategory(Categories $category): self
    {
        if ($this->categories->removeElement($category)) {
            $category->removePromotion($this);
        }

        return $this;
    }

    /**
     * @return Collection|Commandes[]
     */
    public function getCommandes(): Collection
    {
        return $this->commandes;
    }

    public function addCommande(Commandes $commande): self
    {
        if (!$this->commandes->contains($commande)) {
            $this->commandes[] = $commande;
            $commande->addPromotion($this);
        }

        return $this;
    }

    public function removeCommande(Commandes $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            $commande->removePromotion($this);
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addAdelete($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeAdelete($this);
        }

        return $this;
    }
}
