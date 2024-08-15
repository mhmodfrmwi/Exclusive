import ps5Pic from "../../assets/ps5.svg";
import speakers from "../../assets/echo.svg";
import perfume from "../../assets/perfume.svg";
import Link from "next/link";
import delivery from "../../assets/delivery.svg";
import moneyBack from "../../assets/moneyback.svg";
import Image from "next/image";
const NewArrival = () => {
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-6 mt-6">
      <div className="flex gap-3 items-center">
        <div className="w-5 h-10 rounded-sm bg-red-600"></div>
        <p className="font-semibold text-base text-red-600">Featured</p>
      </div>
      <h1 className="text-3xl font-semibold text-gray-900">New Arrival</h1>
      <div className="grid grid-cols-2 gap-10 max-[1025px]:grid-cols-1">
        <div
          className="relative flex flex-col bg-black content-end"
          style={{ height: "auto", width: "auto" }}
        >
          {/* Image - the base layer */}
          <Image
            alt="image"
            src={ps5Pic}
            style={{ width: "auto", height: "auto" }}
          />

          {/* Text div - hidden by default, shown on hover */}
          <div className="absolute inset-0 flex flex-col gap-3 p-4 bg-opacity-70 bg-black text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
            <h1 className="text-2xl font-semibold">PlayStation 5</h1>
            <p className="text-slate-200">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <Link href="" className="text-base font-medium underline">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-5">
          <div className="w-full bg-black" style={{ height: "282px" }}>
            <div className="relative top-28 left-4 flex flex-col gap-3">
              <h1 className="text-2xl font-semibold text-white">
                Women’s Collections
              </h1>
              <p>
                Featured woman collections that give <br /> you another vibe.
              </p>
              <Link
                href=""
                className="text-base font-medium text-white underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex gap-5 max-[1025px]:flex-col">
            <div className="relative w-full h-full">
              <div className="flex bg-black w-full h-full justify-center p-4">
                <Image
                  alt="image"
                  src={speakers}
                  className="w-auto h-56 my-auto"
                />
              </div>

              {/* Text div - hidden by default, shown on hover */}
              <div className="absolute inset-0 flex flex-col gap-3 p-4 bg-opacity-70 bg-black text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-2xl font-semibold">Speakers</h1>
                <p className="text-slate-200">Amazon wireless speakers </p>
                <Link href="" className="text-base font-medium underline">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="relative w-full h-full">
              <div className="flex bg-black w-full h-full justify-center p-4">
                <Image
                  alt="image"
                  src={perfume}
                  className="w-auto h-56 my-auto"
                />
              </div>

              {/* Text div - hidden by default, shown on hover */}
              <div className="absolute inset-0 flex flex-col gap-3 p-4 bg-opacity-70 bg-black text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h1 className="text-2xl font-semibold">Perfume</h1>
                <p className="text-slate-200">GUCCI INTENSE OUD EDP </p>
                <Link href="" className="text-base font-medium underline">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};
export default NewArrival;
