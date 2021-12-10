<?php

include('config.php');

class Database
{
	public $conn;

	public function getConnection(): ?PDO
	{
		$this->conn = null;
		try {
			$this->conn = new PDO("mysql:host=" . Config::$db_host . ";dbname=" . Config::$db_name, Config::$db_username, Config::$db_password);
			$this->conn->exec("set names utf8");
			if (!empty($db_statement_0)) {
				$this->conn->exec($db_statement_0);
			}
		} catch (PDOException $exception) {
			echo "Connection error: " . $exception->getMessage();
		}
		return $this->conn;
	}
}