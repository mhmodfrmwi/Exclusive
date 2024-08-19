import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Instagram from "../../assets/instagramLight.svg";
import Twitter from "../../assets/twitterLight.svg";
import Linkedin from "../../assets/LinkedinLight.svg";
import manager from "../../assets/manager.jpeg";
import managerDirector from "../../assets/managerDirector.jpg";
import productDesigner from "../../assets/productDesigner.jpg";
const ManagersComponent = () => {
  return (
    <Carousel className="w-full mx-auto">
      <CarouselContent className="-ml-1">
        <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col gap-4 border-0">
            <CardHeader>
              <Image src={manager} alt="manager one" className="h-80 w-80" />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <h1 className="text-3xl font-medium">Christian Bale</h1>
              <h3>Founder & Chairman</h3>
              <div className="flex gap-3">
                <Image
                  src={Instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
                <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  className="cursor-pointer"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={2} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col gap-4 border-0">
            <CardHeader>
              <Image
                src={managerDirector}
                alt="manager one"
                className="h-80 w-80"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <h1 className="text-3xl font-medium">Joaquin Phoenix</h1>
              <h3>Managing Director</h3>
              <div className="flex gap-3">
                <Image
                  src={Instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
                <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  className="cursor-pointer"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem key={3} className="pl-1 md:basis-1/2 lg:basis-1/3">
          <Card className="flex flex-col gap-4 border-0">
            <CardHeader>
              <Image
                src={productDesigner}
                alt="manager one"
                className="h-80 w-80"
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <h1 className="text-3xl font-medium">Phillip Brooks </h1>
              <h3>Product Designer</h3>
              <div className="flex gap-3">
                <Image
                  src={Instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
                <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  className="cursor-pointer"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
export default ManagersComponent;
