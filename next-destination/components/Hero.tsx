import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  return (
    <section className=" mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div className="absolute right-0 top-0 h-screen w-screen bg-pattern-1 bg-cover bg-center md:-right-28 xl:-top-60" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <img
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-40px] w-10 lg:w-[50px]"
        />
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[80px]">
          Pineview Haven Camp Area
        </h1>
        <p className="text-[16px] font-[400] mt-6 text-gray-30 xl:max-w-[520px]">
          Embark on a digital odyssey with our platform, where we aspire to
          accompany you on every exploration, guiding you towards the pure and
          untouched wonders of the world. Our goal is to facilitate your global
          adventures seamlessly within a singular application.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <img src="/star.svg" alt="star" width={24} height={24} />
            <img src="/star.svg" alt="star" width={24} height={24} />
            <img src="/star.svg" alt="star" width={24} height={24} />
            <img src="/star.svg" alt="star" width={24} height={24} />
            <img src="/star.svg" alt="star" width={24} height={24} />
          </div>
          <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[400] text-blue-700">
            134k{" "}
            <span className="text-[16px] font-[400] lg:text-[20px] ml-1 ">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex  flex-col w-full gap-3 sm:flex-row">
          <button
            type="button"
            className="flex justify-center items-center gap-3 rounded-full border-green-500 bg-green-500 px-8 py-5 text-white transition-all hover:bg-black"
          >
            Download App
          </button>
          <button
            type="button"
            className="flex justify-center items-center gap-3 rounded-full border-white bg-white px-8 py-3 "
          >
            <FaCirclePlay className=" text-gray-500 " />
            <span className="font-bold">How does it work?</span>
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray-500 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-gray-20">Location</p>{" "}
              <IoClose width={24} height={24} />
            </div>
            <p className="text-[20px] font-[700] text-white">Montana Vista</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-gray-20">Distance</p>
              <p className="text-[20px] font-[700] text-white">134km</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-gray-20">Elevation</p>
              <p className="text-[20px] font-[700] text-white">1.2km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
