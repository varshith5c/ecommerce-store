import { cartHandler, orderHandler, products, productsHandler } from "@/services";

// Add to order
export async function POST(request: Request) {
    const data = await request.json();
    const orderId = orderHandler.addOrder(data);
    return Response.json({ message: "Successfully Placed the order", data: orderId }, { status: 200 });
}

// Get all orders
export async function GET(request: Request) {
    const data = orderHandler.getAllOrder()
    return Response.json({ data }, { status: 200 });

}