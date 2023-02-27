let totalproduct = 0;
fetch("https://gentshub-y1jk.onrender.com/shirts?_limit=6&_page=1")
    .then((res) => {
        let totalCountShirt = res.headers.get("X-Total-Count");
        displayTotalProduct(totalproduct);
        displayTotalShirt(totalCountShirt);
        let totalShirtpage = Math.ceil(totalCountShirt/6);
        console.log("total shirt", totalCountShirt);
        shirtPagination(totalShirtpage)
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
      
        displayShirtData(data);
    })
    let shirtbutton = document.querySelector("#shirtbutton");
    function shirtPagination(totalShirtpage){
        function shirtBtn(){
            let shirtArr = [];
            for(let i=1;i<=totalShirtpage;i++){
                shirtArr.push(createShirtBtn(i));
            }
            return shirtArr.join(" ");
        }
        shirtbutton.innerHTML= `${shirtBtn()}`;
        let paginationShirtBtn = document.querySelectorAll(".paginationshirtbtn");
        for(let btn of paginationShirtBtn){
            btn.addEventListener("click",(e)=>{
                let dataId = e.target.dataset.id;
                fetch(`https://gentshub-y1jk.onrender.com/shirts?_limit=6&_page=${dataId}`)
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    displayShirtData(data);
                })

            })
        }
    }

   function createShirtBtn(i){
    return `<button class="paginationshirtbtn" data-id= ${i}>${i}</button>`
   }
    


function displayTotalShirt(data) {
    document.getElementById("renderShirt").innerText = `Total Available Products - ${data}`
}
let shirtTable = document.querySelector("#shirttable")


function displayShirtData(data) {
    shirtTable.innerText=null
    let tr = document.createElement("tr");
    let td1 = document.createElement("th");
        td1.innerText ="Title"
    let td2 = document.createElement("th");
        td2.innerText ="Image"
    let td3 = document.createElement("th");
        td3.innerText ="Price"
    let td4 = document.createElement("th");
        td4.innerText ="Multibuy"
    let td5 = document.createElement("th");
        td5.innerText ="Edit"
    let td6 = document.createElement("th");
        td6.innerText ="Delete"
        tr.append(td1,td2,td3,td4,td5,td6);
        shirtTable.append(tr)
    data.forEach((ele) => {
        let tr = document.createElement("tr");
       
        let td1 = document.createElement("td");
        td1.innerText = ele.title.substring(0, 40);
        let td2 = document.createElement("td");
        td2.innerText = ele.image.substring(0, 40);
        let td3 = document.createElement("td");
        td3.innerText = `₹${ele.price}`;
        let td4 = document.createElement("td");
        td4.innerText = `₹${ele.multibuy}`;
        let td5 = document.createElement("td");
        td5.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        let td6 = document.createElement("td");
        td6.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        tr.append(td1, td2, td3, td4, td5, td6)
        shirtTable.append(tr)
    });
}

fetch("https://gentshub-y1jk.onrender.com/pants?_limit=6&_page=1")
    .then((res) => {
        let totalCountPant = res.headers.get("X-Total-Count");
        displayTotalProduct(totalproduct);
        displayTotalPant(totalCountPant);
        let totalPantpage = Math.ceil(totalCountPant/6);
        pantPagination(totalPantpage)
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
       
        displayPantData(data)
    })


    let pantbutton = document.querySelector("#pantbutton");
    function pantPagination(totalPantpage){
        function pantBtn(){
            let pantArr=[];
            for(let i=1;i<=totalPantpage;i++){
                pantArr.push(createPantBtn(i));
            }
            return pantArr.join(" ");
        }
        pantbutton.innerHTML= `${pantBtn()}`;
        let paginationPantBtn = document.querySelectorAll(".paginationpantbtn");
        for(let btn of paginationPantBtn){
            btn.addEventListener("click",(e)=>{
                let dataId = e.target.dataset.id;
                fetch(`https://gentshub-y1jk.onrender.com/pants?_limit=6&_page=${dataId}`)
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    displayPantData(data);
                    console.log(data)
                })
            })
        }
    }

    function createPantBtn(i){
        return `<button class="paginationpantbtn" data-id= ${i}>${i}</button>`
 
    }






function displayTotalPant(data) {
    document.getElementById("renderPant").innerText = `Total Available Products - ${data}`
}
let pantTable = document.querySelector("#pantstable")
function displayPantData(data) {
    pantTable.innerText=null
    let tr = document.createElement("tr");
    let td1 = document.createElement("th");
        td1.innerText ="Title"
    let td2 = document.createElement("th");
        td2.innerText ="Image"
    let td3 = document.createElement("th");
        td3.innerText ="Price"
    let td4 = document.createElement("th");
        td4.innerText ="Multibuy"
    let td5 = document.createElement("th");
        td5.innerText ="Edit"
    let td6 = document.createElement("th");
        td6.innerText ="Delete"
        tr.append(td1,td2,td3,td4,td5,td6);
        pantTable.append(tr)



    data.forEach((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = ele.title.substring(0, 40);
        let td2 = document.createElement("td");
        td2.innerText = ele.image.substring(0, 40);
        let td3 = document.createElement("td");
        td3.innerText = `₹${ele.price}`;
        let td4 = document.createElement("td");
        td4.innerText = `₹${ele.multibuy}`;
        let td5 = document.createElement("td");
        td5.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        let td6 = document.createElement("td");
        td6.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        tr.append(td1, td2, td3, td4, td5, td6)
        pantTable.append(tr)
    });
}


fetch("https://gentshub-y1jk.onrender.com/suits?_limit=6&_page=1")
    .then((res) => {
        let totalCountSuit = res.headers.get("X-Total-Count");
        displayTotalProduct(totalproduct);
        displayTotalSuits(totalCountSuit);
        let totalSuitpage = Math.ceil(totalCountSuit/6);
        suitPagination(totalSuitpage)
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
       
        displaySuitsData(data)
    })
    let suitbutton = document.querySelector("#suitbutton");


    function suitPagination(totalSuitpage){
        function suitBtn(){
            let suitArr=[];
            for(let i=1;i<=totalSuitpage;i++){
                suitArr.push(createSuitBtn(i));
            }
            return suitArr.join(" ");
        }
        suitbutton.innerHTML= `${suitBtn()}`;
        let paginationSuitBtn = document.querySelectorAll(".paginationsuitbtn");
        for(let btn of paginationSuitBtn){
            btn.addEventListener("click",(e)=>{
                let dataId = e.target.dataset.id;
                fetch(`https://gentshub-y1jk.onrender.com/suits?_limit=6&_page=${dataId}`)
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    displaySuitsData(data);
                    console.log(data)
                })
            })
        }
    }
    function createSuitBtn(i){
        return `<button class="paginationsuitbtn" data-id= ${i}>${i}</button>`
 
    }

function displayTotalSuits(data) {
    document.getElementById("renderSuits").innerText = `Total Available Products - ${data}`
}
let suitsTable = document.querySelector("#suitsstable")
function displaySuitsData(data) {
    suitsTable.innerHTML=null
    let tr = document.createElement("tr");
    let td1 = document.createElement("th");
        td1.innerText ="Title"
    let td2 = document.createElement("th");
        td2.innerText ="Image"
    let td3 = document.createElement("th");
        td3.innerText ="Price"
    let td4 = document.createElement("th");
        td4.innerText ="Multibuy"
    let td5 = document.createElement("th");
        td5.innerText ="Edit"
    let td6 = document.createElement("th");
        td6.innerText ="Delete"
        tr.append(td1,td2,td3,td4,td5,td6);
        suitsTable.append(tr)



    data.forEach((ele) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = ele.title.substring(0, 40);
        let td2 = document.createElement("td");
        td2.innerText = ele.image.substring(0, 40);
        let td3 = document.createElement("td");
        td3.innerText = `₹${ele.price}`;
        let td4 = document.createElement("td");
        td4.innerText = `₹${ele.multibuy}`;
        let td5 = document.createElement("td");
        td5.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        let td6 = document.createElement("td");
        td6.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        tr.append(td1, td2, td3, td4, td5, td6)
        suitsTable.append(tr)
    });
}






fetch("https://gentshub-y1jk.onrender.com/sweaters")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
        displayTotalProduct(totalproduct);
    })
fetch("https://gentshub-y1jk.onrender.com/jackets&Coats")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
        displayTotalProduct(totalproduct);
    })
fetch("https://gentshub-y1jk.onrender.com/shoes")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
        displayTotalProduct(totalproduct);
    })
fetch("https://gentshub-y1jk.onrender.com/accessories")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        totalproduct += data.length
        displayTotalProduct(totalproduct);
    })

function displayTotalProduct(totalproduct) {
    document.querySelector("#total-product").innerHTML = ""
    document.querySelector("#total-product").innerText = totalproduct
}
fetch("https://gentshub-y1jk.onrender.com/users")
    .then((res) => {
        return res.json();
    })
    .then((data) => {

        displayTotalUser(data.length);
    })

function displayTotalUser(totalUser) {
    document.querySelector("#total-user").innerHTML = ""
    document.querySelector("#total-user").innerText = totalUser
}



// -------------------when someone click then clicked page will open-----------------------------------------------

let dashboardPage = document.querySelector("#dashboard");
dashboardPage.addEventListener("click", function () {

    document.getElementById("right-dash").style.display = "flex";
    document.getElementById("adminShirtContainer").style.display = "none";
    document.getElementById("adminPantsContainer").style.display = "none";
    document.getElementById("adminSuitsContainer").style.display = "none";
})
let shirtPage = document.querySelector("#shirts");
shirtPage.addEventListener("click", function () {
    document.getElementById("adminShirtContainer").style.display = "flex";
    document.getElementById("right-dash").style.display = "none";
    document.getElementById("adminPantsContainer").style.display = "none";
    document.getElementById("adminSuitsContainer").style.display = "none";
})
let pantsPage = document.querySelector("#pants");
pantsPage.addEventListener("click", function () {
    document.getElementById("adminPantsContainer").style.display = "flex";
    document.getElementById("right-dash").style.display = "none";
    document.getElementById("adminShirtContainer").style.display = "none";
    document.getElementById("adminSuitsContainer").style.display = "none";
})
let suitsPage = document.querySelector("#suits");
suitsPage.addEventListener("click", function () {
    document.getElementById("adminSuitsContainer").style.display = "flex";
    document.getElementById("right-dash").style.display = "none";
    document.getElementById("adminShirtContainer").style.display = "none";
    document.getElementById("adminPantsContainer").style.display = "none";
})




// /---------------------------------Notification Start-----------------
let notification_Arr = JSON.parse(localStorage.getItem("notification"))||[];
let notification_form = document.querySelector("#notify>form");
notification_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let obj = {
        title: notification_form.title.value,
        desp: notification_form.desp.value
    }
    notification_Arr.push(obj);
    localStorage.setItem("notification", JSON.stringify(notification_Arr))
    window.location.reload();
})


// /---------------------------------Notification End-----------------


let userpage = document.getElementById("userpage");
userpage.addEventListener("click", () => {
    window.location.href = "userdata.html"
})
let logOut = document.getElementById("logOut");
logOut.addEventListener("click", () => {
    window.location.href = "adminlogin.html"
})


// /---------add data to shirt-------------------

let shirtform = document.querySelector("#shirtform");
shirtform.addEventListener("submit", (event) => {
    event.preventDefault();
    let shirtObj = {
        title: shirtform.addtitle.value,
        image: shirtform.addimg.value,
        price: shirtform.addprice.value,
        multibuy: shirtform.addmultibuyprice.value,
    }
    fetch("https://gentshub.onrender.com/shirts", {
        method: "POST",
        body: JSON.stringify(shirtObj),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((data) => {

            window.location.reload()
        })

})




// /---------add data to pant-------------------

let pantform = document.querySelector("#pantform");
pantform.addEventListener("submit", (event) => {
    event.preventDefault();
    let pantObj = {
        title: pantform.addPtitle.value,
        image: pantform.addPimg.value,
        price: pantform.addPprice.value,
        multibuy: pantform.addmultibuyPprice.value,
    }
    fetch("https://gentshub-y1jk.onrender.com/pants", {
        method: "POST",
        body: JSON.stringify(pantObj),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((data) => {

            window.location.reload()
        })

})


// /---------add data to suit-------------------


let suitform = document.querySelector("#suitform");
suitform.addEventListener("submit", (event) => {
    event.preventDefault();
    let suitObj = {
        title: suitform.addStitle.value,
        image: suitform.addSimg.value,
        price: suitform.addSprice.value,
        multibuy: suitform.addmultibuySprice.value,
    }
    fetch("https://gentshub-y1jk.onrender.com/suits", {
        method: "POST",
        body: JSON.stringify(suitObj),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((data) => {

            window.location.reload()
        })

})