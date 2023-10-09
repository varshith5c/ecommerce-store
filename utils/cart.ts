import { ProductType } from "@/types";
const baseURL = process.env.API_BASE_URL;
console.log({ baseURL });
export default async function getCartProducts(): Promise<ProductType[]> {
    const result = await fetch(
        baseURL+"/cart"
    ).then(res => res.json())
    return result.data
}