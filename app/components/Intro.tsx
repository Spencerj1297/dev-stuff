"use client";
import Image from "next/image";
import mouse from "../assets/mouse.png";
import { IconChevronsRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  color: string;
  image: string;
  best_seller: string;
}

export const Intro = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full max-h-screen z-20">
        <div className="flex flex-col gap-8 w-full lg:w-3/6 pt-16 pb-0 xl:pt-44 px-2 lg:px-16">
          <h1 className="text-6xl">Everything you need</h1>
          <h2 className="text-2xl">nothing you dont...</h2>
          <Link 
          className="z-20"
          href="/allproducts">
            <button className="flex justify-center items-end bg-green text-black text-2xl w-full lg:w-[318px] py-4 bg-opacity-80 hover:bg-opacity-100 hover:bg-black border-y border-black hover:border-y hover:border-green hover:text-green transition duration-300">
              more <IconChevronsRight />
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-3/6 z-20">
          <Image width={1080} height={1080} alt="" src={mouse} quality={100} />
        </div>
      </div>
    </>
  );
};
