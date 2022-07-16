<?php
include_once '../config/database.php';
// Database connection info
$dbDetails = array(
	'host' => Config::$db_host,
	'user' => Config::$db_username,
	'pass' => Config::$db_password,
	'db' => Config::$db_name,
);
// mysql db table to use
$table = 'post';
// Table's primary key
$primaryKey = 'id';
// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database.
// The `dt` parameter represents the DataTables column identifier.
$columns = array(
	array('db' => 'id', 'dt' => 0),
	array('db' => 'timestamp', 'dt' => 1),
	array(
		'db' => 'id',
		'dt' => 2,
		'formatter' => function ($d, $row) {
			return "<a onclick='showFullScreen(" . $d . ")' class='btn btn-info btn-circle' title='View raw'><i class='fas fa-info-circle'></i></a> " .
				"<a onclick='copyToClipboard(" . $d . ")' class='btn btn-info btn-circle' title='Copy to clipboard'><i class='fas fa-play-circle'></i></a>";
		}
	),
	array(
		'db' => 'text',
		'dt' => 3,
		'formatter' => function ($d, $row) {
			return "<XMP id='xmp-" . $row[0] . "'>" . $d . "</XMP>";
		}
	),
);
// Include SQL query processing class
require '../models/ssp.class.php';
// Output data as json format
echo json_encode(
	SSP::complex($_GET, $dbDetails, $table, $primaryKey, $columns, null, "deleted = 0")
);
