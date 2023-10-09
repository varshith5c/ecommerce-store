import { OrderType, ProductType } from "@/types";


export const products: ProductType[] = [
    {
        id: 1,
        name: "Product 1",
        price: 499,
    },
    {
        id: 2,
        name: "Product 2",
        price: 600,
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
    },
];

export const cartProducts: ProductType[] = []
export const orderedProducts: OrderType[] = []

// Products handler
export let productsHandler = {
    products: products,
    addProduct: function ({ name, price, quantity }: { name: string, price: number, quantity: number }) {
        cartProducts.push({
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
            name,
            price
        })
    },
    getProducts: function () {
        return products;
    }
};

// Cart handler
export let cartHandler = {
    products: cartProducts,
    addCartProduct: function ({ name, price, quantity }: { name: string, price: number, quantity: number }) {
        const newProduct = {
            id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1,
            name,
            price
        }
        cartProducts.push(newProduct)

        // Return the newly created product . Usually a response from an ORM returning the product
        return newProduct
    },
    getCartProducts: function () {
        return cartProducts;
    }
};