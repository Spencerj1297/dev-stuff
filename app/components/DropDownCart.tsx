"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { IconSquareRoundedX, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { Product } from "../types";
import Image from "next/image";
import { toASCII } from "punycode";
import Link from "next/link";

interface Props {
  setOpen: (value: boolean) => void;
}

export const DropDownCart: FC<Props> = ({ setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const [products, setProducts] = useState<any[]>([]);
  // const [cartProducts, setCartProducts] = useState<number[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  // STEPS TO FIX CART
  // 1. Need to account for getting an array of items instead of one
  // 2. Need to display items with x quanity for how many exisit in the array
  // 3. To remove items. Add + and - to change qaunity of item.
  // 4. If added push into local host array else if delete one of the items correlating with the id.
  // Fix cart open and close

  // const getTotal = () => {
  //   if (products){
  //     const total = (products?.price + 5.99).toFixed(2);
  //     return `$${parseFloat(total)}`;
  //   }else {
  //     return "..."
  //   }

  // }

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

  // OUTSIDE CLICK NOT SURE IF I SHOULD USE YET

  // useEffect(() => {
  //   // Function to handle clicks outside the dropdown
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setOpen(false); // Close the dropdown when clicked outside
  //     }
  //   };

  //   // Event listener for clicks outside the dropdown
  //   document.addEventListener("mousedown", handleClickOutside);

  //   // Cleanup function to remove event listener
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setOpen]);

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

    return uniqueTitles.map((title, index) => (
      <p
        key={index}
        className="font-bold flex justify-between items-center w-full"
      >
        <span>{title}</span>
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
    const shippingFee = 5.99; // Declare tax as a number
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
        className="w-96 fixed top-24 right-10 border py-16 px-8 bg-black rounded-xl z-30"
      >
        <div className="h-full w-full flex flex-col gap-2">
          <h2 className="text-4xl">Summary</h2>
          <div className="flex justify-center items-center w-full">
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
          <button className="bg-green text-black text-2xl p-4 mt-8 bg-opacity-80 hover:bg-opacity-100 w-full">
            Checkout
          </button>
          </Link>
          <div className="flex justify-center items-center mt-8">
            <p>
              Checkout devStuff{" "}
              <span className="text-green hover:cursor-pointer hover:underline">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-green hover:cursor-pointer hover:underline">
                Services
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
