<?php

namespace  App\Controller;

use App\Entity\LiensExterne;
use App\Form\LiensExterneType;
use App\Repository\LiensExterneRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DeepCopy\DeepCopy;
use DeepCopy\Filter\SetNullFilter;
use DeepCopy\Matcher\PropertyNameMatcher;

/**
 * @Route("admin/liens/externes")
 */ class LiensExterneController extends AbstractController
{
    /**
     * @Route("/", name="liens_externe_index", methods={"GET"})
     */
    public function index(LiensExterneRepository $liensExterneRepository): Response
    {
        return $this->render('liens_externe/index.html.twig', [
            'liens_externe' => $liensExterneRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="liens_externe_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $liensExterne = new LiensExterne();
        $form = $this->createForm(LiensExterneType::class, $liensExterne);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($liensExterne);
            $entityManager->flush();

            return $this->redirectToRoute('liens_externe_index');
        }

        return $this->render('liens_externe/new.html.twig', [
            'liens_externe' => $liensExterne,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="liens_externe_show", methods={"GET"})
     */
    public function show(LiensExterne $liensExterne): Response
    {
        return $this->render('liens_externe/show.html.twig', [
            'liens_externe' => $liensExterne,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="liens_externe_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, LiensExterne $liensExterne): Response
    {
        $form = $this->createForm(LiensExterneType::class, $liensExterne);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('liens_externe_index');
        }

        return $this->render('liens_externe/edit.html.twig', [
            'liens_externe' => $liensExterne,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/copy", name="liens_externe_copy", methods={"GET","POST"})
     */
    public function copy(Request $request, LiensExterne $liensExternec): Response
    {
        $copier = new DeepCopy();
        $copier->addFilter(new SetNullFilter(), new PropertyNameMatcher('id'));
        $liensExterne = $copier->copy($liensExternec);
        $form = $this->createForm(LiensExterneType::class, $liensExterne);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($liensExterne);
            $entityManager->flush();

            return $this->redirectToRoute('liens_externe_index');
        }

        return $this->render('liens_externe/new.html.twig', [
            'liens_externe' => $liensExterne,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="liens_externe_delete", methods={"POST"})
     */
    public function delete(Request $request, LiensExterne $liensExterne): Response
    {
        if ($this->isCsrfTokenValid('delete' . $liensExterne->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($liensExterne);
            $entityManager->flush();
        }

        return $this->redirectToRoute('liens_externe_index');
    }
}
