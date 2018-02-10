<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	include_once("../config/database.php");
	include_once("../classes/fruitVoteCount.php");

	$database = new Database();
	$db = $database->getConnection();

	$fruitVoteCount = new FruitVoteCount($db);
	$fruitVoteCount->fruit_name =  isset($_GET['fruit_name']) ? $_GET['fruit_name'] : die();
	
	$fruitVoteCount->vote_count =  isset($_GET['vote_count']) ? $_GET['vote_count'] : die();
	if($fruitVoteCount->updateData()){
		echo json_encode(array("message"=>"Success"));
	}
	else{
		echo json_encode(array("message"=>"Unsuccess"));
	}	


?>