"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { ImSpinner4 } from "react-icons/im";
import { checkCouponCode } from "@/utils";
import { CardFooter } from "../ui/card";
import { Toaster } from "../ui/toaster";
import { useToast } from "../ui/use-toast";
import { CouponStateType, ProductType } from "@/types";
const CouponButton = ({
  coupon,
  setCoupon,
  totalCost,
  children,
}: {
  coupon: any;
  setCoupon: React.Dispatch<React.SetStateAction<CouponStateType>>;
  totalCost: number;
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const data = await checkCouponCode();
      setCoupon({
        generated: true,
        value: data.couponCode,
        discount: data.discountPercentage,
      });
      if (data.couponCode) {
        toast({
          title: "Discount applied",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const discountAppliedCost = Boolean(coupon.discount)
    ? totalCost - (totalCost * coupon.discount) / 100
    : totalCost;

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={handleAddToCart} className="flex gap-2 items-center">
          Check for Discount
          {loading && <ImSpinner4 className="animate-spin text-white" />}
        </Button>
      </div>
      {coupon.value ? (
        <p className="my-4">
          Coupon: <em>{coupon.value}</em>
        </p>
      ) : (
        <>{coupon.generated && <p>Coupon not applicable for this order</p>}</>
      )}
      {children}
      <CardFooter className="flex justify-end my-4 pt-4  border-t-2">
        Total:
        <span>{discountAppliedCost}</span>
      </CardFooter>
      <Toaster />
    </>
  );
};

export default CouponButton;
