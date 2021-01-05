
$(document).ready(function () {

	getDatatableDataBySupplierAndPeriod($(this).attr("data-text"), period["id"]);
});



const dataTablePost = $('#dataTablePost').DataTable({
	paging: true,
	searching: true,
	autoWidth: false,
	columnDefs: [
		{"width": "10%", orderable: false, targets: [0]},
		{"width": "10%", orderable: false, targets: [1]},
		{"width": "80%", orderable: false, targets: [2]},
	],
	aaSorting: [],
});

function getSuppliers() {
	$.ajax({
		type: 'GET',
		url: rest + "supplier/readAll.php",
		processData: false,
		contentType: false,
		success: function (data) {
			const array = JSON.parse(data).list;
			let innerHTML = "";
			for (let i = 1; i < array.length; i++) {
				let active = "";
				if (i === 1) {
					active = "active";
					document.getElementById("supplier-selected").innerHTML = array[i]["name"].toUpperCase();
				}
				innerHTML += '<li class="page-item ' + active + '" data-text="' + array[i]["id"] +
					'"><a class="page-link" href="#">' + array[i]["name"].toUpperCase() + '</a></li>';
			}

			document.getElementById("main-paginator").innerHTML = innerHTML;

			$(".page-item").on("click", function () {
				removeActiveClassFromSupplier();
				$(this).addClass('active');
				document.getElementById("supplier-selected").innerHTML = this.innerText;
				getDatatableDataBySupplierAndPeriod($(this).attr("data-text"), period["id"]);
			});
		}
	});
}

function removeActiveClassFromSupplier() {
	const elems = document.querySelectorAll(".page-item");
	[].forEach.call(elems, function (el) {
		el.classList.remove("active");
	});
}

function getDatatableDataBySupplierAndPeriod(supplierID, periodID) {
	blockScreen();
	$.ajax({
		type: "GET",
		url: rest + "product/read.php?supplier_id=" + supplierID + "&period_id=" + periodID,
		success: function (data) {
			renderTableDashboard(dataTableDashboard, data);
		},
		error: function () {
			console.clear();
			unblockScreen();
			dataTableDashboard.clear();
			dataTableDashboard.draw();
		}
	});
}

function renderTableDashboard(dataTable, data, isFromSearch = false) {
	dataTable.clear();
	const array = isFromSearch ? data.list : JSON.parse(data).list;
	const disabledDeposit = user["role"] === "admin" ? "" : "disabled";
	const disabledOf0 = user["role"] === "comarea" ? "disabled" : "";
	const disabledOf1 = user["role"] === "placa" ? "disabled" : "";
	$.each(array, function (ind, o) {
		const id = o["id"];
		const name = isFromSearch ? o["supplier"].toUpperCase() + " - <strong>" + o["name"] + "</strong>" : o["name"];
		const unit = null === o["unit"] ? "" : o["unit"];
		const note = null === o["note"] ? "" : o["note"];
		const deposit = null === o["deposit"] ? "" : o["deposit"];
		const outflow0 = null === o["outflow0"] ? "" : o["outflow0"];
		const outflow1 = null === o["outflow1"] ? "" : o["outflow1"];
		const left = calcFlow(deposit, outflow0, outflow1);
		const lastOperation = null === o["lastOperation"] ? "" : o["lastOperation"];
		dataTable.row.add([
			name,
			unit,
			note,
			'<input ' + disabledDeposit + ' onchange="updateProduct(' + id + ', 0)" type="number" min="0" value="' + deposit + '" class="form-control" id="deposit-' + id + '">',
			'<input ' + disabledOf0 + ' onchange="updateProduct(' + id + ', 1)" type="number" min="0" value="' + outflow0 + '" class="form-control" id="outflow0-' + id + '">',
			'<input ' + disabledOf1 + ' onchange="updateProduct(' + id + ', 2)" type="number" min="0" value="' + outflow1 + '" class="form-control" id="outflow1-' + id + '">',
			'<input disabled type="number" value="' + left + '" class="form-control" id="left-' + id + '">',
			'<div id="lastOperation-' + id + '">' + lastOperation + '</div>',
		]);
	});
	dataTable.draw();
	unblockScreen();
}
