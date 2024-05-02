"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  IconMinus,
  IconPlus,
  IconSquareRoundedX,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  setOpen: (value: boolean) => void;
}

export const DropDownCart: FC<Props> = ({ setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<any[]>([]);

  const findProductById = (products: Product[], cartProductIds: number[]) => {
    let cart = [];
    if (products) {
      for (let number of cartProductIds) {
        for (let product of products) {
          if (product.id === number) {
            cart.push(product);
          } else {
            console.log(
              `No match found for product with id ${product.id} and cart product with id ${number}`
            );
          }
        }
      }
      setCart(cart);
    }
  };

  useEffect(() => {
    const cartProductsString = sessionStorage.getItem("cartItems");
    let cartProductIds = [];
    if (cartProductsString !== null) {
      cartProductIds = JSON.parse(cartProductsString);
    }
    fetch(`http://localhost:5000/api/home`)
      .then((res) => res.json())
      .then((json) => {
        findProductById(json.products, cartProductIds);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);





  // const removeFromCart = (index: number) => {
  //   let cartItemsString = sessionStorage.getItem("cartItems");
  //   let cartItems: number[] = [];

  //   if (cartItemsString !== null) {
  //     cartItems = JSON.parse(cartItemsString);
  //   }

  //   let indexToRemove = cartItems[index + 1];

  //   if (indexToRemove !== -1) {
  //     cartItems.splice(indexToRemove, 1);
  //   }

  //   sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   setOpen(false);
  // };



  const getTitle = () => {
    const [titleCounts, setTitleCounts] = useState<{ [key: string]: number }>(
      {}
    );

    useEffect(() => {
      const counts: { [key: string]: number } = {};
      cart.forEach((item) => {
        counts[item.title] = (counts[item.title] || 0) + 1;
      });
      setTitleCounts(counts);
    }, [cart]);

    const uniqueTitles = Object.keys(titleCounts);
    console.log(uniqueTitles);
    return uniqueTitles.map((title, index) => (
      <p
        key={index}
        className="font-bold flex justify-between items-center w-full"
      >
        <span>{title}</span>
        <button 
        className="hover:bg-grey rounded-md hover:text-black">
          {/* <IconMinus onClick={() => removeFromCart(index)} /> */}
        </button>
        <button className="hover:bg-grey rounded-md hover:text-black">
          <IconPlus />
        </button>
        <span className="flex items-center">
          <IconX />
          <span>{titleCounts[title]}</span>
        </span>
      </p>
    ));
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const getTotalWithShipping = () => {
    let total = 0;
    const shippingFee = 5.99;
    cart.forEach((item) => {
      total += item.price;
    });
    const subtotal = total.toFixed(2);
    const totalWithTax = (parseFloat(subtotal) + shippingFee).toFixed(2);
    return totalWithTax;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        ref={dropdownRef}
        className="w-96 fixed top-28 right-10 border py-16 px-8 bg-black rounded-xl z-30"
      >
        <div className="h-full w-full flex flex-col gap-2">
          <h2 className="text-4xl">Summary</h2>
          <div className="flex flex-col justify-center items-center w-full">
            {getTitle()}
          </div>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            {getTotal()}
          </div>
          <div className="flex justify-between">
            <p>Estimated Shipping:</p>
            <p>${"5.99"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Taxes:</p>
            <p>${"0"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Total:</p>
            {getTotalWithShipping()}
          </div>
          <Link href="/checkout">
            <button
              onClick={() => setOpen(false)}
              className="bg-green text-black text-2xl p-4 mt-8 bg-opacity-80 hover:bg-opacity-100 w-full"
            >
              Checkout
            </button>
          </Link>
          <div className="flex justify-center items-center mt-8">
            <p>
              Checkout devStuff{" "}
              <Link href="/terms">
                <span className="text-green hover:cursor-pointer hover:underline">
                  Terms
                </span>{" "}
              </Link>
              and{" "}
              <Link href="/terms">
                <span className="text-green hover:cursor-pointer hover:underline">
                  Services
                </span>
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
