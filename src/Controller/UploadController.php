<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;


class UploadController extends AbstractController
{


    /**
     * @Route("/upload", name="ajax_upload", methods={"POST"})
     */
    public function ajax_upload()
    {
        if (!isset($_FILES['file']))
            return new jsonResponse('pas de fichier envoyé', Response::HTTP_BAD_REQUEST);
        //TODO:mettre le csrf
        //if (!$this->isCsrfTokenValid('upload', $_POST['token']))
        //    return new jsonResponse('Csrf invalide', Response::HTTP_BAD_REQUEST);
        else {
            //TODO:bug obligé de passer par un répertoire
            $dest = '/tmp/'  . uniqid() . '¤' . $_POST['directory'];
            move_uploaded_file($_FILES['file']['tmp_name'], $dest);
            $_FILES['file']['tmp_name'] = $dest;
            return new jsonResponse(json_encode($_FILES['file'])); // . $this->slugger->slug($_FILES['file']['name']));
            //return new jsonResponse($this->slugger->slug($_FILES), Response::HTTP_OK);
        }
    }
    /**
     * @Route("/upload_final/{request}", name="tmpToFinal", methods={"POST"})
     */
    public function tmpToFinal($url)
    {
        $slugger = new AsciiSlugger();
        if (isset($url)) {
            $data = json_decode($url);
            $temp = explode('¤', $data->tmp_name);
            $directory = $temp[1];
            $tempname = $temp[0];
            $safeFilename = $slugger->slug($data->name);
            $fileName = $safeFilename . '-' . uniqid() . '.'
                . pathinfo($data->name, PATHINFO_EXTENSION);
            try {
                @mkdir('uploads/' . $directory);
                rename($data->tmp_name, getcwd() . '/uploads/' . $directory . '/' . $fileName);
                $data->real_name = '/uploads/' . $directory . '/' . $fileName;
                //move_uploaded_file($data->tmp_name, 'uploads/' . $fileName);
            } catch (FileException $error) {
                throw new \RuntimeException($error);
            }
            return $data;
        }
    }
}
