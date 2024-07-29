"use client";

import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <div className="flex justify-around p-20 bg-black text-slate-50 w-auto h-auto max-[430px]:flex-col ">
      {" "}
      <ul className="flex flex-col gap-4">
        <li>
          <h1 className="text-2xl font-bold">Exclusive</h1>
        </li>
        <li>
          <h2 className="font-medium text-xl">Subscribe</h2>
        </li>
        <li className="text-sm font-normal text-slate-400">
          Get 10% off your first order
        </li>
        <li>
          <Input placeholder="Enter your email" className="bg-black" />
        </li>
      </ul>
      <ul className="flex flex-col gap-4 text-sm font-medium">
        <li>
          <h1 className="text-xl font-medium">Support</h1>
        </li>
        <li className="text-sm font-normal text-slate-400">
          111 Bijoy Sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </li>
        <li className="text-sm font-normal text-slate-400">
          exclusive@gmail.com
        </li>
        <li className="text-sm font-normal text-slate-400">
          +88015-88888-9999
        </li>
      </ul>
      <ul className="flex flex-col gap-2 text-sm font-medium">
        <li>
          <h1 className="text-xl font-medium">Account</h1>
        </li>
        <li className="text-sm font-normal text-slate-400">My Account</li>
        <li className="text-sm font-normal text-slate-400">Login / Register</li>
        <li className="text-sm font-normal text-slate-400">Cart</li>
        <li className="text-sm font-normal text-slate-400">Wishlist</li>
        <li className="text-sm font-normal text-slate-400">Shop</li>
      </ul>
      <ul className="flex flex-col gap-2 text-sm font-medium">
        <li>
          <h1 className="text-xl font-medium">Quick Link</h1>
        </li>
        <li className="text-sm font-normal text-slate-400">Privacy Policy</li>
        <li className="text-sm font-normal text-slate-400">Terms Of Use</li>
        <li className="text-sm font-normal text-slate-400">FAQ</li>
        <li className="text-sm font-normal text-slate-400">Contact</li>
      </ul>
    </div>
  );
}
