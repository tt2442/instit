<?php
/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                                         ATTENTION CE FICHIER EST CRÉÉ PAR CRUDMICK */
/* ------------------------------------------------------------------------------------------------------------------ */

namespace App\Entity;

use App\Repository\FichierRepository;
use App\Controller\UploadController;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass=FichierRepository::class)
 */
class Fichier
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * PARTIE=admin
     * EXTEND=admin/admin.html.twig
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $nom;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     * ALIAS=fichier
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    private $realName;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $upload = new UploadController();
        $data = $upload->tmpToFinal($url);
        $this->url = $data->name;
        $this->realName = $data->real_name;
        return $this;
    }
    public function __toString(): ?string
    {
        if (is_null($this->url)) {
            return 'erreur';
        }
        return $this->url;
    }

    public function getrealName(): ?string
    {
        return $this->realName;
    }

    public function setrealName(string $realName): self
    {
        $this->realName = $realName;

        return $this;
    }
}
