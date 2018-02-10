<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	include_once("../config/database.php");
	include_once("../classes/userVote.php");

	$database = new Database();
	$db = $database->getConnection();

	$userVote = new UserVote($db);

	$userVote->user_name =  isset($_GET['user_name']) ? $_GET['user_name'] : die();
	$userVote->fruit_name =  isset($_GET['fruit_name']) ? $_GET['fruit_name'] : die();


	if($userVote->updateData()){
		echo json_encode(array("message"=>"Update Successful!"));
	}
	else{
		echo json_encode(array("message"=>"Update Unsuccessful!"));
	}	


?>