<?php

namespace App\Controller;

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}


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


    #[Route('/del_tipus', name: 'del_tipus')]
    public function deltipus(Request $request): JsonResponse
    {

        $data = json_decode($request->getContent(), true);


        $nom = $data['nom'];



        $tipus = $this->tipusrepo->findOneBy(array("Nom" => $nom));
        $platsorfans = $this->platrepo->findBy(array("Tipus"=> $tipus->getId()));
        foreach($platsorfans as $plat)
        {

            $this->platrepo->remove($plat);

        }


        $this->tipusrepo->remove($tipus);



        return new JsonResponse(['status' => 'bien!'], Response::HTTP_CREATED);
    }



    #[Route('/edit_plat', name: 'edit_plat')]
    public function editplat(Request $request): JsonResponse
    {

        $data = json_decode($request->getContent(), true);


        $nom = $data['nomplat'];
        $nomnou =$data['nomnou'];
        $preunou = $data['preunou'];

        $platfound = $this->platrepo->findOneBy(array("Nom" => $nom));
        $this->platrepo->remove($platfound);
        $platfound->setNom($nomnou);
        $platfound->setPreu($preunou);
        $this->platrepo->add($platfound);






        return new JsonResponse(['status' => 'bien!'], Response::HTTP_CREATED);
    }


    #[Route('/del_plat', name: 'del_plat')]
    public function delplat(Request $request): JsonResponse
    {

        $data = json_decode($request->getContent(), true);


        $nom = $data['nom'];


        $platfound = $this->platrepo->findOneBy(array("Nom" => $nom));
        $this->platrepo->remove($platfound);

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

    #[Route('/get_plats_tipus', name: 'get_plats_tipus')]
    public function get_plats_tipus(): JsonResponse
    {
        $tipus = $this->tipusrepo->findAll();
        $i = 0;
        $data = [];



        foreach ($tipus as $tip) {


            $plats = $tip->getPlats();
            $llistaPlats = array();



            foreach ($plats as $plat) {


                $llistaPlats [] = [
                    'nom' => $plat->getNom(),
                    'preu' => $plat->getPreu(),
                    'tipus' => $plat->getTipus()->getNom(),
                ];
            }
            $data[] = [ "nomTipus" => $tip->getNom() ,  "llistatPlats" =>   $llistaPlats];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }




    #[Route('/get_tipus', name: 'get_tipus')]
    public function getTipus(): JsonResponse
    {
        $plats = $this->tipusrepo->findAll();
        $data = [];

        foreach ($plats as $pet) {
            $data[] = [
                'nom' => $pet->getNom(),
            ];
        }

        return new JsonResponse($data, Response::HTTP_OK);
    }


}
