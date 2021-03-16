<?php
include_once '../config/database.php';
include_once '../models/post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);
$stmt = $post->readAll();
$num = $stmt->rowCount();

if ($num > 0) {
	$post_arr = array();
	$post_arr["list"] = array();

	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		extract($row);

		$post_item = array(
			"id" => $id,
			"timestamp" => $timestamp,
			"text" => $text,
		);

		array_push($post_arr["list"], $post_item);
	}

	http_response_code(200);
	echo json_encode($post_arr);
} else {
	http_response_code(200);
	echo json_encode(
		array("message" => "No Posts found.")
	);
}
