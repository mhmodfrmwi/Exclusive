import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const BestSellingComponent = () => {
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">This Month</p>
      </div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">
          Best Selling Products
        </h1>
        <Button className="bg-red-600 w-48" size="lg">
          {" "}
          View All
        </Button>
      </div>
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
    </div>
  );
};
export default BestSellingComponent;
