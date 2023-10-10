import { addProducts } from "@/lib/utils";
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

export let cartProducts: ProductType[] = []
export let orderedProducts: OrderType[] = []
export const orderNumberForDiscount = 3;
let currentOrderNumber = 0;
const appliedDiscountPercentage = 10;
const adminData = {
    itemsPurchased: 0,
    totalPurchaseAmount: 0,
    totalDiscountAmount: 0,
}

// Products handler
export const productsHandler = {
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
export const cartHandler = {
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
    },
    clearCart: function () {
        cartProducts = []
    }
};
// Order handler
export const orderHandler = {
    verifyDiscount: function () {
        let discount = false;
        console.log("v", currentOrderNumber);

        if ((currentOrderNumber + 1) % orderNumberForDiscount === 0) {
            discount = true
        }

        return discount

    },
    addOrder: function (data: { discountApplied: boolean }) {
        const products = cartHandler.getCartProducts();
        console.log({ products });

        const totalCost = addProducts(products)
        const discountAmount = data.discountApplied ? totalCost * appliedDiscountPercentage / 100 : 0
        const costAfterDiscount = data.discountApplied ? totalCost - discountAmount : totalCost;

        const orderId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1
        const newOrder = {
            id: orderId,
            products,
            discountAmount,
            costAfterDiscount,
            totalCost
        }
        orderedProducts.push(newOrder)
        console.log("before", currentOrderNumber);
        currentOrderNumber += 1;
        console.log("after", currentOrderNumber);



        //admin data captured
        adminData.itemsPurchased += products.length;
        adminData.totalDiscountAmount += discountAmount;
        adminData.totalPurchaseAmount += totalCost;

        //Clear the cart after placing the order
        cartHandler.clearCart()
        return orderId
    },
    getAdminInfo: function () {
        return adminData
    },
    getOrderById: function (id: number) {

        return orderedProducts.filter(order => {
            return order.id === id
        })[0]
    },
    getAllOrder: function () {
        return orderedProducts
    }
};