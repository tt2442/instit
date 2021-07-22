<?php

namespace App\Controller;

use App\Entity\Categorie;
use App\Entity\Modele;
use App\Repository\CategorieRepository;
use App\Repository\ModeleRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/panier")
 */
class PanierController extends AbstractController
{
    private $requestStack, $user_id, $panier;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
        //création de l'user_id s'il n'existe pas
        if (!$this->requestStack->getCurrentRequest()->getSession()->get('userId'))
            $this->requestStack->getCurrentRequest()->getSession()->set('userId', uniqid());
        $this->user_id = $this->requestStack->getCurrentRequest()->getSession()->get('userId');
        //création du panier s'il n'existe pas
        if (!$this->requestStack->getCurrentRequest()->getSession()->get($this->user_id))
            $this->panier = $this->requestStack->getCurrentRequest()->getSession()->set($this->user_id, json_encode(array('')));
        $this->panier = json_decode($this->requestStack->getCurrentRequest()->getSession()->get($this->user_id), true);
    }
    /**
     * @Route("/get_user_id", name="panier_user_id")
     */
    public function get_user_id(): Response
    {
        return new JsonResponse($this->user_id);
    }
    /**
     * @Route("/add/{id}", name="panier_add")
     */
    public function add($id): Response
    {
        //exemple cercueil_4
        //on sépare l'objet de l'id
        $parties = explode('_', $id);
        $objet = $parties[0];
        $num = $parties[1];
        //s'il existe
        if (isset($this->panier[$num][$objet])) {
            if ($objet == 'cercueil') {
                $this->panier[$num][$objet] +=  1;
            }
            if (substr($objet, 0, strlen('poignee')) == 'poignee') {
                $type = substr($objet, strlen('poignee'));
                $this->panier[$num]['poignee'] = $type;
            }
        } else {
            if ($objet == 'cercueil') {
                $this->panier[$num][$objet] =  1;
            }
            if (substr($objet, 0, strlen('poignee')) == 'poignee') {
                $type = substr($objet, strlen('poignee'));
                $this->panier[$num]['poignee'] = $type;
            }
        }
        // on sauvegarde dans la session
        $this->requestStack->getCurrentRequest()->getSession()->set($this->user_id, json_encode($this->panier));
        return new JsonResponse($this->panier);
    }
    /**
     * @Route("/sub/{id}", name="panier_sub")
     */
    public function sub(ModeleRepository $modeleRepository, $id): Response
    {
        //on sépare l'objet de l'id
        $parties = explode('_', $id);
        $objet = $parties[0];
        $num = $parties[1];
        //on décrémente si existe
        if (isset($this->panier[$num][$objet])) {
            if ($this->panier[$num][$objet] - 1 >= 0) {
                $this->panier[$num][$objet] -=  1;
                // on sauvegarde dans la session
                $this->requestStack->getCurrentRequest()->getSession()->set($this->user_id, json_encode($this->panier));
            }
        }
        return new JsonResponse($this->panier);
    }
    /**
     * @Route("/rm/{id}", name="panier_rm")
     */
    public function rm($id): Response
    {
        //on sépare l'objet de l'id
        $parties = explode('_', $id);

        $objet = $parties[0];
        $num = $parties[1];
        //on supprime si existe
        if (isset($this->panier[$num][$objet]))
            unset($this->panier[$num][$objet]);
        // on sauvegarde dans la session
        $this->requestStack->getCurrentRequest()->getSession()->set($this->user_id, json_encode($this->panier));
        return new JsonResponse($this->panier);
    }
    /**
     * @Route("/nbr", name="panier_nbr")
     */
    public function nbr(): Response
    {
        $total = 0;
        foreach ($this->panier as $id => $objets) {
            if (isset($objets['cercueil'])) $total += $objets['cercueil'];
        }
        return new JsonResponse($total);
    }
    /**
     * @Route("/", name="getpanier")
     */
    public function getpanier(): Response
    {
        return new JsonResponse($this->panier);
    }
    /**
     * @Route("/total", name="gettotal")
     */
    public function gettotal(CategorieRepository $categorieRepository): Response
    {
        $categorie = $categorieRepository->findBy(['Nom' => 'generale'])[0];
        $total = 0;
        foreach ($this->panier as $id => $objets) {
            if (isset($objets['cercueil']))
                $total += $objets['cercueil'] * $categorie->getPrix();
            if (isset($objets['urne']))
                $total += $objets['cercueil'] * $categorie->getPrixUrne();
            if (isset($objets['poignee'])) {
                $poignee = 'getPrixPoignee' . ucfirst($objets['poignee']);
                $total += $objets['cercueil'] * $categorie->$poignee();
            }
        }
        return new JsonResponse($total / 100);
    }
    /**
     * @Route("/rmpanier", name="rmpanier")
     */
    public function rmpanier(): Response
    {
        $this->panier = $this->requestStack->getCurrentRequest()->getSession()->set($this->user_id, json_encode(array()));
        return new JsonResponse('');
    }
}
