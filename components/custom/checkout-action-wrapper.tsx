"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import addToCart from "@/utils/actions";
const CheckoutWrapper = ({
  doesProductsExist,
  children,
}: {
  doesProductsExist: boolean;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const handleProceedToBuy = ()=>{
    router.push('/cart')
  };
  return (
    <div className=" mx-80 p-4">
      {children}
      {doesProductsExist && (
        <Button onClick={handleProceedToBuy} className="my-4">
          Proceed to buy
        </Button>
      )}
    </div>
  );
};

export default CheckoutWrapper;
