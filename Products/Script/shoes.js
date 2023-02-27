
let product = document.getElementById("product");
let paginationContainer = document.getElementById("page");
let fetchedData = [];

fetch(`https://gentshub-y1jk.onrender.com/shoes`)
.then((res) => {
  return res.json()
})
.then((data)=>{
  fetchedData = data;
})




fetch(`https://gentshub-y1jk.onrender.com/shoes?_limit=12&page=1`)
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
      fetch(`https://gentshub-y1jk.onrender.com/shoes?_limit=12&_page=${dataId}`)
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

let grey = document.getElementById("grey")
let black = document.getElementById("black")
let blue = document.getElementById("blue")
let brown = document.getElementById("brown")
let cream = document.getElementById("cream")

// if(white.checked == true){
//   console.log("A")
//   let data = fetchedData.filter((element)=>element.title.includes("White"));
//   display(data)
// }

// white.addEventListener("")

grey.addEventListener("click",()=>{
  if(grey.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Gray")||element.title.includes("Grey"));
    display(data)
  }else{
    display(fetchedData)
  }
})

black.addEventListener("click",()=>{
  if(black.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Black"));
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

brown.addEventListener("click",()=>{
  if(brown.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Brown"));
    display(data)
  }else{
    display(fetchedData)
  }
})

cream.addEventListener("click",()=>{
  if(cream.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Cream"));
    display(data)
  }else{
    display(fetchedData)
  }
})

let below1300 = document.getElementById("below1300");
let between1300_1700 = document.getElementById("between1300_1700")
let above1700 = document.getElementById("above1700");

below1300.addEventListener("click",()=>{
  if(below1300.checked == true){
    let data = fetchedData.filter((element)=>element.price<=1300);
    display(data)
  }else{
    display(fetchedData)
  }
})

between1300_1700.addEventListener("click",()=>{
  if(between1300_1700.checked == true){
    let data = fetchedData.filter((element)=>element.price>1300 && element.price<=1700);
    display(data)
  }else{
    display(fetchedData)
  }
})

above1700.addEventListener("click",()=>{
  if(above1700.checked == true){
    let data = fetchedData.filter((element)=>element.price>1700);
    display(data)
  }else{
    display(fetchedData)
  }
})

let below1200 = document.getElementById("below1200");
let between1200_1600 = document.getElementById("between1200_1600");
let above1600 = document.getElementById("above1600");

below1200.addEventListener("click",()=>{
  if(below1200.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy<=1200);
    display(data)
  }else{
    display(fetchedData)
  }
})

between1200_1600.addEventListener("click",()=>{
  if(between1200_1600.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>1200 && element.multibuy<=1600);
    display(data)
  }else{
    display(fetchedData)
  }
})

above1600.addEventListener("click",()=>{
  if(above1600.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>1600);
    display(data)
  }else{
    display(fetchedData)
  }
})





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

















