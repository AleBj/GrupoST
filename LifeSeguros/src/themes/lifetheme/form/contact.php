<?php 
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
    error_reporting(E_ALL);
    require './vendor/autoload.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;  

    $email_subject = "Fraser - Contact Form";

    $name = $_GET['name'];
    $userEmail = $_GET['email'];
    $message = $_GET['message'];

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify'; 
    $recaptcha_secret = '6LcgkKYpAAAAABAXcfYzb1O7sPUCdyT5ZMKe-qq9'; 
    $recaptcha_response = $_GET['recaptcha_response']; 
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response . "&remoteip=".$_SERVER['REMOTE_ADDR']); 
    $recaptcha = json_decode($recaptcha); 

    
    if($recaptcha->score >= 0.7){
    
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
                <p><strong>Name</strong>: ".$name."</p>
                <p><strong>Email</strong>: ".$userEmail."</p>
                <p><strong>Message</strong>: ".$message."</p>
            ";
    
            $email->Send();
    
            if (!headers_sent()) {
                header("Location: /thankyou");
                exit;
            }else{
                $filename = '/thankyou';
                echo '<script type="text/javascript">';
                echo 'window.location.href="'.$filename.'";';
                echo '</script>';
                echo '<noscript>';
                echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
                echo '</noscript>';
            }
    
        } catch (Exception $e) {
            var_dump($e);
            if (!headers_sent()) {
                header("Location: /contact");
                exit;
            }else{
                $filename = '/contact';
                echo '<script type="text/javascript">';
                echo 'window.location.href="'.$filename.'";';
                echo '</script>';
                echo '<noscript>';
                echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
                echo '</noscript>';
            }
        }
    
    } else {
        var_dump($recaptcha);
        if (!headers_sent()) {
            header("Location: /contact");
            exit;
        }else{
            $filename = '/contact';
            echo '<script type="text/javascript">';
            echo 'window.location.href="'.$filename.'";';
            echo '</script>';
            echo '<noscript>';
            echo '<meta http-equiv="refresh" content="0;url='.$filename.'" />';
            echo '</noscript>';
        }
    
    }

?>
