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
        name: 'MARGHERITA',
        image: '8.JPG',
        price: 120
    },
    {
        id: 2,
        name: 'DOUBLE CHEESE MARGHERITA',
        image: '9.JPG',
        price: 150
    },
    {
        id: 3,
        name: 'FARM HOUSE',
        image: '11.JPG',
        price: 180
    },
    {
        id: 4,
        name: 'PEPPY PANEER',
        image: '10.JPG',
        price: 200
    },
    {
        id: 5,
        name: 'CHICKEN GOLDEN DELIGHT',
        image: '12.PNG',
        price: 220
    },
    {
        id: 6,
        name: 'CHICKEN DOMINATOR',
        image: '13.PNG',
        price: 250
    },
    {
        id: 7,
        name: 'CHICKEN SAUSAGE',
        image: '15.PNG',
        price: 280
    },
    {
        id: 8,
        name: 'PEPPER BARBECUE CHICKEN',
        image: '17.PNG',
        price: 320
    },
    {
        id: 9,
        name: 'NON VEG SUPREME',
        image: '18.PNG',
        price: 290
    },
    {
        id: 10,
        name: 'CRISPY CHICKEN WRAP',
        image: '16.JPG',
        price: 110
    },
    {
        id: 11,
        name: 'GRILL CHICKEN WRAP',
        image: '19.JPG',
        price: 120
    },
    {
        id: 12,
        name: 'FRIES',
        image: '20.PNG',
        price: 85
    },
    {
        id: 13,
        name: 'PANEER WRAP',
        image: '21.JPG',
        price: 120
    },
    {
        id: 14,
        name: 'CHOCOLATE Shake',
        image: '22.JPG',
        price: 120
    },
    {
        id: 15,
        name: 'BUTTERSCOTCH SHAKE',
        image: '23.JPG',
        price: 130
    },
    {
        id: 16,
        name: 'OREO SHAKE',
        image: '24.JPG',
        price: 150
    },
    {
        id: 17,
        name: 'VIRGIN MOJITO',
        image: '25.JPG',
        price: 90
    },
    {
        id: 17,
        name: 'WATERMELON MOJITO',
        image: '26.JPG',
        price: 70
    },
    {
        id: 18,
        name: 'CHICKEN SANDWICH',
        image: '27.JPG',
        price: 120
    },
    {
        id: 19,
        name: 'GRILLED CHICKEN SANDWICH',
        image: '28.JPG',
        price: 150
    },
    {
        id: 20,
        name: 'PANEER SANDWICH',
        image: '29.JPG',
        price: 110
    },
    {
        id: 21,
        name: 'GRILLED PANEER SANDWICH',
        image: '30.JPG',
        price: 130
    },
    {
        id: 22,
        name: 'CHICKEN BURGER',
        image: '31.JPG',
        price: 180
    },
    {
        id: 23,
        name: 'PANEER BURGER',
        image: '32.PNG',
        price: 130
    },
    {
        id: 24,
        name: 'AALOO TIKKI BURGER',
        image: '34.PNG',
        price: 110
    },
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