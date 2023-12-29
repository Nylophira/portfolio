<?php

   
    $to = "amandine_millet@live.fr"; 
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $subject = $data->objet;
    $email = $data->email;
    $message = $data->message;
    $content = /* "<html>
                    <head>
                        <title>$subject</title>
                    </head>
                    <p>$message</p>
                </html>"; */
                "$subject\n$message";
    $headers[] = "From: <$email>\r\nReply-To: $email";
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';


        if (mail($to, $subject, $content, $headers))
            echo "L'email a bien été envoyé !";
        else
            echo "Il y a eu une erreur sur l'envoi...";

?>