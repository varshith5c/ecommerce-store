import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import React from "react";

const Cart = async () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 344,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col gap-4  p-4 mx-80">
      <h1 className="text-3xl text-bold">Cart </h1>
      <div>
        {products.map((product) => {
          return (
            <Card key={product.id} className="flex justify-around p-6 ">
              <div>{product.name}</div>
              <div>Rs.{product.price}</div>
            </Card>
          );
        })}
      </div>
      <div>
        <Button>Place order</Button>
      </div>
    </main>
  );
};

export default Cart;
