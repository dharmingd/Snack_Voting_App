<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	include_once("../config/database.php");
	include_once("../classes/userVote.php");

	$database = new Database();
	$db = $database->getConnection();
	$userVote = new UserVote($db);	
	$userVote->user_name =  isset($_GET['user_name']) ? $_GET['user_name'] : die();
	$result = $userVote->getData();
	$numRows = $result->rowCount();
	if($numRows>0){
		$userVote_array = array();
		$row = $result->fetch(PDO::FETCH_ASSOC);
		extract($row);
		$userVote_item = array(
										"UserName"=>$UserName,
										"FruitName"=>$FruitName
								);

		array_push($userVote_array, $userVote_item);

		echo json_encode($userVote_array);

	}else{
		echo json_encode(array("message"=>"No Data Found!"));
	}
?>