import { ProductType } from "@/types";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const orderNumberForDiscount = 3;
export const dynamic = 'force-dynamic'
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