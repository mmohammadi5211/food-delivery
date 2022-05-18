import React from "react";
import Delivery from "../assets/images/delivery.png";
import HeroBg from "../assets/images/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-col-1 md:grid-cols-2 gap-3 w-full " id="home">
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500">Bike Delivery</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery-image"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam
          porro ducimus, dolores odio dicta! Sint ipsum adipisci, quaerat, error
          pariatur delectus perferendis numquam provident nisi velit expedita
          officiis ratione!
        </p>
        <button
          type="button"
          className="bg-gradient-to-b from-orange-300 to-orange-500
          w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100
          "
        >
          Order Now
        </button>
      </div>

      {/* another section */}
      <div
        className="py-2 flex-1 flex items-center 
      relative "
      >
        <img
          src={HeroBg}
          alt="hero-image"
          className="ml-auto h-420 w-full lg:w-auto 
          lg:h-650 2xl:w-508"
        />
        <div
          className="w-full h-full absolute top-0 left-0
         flex 
        flex-wrap items-center justify-center px-2 sm:px-7
         md:px-4 lg:px-14 xl:px-20 2xl:px-32 3xl:px-40
          py-4
        md:gap-4 lg:gap-5  gap-y-5 sm:gap-x-7
        gap-x-4"
        >
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="xl:w-190 lg:w-[150px]  md:w-[124px]  
                 bg-cardOverlay 
                backdrop-blur-md rounded-3xl p-4 flex
                 flex-col
                 items-center justify-center gap-2
                  drop-shadow-lg w-[130px] "
              >
                <img
                  src={n.imageSrc}
                  alt="icecream"
                  className="md:w-20 w-24 lg:w-32 -mt-10 
                  lg:-mt-20 "
                />
                <p
                  className="text-[14px] sm:text-base
                   md:text-sm 
                  lg:text-base 
                font-semibold text-textColor mt-2
                lg:mt-3"
                >
                  {n.name}
                </p>
                <p
                  className="text-[10px] sm:text-[12px] 
                  md:text-[10px]
                   lg:text-sm 
                  
                text-lighttextGray font-semibold my-1 
                lg:my-3"
                >
                  {n.desp}
                </p>
                <p
                  className="text-sm font-semibold 
                text-headingColor"
                >
                  <span
                    className="text-xs 
                   text-red-600"
                  >
                    $
                  </span>{" "}
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
