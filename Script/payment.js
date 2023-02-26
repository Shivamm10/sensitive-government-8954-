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
  alert("Congratulations! Your Order Placed Sucessfully!");
//   window.location.href = "index.html";
window.location.assign("index.html");
  localStorage.removeItem("cart");
}

let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location.assign("index.html");
});
