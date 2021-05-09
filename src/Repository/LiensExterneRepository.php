<?php

namespace App\Repository;

use App\Entity\LiensExterne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LiensExterne|null find($id, $lockMode = null, $lockVersion = null)
 * @method LiensExterne|null findOneBy(array $criteria, array $orderBy = null)
 * @method LiensExterne[]    findAll()
 * @method LiensExterne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LiensExterneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LiensExterne::class);
    }

    // /**
    //  * @return LiensExterne[] Returns an array of LiensExterne objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LiensExterne
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
