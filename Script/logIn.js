let email = document.getElementById("email");
let password = document.getElementById("password");
let userSignInBtn = document.getElementById("signin-Btn");

userSignInBtn.addEventListener("click", loginUser);

let dataArr = [];
async function loginUser(e) {
  e.preventDefault();
  const obj = {
    email: email.value,
    password: password.value,
  };
  console.log(obj);
  // const loginReq = fetch(`https://gents-hub.onrender.com/users`, {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(obj),
  // })
  try {
    let res = await fetch(`https://gents-hub.onrender.com/users`);
    let data = await res.json();
    //    console.log(data);
    data.forEach((item) => {
      let obj = {
        email: item.email,
        password: item.password,
      };
      dataArr.push(obj);
    });
    console.log(dataArr);
    let load = false;
    for (let i = 0; i < dataArr.length; i++) {
        let count=0;
      for (let el in dataArr[i]) {
        for (let key in obj) {
          if (obj[key] === dataArr[i][el]) {
            count++;
          }
        }
      }
      if(count==2){
        load = true;
        break;
      }
    }
    if (load) {
      window.location.assign("#");
      alert(" Signed In Successfully!");
    } else {
      alert("Wrong Credentials,login failed!");
    }
  } catch (error) {
    console.log(error);
  }
}

function create() {
  window.location.assign("signUp.html");
}
function admin() {
  window.location.assign("#");
}
