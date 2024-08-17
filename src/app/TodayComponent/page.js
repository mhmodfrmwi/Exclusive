"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks.js";
import ProductsComponent from "@/components/ui/ProductsComponent.jsx";
import { fetchProducts } from "../rtk/products-slice.js";
import CountDown from "./CountDown.js";
export default function TodayComponent() {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">Today’s</p>
      </div>
      <div className="flex gap-20 items-start max-[640px]:flex-col max-[640px]:gap-10">
        <h1 className="text-4xl font-semibold text-gray-900 my-auto">
          Flash Sales
        </h1>
        <CountDown />
      </div>
      <ProductsComponent products={products} navigations={true} />
      <div className="flex w-full justify-center">
        <Button className="bg-red-600 w-56" size="lg">
          {" "}
          View All Products
        </Button>
      </div>
    </div>
  );
}
