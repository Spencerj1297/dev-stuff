import React from "react";
import Link from 'next/link'

interface Props {
  setMobileDropOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileDropDown: React.FC<Props> = ({ setMobileDropOpen }) => {

  return (
    <div className="md:hidden bg-black h-screen w-screen flex justify-center pt-16">
      <ul className="text-white text-[50px] text-center">
        <li><Link href="/allproducts" className="hover:text-white cursor-pointer">
         <button onClick={() => setMobileDropOpen(false)}>All</button> 
        </Link>
        </li>
        <li>Mice</li>
        <li>Keyboard</li>
        <li className="mt-8">
          <Link href="/checkout">
          <button className="bg-green text-black text-2xl w-[318px] h-[64px] bg-opacity-80 hover:bg-opacity-100">
            Checkout
          </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
