import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const Order = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 344,
    },
  ];
  return (
    <Dialog>
      <main className="flex flex-col gap-4  p-4 mx-80">
        <h1 className="text-3xl text-bold">Order </h1>
        <Card className="p-10">
          <div className="flex justify-end items-center">
            <Button>Check for coupon</Button>
          </div>
          <p className="my-4">
            Coupon: <em>BIGB2023</em>
          </p>
          {products.map((product) => {
            return (
              <div key={product.id} className="flex justify-between ">
                <div>{product.name}</div>
                <div>Rs.{product.price}</div>
              </div>
            );
          })}

          <CardFooter className="flex justify-end my-4 pt-4  border-t-2">
            Total:234
          </CardFooter>
        </Card>
        <DialogTrigger asChild>
          <Button>Order</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Do you want to place the order?</DialogTitle>
            <DialogDescription>
              Order for 2 items will be placed
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </main>
    </Dialog>
  );
};

export default Order;
