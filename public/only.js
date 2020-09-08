 let vt = window.location.href.indexOf("=");
let id = window.location.href.slice(vt + 1);
 $.ajax({
    type: 'GET',
    url: 'https://tda123.herokuapp.com/users/' + id,
    dataType: 'json',
     success: function (dcm) {
             $("#name").val(dcm.name);
        $("#birthday").val(dcm.birthday);
        $("#email").val(dcm.email);
        $("#phone").val(dcm.phone);
        }
});

