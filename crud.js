var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}


function readFormData() {
    var formData = {};
    formData["vehicle"] = document.getElementById("vehicle").value;
    formData["course"] = document.getElementById("course").value;
    formData["class"] = document.getElementById("class").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("vehicleSelect").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.vehicle;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.course;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.class;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("vehicle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("course").value = selectedRow.cells[1].innerHTML;
    document.getElementById("class").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.vehicle;
    selectedRow.cells[1].innerHTML = formData.course;
    selectedRow.cells[2].innerHTML = formData.class;
}


function onDelete(td) {
    if (confirm('Do you want to remove this?')) {
        row = td.parentElement.parentElement;
        document.getElementById('vehicleSelect').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("vehicle").value = '';
    document.getElementById("course").value = '';
    document.getElementById("class").value = '';
    selectedRow = null;
}