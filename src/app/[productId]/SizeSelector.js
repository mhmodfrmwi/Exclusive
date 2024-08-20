import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import based on your project structure
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("M"); // Default selected size

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium">Size:</span>
      <Carousel>
        <CarouselContent className="-ml-1 w-auto">
          {sizes.map((size, index) => (
            <CarouselItem
              key={index}
              className="pl-1 w-auto basis-1/4 md:basis-1/4 lg:basis-1/5"
            >
              <Button
                key={size}
                variant={selectedSize === size ? "primary" : "outline"}
                className={`w-10 h-10 rounded-md ${
                  selectedSize === size ? "bg-red-500 text-white" : "text-black"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SizeSelector;
