<?php

namespace App\Repository;

use App\Entity\Trick;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Trick|null find($id, $lockMode = null, $lockVersion = null)
 * @method Trick|null findOneBy(array $criteria, array $orderBy = null)
 * @method Trick[]    findAll()
 * @method Trick[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrickRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Trick::class);
    }

    /**
    * @return Trick[] Returns an array of Trick objects
    */
    
    public function findByOrderAndLimit()
    {  
        return $this->createQueryBuilder('t')
            ->orderBy('t.created_at', 'DESC')
            ->setFirstResult(0)
            ->setMaxResults(8)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findForReadMore()
    {
        $total = count($this->findAll());
        
        return $this->createQueryBuilder('t')
            ->orderBy('t.created_at', 'DESC')
            ->setFirstResult(8)
            ->setMaxResults($total)
            ->getQuery()
            ->getResult()
        ;
    }

    // /**
    //  * @return Trick[] Returns an array of Trick objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Trick
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
