<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=admin
     * EXTEND=admin.html.twig
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * ALIAS=email
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * OPT=choices=>['Admin'=>'ROLE_ADMIN']
     * OPT=multiple=>true
     * OPT=expanded=>true
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * ATTR=password
     * ALIAS=password
     * ATTR=no_index
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     * ALIAS=texte_propre
     */
    private $Nom;

    /**
     * @ORM\Column(type="string", length=255)
     * ALIAS=texte_propre
     */
    private $Prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * OPT=choices=>['Homme'=>'m', 'Femme'=>'f']
     * OPT=expanded=>true
     */
    private $Sexe;

    /**
     * @ORM\Column(type="text", length=255, nullable=true)
     * TWIG=u.truncate(8, '...')
     * ALIAS=ckeditor
     */
    private $Adresse;

    /**
     * @ORM\Column(type="string", nullable=true)
     * ALIAS=code_postal
     */
    private $CodePostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=texte_propre
     */
    private $Ville;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=texte_propre
     */
    private $Region;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=phonefr
     */
    private $Mobile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=phonefr
     */
    private $Fixe;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=texte_propre
     */
    private $Pays;

    /**
     * @ORM\ManyToMany(targetEntity=Articles::class, inversedBy="Commentaires")
     * OPT=required=>false
     */
    private $ArticlesAchetes;

    /**
     * @ORM\OneToMany(targetEntity=Commentaires::class, mappedBy="user")
     * OPT=required=>false
     */
    private $Commentaires;

    /**
     * @ORM\OneToMany(targetEntity=Commandes::class, mappedBy="User")
     * OPT=required=>false
     */
    private $commandes;

    public function __construct()
    {
        $this->ArticlesAchetes = new ArrayCollection();
        $this->Commentaires = new ArrayCollection();
        $this->commandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getPrenom(): ?string
    {
        return $this->Prenom;
    }

    public function setPrenom(string $Prenom): self
    {
        $this->Prenom = $Prenom;

        return $this;
    }

    public function getSexe(): ?string
    {
        return $this->Sexe;
    }

    public function setSexe(?string $Sexe): self
    {
        $this->Sexe = $Sexe;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->Adresse;
    }

    public function setAdresse(?string $Adresse): self
    {
        $this->Adresse = $Adresse;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->CodePostal;
    }

    public function setCodePostal(?string $CodePostal): self
    {
        $this->CodePostal = $CodePostal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->Ville;
    }

    public function setVille(?string $Ville): self
    {
        $this->Ville = $Ville;

        return $this;
    }

    public function getRegion(): ?string
    {
        return $this->Region;
    }

    public function setRegion(?string $Region): self
    {
        $this->Region = $Region;

        return $this;
    }

    public function getMobile(): ?string
    {
        return $this->Mobile;
    }

    public function setMobile(?string $Mobile): self
    {
        $this->Mobile = $Mobile;

        return $this;
    }

    public function getFixe(): ?string
    {
        return $this->Fixe;
    }

    public function setFixe(?string $Fixe): self
    {
        $this->Fixe = $Fixe;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->Pays;
    }

    public function setPays(?string $Pays): self
    {
        $this->Pays = $Pays;

        return $this;
    }

    /**
     * @return Collection|Articles[]
     */
    public function getArticlesAchetes(): Collection
    {
        return $this->ArticlesAchetes;
    }

    public function addArticlesAchetE(Articles $articlesAchetE): self
    {
        if (!$this->ArticlesAchetes->contains($articlesAchetE)) {
            $this->ArticlesAchetes[] = $articlesAchetE;
        }

        return $this;
    }

    public function removeArticlesAchetE(Articles $articlesAchetE): self
    {
        $this->ArticlesAchetes->removeElement($articlesAchetE);

        return $this;
    }

    /**
     * @return Collection|Commentaires[]
     */
    public function getCommentaires(): Collection
    {
        return $this->Commentaires;
    }

    public function addCommentaire(Commentaires $commentaire): self
    {
        if (!$this->Commentaires->contains($commentaire)) {
            $this->Commentaires[] = $commentaire;
            $commentaire->setUser($this);
        }

        return $this;
    }

    public function removeCommentaire(Commentaires $commentaire): self
    {
        if ($this->Commentaires->removeElement($commentaire)) {
            // set the owning side to null (unless already changed)
            if ($commentaire->getUser() === $this) {
                $commentaire->setUser(null);
            }
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
            $commande->setUser($this);
        }

        return $this;
    }

    public function removeCommande(Commandes $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            // set the owning side to null (unless already changed)
            if ($commande->getUser() === $this) {
                $commande->setUser(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getNom();
    }
}
