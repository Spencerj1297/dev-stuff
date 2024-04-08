'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'
// import { useMainContext } from "../contexts/MainContext";
// import { HashLoader } from "react-spinners";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
//   const { loading, setLoading } = useMainContext();
  const [ showFilterDrop, setShowFilterDrop ] = useState(false)

  useEffect(() => {
    // setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

//   const setLowToHigh = () => {
//     const sorted = [...products].sort((a, b) => a.price - b.price);
//     setProducts(sorted);
//   };

//   const setHighToLow = () => {
//     const sorted = [...products].sort((a, b) => b.price - a.price);
//     setProducts(sorted);
//   };

  return (
//   loading ? (
//     <div className="h-screen flex justify-center items-center text-white">
//       {/* <HashLoader color="white" /> */}
//     </div>
//   ) : (
    <>
    <div className="md:hidden flex-col px-4">
      <button 
      onClick={() => setShowFilterDrop(!showFilterDrop)}
      className="flex flex-row justify-center items-center border border-gray-darker rounded-lg bg-black text-white text-md font-bold gap-2 w-40 py-2">
         
          filter by
          <IconAdjustmentsHorizontal />
      </button>
      {showFilterDrop ? (
      <div className="fixed top-[120px] flex flex-col justify-center items-center w-[91%] bg-black border border-gray-darker rounded-lg text-white py-2 z-20">
        <button
        // onClick={() => {
        //   setLowToHigh()
        //   setShowFilterDrop(false)
        // }}
        >low to high</button>
        <div className="w-[30%] bg-gray-darker h-[1px] my-1"></div>
        <button
        //  onClick={() => {
        //   setHighToLow()
        //   setShowFilterDrop(false)
        // }}
        >high to low</button>
      </div>
      ):(
        <></>
      )}

    </div>
      <div className="flex w-full">
        <div className="hidden md:block pt-16 pl-8 h-screen w-72">
          <h1 className="text-gray text-2xl mb-8">Stuff</h1>
          <ul className="flex flex-col gap-4 text-white text-[20px] font-bold">
            <li className="">All</li>
            <li className="">T-Shirts</li>
            <li>Mugs</li>
            <li>Stickers</li>
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
        <div className="flex flex-row flex-wrap w-full py-16 px-4 lg:px-0 mb-16 gap-6 justify-center items-center">
          {/* {products?.map((product) => (
            <Link to={`/product/${product.id}`}>
              <div
                key={product.id}
                className="flex flex-col justify-center items-center h-[400px] w-80 lg:w-96 bg-black rounded-xl border border-gray-darker hover:border-white"
              >
                <img
                  className="h-52 max-w-[80%] hover:scale-105 transition-transform duration-300 ease-in-out z-0 relative cursor-pointer"
                  src={product?.image}
                  alt="Product image of shirt, mug, or stickers"
                />
                <div className="max-w-[80%] mt-8 text-[20px] text-center">
                  <h2 className="text-white">{product?.title.slice(0, 25)}</h2>
                  <h3 className="text-white">${product?.price}</h3>
                </div>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
