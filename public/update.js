
        const userId = getIdQueryParam();

        $(function () {
            renderContent()
        })

        function getIdQueryParam() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id');
        }

        function renderContent() {
            getUserByIdAPI(userId, function (user) {
                if (user) {
                    $('#name').val(user.name);
                    $('#birthYear').val(user.birthYear);
                    $('#email').val(user.email);
                    $('#phone').val(user.phone);
                } else {
                    $('#form').html('Học viên không tồn tại!');
                    $('#btn-save').hide();
                }
            })
        }

        function updateUser() {
            if (isValidData()) {
                const userInfo = {
                    name: $('#name').val(),
                    birthYear: $('#birthYear').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val()
                }

                updateUserAPI(userId, userInfo, '/');
            }
        }
    