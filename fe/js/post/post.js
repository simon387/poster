$(document).ready(function () {
	getDatatableData();
	$("#btn-add-new-post").on("click", function () {
		addNewPost();
	});
	$("#btn-add-new-file").on("click", function () {
		$("#uploadModal").modal().show();
	});
	$('#btn_upload').click(function () {
		addNewFile();
	});
});

const dataTablePost = $('#dataTablePost').DataTable({
	bLengthChange: false,
	paging: true,
	searching: true,
	autoWidth: false,
	scrollX: true,
	lengthChange: true,
	columnDefs: [
		{"width": "1%", orderable: false, targets: [0]},
		{"width": "10%", orderable: false, targets: [1]},
		{"width": "10%", orderable: false, targets: [2]},
		{"width": "79%", orderable: false, targets: [3]}
	],
	aaSorting: [],
});

function getDatatableData() {
	blockScreen();
	$.ajax({
		type: "GET",
		url: contextPath + "be/post/readAll.php",
		success: function (data) {
			renderTable(data);
		},
		error: function () {
			dataTablePost.clear();
			dataTablePost.draw();
		},
		complete: function () {
			unblockScreen();
		},
	});
}

function renderTable(data) {
	dataTablePost.clear();
	const array = JSON.parse(data).list;
	$.each(array, function (ind, o) {
		const id = o["id"];
		const timestamp = o["timestamp"];
		const text = o["text"];
		dataTablePost.row.add([
			id,
			timestamp,
			"<a onclick='showFullScreen(" + id + ")' class='btn btn-info btn-circle' title='View raw'><i class='fas fa-info-circle'></i></a> " +
			"<a onclick='copyToClipboard(" + id + ")' class='btn btn-info btn-circle' title='Copy to clipboard'><i class='fas fa-play-circle'></i></a>",
			"<XMP id='xmp-" + id + "'>" + text + "</XMP>",
		]);
	});
	dataTablePost.draw();
	unblockScreen();
}

function showFullScreen(id) {
	goToUrl(contextPath + "be/post/read.php?id=" + id);
}

function copyToClipboard(id) {
	const copyText = document.getElementById("xmp-" + id);
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); /* For mobile devices */
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.textContent);
}

function addNewPost(text = "") {
	if ("" === text) {
		text = document.getElementById("text-modal-input").value;
	}
	if ("" === text) {
		return;
	}
	document.getElementById("text-modal-input").value = "";
	blockScreen();
	$.ajax({
		type: "PUT",
		url: contextPath + "be/post/create.php",
		contentType: "application/json; charset=utf-8",
		processData: false,
		dataType: "json",
		data: JSON.stringify({
			text,
		}),
		success: function () {
			location.reload();
		},
		complete: function () {
			unblockScreen();
		},
	});
}

function deleteAll() {
	blockScreen();
	$.ajax({
		type: "DELETE",
		url: contextPath + "be/post/deleteAll.php",
		processData: false,
		success: function () {
			location.reload();
		},
		complete: function () {
			unblockScreen();
		},
	});
}

function deleteById(id) {
	blockScreen();
	$.ajax({
		type: "DELETE",
		url: contextPath + "be/post/delete.php?id=" + id,
		processData: false,
		success: function () {
			location.reload();
		},
		complete: function () {
			unblockScreen();
		},
	});
}

function addNewFile() {
	blockScreen();
	const formData = new FormData();
	const files = $('#file')[0].files[0];
	formData.append('file', files);
	$.ajax({
		url: 'ajaxfile.php',
		type: 'post',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response !== 0) {
				$("#uploadModal").modal().hide();
				addNewPost(window.location.href + "upload/" + files.name)
				// preview file disabilitata
				// $('#preview').append("<img src='" + response + "' width='100' height='100' style='display: inline-block;'>");
			} else {
				alert('File not uploaded');
				console.log("File not uploaded, checks file extensions or other things")
			}
		},
		complete: function () {
			unblockScreen();
		},
	});
}