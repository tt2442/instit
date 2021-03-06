<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;

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
     * OPT=required=>false
     * ALIAS=fichier
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
    private $Quantite = 1;

    /**
     * @ORM\Column(type="integer")
     * ALIAS=prix
     * OPT=label=>"Frais d'envoi"
     * ATTR=no_index
     */
    private $FraisEnvoi;

    // /**
    //  * @ORM\ManyToMany(targetEntity=User::class, mappedBy="ArticleAchetes")
    //  * OPT=required=>false
    //  * ATTR=no_index
    //  * ATTR=no_new
    //  */
    // private $Users;

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
     * @ORM\ManyToMany(targetEntity=Materiel::class, inversedBy="article")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $Materiel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * OPT=choices=>['À partir de 3 ans'=>'À partir de 3 ans', 'À partir de 4 ans'=>'À partir de 4 ans', 'À partir de 5 ans'=>'À partir de 5 ans', 'À partir de 6 ans'=>'À partir de 6 ans', 'De 3 à 5 ans'=>'De 3 à 5 ans','De 4 à 6 ans'=>'De 4 à 6 ans' ]
     * ATTR=no_index
     */
    private $age;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * ATTR=no_new
     * ATTR=no_index
     */
    private $date;

    /**
     * @ORM\ManyToMany(targetEntity=Fichier::class,cascade={"persist"})
     */
    private $fichiers;

    // /**
    //  * @ORM\OneToMany(targetEntity=Commentaire::class, mappedBy="article")
    //  * OPT=required=>false
    //  * ATTR=no_new=>
    //  * ATTR=no_index
    //  */
    // private $Commentaire;

    // /**
    //  * @ORM\ManyToMany(targetEntity=Commande::class, mappedBy="Article")
    //  * OPT=required=>false
    //  * ATTR=no_index
    //  */
    // private $commande;

    public function __construct()
    {
        // $this->Users = new ArrayCollection();
        $this->Categorie = new ArrayCollection();
        $this->Materiel = new ArrayCollection();
        // $this->Commentaire = new ArrayCollection();
        // $this->commande = new ArrayCollection();

        $date = new DateTime(date("Y-m-d H:i:s"));
        $this->setDate($date);
        $this->fichiers = new ArrayCollection();
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

        $date = new DateTime(date("Y-m-d H:i:s"));
        $this->setDate($date);
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
        //on récupère le nom de la function
        $backtrace = debug_backtrace();
        $class = strtolower(array_reverse(explode('\\', $backtrace[0]['class']))[0]);
        $champ = substr($backtrace[0]['function'], strlen('set'));
        if ($$champ) {
            @mkdir('uploads');
            @mkdir("uploads/$champ");
            $name = uniqid() . '_' . $_FILES[$class]['name'][$champ];
            rename($$champ, "uploads/$champ/" .  $name);
            $this->$champ = $name;
        }
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

    // /**
    //  * @return Collection|User[]
    //  */
    // public function getUsers(): Collection
    // {
    //     return $this->Users;
    // }

    // public function addCommentaire(User $commentaire): self
    // {
    //     if (!$this->Users->contains($commentaire)) {
    //         $this->Users[] = $commentaire;
    //         $commentaire->addArticleAchetE($this);
    //     }

    //     return $this;
    // }

    // public function removeCommentaire(User $commentaire): self
    // {
    //     if ($this->Users->removeElement($commentaire)) {
    //         $commentaire->removeArticleAchetE($this);
    //     }

    //     return $this;
    // }

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

    // /**
    //  * @return Collection|Commentaire[]
    //  */
    // public function getCommentaire(): Collection
    // {
    //     return $this->Commentaire;
    // }

    // /**
    //  * @return Collection|Commande[]
    //  */
    // public function getCommande(): Collection
    // {
    //     return $this->commande;
    // }

    // public function addCommande(Commande $commande): self
    // {
    //     if (!$this->commande->contains($commande)) {
    //         $this->commande[] = $commande;
    //         $commande->addArticle($this);
    //     }

    //     return $this;
    // }

    // public function removeCommande(Commande $commande): self
    // {
    //     if ($this->commande->removeElement($commande)) {
    //         $commande->removeArticle($this);
    //     }

    //     return $this;
    // }

    public function __toString()
    {
        return $this->getTitre();
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(?string $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return Collection|Fichier[]
     */
    public function getFichiers(): Collection
    {
        return $this->fichiers;
    }

    public function addFichier(Fichier $fichier): self
    {
        if (!$this->fichiers->contains($fichier)) {
            $this->fichiers[] = $fichier;
        }

        return $this;
    }

    public function removeFichier(Fichier $fichier): self
    {
        $this->fichiers->removeElement($fichier);

        return $this;
    }
}
