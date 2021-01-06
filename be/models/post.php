<?php

class Post
{
	private $conn;
	private $table_name = "post";
	public $id;
	public $timestamp;
	public $text;

	public function __construct($db)
	{
		$this->conn = $db;
	}

	function create($text_)
	{
		$query = "INSERT INTO " . $this->table_name . " (text) VALUES (:text)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":text", $text_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

	function readAll()
	{
		$query = "select p.id, p.timestamp, p.text from ". $this->table_name . " p  order by p.timestamp desc";
		$stmt = $this->conn->prepare($query);
		$stmt->execute();
		return $stmt;
	}

	function deleteAll()
	{
		$query = "TRUNCATE TABLE " . $this->table_name;
		$stmt = $this->conn->prepare($query);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}
}