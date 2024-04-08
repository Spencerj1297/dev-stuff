'use client'
import React, { useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  color: string;
  image: string;
  best_seller: string;
}

export const ProductCar = () => {

  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  // let { scrollYProgress } = useScroll();
  // let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() =>{
    fetch('http://localhost:5000/api/home')
    .then(res => res.json())
    .then(json => setProducts(json.products))
    .catch(error => console.error('Error fetching products:', error));
}, []);

console.log(products)

  return (
    <motion.section 
    // Parallax that doesnt look right
    // style={{ y }} 
    className="flex items-center w-full h-screen overflow-x-hidden z-0">
      <div
        className="scrolling-container"
        style={{
          display: "flex",
          animation: "scrollRight 500s linear infinite",
        }}
      >
        {products?.map((product, index) => (
          <div className="flex flex-col justify-center items-center h-[400px] min-w-[500px] mr-12" key={index}>
            <Link href={`/product/${product.id}`}>
              <Image
                className="max-h-72 max-w-72 hover:scale-110 transition-transform duration-300 ease-in-out z-0 relative cursor-pointer "
                src={require(`../assets/${product.image}`)}
                width={500}
                height={500}
                alt="different Color devStuff shirts"
              />
              <div className="hover:border-b hover:border-green h-32 w-32 bg-green"></div>
            </Link>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
