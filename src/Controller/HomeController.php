<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/accueil", name="accueil")
     */
    public function accueil(ArticleRepository $articleRepository): Response
    {

        return $this->render('home/accueil.html.twig', [
            'controller_name' => 'HomeController',
            'articles' => $articleRepository->findAll(),
        ]);
    }
}
