<?php
// PHP Proxy example for Yahoo! Web services. 
// Responds to both HTTP GET and POST requests
//
// Author: Jason Levitt
// December 7th, 2005
//
// Modified: Kari Salo
// August 22nd, 2013
// Define hostname yourself
define ('HOSTNAME', 'http://users.metropolia.fi/~inany/');


// Get the REST call path from the AJAX application
// Is it a POST or a GET?
error_reporting (E_ALL ^ E_NOTICE);
$path = ($_POST['r_path']) ? $_POST['r_path'] : $_GET['r_path'];
$url = HOSTNAME.$path;
//echo $url;
// Open the Curl session
$session = curl_init($url);

// If it's a POST, put the POST data in the body
if ($_POST['r_path']) {
	$postvars = '';
	while ($element = current($_POST)) {
		$postvars .= urlencode(key($_POST)).'='.urlencode($element).'&';
		next($_POST);
	}
	curl_setopt ($session, CURLOPT_POST, true);
	curl_setopt ($session, CURLOPT_POSTFIELDS, $postvars);
}

// Don't return HTTP headers. Do return the contents of the call
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// Make the call
$resp = curl_exec($session);

header("Content-Type: text/plain");
//header("Content-Type: text/json");

echo $resp;
curl_close($session);

?>