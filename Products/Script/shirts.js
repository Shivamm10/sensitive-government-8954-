
let product = document.getElementById("product");

fetch(`https://gents-hub.onrender.com/shirts`)
.then((res)=> res.json())
.then((data)=>{
  display(data)
})

function display(data){
  product.innerHTML=null;
  data.forEach((element)=>{
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let title = document.createElement("h3");
    title.innerText = element.title;
    let price = document.createElement("p");
    price.innerText = element.price;
    let multibuy = document.createElement("p");
    multibuy.innerText = `${element.multibuy} Multibuy`;
    let Buy = document.createElement("button");
    Buy.innerText = "Add To Cart";

    card.append(image,title,price,multibuy,Buy);
    product.append(card);
  })
}





































