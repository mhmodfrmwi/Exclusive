"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const products = useAppSelector((state) => state.cart);
  console.log(products);
  return (
    <div className="container p-10 flex flex-col gap-10 min-h-72">
      <h className="text-stone-400">
        <Link href={"/"}>Home</Link>/<span className="text-black">Cart</span>{" "}
      </h>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            <TableRow>
              <TableCell className="font-medium">
                <Image src={product.images[0]} alt={product.title} />
                {product.title}
              </TableCell>
              <TableCell>{product.price}$</TableCell>
              <TableCell>
                <input
                  type="number"
                  min="1"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </TableCell>
              <TableCell className="text-right">{product.price}$</TableCell>
            </TableRow>;
          })}
          <TableRow>
            <TableCell className="font-medium">product 1</TableCell>
            <TableCell>$</TableCell>
            <TableCell>
              <input
                type="number"
                class="w-16 h-9 p-3 border bg-white border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                min="1"
              />
            </TableCell>
            <TableCell className="text-right">$500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default Cart;
