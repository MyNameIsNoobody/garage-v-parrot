<?php

namespace App\Entity;

use App\Repository\VehiclesRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: VehiclesRepository::class)]
#[ApiResource]
class Vehicles
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    #[ORM\Column(nullable: true)]
    private ?int $price = null;

    #[ORM\Column(nullable: true)]
    private ?int $kilometers = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $released_year = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $brand = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $model = null;

    #[ORM\Column(nullable: true)]
    private ?bool $is_manual = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(length: 50)]
    private ?string $color = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $file_name = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): static
    {
        $this->price = $price;

        return $this;
    }

    public function getKilometers(): ?int
    {
        return $this->kilometers;
    }

    public function setKilometers(?int $kilometers): static
    {
        $this->kilometers = $kilometers;

        return $this;
    }

    public function getReleasedYear(): ?int
    {
        return $this->released_year;
    }

    public function setReleasedYear(?int $released_year): static
    {
        $this->released_year = $released_year;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(?string $brand): static
    {
        $this->brand = $brand;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function isIsManual(): ?bool
    {
        return $this->is_manual;
    }

    public function setIsManual(?bool $is_manual): static
    {
        $this->is_manual = $is_manual;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): static
    {
        $this->color = $color;

        return $this;
    }

    public function getFilename(): ?string
    {
        return $this->file_name;
    }

    public function setFilename(?string $file_name): static
    {
        $this->file_name = $file_name;

        return $this;
    }
}
