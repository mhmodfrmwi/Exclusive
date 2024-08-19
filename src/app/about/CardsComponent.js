import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import shop from "../../assets/shop.svg";
import bags from "../../assets/bags.svg";
import money from "../../assets/money.svg";
import Image from "next/image";
const CardsComponent = () => {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent className="-ml-1">
        <CarouselItem key={1} className="pl-1  md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col items-center text-center w-72">
            <CardHeader>
              <Image src={shop} />
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">10.5k </h1>
              <p>Sallers active our site</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={2} className="pl-1  md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col items-center text-center w-72">
            <CardHeader>
              <Image src={bags} />
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">45.5k</h1>
              <p>Customer active in our site</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={3} className="pl-1  md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col items-center text-center w-72">
            <CardHeader>
              <Image src={money} />
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">25k </h1>
              <p>Anual gross sale in our site</p>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={4} className="pl-1  md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col items-center text-center w-72">
            <CardHeader>
              <Image src={shop} />
            </CardHeader>
            <CardContent>
              <h1 className="text-3xl font-bold">55k </h1>
              <p>Customer is the most important</p>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
export default CardsComponent;
