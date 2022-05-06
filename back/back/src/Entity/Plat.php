<?php

namespace App\Entity;

use App\Repository\PlatRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlatRepository::class)]
class Plat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $Nom;

    #[ORM\Column(type: 'integer')]
    private $Preu;

    #[ORM\ManyToOne(targetEntity: Tipus::class, inversedBy: 'plats')]
    private $Tipus;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPreu(): ?int
    {
        return $this->Preu;
    }

    public function setPreu(int $Preu): self
    {
        $this->Preu = $Preu;

        return $this;
    }

    public function getTipus(): ?Tipus
    {
        return $this->Tipus;
    }

    public function setTipus(?Tipus $Tipus): self
    {
        $this->Tipus = $Tipus;

        return $this;
    }
}
