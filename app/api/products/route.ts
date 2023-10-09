import { products, productsHandler } from "@/services";

//get all products
// get all cart products
export async function GET(request: Request) {
  const addedProduct = productsHandler.getProducts();
  return Response.json({ data: addedProduct }, { status: 200 });
}
