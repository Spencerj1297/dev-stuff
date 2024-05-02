"use client";
import { IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Product } from "../types";
import { CheckoutForm } from "../components/CheckoutForm";
import Image from "next/image";
import logo from "../assets/logo.png";
import { CheckoutSummary } from "../components/CheckoutSummary";

const Checkout = () => {
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
    const shippingFee = 5.99;
    cart.forEach((item) => {
      total += item.price;
    });
    const subtotal = total.toFixed(2);
    const totalWithTax = (parseFloat(subtotal) + shippingFee).toFixed(2);
    return totalWithTax;
  };

  return (
    <>
      <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center p-4 lg:p-16 z-20 text-white">
        <div className="h-full w-full lg:w-1/2 py-32 z-20">
          <CheckoutForm />
        </div>
        <div className="h-full w-full lg:w-1/2 py-32 z-20">
          <CheckoutSummary />
        </div>
      </div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-grey/[.15] w-fit p-6 lg:p-24 z-0 rounded-full">
        <Image
          src={logo}
          width={420}
          height={420}
          alt="different Color devStuff shirts"
          className="z-0"
        />
      </div>
    </>
  );
};

export default Checkout;
