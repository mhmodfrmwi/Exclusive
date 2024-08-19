import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Page";
import CarouselComponent from "./Carousel/page";
import Footer from "./Footer/page";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "Full E-Commerce website",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`h-screen ${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
