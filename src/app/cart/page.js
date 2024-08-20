"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { deleteFromCart, updateQuantity } from "../rtk/cart-slice";
import cancelIcon from "../../assets/icon-cancel.svg";
import { fetchFromLocalStorage, saveToLocalStorage } from "@/lib/utils";
const Cart = () => {
  const products = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const quantityHandler = (product) => (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  };
  const deleteProduct = (product) => {
    dispatch(deleteFromCart(product));
    let data = fetchFromLocalStorage("cart");
    data = data.filter((element) => element.id !== product.id);
    saveToLocalStorage("cart", data);
  };
  return (
    <div className="container p-10 flex flex-col gap-10 min-h-72">
      <h1 className="text-stone-400">
        <Link href={"/"}>Home</Link>/<span className="text-black">Cart</span>
      </h1>
      <Table className="text-black">
        <TableHeader>
          <TableRow>
            <TableCell className="w-[100px]">Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell className="text-right">Subtotal</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const totalQuantity = product.price * product.quantity;

            return (
              <TableRow key={product.id} className="items-start text-start">
                <TableCell className="font-medium flex gap-3 items-center">
                  <div className="relative group">
                    {/* Product Image */}
                    <Image
                      src={product?.images[0]}
                      alt={product.title}
                      width={50}
                      height={50}
                      className="object-cover"
                    />

                    {/* Cancel Icon */}
                    <Image
                      src={cancelIcon}
                      width={7}
                      height={7}
                      className="absolute top-0 left-0 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteProduct(product)}
                    />
                  </div>

                  {/* Product Title */}
                  <p className="text-center text-sm">
                    {product.title.slice(0, 6)}
                  </p>
                </TableCell>

                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <input
                    value={product.quantity}
                    type="number"
                    min="1"
                    className="p-3 border bg-white w-20 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={quantityHandler(product)}
                  />
                </TableCell>
                <TableCell className="text-right">
                  ${totalQuantity.toFixed(1)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Cart;
