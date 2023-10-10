import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="p-10 flex flex-col items-center gap-3">
        <CardTitle>Thank you for ordering !</CardTitle>
        <Link href="/">
          <Button>Shop more</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Success;
