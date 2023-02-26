let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.querySelector(".container");
let finalData = JSON.parse(localStorage.getItem("data"))||[];

function Display(data) {
    // let cartCount=document.getElementById("count");
    // cartCount.innerText=cart.length;
    container.innerHTML = "";
    let total=document.getElementById("subtotal");
    let finalTotal=document.getElementById("total");
    let tax=document.getElementById("tax");
    cart.forEach((element) => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.image);

        let name = document.createElement("h2");
        name.innerText = element.title;

        let size=document.createElement("p");

        let price = document.createElement("p");
        let prices = document.createElement("div");
        let span = document.createElement("p");
        span.id = "span";
        span.innerHTML = `MultiBuy Value:₹${element.multibuy}`;
        price.innerText = `Price Value:₹${element.price}`;

        let quantity = document.createElement("span");
        let increment = document.createElement("button");
        let decrement = document.createElement("button");
        let remove = document.createElement("button");
        remove.innerText = "Remove";
        increment.innerText = "+";
        decrement.innerText = "-"
        quantity.innerText = element.quantity;
        size.innerText=`Size: ${element.size}`;

        remove.addEventListener("click",function(){
      //this logic is use for deleting
      cart=cart.filter((ele)=>{
        // +cartCount.innerText--;
        return ele.id!==element.id;
      });
      localStorage.setItem("cart",JSON.stringify(cart));
      Display();
    });

    increment.addEventListener("click",function(){
      element=element.quantity++;
      localStorage.setItem("cart",JSON.stringify(cart));
      Display();
    });
    decrement.addEventListener("click",function(){
      if(element.quantity>1){
        element=element.quantity--;
      localStorage.setItem("cart",JSON.stringify(cart));
      Display();
      }
    });
        prices.append(price, span,size);
        card.append(img, name, prices,increment,quantity,decrement,remove);
        container.append(card);

    });
    let sum=0;
  for(let i=0;i<cart.length;i++){
    if(cart[i].quantity>=2){
        sum+=cart[i].multibuy*cart[i].quantity;
    }else{
        sum+=cart[i].price*cart[i].quantity;
    }
  }
  total.innerText=`₹${sum.toFixed(2)}`;
  if(sum!==0){
    tax.innerText="₹150.00";
    finalTotal.innerText=`₹${(sum+150).toFixed(2)}`;
  }else{
    finalTotal.innerText=`₹${sum}`;
  }
  finalData=[];
  finalData.push({subTotal:total.innerText,total:finalTotal.innerText});
  localStorage.setItem("data",JSON.stringify(finalData));
}
Display();


function checkout(){
    if(cart.length==0){
        alert("Your Cart is Empty!!")
    }else{
        window.location.assign("payment.html");
    }
}