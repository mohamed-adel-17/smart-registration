let username = localStorage.getItem('username')

document.getElementById('username').innerHTML = 'welcome ' + username;

document.getElementById('logOut').addEventListener('click', function(){
     localStorage.removeItem('username')
     location.href = '../login.html';
})