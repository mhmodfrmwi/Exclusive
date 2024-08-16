"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CardComponent from "@/components/ui/CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import products from "../data.js";
import { useEffect } from "react";
export default function TodayComponent() {
  let counter = 60;
  const secondsHandler = (counter) => {
    setTimeout((counter) => counter--, 1000);
  };
  useEffect(() => {
    console.log(products);
  }, {});
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
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col">
            days
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 15 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            hours
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 10 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            min
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": 24 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            sec
            <span className="countdown font-mono text-4xl">
              <span style={{ "--value": counter }}></span>
            </span>
          </div>
        </div>
      </div>
      <Carousel className="w-full mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: products.length / 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <CardComponent
                  image={products[index].images[0]}
                  title={products[index].title}
                  price={products[index].price}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex w-full justify-center">
        <Button className="bg-red-600 w-56" size="lg">
          {" "}
          View All Products
        </Button>
      </div>
    </div>
  );
}
