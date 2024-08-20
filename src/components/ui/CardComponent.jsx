"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import BasicRating from "@/components/ui/ratingStars";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/rtk/cart-slice";
import { addToFavourite, deleteFromFavourite } from "@/app/rtk/favourite-slice";
import {
  addToWatchLater,
  deleteFromWatchLater,
} from "@/app/rtk/watchLater-slice";
import { fetchFromLocalStorage, saveToLocalStorage } from "@/lib/utils";
const CardComponent = ({ image, title, price, product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isViewed, setIsViewed] = useState(false);
  const dispatch = useDispatch();
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

  const toggleView = () => {
    setIsViewed(!isViewed);
    let data = fetchFromLocalStorage("watchLater");
    if (!isViewed) {
      dispatch(addToWatchLater(product));
      data.push(product);
    } else {
      dispatch(deleteFromWatchLater(product));
      data.filter((element) => element !== product);
    }
    saveToLocalStorage("watchLater", data);
  };
  const handleCart = () => {
    let data = fetchFromLocalStorage("cart");
    const checkFound = data.find((element) => element.title === product.title);
    if (checkFound) {
      checkFound.quantity += 1;
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
    <Card className="group relative">
      <CardHeader className="relative bg-slate-100">
        <Image
          src={image}
          alt="product image"
          width={150}
          height={80}
          className="h-48 mx-auto"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          <p className="flex cursor-pointer bg-white rounded-3xl w-7 h-7 justify-center items-center">
            <Heart
              className={`w-5 h-5 cursor-pointer ${
                isLiked ? "text-red-500 fill-current" : ""
              }`}
              onClick={toggleLike}
            />
          </p>
          <p className="flex cursor-pointer bg-white rounded-3xl w-7 h-7 justify-center items-center">
            <Eye
              className={`w-5 h-5 cursor-pointer ${
                isViewed ? "text-gray-900 fill-current" : ""
              }`}
              onClick={toggleView}
            />
          </p>
        </div>
        <div className="absolute top-2 left-2 flex bg-red-600 w-11 h-6 rounded text-center items-center text-white text-xs font-normal">
          <p className="mx-auto">-30%</p>
        </div>
        {/* Add to Cart button */}
        <p
          onClick={handleCart}
          className="absolute bottom-0 left-0 right-0 flex bg-black text-white w-full h-10 text-center justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to cart
        </p>
      </CardHeader>

      <CardContent className="mt-4">
        <p className="text-base font-semibold">{title.slice(0, 12)}.</p>
        <p className="text-red-500 text-sm font-medium">
          ${price}
          {"   "}
          <span className="line-through text-gray-500">
            ${(price + price * 0.3).toFixed(2)}
          </span>
        </p>
      </CardContent>
      <CardFooter>
        <BasicRating /> <span>(70)</span>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
