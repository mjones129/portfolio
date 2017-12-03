<?php

    if($_POST) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        $email_message = "Form details below: \n\n";
        $email_message .= "Name: ".($name)."\n";
        $email_message .= "Email: ".($email)."\n";
        $email_message .= "Phone: ".($phone)."\n";
        $email_message .= "Message: ".($message)."\n";
        
        mail("contact@matthewchristopherjones.com", "Contact Form Submission", $email_message);
    }
    

?>