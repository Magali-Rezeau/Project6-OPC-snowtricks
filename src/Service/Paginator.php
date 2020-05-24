<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;

class Paginator
{
    private $entity;
    private $limit;
    private $currentPage = 1;
    private $emi;
    private $order;
    private $attribut;

    public function __construct(EntityManagerInterface $emi)
    {
        $this->emi = $emi;
    }

    public function getData()
    {
        $offset = $this->currentPage * $this->limit - $this->limit;
        $repo = $this->emi->getRepository($this->entity);
        $data = $repo->findBy($this->attribut,$this->order, $this->limit, $offset);
        return $data;
        
    }
    public function getPages()
    {
        $repo = $this->emi->getRepository($this->entity);
        $total = count($repo->findBy($this->attribut));
        $pages = ceil($total / $this->limit);
        return $pages;
        
    }
    public function getEntity()
    {
        return $this->entity;
    }

    public function setEntity($entity)
    {
        $this->entity = $entity;

        return $this;
    }
    public function getLimit()
    {
        return $this->limit;
    }

    public function setLimit($limit)
    {
        $this->limit = $limit;

        return $this;
    }
    public function getCurrentPage()
    {
        return $this->currentPage;
    }

    public function setCurrentPage($currentPage)
    {
        $this->currentPage = $currentPage;

        return $this;
    }
    public function getOrder()
    {
        return $this->order;
    }

    public function setOrder($order)
    {
        $this->order = $order;

        return $this;
    }
    public function getAttribut()
    {
        return $this->attribut;
    }

    public function setAttribut($attribut)
    {
        $this->attribut = $attribut;

        return $this;
    }

}
