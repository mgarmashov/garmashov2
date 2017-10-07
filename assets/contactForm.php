<?php

	// Contact
	$to = 'mikhail.garmashov@gmail.com';
    $subject = 'garmashov com';

	if(isset($_POST['c_name']) && isset($_POST['c_email']) && isset($_POST['c_message'])){
   		$name    = $_POST['c_name'];

		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$headers .= $_POST['c_email'];


		$message = '<br /><b>Name:</b> '.$name.'<br /><b>Message:</b><br />'.$_POST['c_message'];

		if (mail($to, $subject, $message, $headers)) {
			$result = array(
				'message' => 'Thanks for contacting us!',
				'sendstatus' => 1
				);
			echo json_encode($result);
		} else { 
			$result = array(
				'message' => 'Sorry, something is wrong',
				'sendstatus' => 1
				);
			echo json_encode($result);
		} 
	}

?>