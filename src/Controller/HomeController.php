<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\CategorieRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{

    /**
     * @Route("/", name="home")
     */
    public function accueil(ArticleRepository $articleRepository, CategorieRepository $categorieRepository): Response
    {

        $articles = $articleRepository->findAllSortDate();

        return $this->render('home/accueil.html.twig', [
            'controller_name' => 'HomeController',
            'articles' => $articles,
            'categories' => $categorieRepository->findBy(['Etat' => True]),
        ]);
    }
}
