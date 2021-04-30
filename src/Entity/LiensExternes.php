<?php

namespace App\Entity;

use App\Repository\LiensExternesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LiensExternesRepository::class)
 */
class LiensExternes
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
     * @ORM\Column(type="string", length=255, nullable=true)
     * ALIAS=texte_propre
     */
    private $Site;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Url;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * ALIAS=prix
     */
    private $Prix;

    /**
     * @ORM\Column(type="text", length=255, nullable=true)
     */
    private $Observation;

    /**
     * @ORM\ManyToMany(targetEntity=Materiels::class, mappedBy="LiensExternes")
     * OPT=required=>false
     * ATTR=no_index
     */
    private $materiels;

    public function __construct()
    {
        $this->materiels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSite(): ?string
    {
        return $this->Site;
    }

    public function setSite(?string $Site): self
    {
        $this->Site = $Site;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->Url;
    }

    public function setUrl(?string $Url): self
    {
        $this->Url = $Url;

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

    public function getObservation(): ?string
    {
        return $this->Observation;
    }

    public function setObservation(?string $Observation): self
    {
        $this->Observation = $Observation;

        return $this;
    }

    /**
     * @return Collection|Materiels[]
     */
    public function getMateriels(): Collection
    {
        return $this->materiels;
    }

    public function addMateriel(Materiels $materiel): self
    {
        if (!$this->materiels->contains($materiel)) {
            $this->materiels[] = $materiel;
            $materiel->addLiensExterne($this);
        }

        return $this;
    }

    public function removeMateriel(Materiels $materiel): self
    {
        if ($this->materiels->removeElement($materiel)) {
            $materiel->removeLiensExterne($this);
        }

        return $this;
    }
}
