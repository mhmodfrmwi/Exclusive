import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function TodayComponent() {
  let counter = 60;
  const secondsHandler = (counter) => {
    setTimeout((counter) => counter--, 1000);
  };
  return (
    <div className="py-4 w-11/12 mx-auto flex flex-col gap-4">
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
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            hours
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            min
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
          </div>
          <div className="flex flex-col">
            sec
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": counter }}></span>
            </span>
          </div>
        </div>
      </div>
      <Carousel className="w-full mx-auto">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
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
