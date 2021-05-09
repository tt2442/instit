<?php

namespace  App\Controller;

use App\Entity\Categorie;
use App\Form\CategorieType;
use App\Repository\CategorieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DeepCopy\DeepCopy;
use DeepCopy\Filter\SetNullFilter;
use DeepCopy\Matcher\PropertyNameMatcher;

/**
 * @Route("admin/categorie")
 */ class CategorieController extends AbstractController
{
    /**
     * @Route("/", name="categorie_index", methods={"GET"})
     */
    public function index(CategorieRepository $categorieRepository): Response
    {
        return $this->render('categorie/index.html.twig', [
            'categorie' => $categorieRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="categorie_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $category = new Categorie();
        $form = $this->createForm(CategorieType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($category);
            $entityManager->flush();

            return $this->redirectToRoute('categorie_index');
        }

        return $this->render('categorie/new.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="categorie_show", methods={"GET"})
     */
    public function show(Categorie $category): Response
    {
        return $this->render('categorie/show.html.twig', [
            'category' => $category,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="categorie_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Categorie $category): Response
    {
        $form = $this->createForm(CategorieType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('categorie_index');
        }

        return $this->render('categorie/edit.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/copy", name="categorie_copy", methods={"GET","POST"})
     */
    public function copy(Request $request, Categorie $categoryc): Response
    {
        $copier = new DeepCopy();
        $copier->addFilter(new SetNullFilter(), new PropertyNameMatcher('id'));
        $category = $copier->copy($categoryc);
        $form = $this->createForm(CategorieType::class, $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($category);
            $entityManager->flush();

            return $this->redirectToRoute('categorie_index');
        }

        return $this->render('categorie/new.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="categorie_delete", methods={"POST"})
     */
    public function delete(Request $request, Categorie $category): Response
    {
        if ($this->isCsrfTokenValid('delete' . $category->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($category);
            $entityManager->flush();
        }

        return $this->redirectToRoute('categorie_index');
    }
}
