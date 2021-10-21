function signIn() {
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
  let getUserdata = atob(localStorage.getItem('Data'));
  let currentUser = getUserdata.filter((user) => user.email === userEmail)[0];
  debugger
  if(currentUser.password !== userPassword){
    alert('invalid password');
  }
  else if(currentUser == undefined){
    alert('user not registered')
  }
  else{
    alert('Successfully logged in');
  }
  localStorage.setItem('currentUser', btoa(currentUser));

}