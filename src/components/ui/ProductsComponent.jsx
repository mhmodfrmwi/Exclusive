"use client";
import { useState, useEffect } from "react";
import CardComponent from "@/components/ui/CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Loader from "@/components/ui/loader";

const ProductsComponent = ({ products, navigations }) => {
  const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 500);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1">
            {products.map((product, index) => (
              <CarouselItem
                key={product.id}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <CardComponent
                    image={product.images[0]}
                    title={product.title}
                    price={product.price}
                    product={product}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {navigations && <CarouselPrevious />}
          {navigations && <CarouselNext />}
        </Carousel>
      )}
    </>
  );
};

export default ProductsComponent;
