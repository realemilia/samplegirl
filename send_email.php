<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'advaithsnair1@gmail.com';

    // Set subject
    $subject = 'Custom Gift Request';

    // Compose message
    $body = "Name: $name\n\nMessage:\n$message";

    // Set headers
    $headers = "From: advaithsnair1@gmail.com\r\n";
    $headers .= "Reply-To: advaithsnair1@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message has been sent';
    } else {
        echo 'Unable to send email. Please try again later.';
    }
} else {
    echo 'Invalid request';
}
?>
