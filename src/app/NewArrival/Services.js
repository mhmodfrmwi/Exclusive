import Image from "next/image";
import delivery from "../../assets/delivery.svg";
import moneyBack from "../../assets/moneyback.svg";
const Services = () => {
  return (
    <div className="flex justify-between gap-5 p-24 text-center max-[1024px]:px-14 max-[768px]:px-0 max-[426px]:flex-col">
      <div className="flex flex-col gap-4 items-center">
        <Image alt="image" src={delivery} />
        <h1 className="text-xl font-semibold text-black">
          FREE AND FAST DELIVERY
        </h1>
        <p className="text-black text-sm font-normal">
          Free delivery for all orders over $140
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image alt="image" src={moneyBack} />{" "}
        <h1 className="text-xl font-semibold text-black">
          24/7 CUSTOMER SERVICE
        </h1>
        <p className="text-black text-sm font-normal">
          Friendly 24/7 customer support
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image alt="image" src={moneyBack} />
        <h1 className="text-xl font-semibold text-black">
          MONEY BACK GUARANTEE
        </h1>
        <p className="text-black text-sm font-normal">
          We reurn money within 30 days
        </p>
      </div>
    </div>
  );
};
export default Services;
