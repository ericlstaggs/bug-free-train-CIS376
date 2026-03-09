const users = [
    { username: "estaggs", password: "nova123" },
    { username: "admin", password: "123" },
    { username: "bear", password: "lasagna" }
];


document.getElementById("loginbutton").addEventListener("click", function () {

    console.log("this should be the getting name and password");


    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");



    // const toolbar = document.getElementById("toolbar");

    const username = sessionStorage.setItem("username", usernameInput.value);
    const password = sessionStorage.setItem("password", passwordInput.value);


    const userFound = users.find(user => user.username === username &&
        user.password === passwordInput );

        if(password.value != null){
            toolbar.removeAttribute("disabled");
            console.log("Welcome " + username);
            window.location.href = "../index.html";
        } else {
            alert("Login failed");
        }
});