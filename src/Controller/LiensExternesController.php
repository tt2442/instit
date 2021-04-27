<?php
namespace  App\Controller ;use App\Entity\LiensExternes;
use App\Form\LiensExternesType;
    use App\Repository\LiensExternesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DeepCopy\DeepCopy;
use DeepCopy\Filter\SetNullFilter;
use DeepCopy\Matcher\PropertyNameMatcher;

/**
 * @Route("admin/liens/externes")
 */class LiensExternesController extends AbstractController
{
    /**
    * @Route("/", name="liens_externes_index", methods={"GET"})
    */
    public function index(LiensExternesRepository $liensExternesRepository): Response
    {
    return $this->render('liens_externes/index.html.twig', [
    'liens_externes' => $liensExternesRepository->findAll(),
    ]);
    }

    /**
    * @Route("/new", name="liens_externes_new", methods={"GET","POST"})
    */
public function new(Request $request): Response
{
$liensExterne = new LiensExternes();
$form = $this->createForm(LiensExternesType::class, $liensExterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensExterne);
$entityManager->flush();

return $this->redirectToRoute('liens_externes_index');
}

return $this->render('liens_externes/new.html.twig', [
'liens_externe' => $liensExterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_externes_show", methods={"GET"})
    */
public function show(LiensExternes $liensExterne): Response
{
return $this->render('liens_externes/show.html.twig', [
'liens_externe' => $liensExterne,
]);
}

    /**
    * @Route("/{id}/edit", name="liens_externes_edit", methods={"GET","POST"})
    */
public function edit(Request $request, LiensExternes $liensExterne): Response
{
$form = $this->createForm(LiensExternesType::class, $liensExterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$this->getDoctrine()->getManager()->flush();

return $this->redirectToRoute('liens_externes_index');
}

return $this->render('liens_externes/edit.html.twig', [
'liens_externe' => $liensExterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}/copy", name="liens_externes_copy", methods={"GET","POST"})
    */
public function copy(Request $request, LiensExternes $liensExternec): Response
{
$copier = new DeepCopy();
$copier->addFilter(new SetNullFilter(), new PropertyNameMatcher('id'));
$liensExterne = $copier->copy($liensExternec);
$form = $this->createForm(LiensExternesType::class, $liensExterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensExterne);
$entityManager->flush();

return $this->redirectToRoute('liens_externes_index');
}

return $this->render('liens_externes/new.html.twig', [
'liens_externe' => $liensExterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_externes_delete", methods={"POST"})
    */
public function delete(Request $request, LiensExternes $liensExterne): Response
{
if ($this->isCsrfTokenValid('delete'.$liensExterne->getId(), $request->request->get('_token'))) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->remove($liensExterne);
$entityManager->flush();
}

return $this->redirectToRoute('liens_externes_index');
}
}