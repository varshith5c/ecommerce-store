"use client";

import React from "react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { ProductType } from "@/types";
import { addCartProduct } from "@/utils";
import { useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
const CartWrapper = ({
  productData: { id, name, price },
  children,
}: {
  productData: ProductType;
  children: React.ReactNode;
}) => {
  const { toast } = useToast();
  const handleAddToCart = async () => {
    await addCartProduct({ id, name, price });
    toast({
      title: "Item added successfully",
      // description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <>
      {children}
      <CardFooter className="flex gap-2">
        <Button>Buy now</Button>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </CardFooter>
      <Toaster />

    </>
  );
};

export default CartWrapper;
