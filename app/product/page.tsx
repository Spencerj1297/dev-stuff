import React, { useEffect } from "react";
import { IconPlus } from "@tabler/icons-react";
import { useRouter } from 'next/router';
import { Product } from "../types";
import { useParams } from 'next/navigation'


interface Props {
products: Product[]
}

const ProductPage: React.FC<Props> = ({ 
  products 
}) => {

  const { productId } = useParams();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId, 10)
  );

  if (!selectedProduct) {
    router.push("/")
    return null; 
  }

  const { title, price, image, description } = selectedProduct;

  return (
    <div className="bg-black w-full px-2 lg:px-16">
      <div className="flex flex-col justify-start">
        <div className="w-full flex justify-center items-center">
          <img src={image} className="h-[600px] mt-12 mb-16" />
        </div>
        <h1 className="flex text-center md:text-left text-white text-[80px] font-bold">
          {title}
        </h1>
        <div className="w-full flex justify-center items-center md:justify-start">
          <div className="bg-red p-6 rounded-full text-center max-w-lg mt-8">
            <p className="text-white text-[30px] font-bold">Price: ${price}</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-darker mt-16"></div>
        <div>
          <p className="text-white text-[25px] font-bold mt-16">{description}{" "}!</p>
        </div>
        <div className="flex justify-center items-center mt-16 mb-32">
          <button className="flex flex-row justify-center items-center gap-2 w-[80%] text-white bg-red h-20 rounded-full text-[25px] font-bold hover:opacity-80">
            <IconPlus />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage