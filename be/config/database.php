
<?php

class Database
{
	private $host = "172.17.0.2"; //it's a locker instance
	private $db_name = "poster";
	private $username = "root"; //lol fake, is not the production one
	private $password = "root";
	public $conn;

	public function getConnection()
	{
		$this->conn = null;
		try {
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->exec("set names utf8");
			$this->conn->exec("SET GLOBAL time_zone='Europe/Madrid");
		} catch (PDOException $exception) {
			echo "Connection error: " . $exception->getMessage();
		}
		return $this->conn;
	}
}