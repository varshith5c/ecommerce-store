import { cartProducts, products } from "@/services";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = +params.id;
  const filteredProduct = products.filter((product) => {
    return product.id === id;
  })[0];
  return Response.json({ data: filteredProduct });
}
