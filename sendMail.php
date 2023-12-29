<?php

   
    $to = "amandine_millet@live.fr"; 
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $subject = $data->objet;
    $email = $data->email;
    $message = $data->message;
    $content = "l'email est : $email.\n Son message est : $message\n";
    $headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

        /* $headers[] = 'MIME-Version: 1.0';
           $headers[] = 'Content-type: text/html; charset=utf-8'; */

           //exemple
          /*  <html>
      <head>
       <title>Calendrier des anniversaires pour Août</title>
      </head>
      <body>
       <p> */


        if (mail($to, $subject, $content, $headers))
            echo "L'email a bien été envoyé !";
        else
            echo "Il y a eu une erreur sur l'envoi...";

?>