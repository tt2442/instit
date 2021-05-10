<?php
//******no_regenerate*****
namespace  App\Controller ;use App\Entity\LiensInterne;
use App\Form\LiensInterneType;
    use App\Repository\LiensInterneRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("admin/liens/interne")
 */class LiensInterneController extends AbstractController
{
    /**
    * @Route("/", name="liens_interne_index", methods={"GET"})
    */
    public function index(LiensInterneRepository $liensInterneRepository): Response
    {
    return $this->render('liens_interne/index.html.twig', [
    'liens_internes' => $liensInterneRepository->findAll(),
    ]);
    }

    /**
    * @Route("/new", name="liens_interne_new", methods={"GET","POST"})
    */
public function new(Request $request): Response
{
$liensInterne = new LiensInterne();
$form = $this->createForm(LiensInterneType::class, $liensInterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensInterne);
$entityManager->flush();

return $this->redirectToRoute('liens_interne_index');
}

return $this->render('liens_interne/new.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_interne_show", methods={"GET"})
    */
public function show(LiensInterne $liensInterne): Response
{
return $this->render('liens_interne/show.html.twig', [
'liens_interne' => $liensInterne,
]);
}

    /**
    * @Route("/{id}/edit", name="liens_interne_edit", methods={"GET","POST"})
    */
public function edit(Request $request, LiensInterne $liensInterne): Response
{
$form = $this->createForm(LiensInterneType::class, $liensInterne);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$this->getDoctrine()->getManager()->flush();

return $this->redirectToRoute('liens_interne_index');
}

return $this->render('liens_interne/new.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}/copy", name="liens_interne_copy", methods={"GET","POST"})
    */
public function copy(Request $request, LiensInterne $liensInternec): Response
{
$liensInterne = clone $liensInternec;

$em = $this->getDoctrine()->getManager();
$em->persist($liensInterne);
$em->flush();
return $this->redirectToRoute('liensInterne_index');
//$liensInterne = $copier->copy($liensInternec);
//$form = $this->createForm(LiensInterneType::class, $liensInterne);
//$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($liensInterne);
$entityManager->flush();

return $this->redirectToRoute('liens_interne_index');
}

return $this->render('liens_interne/new.html.twig', [
'liens_interne' => $liensInterne,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="liens_interne_delete", methods={"POST"})
    */
public function delete(Request $request, LiensInterne $liensInterne): Response
{
if ($this->isCsrfTokenValid('delete'.$liensInterne->getId(), $request->request->get('_token'))) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->remove($liensInterne);
$entityManager->flush();
}

return $this->redirectToRoute('liens_interne_index');
}
}