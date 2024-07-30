import { Button } from "@/components/ui/button";
import Image from "next/image";
import TodayComponent from "./TodayComponent/page";
export default function Home() {
  return (
    <div className="container">
      <TodayComponent />
    </div>
  );
}
