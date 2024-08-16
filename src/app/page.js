import { Button } from "@/components/ui/button";
import Image from "next/image";
import TodayComponent from "./TodayComponent/page";
import CategoryComponent from "./CategoryComponent/page";
import BestSellingComponent from "./BestSellingComponent/page";
import ImageComponent from "./ImageComponent/page";
import OurProductsComponents from "./OurProductsComponent/page";
import NewArrival from "./NewArrival/page";
import CardComponent from "@/components/ui/CardComponent";
export default function Home() {
  return (
    <div className="container gap-4">
      <TodayComponent />
      <CategoryComponent />
      <BestSellingComponent />
      <ImageComponent />
      <OurProductsComponents />
      <NewArrival />
    </div>
  );
}
