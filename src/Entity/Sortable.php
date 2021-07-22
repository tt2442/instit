<?php
/* ------------------------------------------------------------------------------------------------------------------ */
/*                                                                         ATTENTION CE FICHIER EST CRÉÉ PAR CRUDMICK */
/* ------------------------------------------------------------------------------------------------------------------ */

namespace App\Entity;

use App\Repository\SortableRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SortableRepository::class)
 */
class Sortable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $entite;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ordre;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEntite(): ?string
    {
        return $this->entite;
    }

    public function setEntite(string $entite): self
    {
        $this->entite = $entite;

        return $this;
    }

    public function getOrdre(): ?string
    {
        return $this->ordre;
    }

    public function setOrdre(string $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }
}
