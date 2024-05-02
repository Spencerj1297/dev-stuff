"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Image from "next/image";
import { Product } from "../types";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >(undefined);
  const [showFilterDrop, setShowFilterDrop] = useState(false);

  const filterProducts = (opt: string) => {
    setShowFilterDrop(false);
    if (opt === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products?.filter((prod) => prod.product_type === opt);
      setFilteredProducts(filtered);
    }
  };

  const renderFilterOptions = () => {
    let options = ["all", "keyboard", "mouse", "headset", "accessories"];

    return options.map((opt, ind) => (
      <li key={ind}>
        <button
          className="hover:text-green"
          onClick={() => filterProducts(opt)}
        >
          {opt}
        </button>
      </li>
    ));
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products);
        setFilteredProducts(json.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div className="md:hidden flex flex-col justify-center items-center px-4 pt-20 pb-8 w-full">
        <button
          onClick={() => setShowFilterDrop(!showFilterDrop)}
          className="flex flex-row justify-center items-center border border-gray-darker rounded-lg bg-black text-white text-md font-bold gap-2 w-40"
        >
          filter by
          <IconAdjustmentsHorizontal />
        </button>
      </div>
      <div className="flex w-full md:py-44">
        <div className="hidden md:block pt-16 pl-8 h-screen w-72">
          <h1 className="text-gray text-2xl mb-8 underline">Stuff</h1>
          <ul className="flex flex-col gap-4 text-white text-[20px] font-bold list-none">
            {renderFilterOptions()}
          </ul>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center px-4 md:pt-16 lg:px-0 gap-4 last:mb-8">
          {filteredProducts?.map((product) => (
            <Link href={`/product`} key={product.id}>
              <button
                className="flex flex-col justify-center items-center 
              h-[450px] w-full
              
              
              bg-black rounded-xl border border-gray-darker hover:border-white"
                onClick={() =>
                  sessionStorage.setItem("key", JSON.stringify(product.id))
                }
              >
                <Image
                  className="hover:scale-105 transition-transform duration-300 ease-in-out z-0 relative cursor-pointer"
                  src={require(`../assets/${product.image.photo_one}`)}
                  height={200}
                  width={200}
                  alt="Product image of shirt, mug, or stickers"
                />
                <div className="max-w-[80%] mt-8 text-[20px] text-center">
                  <h2 className="text-white">{product?.title.slice(0, 25)}</h2>
                  <h3 className="text-white">${product?.price}</h3>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
      {showFilterDrop && (
        <div className="absolute top-40 md:hidden w-full">
          <ul className="flex flex-col gap-4 justify-center h-[500px] bg-green text-black font-black text-4xl list-none px-2">
            {renderFilterOptions()}
          </ul>
        </div>
      )}
    </>
  );
};

export default AllProducts;
