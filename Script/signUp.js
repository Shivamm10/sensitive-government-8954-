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

    let request=await fetch(`https://gents-hub.onrender.com/users`,{
        method: 'POST',
        headers:{
            "Content-type":'application/json'   
        },
        body : JSON.stringify(obj)
    })
    console.log(request);
  } catch (error) {
    console.log("error");
  }
}
