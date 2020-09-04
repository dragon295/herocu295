$.ajax({
    type: "GET",
    url: "http://localhost:3000/users",
    dataType: "json",
    success: function (response) {
       hienThiuser(response);
       console.log(response)
    }
});
function hienThiuser (arr) {
    for (let i = 0 ; i < arr.length ; i ++) {
        $("tbody").append(`<tr class="text-center bg-info">
        <td>${arr[i].name}</td>
        <td>${arr[i].birthday}</td>
        <td>${arr[i].phone}</td>
        <td>${arr[i].email}</td>
        <td><a href="edit.html?id=${arr[i].id}" class="text-warning">Chỉnh sửa <i class="fa fa-edit"></i></a> | <a
                href="javascript:void(0)" class="text-danger" onclick="deleteUser(1, this)"><i
                    class="fa fa-trash-alt"></i> Xóa</a></td>
    </tr>`)
    }
}
function createUser() {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: {
            name: $("#name").val(),
            birthday: $("#birthday").val(),
            phone: $("#phone").val(),
            email: $("#email").val()
        },
        dataType: "json",
        success: function (response) {
            window.location.href= "/"
        }
    });
}
function upDateuser(id) {
    $.ajax({
        type: "PATCH",
        url: `http://localhost:3000/users/${id}`,
        data: {
            name: $("#name").val(),
            birthday: $("#birthday").val(),
            phone: $("#phone").val(),
            email: $("#email").val()
        },
        dataType: "json",
        success: function (response) {
            window.location.href= "/"
        }
    });
}
function saveUser () {
let vt = window.location.href.indexOf("=");
let id = window.location.href.slice(vt + 1);
upDateuser(id);
}





