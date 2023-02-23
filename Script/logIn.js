let email = document.getElementById("email");
let password = document.getElementById("password");
let userSignInBtn = document.getElementById("signin-Btn");

userSignInBtn.addEventListener("click", loginUser);

function loginUser() {
    const obj = {
      email: email.value,
      password: password.value,
    };

    const loginReq = fetch(`https://gents-hub.onrender.com/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((res)=>{
        console.log(res);
    }).catch((error)=>{
        console.log(error);
    })
  }
