<?php
//******no_regenerate*****
namespace  App\Controller ;use App\Entity\Souscat;
use App\Form\SouscatType;
    use App\Repository\SouscatRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("admin/souscat")
 */class SouscatController extends AbstractController
{
    /**
    * @Route("/", name="souscat_index", methods={"GET"})
    */
    public function index(SouscatRepository $souscatRepository): Response
    {
    return $this->render('souscat/index.html.twig', [
    'souscats' => $souscatRepository->findAll(),
    ]);
    }

    /**
    * @Route("/new", name="souscat_new", methods={"GET","POST"})
    */
public function new(Request $request): Response
{
$souscat = new Souscat();
$form = $this->createForm(SouscatType::class, $souscat);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($souscat);
$entityManager->flush();

return $this->redirectToRoute('souscat_index');
}

return $this->render('souscat/new.html.twig', [
'souscat' => $souscat,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="souscat_show", methods={"GET"})
    */
public function show(Souscat $souscat): Response
{
return $this->render('souscat/show.html.twig', [
'souscat' => $souscat,
]);
}

    /**
    * @Route("/{id}/edit", name="souscat_edit", methods={"GET","POST"})
    */
public function edit(Request $request, Souscat $souscat): Response
{
$form = $this->createForm(SouscatType::class, $souscat);
$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$this->getDoctrine()->getManager()->flush();

return $this->redirectToRoute('souscat_index');
}

return $this->render('souscat/new.html.twig', [
'souscat' => $souscat,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}/copy", name="souscat_copy", methods={"GET","POST"})
    */
public function copy(Request $request, Souscat $souscatc): Response
{
$souscat = clone $souscatc;

$em = $this->getDoctrine()->getManager();
$em->persist($souscat);
$em->flush();
return $this->redirectToRoute('souscat_index');
//$souscat = $copier->copy($souscatc);
//$form = $this->createForm(SouscatType::class, $souscat);
//$form->handleRequest($request);

if ($form->isSubmitted() && $form->isValid()) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($souscat);
$entityManager->flush();

return $this->redirectToRoute('souscat_index');
}

return $this->render('souscat/new.html.twig', [
'souscat' => $souscat,
'form' => $form->createView(),
]);
}

    /**
    * @Route("/{id}", name="souscat_delete", methods={"POST"})
    */
public function delete(Request $request, Souscat $souscat): Response
{
if ($this->isCsrfTokenValid('delete'.$souscat->getId(), $request->request->get('_token'))) {
$entityManager = $this->getDoctrine()->getManager();
$entityManager->remove($souscat);
$entityManager->flush();
}

return $this->redirectToRoute('souscat_index');
}
}