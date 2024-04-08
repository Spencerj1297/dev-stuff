import React from "react";
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <div
        className="h-64 w-full flex flex-col md:flex-row"
        style={{ borderTop: "1px solid #404040" }}
      >
        <div className=" h-full flex items-start justify-start p-4">
          <div className="flex justify-start items-start mr-2 rounded-md text-white font-bold text-[40px]">
            &#123; &#125;
          </div>
          <p className="text-white font-bold text-[20px] text-[40px]">
            devStuff
          </p>
        </div>
        <div className="text-white p-8">
          <ul className="flex flex-col gap-4">
            <Link href="/">
              <li className="font-bold">Home</li>
            </Link>
            <Link href="/about">
              <li className="font-bold">About</li>
            </Link>
            <li className="font-bold">Check out more</li>
          </ul>
        </div>
      </div>
      <div
        style={{ borderTop: "1px solid #404040" }}
        className="w-full h-16 p-4"
      >
        <p className="text-white">&copy; devStuff, ALL rights reserved. </p>
      </div>
    </>
  );
};
