$(document).ready(function () {
    console.log("aaa");
    $('#login').submit(function (event) {
        event.preventDefault();
        console.log("aaa");
        var formData = {
            email: $('#email').val(), // Assuming you have an input field with the id 'name'
            password: $('#password').val(), // Assuming you have an input field with the id 'name'  
        };
        console.log(formData);
        $.post('http://localhost:3000/login', formData, res => {
            window.location.href = "/assets/end.html";

        });

    });
});
