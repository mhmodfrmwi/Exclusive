import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicRating from "@/components/ui/ratingStars";
import Image from "next/image";
import { Eye, Heart } from "lucide-react";
const CardComponent = ({ image, title, price }) => {
  return (
    <Card>
      <CardHeader className="bg-slate-100">
        <Image
          src={image}
          alt="product image"
          width={150}
          height={100}
          className="h-40 mx-auto"
        />
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-base font-semibold">{title.slice(0, 24)}.</p>
        <p className="text-red-600 text-base font-medium">{price}$</p>
      </CardContent>
      <CardFooter>
        <BasicRating />
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
