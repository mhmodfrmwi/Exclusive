"use client"
import { useDispatch, useSelector } from "react-redux";

const { fetchProducts } = require("@/app/rtk/products-slice");

export const fetchData = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  dispatch(fetchProducts());
  return products;
};
