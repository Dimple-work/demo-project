function signUp(){
	let userName = document.getElementById("userName").value;
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
	let userPhone = document.getElementById("userPhone").value;
  let user ={name:userName, email:userEmail, password:userPassword, phone:userPhone};
console.log("user details is", user);
debugger
localStorage.setItem('user', btoa(user));
atob(localStorage.getItem('user'));
let Users = atob(localStorage.getItem('Data') || '[]');
Users.push(user);
localStorage.setItem('Data',btoa(Users)); 
console.log(Users);
}