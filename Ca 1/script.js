let borrows =
JSON.parse(localStorage.getItem("borrows")) || [];

let editingIndex = -1;

renderTable();

function openModal(){
    document.getElementById("modal").style.display="block";
}

function closeModal(){
    document.getElementById("modal").style.display="none";
    document.getElementById("borrowForm").reset();
    editingIndex=-1;
}

document
.getElementById("borrowForm")
.addEventListener("submit",saveBorrow);

function saveBorrow(e){

    e.preventDefault();

    let borrowId =
    document.getElementById("borrowId").value.trim();

    let borrowerName =
    document.getElementById("borrowerName").value.trim();

    let bookId =
    document.getElementById("bookId").value.trim();

    let category =
    document.getElementById("category").value;

    let borrowDate =
    document.getElementById("borrowDate").value;

    let dueDate =
    document.getElementById("dueDate").value;

    let phone =
    document.getElementById("phone").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let status =
    document.getElementById("status").value;

    let note =
    document.getElementById("note").value.trim();

    let regexBorrow =
    /^PM-\d{4}$/;

    let regexBook =
    /^BK\d{5}$/;

    let regexPhone =
    /^(03|05|07|08|09)\d{8}$/;

    let regexEmail =
    /^[A-Za-z0-9._%+-]+@library\.vn$/;

    if(!regexBorrow.test(borrowId)){
        alert("Mã phiếu sai");
        return;
    }

    if(!regexBook.test(bookId)){
        alert("Mã sách sai");
        return;
    }

    if(!regexPhone.test(phone)){
        alert("SĐT sai");
        return;
    }

    if(!regexEmail.test(email)){
        alert("Email sai");
        return;
    }

    if(editingIndex==-1){

        let exists =
        borrows.find(
            x=>x.borrowId===borrowId
        );

        if(exists){
            alert("Trùng mã phiếu");
            return;
        }
    }

    let borrow={
        borrowId,
        borrowerName,
        bookId,
        category,
        borrowDate,
        dueDate,
        phone,
        email,
        status,
        note
    };

    if(editingIndex==-1){
        borrows.push(borrow);
    }
    else{
        borrows[editingIndex]=borrow;
    }

    localStorage.setItem(
        "borrows",
        JSON.stringify(borrows)
    );

    renderTable();

    closeModal();
}

function renderTable(){

    let html="";

    borrows.forEach((b,index)=>{

        html+=`
        <tr>

            <td>${b.borrowId}</td>
            <td>${b.borrowerName}</td>
            <td>${b.bookId}</td>
            <td>${b.category}</td>
            <td>${b.status}</td>

            <td>

            <button
            class="edit-btn"
            onclick="editBorrow(${index})">
            Sửa
            </button>

            <button
            class="delete-btn"
            onclick="deleteBorrow(${index})">
            Xóa
            </button>

            </td>

        </tr>
        `;
    });

    document.getElementById(
        "borrowTable"
    ).innerHTML=html;

    updateStatistics();
}

function deleteBorrow(index){

    if(confirm("Bạn có chắc muốn xóa?")){

        borrows.splice(index,1);

        localStorage.setItem(
            "borrows",
            JSON.stringify(borrows)
        );

        renderTable();
    }
}

function editBorrow(index){

    let b = borrows[index];

    document.getElementById("borrowId").value =
    b.borrowId;

    document.getElementById("borrowerName").value =
    b.borrowerName;

    document.getElementById("bookId").value =
    b.bookId;

    document.getElementById("category").value =
    b.category;

    document.getElementById("borrowDate").value =
    b.borrowDate;

    document.getElementById("dueDate").value =
    b.dueDate;

    document.getElementById("phone").value =
    b.phone;

    document.getElementById("email").value =
    b.email;

    document.getElementById("status").value =
    b.status;

    document.getElementById("note").value =
    b.note;

    editingIndex=index;

    openModal();
}

function updateStatistics(){

    document.getElementById("total")
    .innerText=borrows.length;

    document.getElementById("borrowing")
    .innerText=
    borrows.filter(
        x=>x.status==="Đang mượn"
    ).length;

    document.getElementById("returned")
    .innerText=
    borrows.filter(
        x=>x.status==="Đã trả"
    ).length;
}