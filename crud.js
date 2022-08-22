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
    formData["Vehicles"] = document.getElementById("Vehicles").value;
    formData["Course"] = document.getElementById("Course").value;
    formData["Class"] = document.getElementById("Class").value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("menuSelect").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Vehicles;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Course;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Class;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}


function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Vehicle").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Course").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Class").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Vehicles;
    selectedRow.cells[1].innerHTML = formData.Course;
    selectedRow.cells[2].innerHTML = formData.Class;
}


function onDelete(td) {
    if (confirm('Do you want to remove this?')) {
        row = td.parentElement.parentElement;
        document.getElementById('menuSelect').deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("Vehicle").value = '';
    document.getElementById("Course").value = '';
    document.getElementById("Class").value = '';
    selectedRow = null;
}

