"use client";
import { Button } from "@/components/ui/button";
import CardComponent from "@/components/ui/CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/products-slice";
import ProductsComponent from "@/components/ui/ProductsComponent";
import RefreshLink from "@/components/ui/refreshLink";
const OurProductsComponents = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">Our Products</p>
      </div>
      <h1 className="text-3xl font-semibold text-gray-900">
        Explore Our Products
      </h1>
      <ProductsComponent products={products} navigations={true} />
      <ProductsComponent products={products} navigations={true} />
      <div className="flex w-full justify-center">
        <RefreshLink href={"/products"}>
          <Button className="bg-red-600 w-56" size="lg">
            {" "}
            View All Products
          </Button>
        </RefreshLink>
      </div>
    </div>
  );
};
export default OurProductsComponents;
