<?php
if($_POST){
    $header = 'Content-Type: text/html\r\nReply-To: zackblaylock@gmail.com\r\nFrom: zack<zackblaylock@gmail.com>'

    //send email
    if(mail('zackblaylock@gmail.com', 'Test Subject', 'Test Message', $header){
        die("true");
    } else {
        die("Error");
    }
}
?>