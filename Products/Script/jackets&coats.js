
let product = document.getElementById("product");
let paginationContainer = document.getElementById("page");
let fetchedData = [];

fetch(`https://gentshub-y1jk.onrender.com/jackets&Coats`)
.then((res) => {
  return res.json()
})
.then((data)=>{
  fetchedData = data;
})




fetch(`https://gentshub-y1jk.onrender.com/jackets&Coats?_limit=12&page=1`)
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
      fetch(`https://gentshub-y1jk.onrender.com/jackets&Coats?_limit=12&_page=${dataId}`)
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
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let navy = document.getElementById("navy")

// if(white.checked == true){
//   console.log("A")
//   let data = fetchedData.filter((element)=>element.title.includes("White"));
//   display(data)
// }

// white.addEventListener("")

grey.addEventListener("click",()=>{
  if(grey.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Grey"));
    display(data)
  }else{
    display(fetchedData)
  }
})

red.addEventListener("click",()=>{
  if(red.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Red"));
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

green.addEventListener("click",()=>{
  if(green.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Green"));
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

let below2800 = document.getElementById("below2800");
let between2800_4000 = document.getElementById("between2800_4000")
let above4000 = document.getElementById("above4000");

below2800.addEventListener("click",()=>{
  if(below2800.checked == true){
    let data = fetchedData.filter((element)=>element.price<=2800);
    display(data)
  }else{
    display(fetchedData)
  }
})

between2800_4000.addEventListener("click",()=>{
  if(between2800_4000.checked == true){
    let data = fetchedData.filter((element)=>element.price>2800 && element.price<=4000);
    display(data)
  }else{
    display(fetchedData)
  }
})

above4000.addEventListener("click",()=>{
  if(above4000.checked == true){
    let data = fetchedData.filter((element)=>element.price>4000);
    display(data)
  }else{
    display(fetchedData)
  }
})

let below2500 = document.getElementById("below2500");
let between2500_3500 = document.getElementById("between2500_3500");
let above3500 = document.getElementById("above3500");

below2500.addEventListener("click",()=>{
  if(below2500.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy<=2500);
    display(data)
  }else{
    display(fetchedData)
  }
})

between2500_3500.addEventListener("click",()=>{
  if(between2500_3500.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>2500 && element.multibuy<=3500);
    display(data)
  }else{
    display(fetchedData)
  }
})

above3500.addEventListener("click",()=>{
  if(above3500.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>3500);
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

















