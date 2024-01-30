console.log("hello")
let pwd = document.querySelector('#password').value;
let confirmPwd = document.querySelector('#confirm-password').value;
let error = document.querySelector('.error');


if (pwd == "" && confirmPwd == "") {
    error.innerHTML = "*Password do not match";
} else if(pwd === confirmPwd){
    error.innerHTML = "";
};