<?php
$f = fopen("changelog.txt", 'r');
$version = fgets($f);
fclose($f);
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>Poster</title>
	<link href="fe/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
	<link href="fe/css/sb-admin-2.min.css" rel="stylesheet">
	<link href="fe/css/spinner-overlay.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="fe/vendor/datatables/responsive.dataTables.min.css">
	<link href="fe/css/custom.css" rel="stylesheet">
	<link href="favicon.ico" rel="icon">
</head>
<body id="page-top">
<div id="wrapper">
	<div class="modal fade" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">File Upload</h5>
					<button class="close" type="button" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body">Insert the file to upload.</div>
				<div>
					<form method='post' enctype="multipart/form-data" style="padding: 1rem;">
						Select file : <input type='file' name='file' id='file' class='form-control'><br>
						<input type='button' class='btn btn-info' value='Upload' id='btn_upload'>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div id="content-wrapper" class="d-flex flex-column">
		<div id="content">
			<div class="container-fluid">
				<div class="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 class="h3 mb-0 text-gray-800 title">Poster - <?php echo $version ?></h1>
				</div>
				<div class="card shadow mb-4">
					<div class="card-header py-3">
						<div class="row form-group">
							<div class="col">
								<label for="text-modal-input">
									<button class="btn btn-primary btn-icon-split btn-sm" id="btn-add-new-post">
										<span class="icon text-white-50">
											<em class="fas fa-plus"></em>
										</span>
										<span class="text">Add one Post</span>
									</button>
									<button class="btn btn-secondary btn-icon-split btn-sm" id="btn-add-new-file">
										<span class="icon text-white-50">
											<em class="fas fa-plus"></em>
										</span>
										<span class="text">Add one File</span>
									</button>
								</label>
								<textarea type="text" class="form-control" id="text-modal-input" autocomplete="off"></textarea>
							</div>
						</div>
					</div>
					<div class="card-body">
						<div class="table-responsive">
							<table class="table table-bordered responsive table-striped" id="dataTablePost" aria-describedby="table">
								<thead>
								<tr>
									<th data-priority="3" scope="row" class="col" data-field="id">Id</th>
									<th data-priority="4" scope="row" class="col" data-field="timestamp">Timestamp</th>
									<th data-priority="2" scope="row" class="col" data-field="actions">Actions</th>
									<th data-priority="1" scope="row" class="col" data-field="text">Text</th>
								</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
				<nav aria-label="...">
					<ul id="main-paginator" class="pagination pagination-sm">
					</ul>
				</nav>
			</div>
		</div>
	</div>
</div>
<a class="scroll-to-top rounded" href="#page-top">
	<em class="fas fa-angle-up"></em>
</a>
<script src="fe/vendor/jquery/jquery.min.js"></script>
<script src="fe/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="fe/vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="fe/js/sb-admin-2.min.js"></script>
<script src="fe/vendor/datatables/jquery.dataTables.min.js"></script>
<script src="fe/vendor/datatables/dataTables.bootstrap4.min.js"></script>
<script src="fe/vendor/datatables/dataTables.colReorder.min.js"></script>
<script src="fe/vendor/datatables/dataTables.responsive.min.js"></script>
<script src="fe/js/custom.js"></script>
<script src="fe/js/post/post.js"></script>
<div class="loading" style="display:none;">Loading&#8230;</div>
</body>
</html>
