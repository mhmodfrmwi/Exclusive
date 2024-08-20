"use client";
import { Button } from "@/components/ui/button";
import ProductsComponent from "@/components/ui/ProductsComponent";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/products-slice";
const Wishlist = () => {
  const products = useAppSelector((state) => state.products);
  const wishlistProducts = useAppSelector((state) => state.favourite);
  console.log(wishlistProducts);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="container py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <h1 className="text-stone-400">
        <Link href={"/"}>Home</Link>/
        <span className="text-black">Wishlist({wishlistProducts.length})</span>
      </h1>

      {wishlistProducts.length ? (
        <ProductsComponent products={wishlistProducts} navigations={true} />
      ) : (
        <div className="flex flex-col gap-10 text-slate-900 text-center">
          <h1 className="text-4xl font-normal">No products in wishlist</h1>
          <p>You have not added any products in your wishlist yet</p>
          <Link href={"/"}>
            <Button className="bg-red-600 text-white">Back to Home page</Button>
          </Link>
        </div>
      )}

      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-black">Just for you</p>
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
};

export default Wishlist;
