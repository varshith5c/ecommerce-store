"use client";

import CheckoutWrapper from "@/components/custom/checkout-action-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cartHandler } from "@/services";
import { ProductType } from "@/types";
import { getCartProducts } from "@/utils";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const Cart = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProducts() {
      const data = await getCartProducts();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <CheckoutWrapper doesProductsExist={Boolean(products.length)}>
      <main>
        <h1 className="my-2 text-3xl text-bold">Cart </h1>
        {Boolean(products.length) ? (
          <div className="flex flex-col gap-2">
            {products.map((product) => {
              return (
                <Card key={product.id} className="flex  justify-around p-6 ">
                  <div>{product.name}</div>
                  <div>Rs.{product.price}</div>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="flex justify-between p-10 text-xl">
            No items in your cart
          </Card>
        )}
      </main>
    </CheckoutWrapper>
  );
};

export default Cart;
