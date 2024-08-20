"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Truck, RefreshCcw } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "../rtk/products-slice";
import SizeSelector from "./SizeSelector";
import Link from "next/link";
import { fetchFromLocalStorage, saveToLocalStorage } from "@/lib/utils";
import { addToFavourite, deleteFromFavourite } from "../rtk/favourite-slice";
import { addToCart } from "../rtk/cart-slice";

const ProductPage = (props) => {
  const productId = +props.params.productId;
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const product = products.find((element) => element.id === productId);
  console.log(product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
    let data = fetchFromLocalStorage("wishlist");

    if (!isLiked) {
      dispatch(addToFavourite(product));
      data.push(product);
    } else {
      dispatch(deleteFromFavourite(product));
      data.filter((element) => element !== product);
    }
    saveToLocalStorage("wishlist", data);
  };
  const [image, setImage] = useState(0);
  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };
  const imageHandler = (image) => {
    setImage(image);
  };
  const handleCart = () => {
    let data = fetchFromLocalStorage("cart");
    const checkFound = data.find((element) => element.title === product.title);
    if (checkFound) {
      checkFound.quantity += quantity;
    } else {
      const updatedProduct = {
        quantity: 1,
        ...product,
      };
      data.push(updatedProduct);
    }
    saveToLocalStorage("cart", data);
    dispatch(addToCart(data));
    console.log(data);
  };
  return (
    <div className="flex flex-col py-8 w-10/12 mx-auto gap-16 mt-6">
      {" "}
      <h1 className="text-stone-400">
        <Link href={"/"}>Home</Link>/
        <span className="text-black">{product?.title}</span>
      </h1>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-black items-center">
        <div className="flex flex-col gap-4 items-center">
          <Image
            src={product?.images[image] || product?.images[0]}
            alt="Main product"
            width={500}
            height={500}
            className="object-contain bg-slate-100"
          />
          <div className="grid grid-cols-4 gap-2">
            <Image
              src={product?.images[0]}
              alt="Product thumbnail"
              width={200}
              height={200}
              className="object-contain cursor-pointer bg-slate-100"
              onClick={() => imageHandler(0)}
            />
            <Image
              src={product?.images[1] ? product?.images[1] : product?.images[0]} // Replace with actual image path
              alt="Product thumbnail"
              width={200}
              height={200}
              className="object-contain cursor-pointer bg-slate-100"
              onClick={() => imageHandler(1)}
            />
            <Image
              src={product?.images[2] ? product?.images[2] : product?.images[0]} // Replace with actual image path
              alt="Product thumbnail"
              width={200}
              height={200}
              className="object-contain cursor-pointer bg-slate-100"
              onClick={() => imageHandler(2)}
            />
            <Image
              src={product?.images[3] ? product?.images[3] : product?.images[0]} // Replace with actual image path
              alt="Product thumbnail"
              width={200}
              height={200}
              className="object-contain cursor-pointer bg-slate-100"
              onClick={() => imageHandler(3)}
            />
          </div>
        </div>

        {/* Right section with product details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <div className="flex items-center gap-2">
            <div className="text-yellow-400">★★★★☆</div>
            <span className="text-gray-600">
              ({product?.reviews.length} Reviews)
            </span>
            <span className="text-green-500">In Stock</span>
          </div>
          <div className="text-2xl font-semibold">${product?.price}</div>
          <p className="text-gray-600">{product?.description}</p>
          <div className="flex flex-col gap-4">
            {/* Color options */}

            {/* Size options */}
            <SizeSelector />

            {/* Quantity and Buy Now */}
            <div className="flex items-center gap-4 w-auto max-[321px]:flex-col">
              <div className="flex items-center border-0">
                <Button
                  onClick={() => handleQuantityChange(-1)}
                  className="border bg-white text-zinc-500 text-lg hover:bg-red-600 hover:text-white"
                >
                  -
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  className="w-14 text-center border-0"
                  readOnly
                />
                <Button
                  onClick={() => handleQuantityChange(1)}
                  className="border bg-white text-zinc-500 text-lg hover:bg-red-600 hover:text-white"
                >
                  +
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="bg-red-500 text-white" onClick={handleCart}>
                  Buy Now
                </Button>
                <Button variant="outline">
                  <Heart
                    className={`w-6 h-6 cursor-pointer ${
                      isLiked ? "text-red-500 fill-current" : ""
                    }`}
                    onClick={toggleLike}
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Delivery and Return */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <div>
                <strong>Free Delivery</strong>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCcw className="w-6 h-6" />
              <div>
                <strong>Return Delivery</strong>
                <p>
                  Free 30 Days Delivery Returns. <a href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
