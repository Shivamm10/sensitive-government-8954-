let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let phone = document.getElementById("number");
let userSignUpBtn = document.getElementById("signUp-Btn");

userSignUpBtn.addEventListener("click", RegisterUser);

async function RegisterUser() {
  try {
    const obj = {
      firstname: firstName.value,
      lastname: lastName.value,
      email: email.value,
      password: password.value,
      number: phone.value,
    };
    if (
      firstName.value == "" ||
      lastName.value == "" ||
      email.value == "" ||
      password.value == "" ||
      number.value == ""
    ) {
      alert("Please fill out all required fields ");
    } else {
      let request = await fetch(`https://gents-hub.onrender.com/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      window.location.assign("logIn.html");
      alert("Congratulations! Your Account Created Sucessfully! Now SignIn for Explore.");
    }
  } catch (error) {
    console.log("error");
  }
}

function log(){
    window.location.assign("logIn.html");
}
