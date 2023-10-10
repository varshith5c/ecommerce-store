import { orderHandler } from "@/services";


//Check for discount
export async function GET(request: Request) {
  const discountApplicable = orderHandler.verifyDiscount();
  const couponCode = discountApplicable ? "BIGB2023" : null
  const discountPercentage = discountApplicable ? 10 : null
  return Response.json(
    { data: { discountApplicable, couponCode, discountPercentage } },
    { status: 200 }
  );
}
