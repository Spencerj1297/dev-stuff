import React from "react";
import Link from "next/link";

interface Props {
  setMobileDropOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileDropDown: React.FC<Props> = ({ setMobileDropOpen }) => {
  return (
    <div className="md:hidden fixed top-0 bg-black h-screen w-screen flex justify-center items-center z-30">
      <ul className="text-white text-[50px] text-center">
        <li>
          <Link href="/allproducts" >
            <button 
            className="hover:text-white border p-4"
            onClick={() => setMobileDropOpen(false)}>all products</button>
          </Link>
        </li>
        <li className="mt-8">
          <Link href="/checkout">
            <button 
            onClick={() => setMobileDropOpen(false)}
            className="bg-green text-black w-full bg-opacity-80 hover:bg-opacity-100 p-4">
              Checkout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
