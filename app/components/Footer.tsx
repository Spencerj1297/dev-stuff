import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export const Footer = () => {
  const itemStyles = 'font-bold hover:text-green'
  return (
    <>
      <div
        className="min-h-64 w-full flex flex-col md:flex-row justify-center items-center p-4 py-8 gap-4 lg:gap-0"
        style={{ borderTop: "1px solid #404040" }}
      >
        <div className="w-1/2 flex justify-center lg:justify-end items-center mr-2 rounded-md text-white font-bold text-[40px] gap-2">
          <Image
            width={100}
            height={100}
            alt=""
            src={logo}
            quality={100}
            className="bg-grey rounded-full p-4"
          />
          <p className="text-grey font-bold text-[20px] text-[40px]">
            devStuff
          </p>
        </div>
        <div className="w-1/2 text-white lg:p-8">
          <ul className="flex flex-col justify-center lg:justify-start items-center lg:flex-row gap-4 lg:gap-8 text-2xl">
            <Link href="/">
              <li className={itemStyles}>home</li>
            </Link>
            <Link href="/allproducts">
            <li className={itemStyles}>all product</li>
            </Link>
            <Link href="/checkout">
            <li className={itemStyles}>checkout</li>
            </Link>
            <Link href="/about">
              <li className={itemStyles}>about</li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        style={{ borderTop: "1px solid #404040" }}
        className="w-full h-16 p-4 flex justify-center items-center"
      >
        <p className="text-white">&copy; devStuff, ALL rights reserved. </p>
      </div>
    </>
  );
};
