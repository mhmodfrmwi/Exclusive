import { Button } from "@/components/ui/button";
import Image from "next/image";
import TodayComponent from "./TodayComponent/page";
import CategoryComponent from "./CategoryComponent/page";
import BestSellingComponent from "./BestSellingComponent/page";
import ImageComponent from "./ImageComponent/page";
export default function Home() {
  return (
    <div className="container gap-4 ">
      <TodayComponent />
      <CategoryComponent />
      <BestSellingComponent />
      <ImageComponent />
    </div>
  );
}
