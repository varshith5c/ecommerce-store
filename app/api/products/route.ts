import { products } from "@/services";

//get all products
export async function GET() {
  return Response.json({ products });
}
