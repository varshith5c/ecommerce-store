import { products } from  "@/services/data";

//get all products 
export async function GET() {
  return Response.json({ data: products });
}
