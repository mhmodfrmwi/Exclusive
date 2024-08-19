"use client";

import { Input } from "@/components/ui/input";
import qrCode from "../../assets/QrCode.svg";
import Image from "next/image";
import googleplay from "../../assets/googleplay.svg";
import appstore from "../../assets/appstore.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col justify-around gap-5 p-20 bg-black text-slate-50 w-auto h-auto md:flex-row lg:flex-row md:basis-1/3 lg:basis-1/4 text-start">
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
      <ul className="flex flex-col gap-4 text-sm font-medium">
        <li>
          <h1 className="text-xl font-medium">Download App</h1>
        </li>
        <li className="text-sm font-normal text-slate-400">
          Save $3 with App New User Only
        </li>
        <li className="flex justify-between text-sm font-normal text-slate-400">
          <div>
            <Image src={qrCode} alt="Qr code" />
          </div>
          <div className="flex flex-col gap-3">
            <Image src={googleplay} alt="Google Play" />
            <Image src={appstore} alt="Google Play" />
          </div>
        </li>
        <li className="flex justify-between text-sm font-normal text-slate-400">
          <Link href="https://www.facebook.com/mahmoud.elframawi">
            <Image src={Facebook} alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/ma_hmoud_elframawi/">
            <Image src={instagram} alt="instagram" />
          </Link>
          <Link href="https://x.com/_mhmod__">
            <Image src={Twitter} alt="Twitter" />
          </Link>
          <Link href="https://www.linkedin.com/in/mahmoud-elframawi-94a410271/">
            <Image src={Linkedin} alt="Linkedin" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
