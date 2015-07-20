<?php
    $user=$_POST['user'];
    $phone=$_POST['phone'];
    $mail=$_POST['mail'];
 	$to = "head123455@yandex.ru";
    $subject = "Заявка!";
    if($user){
    	$message = "<br>User: " . $user . "<br>phone:<br>" . $phone . "<br>mail:<br>" . $mail;
    }
    else $message = "<br>User: " . $user . "<br>Phone: " . $phone . "<br>mail:<br>" . $mail;
    
    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
    $headers .= "From: wth\r\n";
    //Если форма была отправлена, то выводим ее содержимое на экран
    if (isset($_POST["user"])) { 

        if (!mail($to, $subject, $message, $headers)) {
            $errors[] = "Ошибка, сообщение не отправлено. Попробуйте позже.";
        }
    }
?>
