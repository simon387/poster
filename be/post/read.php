<?php
include_once '../config/database.php';
include_once '../models/post.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);
$stmt = $post->read($_GET["id"]);
$num = $stmt->rowCount();

if ($num > 0) {
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	extract($row);
	echo "<XMP>" . $text . "</XMP>";
	http_response_code(200);
} else {
	http_response_code(404);
	echo json_encode(
		array("message" => "No Post found.")
	);
}
