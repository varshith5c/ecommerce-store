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
const currentOrderNumber = 29
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
    currentOrderNumber,
    verifyDiscount: function () {
        let discount = false
        if ((currentOrderNumber + 1) % orderNumberForDiscount === 0) {
            discount = true
        }
        return discount

    },
    addOrder: function (data: { discountApplied: number }) {
        const products = cartHandler.getCartProducts();
        const totalCost = addProducts(products)
        const discountAmount = totalCost * appliedDiscountPercentage / 100
        const costAfterDiscount = totalCost - discountAmount;

        const orderId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1
        const newOrder = {
            id: orderId,
            products,
            discountAmount,
            costAfterDiscount,
            totalCost
        }
        orderedProducts.push(newOrder)


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
        console.log("filterring", orderedProducts);

        return orderedProducts.filter(order => {
            console.log({ order });

            console.log(order.id === id);

            return order.id === id
        })[0]
    },
    getAllOrder: function () {
        return orderedProducts
    }
};