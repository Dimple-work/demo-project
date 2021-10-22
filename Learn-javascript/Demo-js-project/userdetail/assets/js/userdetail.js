let getUser=JSON.parse(atob(localStorage.getItem('currentUser')));
document.getElementById("userName").innerHTML=getUser.name;
document.getElementById("userEmail").innerHTML=getUser.email;
document.getElementById("userPassword").innerHTML=getUser.password;
document.getElementById("userPhone").innerHTML=getUser.phone; 
function preventBack() { 
	 window.history.forward();
	 }  
  setTimeout("preventBack()", 0);  
  window.onunload = function () { null }; 
function signOut() {
	debugger
	window.location.href = "../logIn/login.html";
}
