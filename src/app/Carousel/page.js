"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const Images = {
    homeSlide: [
      "/src/assets/home-slide-1.png",
      "/src/assets/home-slide-2.png",
      "/src/assets/home-slide-3.png",
      "/src/assets/home-slide-4.png",
    ],
    product: ["src/assets/T-shirt.jpg"],
  };
  return (
    <div className="p-6">
      <Carousel
        plugins={[plugin.current]}
        className="w-full "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {Images.homeSlide.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      width={500}
                      height={300}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
