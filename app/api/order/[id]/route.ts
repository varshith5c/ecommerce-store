import { orderHandler } from "@/services";

//Get order by id
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const orderId = +params.id;
  console.log({ orderId });

  const product = orderHandler.getOrderById(orderId);
  return Response.json({ data: { product } }, { status: 200 });
}
