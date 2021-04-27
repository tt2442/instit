<?php
namespace  App\Controller ;use App\Entity\LiensInternes;
use App\Form\LiensInternesType;
    use App\Repository\LiensInternesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use DeepCopy\DeepCopy;
use DeepCopy\Filter\SetNullFilter;
use DeepCopy\Matcher\PropertyNameMatcher;

/**
 * @Route("admin/liens/internes")
 */class LiensInternesController extends AbstractController
{
    /**
    * @Route("/", name="liens_internes_index", methods={"GET"})
    */
    public function index(LiensInternesRepository $liensInternesRepository): Response
    {
    return $this->render('liens_internes/index.html.twig', [
    'liens_internes' => $liensInternesRepository->findAll(),
    ]);
    }

    /**
    * @Route("/new", name="liens_internes_new", methods={"GET","POST"})
    */
public function new(Request $request): Response
{
$liensInterne = new LiensInternes();
$form = $this->createForm(LiensInternesType::class, $liensInterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensInterne);
$entityManager->flush();

return $this->redirectToRoute('liens_internes_index');
}

return $this->render('liens_internes/new.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_internes_show", methods={"GET"})
    */
public function show(LiensInternes $liensInterne): Response
{
return $this->render('liens_internes/show.html.twig', [
'liens_interne' => $liensInterne,
]);
}

    /**
    * @Route("/{id}/edit", name="liens_internes_edit", methods={"GET","POST"})
    */
public function edit(Request $request, LiensInternes $liensInterne): Response
{
$form = $this->createForm(LiensInternesType::class, $liensInterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$this->getDoctrine()->getManager()->flush();

return $this->redirectToRoute('liens_internes_index');
}

return $this->render('liens_internes/edit.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}/copy", name="liens_internes_copy", methods={"GET","POST"})
    */
public function copy(Request $request, LiensInternes $liensInternec): Response
{
$copier = new DeepCopy();
$copier->addFilter(new SetNullFilter(), new PropertyNameMatcher('id'));
$liensInterne = $copier->copy($liensInternec);
$form = $this->createForm(LiensInternesType::class, $liensInterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensInterne);
$entityManager->flush();

return $this->redirectToRoute('liens_internes_index');
}

return $this->render('liens_internes/new.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_internes_delete", methods={"POST"})
    */
public function delete(Request $request, LiensInternes $liensInterne): Response
{
if ($this->isCsrfTokenValid('delete'.$liensInterne->getId(), $request->request->get('_token'))) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->remove($liensInterne);
$entityManager->flush();
}

return $this->redirectToRoute('liens_internes_index');
}
}