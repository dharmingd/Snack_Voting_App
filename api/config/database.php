<?php
	
class Database{

	private $host = "localhost";
	private $db_name = "id4695839_snack_voting_app";
	private $username = "id4695839_snack_voting_appuser";
	private $password = "snack_voting_appPassword";
	public $connection;

	public function getConnection(){

		$this->connection = null;

		try{
			$this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->connection->exec("set names utf8");
		}
		catch(PDOException $exception){
				echo "Error in Connection ".$exception->getMessage();
		}

		return $this->connection;
	}

}
?>