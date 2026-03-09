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

     username = sessionStorage.setItem("username", usernameInput.value);
     password = sessionStorage.setItem("password", passwordInput.value);


    // const userFound = users.find(user => user.username === username &&
    //     user.password === passwordInput );

        if(true){

            console.log("we are here");
            toolbar.removeAttribute("disabled");
            console.log("Welcome " + username);
            window.location.assign("../index.html");
        } else {
            alert("Login failed");
        }
});