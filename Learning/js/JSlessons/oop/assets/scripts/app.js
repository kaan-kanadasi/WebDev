class Product {
    // title = 'DEFAULT'; 
    // imageURL = '';
    // price;
    // description;

    constructor(title, imageURL, price, description) {
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = description;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if(cssClasses) {
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.length > 0) {
            for(const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce(
            (prevVal, curItem) => prevVal + curItem.price,
            0
        );
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
        this.render();
    }
    
    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    orderProducts() { 
        console.log('order');
        console.log(this.items);
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = 
        `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `
        const orderButton = cartEl.querySelector('button')
        orderButton.addEventListener('click', () => this.orderProducts())
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component{
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = 
        `
            <div>
                <img src="${this.product.imageURL}" alt="${this.product.title}">
                <div class="product-item_content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', () => this.addToCart()) // arrow func looks from the outer scope it does not have an internal 'this' thats why we dont use bidn(this)s
    }
}

class ProductList extends Component{
    products = [
        new Product(
            'A Pillow', 
            'https://us.fairmontstore.com/cdn/shop/products/Pillow_Feather_Shot_4.jpg?v=1588095662&width=1946', 
            19.99,
            'A soft pillow'
        ),
        new Product(
            'A Carpet', 
            'https://storyathome.com/cdn/shop/products/1_e3c1726f-240d-4556-b980-0888a796d494.jpg?v=1681210809', 
            89.99,
            'A carpet which you might like'
        )
    ];

    constructor(renderHookId) {
        super(renderHookId);
        this.render();
    }

    render() {
        const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')])
        for(const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }
}

class Shop {
    constructor() {
        this.render();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();