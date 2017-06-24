<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\View\View;

class ApiController extends FOSRestController
{
    /**
    * @Rest\Get("/users")
    */
    public function getAction(){
      $data = [
        0 => [
          'id' => 1,
          'imie' => 'Kuba',
          'nazwisko' => 'Seba'
        ],
        1 => [
          'id' => 2,
          'imie' => 'Maciek',
          'nazwisko' => 'Fajny'
        ]
      ];

        return $data;
    }

    /**
    * @Rest\Delete("/user/{id}")
    */
    public function delleteAction($id){
      $data = [
        0 => [
          'id' => 1,
          'imie' => 'Kuba',
          'nazwisko' => 'Seba'
        ]
      ];

      return $data;
    }

    /**
    * @Rest\Post("/user")
    */
    public function postAction(Request $request)
    {
      $data = [
        0 => [
          'id' => 1,
          'imie' => 'Kuba',
          'nazwisko' => 'Seba'
        ],
        1 => [
          'id' => 2,
          'imie' => 'Maciek',
          'nazwisko' => 'Fajny'
        ],
        2 => [
          'id' => 3,
          'imie' => $request->request->all()['imie'],
          'nazwisko' => $request->request->all()['nazwisko']
        ]
      ];

      return $data;
    }

    /**
    * @Rest\Put("/user")
    */
    public function putAction(Request $request)
    {
      $data = [
        0 => [
          'id' => 1,
          'imie' => $request->request->all()['imie'],
          'nazwisko' => $request->request->all()['nazwisko']
        ],
        1 => [
          'id' => 2,
          'imie' => 'Maciek',
          'nazwisko' => 'Fajny'
        ]
      ];

      return $data;
    }

}
