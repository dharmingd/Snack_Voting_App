<?php


class UserVote{
	
	private $connection;
	private $table = "user_vote";

	public $user_name;
	public $fruit_name;

	public function __construct($db){
		$this->connection = $db;
	}

	public function getData(){
		$query = "SELECT * FROM `$this->table` WHERE `UserName` = '$this->user_name' ";
		$result = $this->connection->prepare($query);
		$result->execute();

		return $result;
	}

	public function updateData(){

	   	$query = "UPDATE `$this->table` SET FruitName = :FruitName WHERE UserName = :UserName";
	    $result = $this->connection->prepare($query);
		$result->bindParam(':UserName', $this->user_name);
		$result->bindParam(':FruitName', $this->fruit_name);		

		if($result->execute()){
			return true;
		}
		else{
			return false;
		}

	}

	public function addData(){

	   	$query = "INSERT into `$this->table` VALUES(:UserName, null)";
	    $result = $this->connection->prepare($query);
		$result->bindParam(':UserName', $this->user_name);

		if($result->execute()){
			return true;
		}
		else{
			return false;
		}

	}

}
	

?>