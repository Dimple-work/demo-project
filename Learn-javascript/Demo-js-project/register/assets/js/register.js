function signUp(){
	let userName = document.getElementById("userName").value;
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
	let userPhone = document.getElementById("userPhone").value;
  let user ={name:userName, email:userEmail, password:userPassword, phone:userPhone};
console.log("user details is", user);
localStorage.setItem('user', JSON.stringify(user));
localStorage.getItem('user');
let Users = JSON.parse(localStorage.getItem('Data') || '[]');
Users.push(user);
localStorage.setItem('Data',JSON.stringify(Users)); 
console.log(Users);
}