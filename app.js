/*-------------------------------------QUANTITY-------------------------------------*/

single_price = document.getElementById('single_price')
single_price.textContent = 125
quantity_bought = document.getElementById('quantity_bought')

final_price = document.getElementById('final_price')



const minus = document.querySelector('#product #quantity #minus')
const plus = document.querySelector('#product #quantity #plus')
const counter = document.querySelector('#product #quantity #counter')

minus.addEventListener('click', function(e){
    if (counter.textContent > 0) {
        counter.textContent--
    }
})

plus.addEventListener('click', function(e){
    if (counter.textContent < 100) {
        counter.textContent++
    }
})


/*-------------------------------------IMAGES-------------------------------------*/
const thumbnails = Array.from(document.getElementsByClassName('thumbnail'))
const mainImage = document.getElementById('main_image')

thumbnails[0].classList.add('selected_thumbnail')
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
        thumbnails.forEach((thumb) => {
            thumb.classList.remove('selected_thumbnail')
        })
        thumbnail.classList.add('selected_thumbnail')
        mainImage.src = thumbnail.src.replace('-thumbnail','')
    })
})

/*-------------------------------------POP UPS-------------------------------------*/
cartButton = document.querySelector('#cart')
myCart = document.querySelector("#my_cart")
let myCartOpen = false

cartButton.addEventListener('click', (e) => {
    if(myCartOpen === false) {
        myCart.style.display = "block"
        myCartOpen = true
    }
    else {
        myCart.style.display = "none"
        myCartOpen = false
    }
})


/*-------------------------------------ADD TO CART-------------------------------------*/
const  product = {
    name: 'Fall Limited Edition Sneakers',
    Image: 'assets/image-product-1.jpg',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.',
    price: 125.00,
    old_price: 250.00,
    discount: (old_price - price) / old_price * 100,
    quantity: 0,
}

const addToCart = document.getElementById('add_button')
const deleteItem = document.getElementById('delete')
const cartItems = document.getElementById('cart_items')
const noItems = document.getElementById('empty')

addToCart.addEventListener('click', (e) => {
    quantity_bought.textContent = counter.textContent
    final_price.textContent = counter.textContent * single_price.textContent
    noItems.style.display = 'none'
    cartItems.style.display = 'flex'
})

deleteItem.addEventListener('click', (e) => {
    quantity_bought.textContent = counter.textContent
    final_price.textContent = counter.textContent * single_price.textContent
    noItems.style.display = 'block'
    cartItems.style.display = 'none'
})

/*-------------------------------------RESPONSIVE-------------------------------------*/
const menuButton = document.getElementById('menu_button')

menuButton.addEventListener('toggle', (e) => {
    
})