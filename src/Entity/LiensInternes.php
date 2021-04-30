<?php

namespace App\Entity;

use App\Repository\LiensInternesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=LiensInternesRepository::class)
 */
class LiensInternes
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $Observation;

    /**
     * @ORM\ManyToMany(targetEntity=Materiels::class, mappedBy="LiensInternes")
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
            $materiel->addLiensInterne($this);
        }

        return $this;
    }

    public function removeMateriel(Materiels $materiel): self
    {
        if ($this->materiels->removeElement($materiel)) {
            $materiel->removeLiensInterne($this);
        }

        return $this;
    }
}
