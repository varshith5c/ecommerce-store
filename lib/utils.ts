import { ProductType } from "@/types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addProducts(products: ProductType[]) {
  return products.reduce((acc, curr) => {
    return acc + curr?.price;
  }, 0)
}