"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import Image from "next/image";
import { Product } from "../types";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [showFilterDrop, setShowFilterDrop] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/home")
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

const filterProducts = (opt: string) => {
  const filteredProducts = products?.filter((prod) => prod.product_type === opt)
  setProducts(filteredProducts)
}

  const renderFilterOptions = () => {
    let options = ['keyboard', 'mouse', 'headset', 'accessories']
   
    return(
      options.map(( opt, ind) => (
        <li
        key={ind}
        >
          <button
          className="hover:text-bubble-gum"
          onClick={() => filterProducts(opt)}
          >{opt}</button>
        </li>
      ))
    )
  }

  console.log("products", products)

  return (
    <>
      <div className="md:hidden flex-col px-4 lg:py-44">
        <button
          onClick={() => setShowFilterDrop(!showFilterDrop)}
          className="flex flex-row justify-center items-center border border-gray-darker rounded-lg bg-black text-white text-md font-bold gap-2 w-40 py-2"
        >
          filter by
          <IconAdjustmentsHorizontal />
        </button>
      </div>
      <div className="flex w-full lg:py-44">
        <div className="hidden md:block pt-16 pl-8 h-screen w-72">
          <h1 className="text-gray text-2xl mb-8">Stuff</h1>
          <ul className="flex flex-col gap-4 text-white text-[20px] font-bold">
            {renderFilterOptions()}
          </ul>
          <h2 className="text-gray text-2xl mt-16 mb-8">Sort by</h2>
          <ul className="flex flex-col gap-4 text-white text-[20px] font-bold">
            <li>
              {/* <button onClick={setLowToHigh}>Price: low to high</button> */}
            </li>
            <li>
              {/* <button onClick={setHighToLow}>Price: hight to low </button> */}
            </li>
          </ul>
        </div>
        <div className="flex flex-row flex-wrap w-full py-16 px-4 lg:px-0 mb-16 gap-6">
          {products?.map((product) => (
            <Link href={`/product`}>
              <button
                onClick={() =>
                  sessionStorage.setItem("key", JSON.stringify(product.id))
                }
              >
                <div
                  key={product.id}
                  className="flex flex-col justify-center items-center h-[400px] w-80 lg:w-96 bg-black rounded-xl border border-gray-darker hover:border-white"
                >
                  <Image
                    className="hover:scale-105 transition-transform duration-300 ease-in-out z-0 relative cursor-pointer"
                    src={require(`../assets/${product.image.photo_one}`)}
                    height={200}
                    width={200}
                    alt="Product image of shirt, mug, or stickers"
                  />
                  <div className="max-w-[80%] mt-8 text-[20px] text-center">
                    <h2 className="text-white">
                      {product?.title.slice(0, 25)}
                    </h2>
                    <h3 className="text-white">${product?.price}</h3>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
