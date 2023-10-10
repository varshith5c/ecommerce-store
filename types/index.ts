export interface ProductType {
    id: number;
    name: string;
    price: number;
}
export interface OrderType {
    id: number,
    products:ProductType[],
    discountAmount:number,
    costAfterDiscount:number,
    totalCost:number
}

export type CouponStateType = {
    generated: boolean,
    value: string|null,
    discount: number
}