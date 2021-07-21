<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/favori")
 */
class FavoriController extends AbstractController
{
    private $requestStack, $user_id, $favori;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
        //création de l'user_id s'il n'existe pas
        if (!$this->requestStack->getCurrentRequest()->getSession()->get('userId'))
            $this->requestStack->getCurrentRequest()->getSession()->set('userId', uniqid());
        $this->user_id = $this->requestStack->getCurrentRequest()->getSession()->get('userId');
        //création du favori s'il n'existe pas
        if (!$this->requestStack->getCurrentRequest()->getSession()->get('favori_' . $this->user_id))
            $this->favori = $this->requestStack->getCurrentRequest()->getSession()->set('favori_' . $this->user_id, json_encode(array()));
        $this->favori = json_decode($this->requestStack->getCurrentRequest()->getSession()->get('favori_' . $this->user_id), true);
        //dd($this->requestStack->getCurrentRequest()->getSession()->get('favori_' . $this->user_id));
    }

    /**
     * @Route("/add/{id}", name="favori_add")
     */
    public function add($id): Response
    {
        //on ajoute s'il n'est pas déjà dans les favoris sinon on retire
        if (!in_array($id, $this->favori)) {
            $this->favori[] =  $id;
            $this->requestStack->getCurrentRequest()->getSession()->set('favori_' . $this->user_id, json_encode($this->favori));
        } else
            $this->sub($id);
        return new JsonResponse($this->favori);
    }
    /**
     * @Route("/sub/{id}", name="favori_sub")
     */
    public function sub($id): Response
    {
        if (($key = array_search($id, $this->favori)) !== false) {
            unset($this->favori[$key]);
            $this->requestStack->getCurrentRequest()->getSession()->set('favori_' . $this->user_id, json_encode($this->favori));
        }
        return new JsonResponse($this->favori);
    }

    /**
     * @Route("/nbr", name="favori_nbr")
     */
    public function nbr(): Response
    {
        if ($this->favori) return new JsonResponse(count($this->favori));
        else return new JsonResponse(0);
    }
    /**
     * @Route("/get", name="getfavoris")
     */
    public function getfavoris(): Response
    {

        return new JsonResponse($this->favori);
    }
    /**
     * @Route("/rmfavori", name="rmfavori")
     */
    public function rmfavori(): Response
    {
        $this->favori = $this->requestStack->getCurrentRequest()->getSession()->set('favori_' . $this->user_id, json_encode(array()));
        return new JsonResponse('');
    }
}
