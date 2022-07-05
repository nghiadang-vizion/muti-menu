const $  = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const productsGrid = document.querySelector('.wrap-product')
const productImg = document.querySelector('.product-img')
const productName = document.querySelector('.product-info .product-name')
const productPrice = document.querySelector('.product-info .product-price')

const app = {
    products: [
        {
            img: './assets/img/shoes1.jpg',
            name: 'NIKE AIR FORCE 1 LOW WHITE GUM',
            price: 'đ 3,600,000'
        },
        {
            img: './assets/img/shoes2.jpg',
            name: 'Air Jordan 1 Low Inside Out Cream White Light Grey',
            price: 'đ 4,800,000'
        },
        {
            img: './assets/img/shoes3.jpg',
            name: 'Air Jordan 1 mid Inside Out Cream White Light Grey',
            price: 'đ 4,900,000'
        },
        {
            img: './assets/img/shoes4.jpg',
            name: "Nike Blazer Mid '77 Vintage White Black",
            price: 'đ 2,600,000'
        },
        {
            img: './assets/img/shoes5.jpg',
            name: "Nike Blazer low '77 Vintage White Black",
            price: 'đ 2,100,000'
        },
        {
            img: './assets/img/shoes6.jpg',
            name: 'Sky  Air Jordan 1 Shattered Backboard (TD)',
            price: 'đ 1,500,000'
        },
        {
            img: './assets/img/shoes7.jpg',
            name: 'New Balance 550 Team Carolina Blue',
            price: 'đ 4,200,000'
        },
        {
            img: './assets/img/shoes8.jpg',
            name: 'Air Jordan 1 Retro High OG Rebellionaire',
            price: 'đ 6,500,000'
        },
        {
            img: './assets/img/shoes9.jpg',
            name: "Nike WMNS Air Force 1 Low '07 Essential White Black Paisley",
            price: 'đ 3,500,000'
        },
    ],
    render: function () {
        const htmls = this.products.map((product,index)=> {
            return  `
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 thumb">
                <a href="#">
                    <img class="product-img" src="${product.img}" alt="">
                    <div class="product-info">
                        <h2 class="product-name">${product.name}</h2>
                        <h3 class="product-price">${product.price}</h3>
                    </div>
                </a>
            </div>
            `
        }) 
        productsGrid.innerHTML = htmls.join('')
    },
    start: function () {
        this.render();
        
    }
}

app.start();



