
<?php

class Database
{
	public $conn;

	public function getConnection()
	{
		$configs = include('config.php');
		$this->conn = null;
		try {
			$this->conn = new PDO("mysql:host=" . $configs::$host . ";dbname=" . $configs::$db_name, $configs::$username, $configs::$password);
			$this->conn->exec("set names utf8");
			$this->conn->exec("SET GLOBAL time_zone='Europe/Madrid");
		} catch (PDOException $exception) {
			echo "Connection error: " . $exception->getMessage();
		}
		return $this->conn;
	}
}