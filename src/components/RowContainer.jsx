import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../assets/images/NotFound.svg";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    // console.log(item);
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[210px] min-w-[275px] md:w-300 
              md:min-w-[300px]  py-2 px-4 rounded-lg my-12 
               bg-cardOverlay 
              backdrop-blur-lg hover:drop-shadow-lg
              flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40  h-40 -mt-8 drop-shadow-2xl"
              >
                <img
                  src={item?.imageURL}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600
            flex justify-center items-center cursor-pointer
            hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className=" text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col  items-end justify-end">
              <p
                className="text-textColor font-semibold 
            text-base md:text-lg"
              >
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500 ">
                {item?.calories} calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold mb-3">
                  <span className="text-sm text-red-500">$</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          className="w-full flex flex-col items-center 
        justify-center gap-3"
        >
          <img src={NotFound} alt="" className="h-340" />
          <p className="text-xl text-headingColor font-semibold">
            Items Not Available
          </p>
        </div>
      )}
    </>
  );
};

export default RowContainer;
