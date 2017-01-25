<?php
  require_once($_SERVER["DOCUMENT_ROOT"].'/../config/db.php');
  
  $attributes = array_filter(array(
		'host'   => $db['host'], 
		'port'   => $db['port'], 
		'dbname' => $db['name']
	));
	
	if($db['type'] == 'mysql') $attributes['charset'] = 'utf8';
	
	$dsn = $db['type'] . ':' . implode(';', array_map(function($v, $k){ return $k . '=' . $v; }, $attributes, array_keys($attributes)));
  
  $conn = new PDO(
    $dsn,
    $db['user'], 
    $db['pass'], 
    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")
  );
  
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>