<?php

namespace App\Entity;

use App\Repository\PromotionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PromotionRepository::class)
 */
class Promotion
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
     * @ORM\OneToMany(targetEntity=Article::class, mappedBy="Promotion")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $article;

    /**
     * @ORM\ManyToMany(targetEntity=Categorie::class, mappedBy="Promotion")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $categorie;

    /**
     * @ORM\ManyToMany(targetEntity=Commande::class, mappedBy="Promotion")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $commande;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="adelete")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $users;

    public function __construct()
    {
        $this->article = new ArrayCollection();
        $this->categorie = new ArrayCollection();
        $this->commande = new ArrayCollection();
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
            $article->setPromotion($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->article->removeElement($article)) {
            // set the owning side to null (unless already changed)
            if ($article->getPromotion() === $this) {
                $article->setPromotion(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Categorie[]
     */
    public function getCategorie(): Collection
    {
        return $this->categorie;
    }

    public function addCategory(Categorie $category): self
    {
        if (!$this->categorie->contains($category)) {
            $this->categorie[] = $category;
            $category->addPromotion($this);
        }

        return $this;
    }

    public function removeCategory(Categorie $category): self
    {
        if ($this->categorie->removeElement($category)) {
            $category->removePromotion($this);
        }

        return $this;
    }

    /**
     * @return Collection|Commande[]
     */
    public function getCommande(): Collection
    {
        return $this->commande;
    }

    public function addCommande(Commande $commande): self
    {
        if (!$this->commande->contains($commande)) {
            $this->commande[] = $commande;
            $commande->addPromotion($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commande->removeElement($commande)) {
            $commande->removePromotion($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getNom();
    }
}
