import { orderHandler } from "@/services";

// get all order admin info
export async function GET(request: Request) {
  const adminData = orderHandler.getAdminInfo();
  return Response.json({ data: adminData }, { status: 200 });
}
