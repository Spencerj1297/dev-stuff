"use client";
import React, { useState } from "react";
import { IconShoppingCart, IconMenu2, IconX } from "@tabler/icons-react";
import { DropDownCart } from "./DropDownCart";
import Link from "next/link";
import { MobileDropDown } from "./MobileDropDown";

export const Nav: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState<boolean>(false);

  const links = [
    { title: "All", linkTo: "/allproducts" },
    { title: "Mice", linkTo: "/allproducts" },
    { title: "Keyboards", linkTo: "/allproducts" },
  ];

  return (
    <>
      <div className="fixed right-0  w-full flex flex-row items-center py-1 lg:py-4 px-2 lg:px-8">
        <div>
          <Link href="/">
            <div className="flex justify-center items-center gap-2 rounded-md text-[30px] font-bold">
              &#123; &#125;{" "}
              <p className="font-bold text-[30px] mr-6">devStuff</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center ml-auto gap-6">
          <div className="hidden md:flex flex-row text-gray text-[25px]">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.linkTo}
                className="flex justify-center items-center"
              >
                <button className="flex justify-center items-center hover:text-green cursor-pointer border-r border-green px-4 h-6">
                 {link.title}
                </button>
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white">
            <div
              onClick={() => setMobileDropOpen(!mobileDropOpen)}
              className={`flex justify-center items-center mr-2 rounded-md text-white font-bold hover:bg-black`}
            >
              {mobileDropOpen ? <IconX /> : <IconMenu2 />}
            </div>
          </button>
          <button className="hidden md:block text-white">
            <div
              onClick={() => setCartOpen(!cartOpen)}
              className={`flex justify-center items-center rounded-md text-white font-bold hover:text-black hover:bg-green p-2 ${
                cartOpen && "bg-green text-black border-green"
              }`}
            >
              <IconShoppingCart />
            </div>
          </button>
        </div>
      </div>
      {cartOpen && <DropDownCart setOpen={setCartOpen} />}
      {mobileDropOpen && (
        <MobileDropDown setMobileDropOpen={setMobileDropOpen} />
      )}
    </>
  );
};
