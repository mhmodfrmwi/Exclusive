"use client";
import ProductsComponent from "@/components/ui/ProductsComponent";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "../rtk/products-slice";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const ProductsPage = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-black">Just for you</p>
      </div>
      <ProductsComponent products={products} navigations={true} />
      <div className="flex flex-col gap-10 text-slate-900 text-center">
        <Link href={"/"}>
          <Button className="bg-red-600 text-white">Back to Home page</Button>
        </Link>
      </div>
    </div>
  );
};
export default ProductsPage;
