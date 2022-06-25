<?php

// file name
$filename = $_FILES['file']['name'];

// Location
$location = 'upload/' . $filename;

// file extension
$file_extension = pathinfo($location, PATHINFO_EXTENSION);
$file_extension = strtolower($file_extension);

// Valid file extensions
$image_ext = array("jpg", "png", "jpeg", "gif", "svg", "txt", "java", "zip", "rar", "log", "xml", "pdf", "doc", "docx", "xlsx");

$response = 0;
if (in_array($file_extension, $image_ext)) {
	// Upload file
	if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
		$response = $location;
	}
}

echo $response;