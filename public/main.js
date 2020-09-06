$.ajax({
    type: "GET",
    url: "https://tda123.herokuapp.com/users",
    dataType: "json",
    success: function (response) {
       hienThiuser(response);
       console.log(response)
    }
});
function hienThiuser (arr) {
    for (let i = 0 ; i < arr.length ; i ++) {
        $("tbody").append(`<tr class="text-center bg-info"  id="tr-${arr[i].id}">
        <td>${arr[i].name}</td>
        <td>${arr[i].birthday}</td>
        <td>${arr[i].phone}</td>
        <td>${arr[i].email}</td>
        <td><a href="edit.html?id=${arr[i].id}" class="text-warning">Chỉnh sửa <i class="fa fa-edit"></i></a> | <a
                href="javascript:void(0)" class="text-danger" onclick="confirmDelete(${arr[i].id})"><i
                    class="fa fa-trash-alt"></i> Xóa</a></td>
    </tr>`)
    }
}
function createUser(id) {
    $.ajax({
        type: "POST",
        url: "https://tda123.herokuapp.com/users",
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
        url: `https://tda123.herokuapp.com/users/${id}`,
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
function saveUser() {
let vt = window.location.href.indexOf("=");
let id = window.location.href.slice(vt + 1);
upDateuser(id);
}

function confirmDelete(id) {
    $("#exampleModal").modal("show");
    $('#confirm-delete').click(function () {
        deleteUser(id);
        $("#exampleModal").modal("hide");
    });
  }
  
function deleteUser(id) {
    $.ajax({
        type: "DELETE",
        url: `https://tda123.herokuapp.com/users/${id}`,
        dataType: "json",
        success: function () {
            $(`#tr-${id}`).remove();
        },
    });
}
