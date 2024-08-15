import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const OurProductsComponents = () => {
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">Our Products</p>
      </div>
      <h1 className="text-3xl font-semibold text-gray-900">
        Explore Our Products
      </h1>
      <Carousel className="w-full mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="w-full mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex w-full justify-center">
        <Button className="bg-red-600 w-56" size="lg">
          {" "}
          View All Products
        </Button>
      </div>
    </div>
  );
};
export default OurProductsComponents;
