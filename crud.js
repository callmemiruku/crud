function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == null || username == "") {
        alert("Please enter Username")
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter Password")
        return false;
    }
    alert("Welcome to Login")
}

let userSelectd = null;

function Read() {
    let data = {};
    data["fname"] = document.getElementById("fname").value;
    data["lname"] = document.getElementById("lname").value;
    data["age"] = document.getElementById("age").value;
    data["tel"] = document.getElementById("tel").value;
    data["mail"] = document.getElementById("mail").value;
    data["add"] = document.getElementById("add").value;
    return data;
}

function Create(data) {
    let table = document.getElementById("tblcontact") .getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tel;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mail;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.add;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onclick="Edit(this)"><button><i class="fa fa-eraser"></i></button></a>`;

    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onclick="Delete(this)"><button><i class="fa fa-trash"></i></button></a>`;
}

function Edit(td) {
    modal.classList.add("active");
    userSelectd = td.parentElement.parentElement;
    document.getElementById("fname").value = userSelectd.cells[0].innerHTML;
    document.getElementById("lname").value = userSelectd.cells[1].innerHTML;
    document.getElementById("age").value = userSelectd.cells[2].innerHTML;
    document.getElementById("tel").value = userSelectd.cells[3].innerHTML;
    document.getElementById("mail").value = userSelectd.cells[4].innerHTML;
    document.getElementById("add").value = userSelectd.cells[5].innerHTML;
}

function Update(formData) {
    userSelectd.cells[0].innerHTML = formData.fname;
    userSelectd.cells[1].innerHTML = formData.lname;
    userSelectd.cells[2].innerHTML = formData.age;
    userSelectd.cells[3].innerHTML = formData.tel;
    userSelectd.cells[4].innerHTML = formData.mail;
    userSelectd.cells[5].innerHTML = formData.add;
}

function Delete(td) {
    if (confirm('Do you want to delete the data?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tblcontact").deleteRow(row.rowIndex);
        ClearForm();
    }
}

function FormSubmit() {
    let formData = Read();

    if (userSelectd == null) {
        Create(formData);
    }
    else {
        Update(formData);
    }
    ClearForm();
}

function ClearForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("add").value = "";

    userSelectd = null;
}

var addBtn = document.querySelector("#add-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-icon")
addBtn.onclick = function() {
  modal.classList.add("active");
}
closeBtn.addEventListener("click",()=>{
  modal.classList.remove("active");
}) 