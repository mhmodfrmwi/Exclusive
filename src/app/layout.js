import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Page";
import CarouselComponent from "./Carousel/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "Full E-Commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
        <CarouselComponent />
        <Footer />
      </body>
    </html>
  );
}
