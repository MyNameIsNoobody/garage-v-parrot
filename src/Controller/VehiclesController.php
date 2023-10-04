<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VehiclesController extends AbstractController
{
    #[Route('/vehicles', name: 'app_vehicles')]
    public function index(): Response
    {
        return $this->render('vehicles/index.html.twig', [
            'controller_name' => 'VehiclesController',
        ]);
    }

    // #[Route('/vehicles/:id', name: 'app_vehicles')]
    // public function index(): Response
    // {
    //     return $this->render('vehicles/:id/index.html.twig', [
    //         'controller_name' => 'VehiclesController',
    //     ]);
    // }
}
