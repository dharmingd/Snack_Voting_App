<?php

class FruitVoteCount{
	
	private $connection;
	private $table = "fruit_vote_count";

	public $fruit_name;
	public $vote_count;

	public function __construct($db){
		$this->connection = $db;
	}

	public function getData(){

		$query = "SELECT * FROM `$this->table`";
		$result = $this->connection->prepare($query);
		$result->execute();
		return $result;
	}

	public function updateData(){

	   	$query = "UPDATE `$this->table` SET VoteCount = :VoteCount WHERE FruitName = :FruitName";
	    $result = $this->connection->prepare($query);
		$result->bindParam(':VoteCount', $this->vote_count);
		$result->bindParam(':FruitName', $this->fruit_name);		

		if($result->execute()){
			return true;
		}
		else{
			return false;
		}

	}

}
	

?>