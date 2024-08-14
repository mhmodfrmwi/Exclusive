"use client";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import homeslide1 from "../../assets/home-slide-1.png";
import homeslide2 from "../../assets/home-slide-2.png";
import homeslide3 from "../../assets/home-slide-3.png";
import homeslide4 from "../../assets/home-slide-4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export default function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const Images = [homeslide1, homeslide2, homeslide3, homeslide4];

  return (
    <div className="p-6">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {Images.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center p-0">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={1200}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
