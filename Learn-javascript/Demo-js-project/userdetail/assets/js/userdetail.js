let getUser = localStorage.getItem('currentUser') && JSON.parse(atob(localStorage.getItem('currentUser')));
if(!localStorage.getItem('currentUser')) {
	window.location.href = "../logIn/login.html";
}
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
		localStorage.removeItem('currentUser');
		window.location.href = "../logIn/login.html";
	}


