import CardWrapper from "@/components/custom/cart-action-wrapper";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProducts } from "@/utils";

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="flex min-h-screen flex-col gap-4  p-4">
      <Header />
      <div className="grid grid-cols-4 gap-2 ">
        {products.map(({ id, name, price }) => {
          return (
            <Card key={id}>
              <CardWrapper
                productData={{ id, name, price }}
              >
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>Rs.{price}</CardDescription>
                </CardHeader>
                {/* <CardContent>
                <p>P Content</p>
              </CardContent> */}
              </CardWrapper>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
