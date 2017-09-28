<?php
	/**
	 * GIT DEPLOYMENT SCRIPT
	 *
	 * Used for automatically deploying websites via github or bitbucket, more deets here:
	 *
	 *		https://gist.github.com/1809044
	 *      Edited for purpose of ontoreallife.com deployment by syneva-runyan
	 */

	$post_body = $_POST['payload'];
	$payload = json_decode( file_get_contents('php://input') );
	
	// The commands
	$commands = array(
		'echo $PWD',
		'whoami',
		'git pull',
		'git status',
		'git submodule sync',
		'git submodule update',
		'git submodule status',
	);

	// Run the commands for output
	$output = '';
	foreach($commands AS $command){
		// Run it
		$tmp = shell_exec($command);
		// Output
		$output .= "{$command}";
		$output .= htmlentities(trim($tmp)) . "\n";
	}

	// send email to me when updates are made.
	// code cred synevarunyan
	$email_to = "syneva@gmail.com";	
	$email_subject = "OntoReallife Deployment";
	$email_message = "A deployment was attempted for your site based on the head commit: \n".$payload."\r\n".$output;
	$headers = 'From: '.$email_from."\r\n".
	
	'Reply-To: '.$email_from."\r\n" .
	
	'X-Mailer: PHP/' . phpversion();
	
	if(mail($email_to, $email_subject, $email_message, $headers))
	{
		//handle success
	}
	else
	{
		//handle failure
	}
?>
