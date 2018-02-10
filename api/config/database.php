<?php
	
class Database{
	
	//Following parameters are as per your server configuration
	private $host = "#####";
	private $db_name = "#####";
	private $username = "#####";
	private $password = "#####";
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
