$(document).ready(function () {
	$(document).on("keypress", '', function (e) {
		const code = e.keyCode || e.which;
		if (code === 13) {
			e.preventDefault();
			addNewPost();
		}
	});
	$("#btn-add-new-post").on("click", function () {
		addNewPost();
	});
	getDatatableData();
});

const dataTablePost = $('#dataTablePost').DataTable({
	bLengthChange: false,
	paging: true,
	searching: false,
	autoWidth: true,
	columnDefs: [
		{"width": "10%", orderable: false, targets: [0]},
		{"width": "10%", orderable: false, targets: [1]},
		{"width": "70%", orderable: false, targets: [2]},
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
			console.clear();
			unblockScreen();
			dataTablePost.clear();
			dataTablePost.draw();
		}
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
			text,
		]);
	});
	dataTablePost.draw();
	unblockScreen();
}

function addNewPost() {
	const text = document.getElementById("text-modal-input").value;
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
			unblockScreen();
		},
	});
}
