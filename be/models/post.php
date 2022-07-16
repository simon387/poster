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

	function create($text_): bool
	{
		$query = "INSERT INTO " . $this->table_name . " (text) VALUES (:text)";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":text", $text_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

	function read($id_)
	{
		$query = "select p.text from " . $this->table_name . " p where p.id=:id_ and p.deleted=0 ";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":id_", $id_);

		$stmt->execute();
		return $stmt;
	}

	function deleteAll(): bool
	{
		$query = "update " . $this->table_name . " p set p.deleted=1 where p.deleted=0";
		$stmt = $this->conn->prepare($query);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}

	function delete($id_): bool
	{
		$query = "update " . $this->table_name . " p set p.deleted=1 where p.id=:id_";
		$stmt = $this->conn->prepare($query);

		$stmt->bindParam(":id_", $id_);

		if ($stmt->execute()) {
			return true;
		}
		return false;
	}
}