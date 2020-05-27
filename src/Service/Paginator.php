<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Config\Definition\Exception\Exception;

class Paginator
{
    private $entity;
    private $limit;
    private $currentPage = 1;
    private $manager;
    private $order;
    private $attribut;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    public function getData()
    {  
         if(empty($this->entity)) {
            throw new Exception("L'entité n'a pas été spécifié");      
        }
        $offset = $this->currentPage * $this->limit - $this->limit;
        $repo = $this->manager->getRepository($this->entity);
        $data = $repo->findBy($this->attribut,$this->order, $this->limit, $offset);
        return $data;   
    }

    public function getPages()
    {
        if(empty($this->entity)) {
            throw new Exception("L'entité n'a pas été spécifié");      
        }
        $repo = $this->manager->getRepository($this->entity);
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
