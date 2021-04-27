<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticlesRepository::class)
 */
class Articles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=admin
     * EXTEND=admin.html.twig
     * ATTR=no_new=>
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
     */
    private $FraisEnvoi;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="ArticlesAchetes")
     * OPT=required=>false
     */
    private $Users;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * ALIAS=prix
     */
    private $Prix;

    /**
     * @ORM\ManyToOne(targetEntity=Promotions::class, inversedBy="articles")
     * OPT=required=>false
     */
    private $Promotions;

    /**
     * @ORM\ManyToMany(targetEntity=Categories::class, inversedBy="articles")
     * OPT=required=>false
     */
    private $Categories;

    /**
     * @ORM\ManyToMany(targetEntity=Fichiers::class, inversedBy="articles")
     * OPT=required=>false
     */
    private $Fichiers;

    /**
     * @ORM\ManyToMany(targetEntity=Materiels::class, inversedBy="articles")
     * OPT=required=>false
     */
    private $Materiels;

    /**
     * @ORM\OneToMany(targetEntity=Commentaires::class, mappedBy="articles")
     * OPT=required=>false
     */
    private $Commentaires;

    /**
     * @ORM\ManyToMany(targetEntity=Commandes::class, mappedBy="Articles")
     * OPT=required=>false
     */
    private $commandes;

    public function __construct()
    {
        $this->Users = new ArrayCollection();
        $this->Categories = new ArrayCollection();
        $this->Fichiers = new ArrayCollection();
        $this->Materiels = new ArrayCollection();
        $this->Commentaires = new ArrayCollection();
        $this->commandes = new ArrayCollection();
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
            $commentaire->addArticlesAchetE($this);
        }

        return $this;
    }

    public function removeCommentaire(User $commentaire): self
    {
        if ($this->Users->removeElement($commentaire)) {
            $commentaire->removeArticlesAchetE($this);
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

    public function getPromotions(): ?Promotions
    {
        return $this->Promotions;
    }

    public function setPromotions(?Promotions $Promotions): self
    {
        $this->Promotions = $Promotions;

        return $this;
    }

    /**
     * @return Collection|Categories[]
     */
    public function getCategories(): Collection
    {
        return $this->Categories;
    }

    public function addCategory(Categories $category): self
    {
        if (!$this->Categories->contains($category)) {
            $this->Categories[] = $category;
        }

        return $this;
    }

    public function removeCategory(Categories $category): self
    {
        $this->Categories->removeElement($category);

        return $this;
    }

    /**
     * @return Collection|Fichiers[]
     */
    public function getFichiers(): Collection
    {
        return $this->Fichiers;
    }

    public function addFichier(Fichiers $fichier): self
    {
        if (!$this->Fichiers->contains($fichier)) {
            $this->Fichiers[] = $fichier;
        }

        return $this;
    }

    public function removeFichier(Fichiers $fichier): self
    {
        $this->Fichiers->removeElement($fichier);

        return $this;
    }

    /**
     * @return Collection|Materiels[]
     */
    public function getMateriels(): Collection
    {
        return $this->Materiels;
    }

    public function addMateriel(Materiels $materiel): self
    {
        if (!$this->Materiels->contains($materiel)) {
            $this->Materiels[] = $materiel;
        }

        return $this;
    }

    public function removeMateriel(Materiels $materiel): self
    {
        $this->Materiels->removeElement($materiel);

        return $this;
    }

    /**
     * @return Collection|Commentaires[]
     */
    public function getCommentaires(): Collection
    {
        return $this->Commentaires;
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
            $commande->addArticle($this);
        }

        return $this;
    }

    public function removeCommande(Commandes $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            $commande->removeArticle($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getTitre();
    }
}
