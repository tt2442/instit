<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=admin
     * EXTEND=admin.html.twig
     * ATTR=no_new=>
     * ATTR=no_index
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * ALIAS=texte_propre
     */
    private $Titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $Description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ATTR=no_index
     */
    private $Multimedia;

    /**
     * @ORM\Column(type="string", length=255)
     * OPT=choices=>['Actif'=>'actif', 'En rupture'=>'rupture','Arrêté'=>'arret','En réapprovisionnement'=>'reapprovisionnement']
     */
    private $Etat;

    /**
     * @ORM\Column(type="integer")
     * ALIAS=number
     */
    private $Quantite;

    /**
     * @ORM\Column(type="integer")
     * ALIAS=prix
     * OPT=label=>"Frais d'envoi"
     */
    private $FraisEnvoi;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="ArticleAchetes")
     * OPT=required=>false
     * ATTR=no_index
     * ATTR=no_new=>
     */
    private $Users;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * ALIAS=prix
     */
    private $Prix;

    /**
     * @ORM\ManyToOne(targetEntity=Promotion::class, inversedBy="article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Promotion;

    /**
     * @ORM\ManyToMany(targetEntity=Categorie::class, inversedBy="article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Categorie;

    /**
     * @ORM\ManyToMany(targetEntity=Fichier::class, inversedBy="article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Fichier;

    /**
     * @ORM\ManyToMany(targetEntity=Materiel::class, inversedBy="article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Materiel;

    /**
     * @ORM\OneToMany(targetEntity=Commentaire::class, mappedBy="article")
     * OPT=required=>false
     * ATTR=no_new=>
     * ATTR=no_index
     */
    private $Commentaire;

    /**
     * @ORM\ManyToMany(targetEntity=Commande::class, mappedBy="Article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $commande;

    public function __construct()
    {
        $this->Users = new ArrayCollection();
        $this->Categorie = new ArrayCollection();
        $this->Fichier = new ArrayCollection();
        $this->Materiel = new ArrayCollection();
        $this->Commentaire = new ArrayCollection();
        $this->commande = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(?string $Description): self
    {
        $this->Description = $Description;

        return $this;
    }

    public function getMultimedia(): ?string
    {
        return $this->Multimedia;
    }

    public function setMultimedia(?string $Multimedia): self
    {
        $this->Multimedia = $Multimedia;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->Etat;
    }

    public function setEtat(string $Etat): self
    {
        $this->Etat = $Etat;

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

    public function getFraisEnvoi(): ?int
    {
        return $this->FraisEnvoi;
    }

    public function setFraisEnvoi(int $FraisEnvoi): self
    {
        $this->FraisEnvoi = $FraisEnvoi;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->Users;
    }

    public function addCommentaire(User $commentaire): self
    {
        if (!$this->Users->contains($commentaire)) {
            $this->Users[] = $commentaire;
            $commentaire->addArticleAchetE($this);
        }

        return $this;
    }

    public function removeCommentaire(User $commentaire): self
    {
        if ($this->Users->removeElement($commentaire)) {
            $commentaire->removeArticleAchetE($this);
        }

        return $this;
    }

    public function getPrix(): ?int
    {
        return $this->Prix;
    }

    public function setPrix(?int $Prix): self
    {
        $this->Prix = $Prix;

        return $this;
    }

    public function getPromotion(): ?Promotion
    {
        return $this->Promotion;
    }

    public function setPromotion(?Promotion $Promotion): self
    {
        $this->Promotion = $Promotion;

        return $this;
    }

    /**
     * @return Collection|Categorie[]
     */
    public function getCategorie(): Collection
    {
        return $this->Categorie;
    }

    public function addCategory(Categorie $category): self
    {
        if (!$this->Categorie->contains($category)) {
            $this->Categorie[] = $category;
        }

        return $this;
    }

    public function removeCategory(Categorie $category): self
    {
        $this->Categorie->removeElement($category);

        return $this;
    }

    /**
     * @return Collection|Fichier[]
     */
    public function getFichier(): Collection
    {
        return $this->Fichier;
    }

    public function addFichier(Fichier $fichier): self
    {
        if (!$this->Fichier->contains($fichier)) {
            $this->Fichier[] = $fichier;
        }

        return $this;
    }

    public function removeFichier(Fichier $fichier): self
    {
        $this->Fichier->removeElement($fichier);

        return $this;
    }

    /**
     * @return Collection|Materiel[]
     */
    public function getMateriel(): Collection
    {
        return $this->Materiel;
    }

    public function addMateriel(Materiel $materiel): self
    {
        if (!$this->Materiel->contains($materiel)) {
            $this->Materiel[] = $materiel;
        }

        return $this;
    }

    public function removeMateriel(Materiel $materiel): self
    {
        $this->Materiel->removeElement($materiel);

        return $this;
    }

    /**
     * @return Collection|Commentaire[]
     */
    public function getCommentaire(): Collection
    {
        return $this->Commentaire;
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
            $commande->addArticle($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commande->removeElement($commande)) {
            $commande->removeArticle($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getTitre();
    }
}
