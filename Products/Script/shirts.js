
let product = document.getElementById("product");
let paginationContainer = document.getElementById("page");


fetch(`https://gents-hub.onrender.com/shirts?_limit=12&page=1`)
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
let cartArr = JSON.parse(localStorage.getItem("cart"))||[];
function display(data){
  let cartCount = document.createElement('div');
  cartCount.id = "count";
  cartCount.innerText = cartArr.length;
  product.innerHTML=null;
  data.forEach((element)=>{
    let card = document.createElement("div");
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
    Buy.className = "hover"
    Buy.addEventListener("click",()=>{
      if(checkDuplicate(element)){
        alert("Product already in cart");
      }else{
        +cartCount.innerText++;
        let size = select.value;
        cartArr.push({...element,quantity: 1,size: size});
        localStorage.setItem("cart",JSON.stringify(cartArr));
        alert("Product Added To Cart")
      }
    })
    select.append(small, medium, large, xlarge);
    card.append(image,title,price,multibuy,select,Buy);
    product.append(card);
  })
}

function checkDuplicate(product){
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
    <div>
      ${buttons()}
    </div>
  `
 let paginationButtons = document.querySelectorAll(".pagination-of-shirt")
 console.log(paginationButtons)
  for(let btn of paginationButtons){
    btn.addEventListener("click",(e)=>{
      let dataId = e.target.dataset.id;
      console.log(btn)
      fetch(`https://gents-hub.onrender.com/shirts?_limit=12&_page=${dataId}`)
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


































