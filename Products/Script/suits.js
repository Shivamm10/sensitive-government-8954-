
let product = document.getElementById("product");
let paginationContainer = document.getElementById("page");
let fetchedData = [];

fetch(`https://gentshub.onrender.com/suits`)
.then((res) => {
  return res.json()
})
.then((data)=>{
  fetchedData = data;
})




fetch(`https://gentshub.onrender.com/suits?_limit=12&page=1`)
.then((res) => {
  let totalCount = +res.headers.get('x-total-count');
  let totalPages = Math.ceil(totalCount/12);
  console.log(totalCount,totalPages)
  renderPagination(totalPages)
  return res.json()
})
.then((data)=>{
  display(data)

})
function stopDuplicate(){
  return JSON.parse(localStorage.getItem("cart"))||[];
}

let cartArr = JSON.parse(localStorage.getItem("cart"))||[];
function display(data){
  product.innerHTML="";
  data.forEach((element)=>{
    let card = document.createElement("div");
    card.className="card";
    let image = document.createElement("img");
    image.setAttribute("src",element.image);
    let title = document.createElement("h3");
    title.innerText = element.title;
    let price = document.createElement("p");
    price.innerText = `Rs ${element.price}`;
    let multibuy = document.createElement("p");
    multibuy.innerText = `Rs ${element.multibuy} Multibuy`;
    let select = document.createElement("select");
    select.id = "select";
    select.className = "hover"
    let small = document.createElement("option");
    let medium = document.createElement("option");
    let large = document.createElement("option");
    let xlarge = document.createElement("option");
    small.innerText = "S";
    medium.innerText = 'M';
    large.innerText = 'L';
    xlarge.innerText = 'XL';
    let Buy = document.createElement("button");
    Buy.innerText = "Add To Cart";
    Buy.className = "hover buy"
    Buy.addEventListener("click",()=>{
      if(checkDuplicate(element)){
        alert("Product already in Cart")
      }else{
        let size = select.value;
        cartArr.push({...element,quantity:1,size:size});
        localStorage.setItem("cart",JSON.stringify(cartArr))
        alert("Product Added To Cart")
      }
    })
    select.append(small, medium, large, xlarge);
    card.append(image,title,price,multibuy,select,Buy);
    product.append(card);
  })
}

function checkDuplicate(product){
  cartArr = stopDuplicate();
  for(let i=0;i<cartArr.length;i++){
    if(cartArr[i].id === product.id){
      return true;
    }
  }
  return false;
}

function renderPagination(pages){
  function buttons(){
    let arr = [];
    for(let i=1;i<=pages;i++){
      arr.push(getAsButton(i));
    }
    return arr.join(" ");
  }
  paginationContainer.innerHTML = `
    <div class="paginationstyle">
      ${buttons()}
    </div>
  `
 let paginationButtons = document.querySelectorAll(".pagination-of-shirt")
 console.log(paginationButtons)
  for(let btn of paginationButtons){
    btn.addEventListener("click",(e)=>{
      let dataId = e.target.dataset.id;
      console.log(btn)
      fetch(`https://gentshub.onrender.com/suits?_limit=12&_page=${dataId}`)
      .then((res) => {
         return res.json()
      })
      .then((data)=>{
      display(data)
      })
    })
  }  
}

function getAsButton(pageNumber){
  return `<button class="pagination-of-shirt hover" data-id=${pageNumber}>${pageNumber}</button>`
}

// Filtering

let black = document.getElementById("black")
let grey = document.getElementById("grey")
let blue = document.getElementById("blue")
let charcoal = document.getElementById("charcoal")
let navy = document.getElementById("navy")

// if(white.checked == true){
//   console.log("A")
//   let data = fetchedData.filter((element)=>element.title.includes("White"));
//   display(data)
// }

// white.addEventListener("")

black.addEventListener("click",()=>{
  if(black.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Black"));
    display(data)
  }else{
    display(fetchedData)
  }
})

grey.addEventListener("click",()=>{
  if(grey.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Grey"));
    display(data)
  }else{
    display(fetchedData)
  }
})

blue.addEventListener("click",()=>{
  if(blue.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Blue"));
    display(data)
  }else{
    display(fetchedData)
  }
})

charcoal.addEventListener("click",()=>{
  if(charcoal.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Charcoal"));
    display(data)
  }else{
    display(fetchedData)
  }
})

navy.addEventListener("click",()=>{
  if(navy.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Navy"));
    display(data)
  }else{
    display(fetchedData)
  }
})

let below11000 = document.getElementById("below11000");
let between11000_14000 = document.getElementById("between11000_14000")
let between14000_16000 = document.getElementById("between14000_16000");
let above16000 = document.getElementById("above16000");

below11000.addEventListener("click",()=>{
  if(below11000.checked == true){
    let data = fetchedData.filter((element)=>element.price<=11000);
    display(data)
  }else{
    display(fetchedData)
  }
})

between11000_14000.addEventListener("click",()=>{
  if(between11000_14000.checked == true){
    let data = fetchedData.filter((element)=>element.price>11000 && element.price<=14000);
    display(data)
  }else{
    display(fetchedData)
  }
})

between14000_16000.addEventListener("click",()=>{
  if(between14000_16000.checked == true){
    let data = fetchedData.filter((element)=>element.price>14000 && element.price<=16000);
    display(data)
  }else{
    display(fetchedData)
  }
})

above16000.addEventListener("click",()=>{
  if(above16000.checked == true){
    let data = fetchedData.filter((element)=>element.price>16000);
    display(data)
  }else{
    display(fetchedData)
  }
})

let below10500 = document.getElementById("below10500");
let between10500_13000 = document.getElementById("between10500_13000");
let above1500 = document.getElementById("above1500");

below10500.addEventListener("click",()=>{
  if(below10500.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy<=10500);
    display(data)
  }else{
    display(fetchedData)
  }
})

between10500_13000.addEventListener("click",()=>{
  if(between10500_13000.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>10500 && element.multibuy<=13000);
    display(data)
  }else{
    display(fetchedData)
  }
})

above13000.addEventListener("click",()=>{
  if(above13000.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>13000);
    display(data)
  }else{
    display(fetchedData)
  }
})

// let plain = document.getElementById("plain");
// let check = document.getElementById("check");
// let stripe = document.getElementById("stripe");
// let printt = document.getElementById("printt");

// plain.addEventListener("click",()=>{
//   if(plain.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Plain"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// })

// check.addEventListener("click",()=>{
//   if(check.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Check"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// })

// stripe.addEventListener("click",()=>{
//   if(stripe.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Stripe"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// })

// printt.addEventListener("click",()=>{
//   if(printt.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Print"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// })


// let buttondown = document.getElementById("buttondown");
// let spread = document.getElementById("spread")

// buttondown.addEventListener("click",()=>{
//   if(buttondown.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Button-Down"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// }
// )

// spread.addEventListener("click",()=>{
//   if(spread.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Spread"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// }
// )



// let Non_iron_yes = document.getElementById("Non_iron_yes")
// let Non_iron_no = document.getElementById("Non_iron_no")

// Non_iron_yes.addEventListener("click",()=>{
//   if(Non_iron_yes.checked == true){
//     let data = fetchedData.filter((element)=>element.title.includes("Non-Iron"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// }
// )

// Non_iron_no.addEventListener("click",()=>{
//   if(Non_iron_no.checked == true){
//     let data = fetchedData.filter((element)=>!element.title.includes("Non-Iron"));
//     display(data)
//   }else{
//     display(fetchedData)
//   }
// })










var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

















