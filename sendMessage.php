<?php

$json = $_GET['json'];
$obj = json_decode($json);

$name = $obj->name;
$email = $obj->email;
$subject = $obj->subject;
$message = $obj->message;

$to = "tharindunimesh.abc@gmail.com";
$headers = "From: $email\r\n";

$body = "Name: $name\n" .
        "Email: $email\n" .
        "Subject: $subject\n" .
        "Message: $message\n";

if (mail($to, $subject, $body, $headers)) {
  echo "success";
} else {
  echo "error";
}

?>