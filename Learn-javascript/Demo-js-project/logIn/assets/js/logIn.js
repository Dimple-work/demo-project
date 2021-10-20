function signIn() {
	let userEmail = document.getElementById("userEmail").value;
	let userPassword = document.getElementById("userPassword").value;
  let getUserdata = JSON.parse(localStorage.getItem('Data'));
  let currentUser = getUserdata.filter((user) => user.email === userEmail && user.password === userPassword)[0];
  console.log(currentUser);
  let userDetail= localStorage.setItem('detail',JSON.stringify(currentUser));
  console.log(userDetail);
}