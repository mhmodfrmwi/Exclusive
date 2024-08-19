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
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1">
            {Array.from({ length: products.length / 3 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <CardComponent
                    image={products[index].images[0]}
                    title={products[index].title}
                    price={products[index].price}
                    product={products[index]}
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
