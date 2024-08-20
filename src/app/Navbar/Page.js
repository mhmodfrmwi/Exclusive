"use client";
import * as React from "react";
import Link from "next/link";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import RefreshLink from "@/components/ui/refreshLink";
export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Contact", path: "/contact" },
    { title: "About", path: "/about" },
    { title: "Sign Up", path: "/signup" },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setState(true);
      } else {
        setState(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className={`bg-white w-full border-b min-[820px]:border-0 shadow p-2`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto min-[820px]:flex min-[820px]:px-8">
        <div className="flex items-center justify-between py-3 min-[820px]:py-5 min-[820px]:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-950">Exclusive</h1>
          </Link>
          <div className="min-[820px]:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 min-[820px]:block min-[820px]:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 min-[820px]:flex min-[820px]:space-x-6 min-[820px]:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {state && (
          <div className="flex gap-4">
            <button>
              <Link href={"/wishlist"}>
                <Heart className="w-6 h-6 text-black" />
              </Link>
            </button>
            <button>
              <RefreshLink href={"/cart"}>
                <ShoppingCart className="w-6 h-6 text-black" />
              </RefreshLink>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
