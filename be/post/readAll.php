<?php
include_once '../config/config.php';
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
			return
				"<a onclick='openInNewWindow(" . $d . ")' class='btn btn-info btn-circle' title='Open in new window'><i class='fas fa-link'></i></a> " .
				"<a onclick='copyToClipboard(" . $d . ")' class='btn btn-info btn-circle' title='Copy to clipboard'><i class='fas fa-clipboard'></i></a> " .
				"<a onclick='viewRaw(" . $d . ")' class='btn btn-info btn-circle' title='View raw'><i class='fas fa-eye'></i></a> ";
		}
	),
	array(
		'db' => 'text',
		'dt' => 3,
		'formatter' => function ($d, $row) {
			return "<pre id='xmp-" . $row[0] . "'>" . htmlspecialchars($d, ENT_QUOTES, 'UTF-8') . "</pre>";
		}
	),
);
// Include SQL query processing class
require '../models/SSP.php';
// Output data as json format
echo json_encode(
	SSP::complex($_GET, $dbDetails, $table, $primaryKey, $columns, null, "deleted = 0")
);
