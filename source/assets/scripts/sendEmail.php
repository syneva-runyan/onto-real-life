<?php

  	$email_to = "syneva@gmail.com";

    $email_subject = $_POST["subject"];

    $email_from = $_POST["contact-email"];

    $email_message = $_POST["message"]; // required

    $headers = 'From: '.$email_from."\r\n".

	'Reply-To: '.$email_from."\r\n" .

	'X-Mailer: PHP/' . phpversion();

	if(mail($email_to, $email_subject, $email_message, $headers))
       {
       	//handle success
       }
     else
     {
       //handle failure
     }
?>
