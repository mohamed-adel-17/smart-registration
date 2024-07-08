// all inputs
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");



var signUpBtn = document.getElementById("signUp");

let users ;


if(localStorage.getItem('users') != null){
    users = JSON.parse(localStorage.getItem('users'));
}else {
    users = [];
}


function signUp() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    document.getElementById("message").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
  } else {
    var user = {
      name: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    };
    users.push(user)
    location.href = '../login.html';
    localStorage.setItem('users',JSON.stringify(users))
  }
}

document.getElementById('signUp').addEventListener('click',function(){
  signUp()
})


