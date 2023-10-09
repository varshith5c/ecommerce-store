export interface ProductType {
    id: number;
    name: string;
    price: number;
}
export interface OrderType extends Omit<ProductType, 'price'> {
    quantity: number;
    totalCost: number;
}
