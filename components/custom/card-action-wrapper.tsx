"use client";

import React from "react";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { useRouter } from "next/navigation";
const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handleAddToCart = async () => {
    const data = await fetch("http://localhost:3000/api/cart", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        
      }),
    }).then((res) => res.json());
    router.push("/cart");
  };
  return (
    <>
      {children}
      <CardFooter className="flex gap-2">
        <Button onClick={handleAddToCart}>Buy now</Button>
        <Button>Add to cart</Button>
      </CardFooter>
    </>
  );
};

export default CardWrapper;
