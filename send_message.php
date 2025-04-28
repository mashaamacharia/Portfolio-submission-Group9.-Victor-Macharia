<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';  // Include PHPMailer's autoloader

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use Gmail's SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = '';  // Replace with your Gmail address
        $mail->Password = '';  // Replace with your Gmail password (or use OAuth for better security)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('your-email@gmail.com', 'Your Name');
        $mail->addAddress('techworks0705@gmail.com');  // Replace with the recipient's email address

        // Content
        $mail->isHTML(false);  // Set email format to plain text
        $mail->Subject = "New Message from: $name";
        $mail->Body    = "You have received a new message from the contact form on your website.\n\n"
                       . "Name: $name\n"
                       . "Email: $email\n"
                       . "Subject: $subject\n"
                       . "Message:\n$message";

        // Send the email
        $mail->send();

        // Success message
        $message_type = 'success';
        $message_text = 'Your message has been sent successfully!';
    } catch (Exception $e) {
        // Error message
        $message_type = 'danger';
        $message_text = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>

<!-- Display the success or error message -->
<div id="message" class="alert alert-<?php echo $message_type; ?>">
    <strong><?php echo ucfirst($message_type); ?>!</strong> <?php echo $message_text; ?>
    <span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span>
</div>
