"use client";
import React, { useEffect, useState } from "react";
import { IconPlus, IconCheck } from "@tabler/icons-react";
import { Product } from "../types";
import Image from "next/image";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [mainPhoto, setMainPhoto] = useState<string>(
    `../assets/${product?.image?.photo_one}`
  );
  const [addToCart, setAddToCart] = useState<boolean>(false);

  useEffect(() => {
    const productIdString = sessionStorage.getItem("key");
    if (productIdString) {
      const productId = parseInt(productIdString, 10);
      fetch(`http://localhost:5000/api/product/${productId}`)
        .then((res) => res.json())
        .then((json) => setProduct(json))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, []);

  const imageSelector = () => {
    if (product) {
      return Object.values(product.image).map((file, idx) => (
        <div
          key={idx}
          className="border border-white w-1/3 hover:bg-white hover:cursor-pointer hover:bg-opacity-20 p-4"
        >
          <Image
            width={300}
            height={300}
            quality={100}
            alt={`${product?.title}`}
            src={require(`../assets/${file}`)}
          />
        </div>
      ));
    }
  };

  const renderSuccess = () => {
    const existingCartItemsString = sessionStorage.getItem("cartItems");
    const existingCartItems = existingCartItemsString ? JSON.parse(existingCartItemsString) : [];
  
    const updatedCartItems = [...existingCartItems, product?.id];
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  
    setAddToCart(true);
  
    setTimeout(() => {
      setAddToCart(false);
    }, 3000);
  };
  

  return product ? (
    <>
      <div className="bg-black w-full flex flex-col lg:flex-row justify-center items-center px-2 lg:px-16 py-8 lg:py-0">
        <div className="flex-col justify-center items-center">
          <Image
            width={800}
            height={800}
            quality={100}
            alt={`${product?.title}`}
            src={require(`../assets/${product?.image?.photo_one}`)}
          />
          <div className="flex gap-4 w-full">{imageSelector()}</div>
        </div>
        <div className="py-8 lg:py-16">
          <h1 className="flex text-center md:text-left text-white text-[60px] xl:text-[80px] font-bold">
            {product?.title}
          </h1>
          <div className="w-full flex justify-center items-center md:justify-start">
            <div className="bg-green bg-opacity-80 px-4 rounded-full text-center max-w-lg mt-8">
              <p className="text-white text-[20px] font-bold">
                Price: ${product?.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-[20px] lg:text-[25px] font-bold px-2 lg:px-72 mt-4 lg:mt-16">
          {product?.description}
        </p>
      </div>
      <div className="flex justify-center items-center mt-16 mb-32 px-2 lg:px-72">
        <button
          onClick={renderSuccess}
          className={`flex justify-center items-center gap-3 ${addToCart ? "bg-black text-green" : "bg-green text-black"} text-2xl p-4 mt-8 bg-opacity-80 hover:bg-opacity-100 w-full font-bold`}
        >
          {addToCart ? (
            <>
              <IconCheck />
              {`${product.title} in cart`}
            </>
          ) : (
            <>
              <IconPlus />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </>
  ) : (
    <></>
  );
};

export default ProductPage;
