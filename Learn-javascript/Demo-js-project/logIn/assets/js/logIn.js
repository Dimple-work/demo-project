function signIn() {
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
  let getUserdata = JSON.parse(atob(localStorage.getItem('Data')));
  let currentUser = getUserdata.filter((user) => user.email === userEmail)[0];
  if(!currentUser) 
    alert('user not registered')
  else {
    if(currentUser.password !== userPassword)
      alert('invalid password');
    else {
      window.location.href = '../userdetail/userdetail.html';
      alert('Successfully logged in');
    }
  } 
  localStorage.setItem('currentUser', btoa(JSON.stringify(currentUser)));
}