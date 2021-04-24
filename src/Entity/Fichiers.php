<?php

namespace App\Entity;

use App\Repository\FichiersRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FichiersRepository::class)
 */
class Fichiers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Image;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Tag;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Degrade;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Enligne;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->Image;
    }

    public function setImage(?string $Image): self
    {
        $this->Image = $Image;

        return $this;
    }

    public function getTag(): ?bool
    {
        return $this->Tag;
    }

    public function setTag(bool $Tag): self
    {
        $this->Tag = $Tag;

        return $this;
    }

    public function getDegrade(): ?bool
    {
        return $this->Degrade;
    }

    public function setDegrade(bool $Degrade): self
    {
        $this->Degrade = $Degrade;

        return $this;
    }

    public function getEnligne(): ?bool
    {
        return $this->Enligne;
    }

    public function setEnligne(bool $Enligne): self
    {
        $this->Enligne = $Enligne;

        return $this;
    }
}
