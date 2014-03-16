<?php

$ip = $_SERVER['REMOTE_ADDR'];

$lat = $_GET['lat'];
$lon = $_GET['lon'];
$city = $_GET['city'];

if (!empty($lat) && !empty($lon)) {
	$url = "http://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}";
	$djson = file_get_contents($url);
	echo $djson;
} elseif (!empty($city)) {
	$url = "http://api.openweathermap.org/data/2.5/weather?q={$city}";
	$djson = file_get_contents($url);
	echo $djson;
} else {
	$query = @unserialize(file_get_contents('http://ip-api.com/php/'.$ip));
	if($query && $query['status'] == 'success') {
	  $lat = $query['lat'];
	  $lon = $query['lon'];
	
	  $url = "http://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}";
	  $djson = file_get_contents($url);
	  echo $djson;
	
	} else {
	  $url = "http://api.openweathermap.org/data/2.5/weather?q=Paris";
	  $djson = file_get_contents($url);
	  echo $djson;
	}
}
?>
