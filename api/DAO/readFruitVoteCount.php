<?php

	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
	include_once("../config/database.php");
	include_once("../classes/fruitVoteCount.php");
	$database = new Database();
	$db = $database->getConnection();
	$fruitVoteCount = new FruitVoteCount($db);
	$result = $fruitVoteCount->getData();
	$numRows = $result->rowCount();
	if($numRows>0){

		$fruitVoteCount_array = array();

		while($row = $result->fetch(PDO::FETCH_ASSOC)){
			extract($row);

			$fruitVoteCount_item = array(
										"FruitName"=>$FruitName,
										"VoteCount"=>(int)$VoteCount
									);

			array_push($fruitVoteCount_array, $fruitVoteCount_item);
		}

		echo json_encode($fruitVoteCount_array);



	}else{
		echo json_encode(array("message"=>"No Data Found!"));
	}



?>