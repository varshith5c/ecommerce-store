"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { DialogFooter } from "../ui/dialog";
import { addOrder } from "@/utils";
const OrderWrapper = ({
  discountApplied,
  children,
}: {
  discountApplied: boolean;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const handleOrder = async () => {
    const orderId = await addOrder(discountApplied);
    router.push(`/success?orderId=${orderId}`);
  };
  return (
    <>
      {children}
      <DialogFooter>
        <Button type="submit" onClick={handleOrder}>
          Confirm
        </Button>
      </DialogFooter>
    </>
  );
};

export default OrderWrapper;
