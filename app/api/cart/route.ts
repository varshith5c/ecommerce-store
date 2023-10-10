import { cartHandler } from "@/services";
import { NextRequest } from "next/server";

// Add to cart
export async function POST(request: NextRequest) {
  const data = await request.json();
  const addedProduct = cartHandler.addCartProduct(data);
  return Response.json({ data: addedProduct }, { status: 200 });
}

// get all cart products
export async function GET(request: Request) {
  const products = cartHandler.getCartProducts();
  return Response.json({ data: products }, { status: 200 });
}

