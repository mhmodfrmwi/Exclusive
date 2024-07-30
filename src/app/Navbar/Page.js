"use client";

import * as React from "react";
import Link from "next/link";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function Navbar() {
  const [state, setState] = React.useState(true);

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
    <nav className={`bg-white w-full border-b min-[790px]:border-0 shadow p-2`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto min-[790px]:flex min-[790px]:px-8">
        <div className="flex items-center justify-between py-3 min-[790px]:py-5 min-[790px]:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-gray-950">Exclusive</h1>
          </Link>
          <div className="min-[790px]:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 min-[790px]:block min-[790px]:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 min-[790px]:flex min-[790px]:space-x-6 min-[790px]:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {state && (
          <div className="flex gap-4">
            <Input type="text" placeholder="What are you looking for?" />
            <button>
              <Heart className="w-6 h-6 " />
            </button>
            <button>
              <ShoppingCart className="w-6 h-6 " />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
