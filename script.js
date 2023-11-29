
// for mobile menu bar
function menu_bar() {
    let menu = document.getElementById("menu-slide");
    menu.style.display = "block";

    let menuLogo = document.getElementById("menu-logo");

    let newElm = "<div></div>";
    menuLogo.insertAdjacentHTML("beforebegin",newElm);
    let par = document.getElementById("dont-show0");
    let chd = par.firstElementChild;
    chd.setAttribute("class","col-3");
    chd.setAttribute("id","cross-btn");
    
    let ielm = document.createElement("i");
    ielm.setAttribute("class","fa-solid fa-xmark")
    chd.appendChild(ielm);

    par.replaceChild(chd,menuLogo);

    // 
    let blur1 = document.getElementById("deliver");
    let blur2 = document.getElementById("contact");
    let blur3 = document.getElementById("blurring");
    blur1.style.filter = "blur(2px)";
    blur2.style.filter = "blur(2px)";
    blur3.style.filter = "blur(2px)";

    let cross_btn = document.getElementById("cross-btn");
    cross_btn.addEventListener("click",function () {
        let menu = document.getElementById("menu-slide");
        menu.style.display = "none";

        par.replaceChild(menuLogo,chd);

        // 
        let blur1 = document.getElementById("deliver");
        let blur2 = document.getElementById("contact");
        let blur3 = document.getElementById("blurring");
        blur1.style.filter = "blur(0px)";
        blur2.style.filter = "blur(0px)";
        blur3.style.filter = "blur(0px)";
    })


}



// for mobile slider
let flag = 0;

function controller(x) {
    flag = flag + x;
    slideShow(flag);
}

slideShow(flag);

function slideShow(num) {
    let slides = document.getElementsByClassName("slide");

    if(num == slides.length){
        flag = 0;
        num = 0;
    }

    if(num < 0){
        flag = slides.length - 1; 
        num = slides.length - 1; 
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

// swipe code
let touchstartX = 0;
let touchendX = 0;

function checkdirection() {
    if(touchendX < touchstartX){
        document.getElementById("next").click();
    }
    if(touchendX > touchstartX){
        document.getElementById("previous").click();
    }
}

var burger = document.getElementById("pic");

burger.addEventListener("touchstart", (e)=> {
    touchstartX = e.changedTouches[0].screenX;
});

burger.addEventListener("touchend", (e)=> {
    touchendX = e.changedTouches[0].screenX;
    checkdirection();
});



// back to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// function scrollToBottom () {
//     const scrollingElement = (document.scrollingElement || document.body);
//     scrollingElement.scrollTop = scrollingElement.scrollHeight;
//     console.log('hello')
// }


// sign in
function validateSignIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation (you should perform more secure validation on the server-side)
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // You can send the data to the server for further validation and processing
        alert("Sign-in successful! (Note: This is a basic example; in a real application, you would perform server-side validation and authentication.)");
    }
}

let sign_in = document.getElementById('sign-in');
sign_in.addEventListener("click",() => {
    let sign_inn = document.getElementById('sign-inn');
    sign_inn.style.top = "7rem";
    let blurring = document.querySelector('#blurring');
    // let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-5');
    let blur_6 = document.querySelector('#shop-hide');
    blur_6.style.filter = "blur(5px)";
    sign_inn.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(5px)";
    // dont_show2.style.filter = "blur(3px)";
    deliver.style.filter = "blur(5px)";
    bike.style.filter = "blur(5px)";
    blur_1.style.filter = "blur(5px)";
    blur_2.style.filter = "blur(5px)";
    blur_3.style.filter = "blur(5px)";
    blur_4.style.filter = "blur(5px)";
    blur_5.style.filter = "blur(5px)";
})

let cross_bn = document.getElementById('cross-btnX');
cross_bn.addEventListener("click",() => {
    let sign_inn = document.getElementById('sign-inn');
    sign_inn.style.top = "-500px";
    let blurring = document.querySelector('#blurring');
    let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-5');
    let blur_6 = document.querySelector('#shop-hide');
    blur_6.style.filter = "blur(0px)";
    sign_inn.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(0px)";
    dont_show2.style.filter = "blur(0px)";
    deliver.style.filter = "blur(0px)";
    bike.style.filter = "blur(0px)";
    blur_1.style.filter = "blur(0px)";
    blur_2.style.filter = "blur(0px)";
    blur_3.style.filter = "blur(0px)";
    blur_4.style.filter = "blur(0px)";
    blur_5.style.filter = "blur(0px)";
})



// sign up

function validateForm1() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Additional validation logic can be added here

    // If all validation passes, you can submit the form
    document.getElementById("signupForm").submit();
}

let sign_up = document.getElementById('sign-up');
sign_up.addEventListener("click",() => {
    let sign_upp = document.getElementById('sign-up-cont');
    sign_upp.style.top = "6rem";
    let blurring = document.querySelector('#blurring');
    // let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-6');
    let blur_6 = document.querySelector('#shop-hide');
    blur_6.style.filter = "blur(5px)";
    sign_upp.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(5px)";
    // dont_show2.style.filter = "blur(3px)";
    deliver.style.filter = "blur(5px)";
    bike.style.filter = "blur(5px)";
    blur_1.style.filter = "blur(5px)";
    blur_2.style.filter = "blur(5px)";
    blur_3.style.filter = "blur(5px)";
    blur_4.style.filter = "blur(5px)";
    blur_5.style.filter = "blur(5px)";
})

let cross_bn2 = document.getElementById('cross-btn2');
cross_bn2.addEventListener("click",() => {
    let sign_upp = document.getElementById('sign-up-cont');
    sign_upp.style.top = "-1000px";
    let blurring = document.querySelector('#blurring');
    let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-6');
    let blur_6 = document.querySelector('#shop-hide');
    blur_6.style.filter = "blur(0px)";
    sign_upp.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(0px)";
    dont_show2.style.filter = "blur(0px)";
    deliver.style.filter = "blur(0px)";
    bike.style.filter = "blur(0px)";
    blur_1.style.filter = "blur(0px)";
    blur_2.style.filter = "blur(0px)";
    blur_3.style.filter = "blur(0px)";
    blur_4.style.filter = "blur(0px)";
    blur_5.style.filter = "blur(0px)";
})



// cart for mobile
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'VEG BURGER',
        image: 'burger-slide-1.png',
        price: 149
    },
    {
        id: 2,
        name: 'CHEESE BURGER',
        image: 'burger-slide-2.png',
        price: 119
    },
    {
        id: 3,
        name: 'NON-VEG BURGER',
        image: 'Burger21.png',
        price: 299
    },
    {
        id: 4,
        name: 'CHICKEN BURGER',
        image: 'burger22.png',
        price: 399
    },
    {
        id: 5,
        name: 'SPICY BURGER',
        image: 'burger23.png',
        price: 199
    },
    {
        id: 6,
        name: 'LEAF BURGER',
        image: 'burger24.png',
        price: 159
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    topFunction();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


// sign in mobile
let sign_in_mob = document.getElementById('sign-in-mob');
sign_in_mob.addEventListener("click",() => {
    let sign_inn = document.getElementById('sign-inn');
    sign_inn.style.top = "7rem";
    let blurring = document.querySelector('#blurring');
    // let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-5');
    sign_inn.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(5px)";
    // dont_show2.style.filter = "blur(3px)";
    deliver.style.filter = "blur(5px)";
    bike.style.filter = "blur(5px)";
    blur_1.style.filter = "blur(5px)";
    blur_2.style.filter = "blur(5px)";
    blur_3.style.filter = "blur(5px)";
    blur_4.style.filter = "blur(5px)";
    blur_5.style.filter = "blur(5px)";
})

// sign up mobile
let sign_up_mob = document.getElementById('sign-up-mob');
sign_up_mob.addEventListener("click",() => {
    let sign_upp = document.getElementById('sign-up-cont');
    sign_upp.style.top = "6rem";
    let blurring = document.querySelector('#blurring');
    // let dont_show2 = document.getElementById("dont-show2");
    let deliver = document.querySelector('#deliver');
    let bike = document.querySelector('#contact');
    let blur_1 = document.querySelector('#blur-1');
    let blur_2 = document.querySelector('#blur-2');
    let blur_3 = document.querySelector('#blur-3');
    let blur_4 = document.querySelector('#blur-4');
    let blur_5 = document.querySelector('#blur-6');
    sign_upp.style.transition = "all 0.3s ease-in-out";
    blurring.style.filter = "blur(5px)";
    // dont_show2.style.filter = "blur(3px)";
    deliver.style.filter = "blur(5px)";
    bike.style.filter = "blur(5px)";
    blur_1.style.filter = "blur(5px)";
    blur_2.style.filter = "blur(5px)";
    blur_3.style.filter = "blur(5px)";
    blur_4.style.filter = "blur(5px)";
    blur_5.style.filter = "blur(5px)";
})



