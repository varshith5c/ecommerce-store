import { cartHandler } from  "@/services/data";

// Add to cart
export async function POST(request: Request) {
  const data = await request.json();
  console.log({ data });
  const addedProduct = cartHandler.addCartProduct(data);
  return Response.json({ data: addedProduct }, { status: 200 });
}

// get all cart products
export async function GET(request: Request) {
  const addedProduct = cartHandler.getCartProducts();
  return Response.json({ data: addedProduct }, { status: 200 });
}
