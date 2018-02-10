<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once("../config/database.php");
	include_once("../classes/userVote.php");
	$database = new Database();
	$db = $database->getConnection();
	$userVote = new UserVote($db);
	$userVote->user_name =  isset($_GET['user_name']) ? $_GET['user_name'] : die();
	if($userVote->addData()){
		echo json_encode(array("message"=>"User Added"));
	}
	else{
		echo json_encode(array("message"=>"Update Unsuccessful!"));
	}	


?>