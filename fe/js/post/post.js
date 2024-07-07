$(document).ready(function () {
	$('#dataTablePost').DataTable({
		processing: true,
		serverSide: true,
		ajax: contextPath + "be/post/readAll.php",
		columnDefs: [
			{"width": "1%", orderable: true, targets: [0]},
			{"width": "10%", orderable: false, targets: [1]},
			{"width": "10%", orderable: false, targets: [2]},
			{"width": "70%", orderable: false, targets: [3]}
		],
		aaSorting: [[ 0, "desc" ]],
	});
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

function openInNewWindow(id) {
	const text = document.getElementById("xmp-" + id).textContent;
	const url = extractFirstUrl(text);
	if (url) {
		window.open(
			url,
			'_blank'
		);
	} else {
		alert("No valid url found!")
	}
}

function extractFirstUrl(text) {
	const urlPattern = /((https?:\/\/|www\.)[^\s\/$.?#].\S*)/i;
	const match = text.match(urlPattern);
	if (match) {
		// Add "http://" if the URL starts with "www."
		let url = match[0];
		if (url.startsWith('www.')) {
			url = 'https://' + url;
		}
		return url;
	}
	return null;
}

function viewRaw(id) {
	window.open(
		contextPath + "be/post/read.php?id=" + id,
		'_blank'
	);
}

function copyToClipboard(id) {
	const copyText = document.getElementById("xmp-" + id);
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); /* For mobile devices */
	/* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.textContent).then(r => {return r});
	alert("Text copied to clipboard!");
}

function addNewPost(text = "") {
	if ("" === text) {
		text = document.getElementById("text-modal-input").value;
	}
	if ("" === text) {
		alert("No text entered!");
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

function deleteById(...ids) {
	blockScreen();
	for (let id of ids) {
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
}

function addNewFile() {
	const formData = new FormData();
	const files = $('#file')[0].files[0];
	if (undefined === files) {
		return;
	}
	blockScreen();
	formData.append('file', files);
	$.ajax({
		url: 'uploadfile.php',
		type: 'post',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response !== 0) {
				$("#uploadModal").modal().hide();
				addNewPost(window.location.href + "upload/" + files.name)
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