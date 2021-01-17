<?php

$mailSub = 'Your Favourites List!!';
$mailSubuser = 'Your Favourites List!!';

$useremail = $_POST['email'];
$usermessage =  $_POST['message'];

require 'PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer();
$mail->IsSmtp();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Host = 'smtp.gmail.com;'; 
$mail->Port = 587;  
$mail->IsHTML(true);

$mail->Username = 'pasandileepadissanayake@gmail.com';               // your SMTP username  
$mail->Password = 'eufiwlucyauvbsdd';                      // your SMTP password  

$mail->Subject = $mailSubuser;
$mail->Body = $usermessage;
$mail->AddAddress($useremail);

if (!$mail->Send()) {
    echo json_encode('Mail Not Sent: ' . $mail->ErrorInfo);
} else {
    echo json_encode("Mail Sent");
}

exit();
