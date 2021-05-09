<?php

namespace App\Repository;

use App\Entity\LiensInterne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LiensInterne|null find($id, $lockMode = null, $lockVersion = null)
 * @method LiensInterne|null findOneBy(array $criteria, array $orderBy = null)
 * @method LiensInterne[]    findAll()
 * @method LiensInterne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LiensInterneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LiensInterne::class);
    }

    // /**
    //  * @return LiensInterne[] Returns an array of LiensInterne objects
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
    public function findOneBySomeField($value): ?LiensInterne
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
