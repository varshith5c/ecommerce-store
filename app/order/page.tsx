"use client";
import CouponButton from "@/components/custom/coupon-button";
import OrderWrapper from "@/components/custom/order-action-wrapper";
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
import { addProducts } from "@/lib/utils";
import { ProductType } from "@/types";

import { checkCouponCode, getCartProducts, getProducts } from "@/utils";
import { useEffect, useState } from "react";
const Order = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [coupon, setCoupon] = useState<{
    generated: boolean;
    value: string | null;
    discount: number;
  }>({
    generated: false,
    value: null,
    discount: 0,
  });
  useEffect(() => {
    async function getProducts() {
      const data = await getCartProducts();
      setProducts(data);
    }
    getProducts();
  }, []);

  const totalCost = Boolean(products.length)
    ? addProducts(products)
    : 0;

  return (
    <Dialog>
      <main className="flex flex-col gap-4  p-4 mx-80">
        <h1 className="text-3xl text-bold">Order </h1>
        <Card className="p-10">
          <CouponButton
            coupon={coupon}
            setCoupon={setCoupon}
            totalCost={totalCost}
          >
            {products.map((product) => {
              return (
                <div key={product.id} className="flex justify-between my-4 ">
                  <div>{product.name}</div>
                  <div>Rs.{product.price}</div>
                </div>
              );
            })}
          </CouponButton>
        </Card>

        <DialogTrigger asChild>
          <Button>Order</Button>
        </DialogTrigger>
        <DialogContent>
          <OrderWrapper discountApplied={coupon.generated}>
            <DialogHeader>
              <DialogTitle>Do you want to place the order?</DialogTitle>
              <DialogDescription>
                Order for 2 items will be placed
              </DialogDescription>
            </DialogHeader>
          </OrderWrapper>
        </DialogContent>
      </main>
    </Dialog>
  );
};

export default Order;
