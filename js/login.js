let users = [];
users = JSON.parse(localStorage.getItem("users"));

var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");


document.getElementById("logIn").addEventListener("click", function () {
  if (loginEmail.value == "" || loginPassword.value == "") {
    document.getElementById("logInMessage").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';
  } else {
    checkData();
  }
});

function checkData() {
  for (var i = 0; i < users.length; i++) {
    if (
      loginEmail.value == users[i].email &&
      loginPassword.value == users[i].password
    ) {
      let y = users[i].name;
      localStorage.setItem('username' , y)
      location.href = '../home.html';
      break;
    }else{
      document.getElementById("logInMessage").innerHTML =
      '<span class="text-danger m-3">You are not registered</span>';
    }
  }
}
