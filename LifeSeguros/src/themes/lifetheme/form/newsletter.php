<?php 
    // ini_set('display_errors', '1');
    // ini_set('display_startup_errors', '1');
    // error_reporting(E_ALL);
    require './vendor/autoload.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;  

    $email_subject = "Fraser - Newsletter Subscription";
    $userEmail = $_GET['email'];

    try {
        $email = new PHPMailer(true);
        // $email->SMTPDebug = 3; 
        $email->From = $userEmail;
        $email->FromName = 'Fraser';
        $email->IsSMTP();  
        $email->SMTPAuth = true; 
        $email->SMTPSecure = 'tls'; 
        $email->Host = "smtp.gmail.com";
        $email->Port = 587; 
        $email->Username = "automatic.noreplay@gmail.com";
        $email->Password = 'pxbaibwwfcdchsbr';                     
        $email->IsHTML(true);
        $email->addReplyTo($userEmail);
        $email->AddAddress('hello@frasertheagency.com');
        $email->Subject = $email_subject;
        $email->Body = "
            <p><strong>New email subscribed</strong>: ".$userEmail."</p>
        ";

        $email->Send();

        if (!headers_sent()) {
            header("Location: /?nucleo=true");
            exit;
        }else{
            $filename = '/?nucleo=true';
            echo '<script type="text/javascript">';
            echo 'window.location.href="'.$filename.'";';
            echo '</script>';
            echo '<noscript>';
            echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
            echo '</noscript>';
        }

    } catch (Exception $e) {
        if (!headers_sent()) {
            header("Location: /?nucleo=true");
            exit;
        }else{
            $filename = '/?nucleo=true';
            echo '<script type="text/javascript">';
            echo 'window.location.href="'.$filename.'";';
            echo '</script>';
            echo '<noscript>';
            echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
            echo '</noscript>';
        }

    }

?>
