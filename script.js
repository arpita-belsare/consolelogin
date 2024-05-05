const submit = document.getElementById('submit');
const username = document.getElementById('username');
const password = document.getElementById('password');

   // requirement 
// 
submit.addEventListener('click', function() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  if (username.value === "" || password.value === "") {
    alert("Please fill all fields");
    return;
  }

  if (!username.value.includes("@") || password.value.length < 8) {
    alert(!username.value.includes("@") ? "Username must contain '@'" : "Password must have at least 6 characters");
    return;
  }
  // console  the val at the browser
  console.log("username :",username.value);
console.log("Password :",password.value);
})


