"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/products-slice";
import ProductsComponent from "@/components/ui/ProductsComponent";
import RefreshLink from "@/components/ui/refreshLink";
const BestSellingComponent = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, []);
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">This Month</p>
      </div>
      <div className="flex justify-between max-[430px]:flex-col">
        <h1 className="text-3xl font-semibold text-gray-900">
          Best Selling Products
        </h1>
        <RefreshLink href={"/products"}>
          <Button className="bg-red-600 w-44"> View All</Button>
        </RefreshLink>
      </div>
      <ProductsComponent products={products} navigations={false} />
    </div>
  );
};
export default BestSellingComponent;
