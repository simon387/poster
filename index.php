<?php
?>

<!DOCTYPE html>
<html lang="es">
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
	<link href="fe/css/custom.css" rel="stylesheet">
	<link href="favicon.ico" rel="icon">
</head>
<body id="page-top">
<div id="wrapper">
	<div id="content-wrapper" class="d-flex flex-column">
		<div id="content">
			<div class="container-fluid">
				<div class="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 class="h3 mb-0 text-gray-800 title">Poster v1.1.3</h1>
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
								</label>
								<textarea type="text" class="form-control" id="text-modal-input" autocomplete="off"></textarea>
							</div>
						</div>
					</div>
					<div class="card-body">
						<div class="table-responsive">
							<table class="table table-bordered" id="dataTablePost" aria-describedby="table">
								<thead>
								<tr>
									<th scope="row" class="col" data-field="id">Id</th>
									<th scope="row" class="col" data-field="timestamp">Timestamp</th>
									<th scope="row" class="col" data-field="text">Text</th>
									<th scope="row" class="col" data-field="actions"></th>
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
<script src="fe/js/custom.js"></script>
<script src="fe/js/post/post.js"></script>

<div class="loading" style="display:none;">Loading&#8230;</div>

</body>
</html>
