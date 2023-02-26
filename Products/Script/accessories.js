
let product = document.getElementById("product");
let paginationContainer = document.getElementById("page");
let fetchedData = [];

fetch(`https://gentshub.onrender.com/accessories`)
.then((res) => {
  return res.json()
})
.then((data)=>{
  fetchedData = data;
})




fetch(`https://gentshub.onrender.com/accessories?_limit=12&page=1`)
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
      fetch(`https://gentshub.onrender.com/accessories?_limit=12&_page=${dataId}`)
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

let tie = document.getElementById("tie")
let socks = document.getElementById("socks")
let handkerchief = document.getElementById("handkerchief")
let belt = document.getElementById("belt")
let gloves = document.getElementById("gloves")
let umbrella = document.getElementById("umbrella")

tie.addEventListener("click",()=>{
    if(tie.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Tie"));
      display(data)
    }else{
      display(fetchedData)
    }
  })
  socks.addEventListener("click",()=>{
    if(socks.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Socks"));
      display(data)
    }else{
      display(fetchedData)
    }
  })
  handkerchief.addEventListener("click",()=>{
    if(handkerchief.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Handkerchief") || element.title.includes("Pocket Square"));
      display(data)
    }else{
      display(fetchedData)
    }
  })
  belt.addEventListener("click",()=>{
    if(belt.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Belt"));
      display(data)
    }else{
      display(fetchedData)
    }
  })
  gloves.addEventListener("click",()=>{
    if(gloves.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Gloves"));
      display(data)
    }else{
      display(fetchedData)
    }
  })
  umbrella.addEventListener("click",()=>{
    if(umbrella.checked == true){
      let data = fetchedData.filter((element)=>element.title.includes("Umbrella"));
      display(data)
    }else{
      display(fetchedData)
    }
  })








let black = document.getElementById("black")
let yellow = document.getElementById("yellow")
let blue = document.getElementById("blue")
let white = document.getElementById("white")
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

yellow.addEventListener("click",()=>{
  if(yellow.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("Yellow"));
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

white.addEventListener("click",()=>{
  if(white.checked == true){
    let data = fetchedData.filter((element)=>element.title.includes("White"));
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

let below200 = document.getElementById("below200");
let between200_600 = document.getElementById("between200_600")
let above600 = document.getElementById("above600");

below200.addEventListener("click",()=>{
  if(below200.checked == true){
    let data = fetchedData.filter((element)=>element.price<=200);
    display(data)
  }else{
    display(fetchedData)
  }
})

between200_600.addEventListener("click",()=>{
  if(between200_600.checked == true){
    let data = fetchedData.filter((element)=>element.price>200 && element.price<=600);
    display(data)
  }else{
    display(fetchedData)
  }
})

above600.addEventListener("click",()=>{
  if(above600.checked == true){
    let data = fetchedData.filter((element)=>element.price>600);
    display(data)
  }else{
    display(fetchedData)
  }
})

let below150 = document.getElementById("below150");
let between150_350 = document.getElementById("between150_350");
let above350 = document.getElementById("above350");

below150.addEventListener("click",()=>{
  if(below150.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy<=150);
    display(data)
  }else{
    display(fetchedData)
  }
})

between150_350.addEventListener("click",()=>{
  if(between150_350.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>150 && element.multibuy<=350);
    display(data)
  }else{
    display(fetchedData)
  }
})

above350.addEventListener("click",()=>{
  if(above350.checked == true){
    let data = fetchedData.filter((element)=>element.multibuy>350);
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

















