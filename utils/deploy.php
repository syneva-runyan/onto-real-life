<?php
	/**
	 * GIT DEPLOYMENT SCRIPT
	 *
	 * Used for automatically deploying websites via github or bitbucket, more deets here:
	 *
	 *		https://gist.github.com/1809044
	 */

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
		$output .= "<span style=\"color: #6BE234;\">\$</span> <span style=\"color: #729FCF;\">{$command}\n</span>";
		$output .= htmlentities(trim($tmp)) . "\n";
	}

	// send email to me when updates are made.
	// code cred synevarunyan
	$email_to = "syneva@gmail.com";	
	$email_subject = "OntoReallife Deployment";
	$email_message = $output;
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
