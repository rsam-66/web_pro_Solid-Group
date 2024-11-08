$(document).ready(function () {
    showSignUp();

    function showSignUp() {
        $("#signup-box").show();
        $("#signin-box").hide();
    }

    function showSignIn() {
        $("#signin-box").show();
        $("#signup-box").hide();
    }

    $("#signup-form").submit(function (event) {
        event.preventDefault();
        const username = $("#signup-username").val();
        const email = $("#signup-email").val();
        const password = $("#signup-password").val();

        if (username && email && password) {
            const userData = {
                username: username,
                email: email,
                password: password
            };

            if (!localStorage.getItem(username)) {
                localStorage.setItem(username, JSON.stringify(userData));
                alert("Sign Up successful! You can now sign in.");
                showSignIn();
            } else {
                alert("Username already exists. Please choose another one.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    });

    $("#signin-form").submit(function (event) {
        event.preventDefault();
        const username = $("#signin-username").val();
        const password = $("#signin-password").val();

        if (username && password) {
            const storedUserData = JSON.parse(localStorage.getItem(username));

            if (storedUserData && storedUserData.password === password) {
                alert("Sign In successful!");
                window.location.href="homepage.html";
            } else {
                alert("Sign In failed. Incorrect username or password.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    });
    
    window.showSignUp = showSignUp;
    window.showSignIn = showSignIn;
});
