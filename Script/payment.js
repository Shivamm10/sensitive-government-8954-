let name=document.getElementById("name");
let email=document.getElementById("email");
let number=document.getElementById("number");
let address=document.getElementById("address");
let city=document.getElementById("City");
let pincode=document.getElementById("pincode");
let card=document.getElementById("card");
let month=document.getElementById("month");
let year=document.getElementById("year");
let cvv=document.getElementById("cvv");


let finalData = JSON.parse(localStorage.getItem("data")) || [];
let showdata = document.getElementById("showdata");
function display(data) {
  finalData.forEach((element) => {
    let card = document.createElement("div");

    let div1 = document.createElement("div");
    let BT = document.createElement("p");
    BT.innerText = "BAG TOTAL";
    let subTotal = document.createElement("p");
    subTotal.innerText = element.subTotal;

    let div2 = document.createElement("div");
    let pts = document.createElement("p");
    pts.innerText = "PREMIUM TRACKED SHIPPING";
    let shipping = document.createElement("p");
    shipping.innerText = "₹150.00";

    let div3 = document.createElement("div");
    let TP = document.createElement("p");
    TP.innerText = "TO PAY";
    let pay = document.createElement("p");
    pay.innerText = element.total;

    div1.append(BT, subTotal);
    div2.append(pts, shipping);
    div3.append(TP, pay);
    card.append(div1, div2, div3);
    showdata.append(card);
  });
}
display();
let cart = JSON.parse(localStorage.getItem("cart"));

function msg() {
  if(name.value=="" || email.value=="" || number.value=="" || address.value=="" || pincode.value=="" || city.value=="" || month.value=="" || card.value=="" || year.value=="" || cvv.value==""){
    alert("Please fill out all required fields ");
  }else{
    alert("Congratulations! Your Order Placed Sucessfully!");
  //   window.location.href = "index.html";
  window.location.assign("index.html");
    localStorage.removeItem("cart");
  }
}

let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.assign("index.html");
});
