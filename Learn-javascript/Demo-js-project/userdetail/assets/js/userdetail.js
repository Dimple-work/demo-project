let getUser=atob(localStorage.getItem('currentUser'));
document.getElementById("userName").innerHTML=getUser.name;
document.getElementById("userEmail").innerHTML=getUser.email;
document.getElementById("userPassword").innerHTML=getUser.password;
document.getElementById("userPhone").innerHTML=getUser.phone;
