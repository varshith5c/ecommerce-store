import { OrderType, ProductType } from "@/types";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function getCartProducts(): Promise<ProductType[]> {
    const result = await fetch(
        baseURL + "/cart", { cache: 'no-store' }
    ).then(res => res.json())
    return result.data
}

export async function getProducts(): Promise<ProductType[]> {
    const result = await fetch(
        baseURL + "/products", { cache: 'no-store' }
    ).then(res => res.json())
    return result.data
}

export async function addCartProduct({ id, name, price }: { id: number, name: string, price: number }) {
    const result = await fetch(baseURL + "/cart", {
        method: "POST",
        body: JSON.stringify({
            id,
            name,
            price
        }),
    }).then((res) => res.json());
    return result.data
}

export async function checkCouponCode(): Promise<{ discountApplicable: boolean, couponCode: string, discountPercentage: number }> {
    const result = await fetch(baseURL + "/discount").then((res) => res.json());
    return result.data
}
export async function addOrder(discountApplied: boolean): Promise<{ message: string, data: number }> {
    const result = await fetch(baseURL + "/order", {
        method: 'POST',
        body: JSON.stringify({
            discountApplied
        })
    }).then((res) => res.json());
    return result.data
}