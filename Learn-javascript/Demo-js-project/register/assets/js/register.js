function signUp(){
	let userName = document.getElementById("userName").value;
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
	let userPhone = document.getElementById("userPhone").value;
    let user ={name:userName, email:userEmail, password:userPassword, phone:userPhone};
    console.log("user details is", user);
    localStorage.setItem('user', btoa(JSON.stringify(user)));
    console.log(btoa(JSON.stringify(user)));
    let users = localStorage.getItem('Data') || [];
    debugger
    if(!users.length) {
	users.push(user);
	localStorage.setItem('Data', btoa(JSON.stringify(users)));
    }
    else {
	users = JSON.parse(atob(localStorage.getItem('Data')));
	users.push(user);
	console.log(users);
    }
    localStorage.setItem('Data', btoa(JSON.stringify(users)));
}