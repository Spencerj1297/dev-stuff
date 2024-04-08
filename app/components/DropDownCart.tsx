import React, { FC, useEffect, useRef } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  setOpen: (value: boolean) => void;
}

export const DropDownCart: FC<Props> = ({ setOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false); // Close the dropdown when clicked outside
      }
    };

    // Event listener for clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        ref={dropdownRef}
        className="w-96 fixed top-24 right-10 border py-16 px-8 bg-black rounded-xl z-30"
      >
        <div className="h-full w-full flex flex-col gap-4">
          <h2 className="text-4xl">Summary</h2>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${"24.99"}</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Shipping:</p>
            <p>${"5.99"}</p>
          </div>
          <div className="flex justify-between border-b">
            <p>Taxes:</p>
            <p>${"0"}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-xl">Total:</p>
            <p className="text-xl">${"30.98"}</p>
          </div>
          <button className="bg-green text-black text-2xl p-4 mt-8 bg-opacity-80 hover:bg-opacity-100">
            Checkout
          </button>
          <div className="flex justify-center items-center mt-8">
            <p>
              Checkout devStuff{" "}
              <span className="text-green hover:cursor-pointer hover:underline">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-green hover:cursor-pointer hover:underline">
                Services
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
