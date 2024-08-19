import Link from "next/link";
import ecommerceImage from "../../assets/e-commerce-shop-online-homepage-sale-concept.jpg";
import Image from "next/image";
import CardsComponent from "./CardsComponent";
import Services from "../NewArrival/Services";
import ManagersComponent from "./ManagersComponent";
const About = () => {
  return (
    <div className="container py-4 w-10/12 mx-auto flex flex-col gap-16 mt-6 max-[770px]:items-center">
      <h1 className="text-stone-400">
        <Link href={"/"}>Home</Link>/<span className="text-black">About</span>
      </h1>
      <div className="flex justify-between text-black max-[770px]:flex-col max-[770px]:gap-5 items-center">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-6xl font-semibold">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            <br />
            makterplace with an active presense in Bangladesh. Supported by wide
            <br />
            range of tailored marketing, data and service solutions, Exclusive
            has
            <br />
            10,500 sallers and 300 brands and serves 3 millioons customers
            across
            <br />
            the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing at a
            very
            <br />
            fast. Exclusive offers a diverse assotment in categories ranging
            from
            <br />
            consumer.
          </p>
        </div>
        <Image src={ecommerceImage} className="w-96 h-80" />
      </div>
      <CardsComponent />
      <ManagersComponent />
      <Services />
    </div>
  );
};
export default About;
