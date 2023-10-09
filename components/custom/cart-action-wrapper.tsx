"use client";

import React from "react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types";
import { addCartProduct } from "@/utils";
const CardWrapper = ({
  productData: { id, name, price },
  children,
}: {
  productData: ProductType;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const handleAddToCart = async () => {
    const data = await addCartProduct({ id, name, price });
    router.push("/cart");
  };
  return (
    <>
      {children}
      <CardFooter className="flex gap-2">
        <Button>Buy now</Button>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </CardFooter>
    </>
  );
};

export default CardWrapper;
