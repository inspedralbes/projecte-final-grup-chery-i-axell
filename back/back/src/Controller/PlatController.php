<?php

namespace App\Controller;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


use App\Entity\Plat;
use App\Entity\Tipus;
use App\Repository\PlatRepository;
use App\Repository\TipusRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class PlatController extends AbstractController
{

    private $platrepo;
    private $tipusrepo;

    public function __construct(PlatRepository $platrepo, TipusRepository $tipusrepo)
    {
        $this->platrepo = $platrepo;
        $this->tipusrepo = $tipusrepo;

    }


    #[Route('/plat', name: 'app_plat')]
    public function index(): Response
    {
        return $this->render('plat/index.html.twig', [
            'controller_name' => 'PlatController',
        ]);
    }

    #[Route('/add_plat', name: 'add_plat')]
    public function add(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $nom = $data['nom'];
        $tipusnom = $data['tipusnom'];
        $preu = $data['preu'];

        $tipus = $this->tipusrepo->findOneBy(array("Nom" => $tipusnom));

        if(isset($tipus)){

            $plat = new Plat();
            $plat->setNom($nom);
            $plat->setPreu($preu);
            $plat->setTipus($tipus);

            $this->platrepo->add($plat);

            return new JsonResponse(['status' => 'bien!'], Response::HTTP_CREATED);

        }


        return new JsonResponse(['status' => 'mal!'], Response::HTTP_CREATED);
    }


    #[Route('/add_tipus', name: 'add_tipus')]
    public function addtipus(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $tipusnom = $data['tipusnom'];


        $tipus = new Tipus();
        $tipus->setNom($tipusnom);

        $this->tipusrepo->add($tipus);



            return new JsonResponse(['status' => 'bien!'], Response::HTTP_CREATED);




    }

    #[Route('/get_plats', name: 'get_plats')]
    public function getAll(): JsonResponse
    {
       $plats = $this->platrepo->findAll();
        $data = [];

        foreach ($plats as $pet) {
            $data[] = [
                'nom' => $pet->getNom(),
                'preu' => $pet->getPreu(),
                'tipus' => $pet->getTipus()->getNom(),
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }





}
