import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const Features = () => {
  return (
    <section className="flex-col flex items-center justify-start overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="  mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="./phone.avif"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative ">
            <img
              src="./camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="text-[64px] font-[600] ">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            <li className="flex w-full flex-1 flex-col items-start">
              <div className="rounded-full p-4 lg:p-y bg-green-500">
                <FaMapMarkedAlt width={28} height={28} className="text-white" />
              </div>
              <h2 className="text-[20px] font-[700] lg:text-[32px] lg:leading-[120%] mt-5 capitalize">
                Real Maps Can Be Offline
              </h2>
              <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none ">
                We provide a solution for you to be able to use our application
                when climbing, yes offline maps you can use at any time there is
                no signal at the location
              </p>
            </li>
            <li className="flex w-full flex-1 flex-col items-start">
              <div className="rounded-full p-4 lg:p-y bg-green-500">
                <GrSchedule width={28} height={28} className="text-white" />
              </div>
              <h2 className="text-[20px] font-[700] lg:text-[32px] lg:leading-[120%] mt-5 capitalize">
                Set An Adventure Schedule
              </h2>
              <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none ">
                Schedule an adventure with friends. On holidays, there are many
                interesting offers from Hilink. That way, there's no more
                discussion
              </p>
            </li>
            <li className="flex w-full flex-1 flex-col items-start">
              <div className="rounded-full p-4 lg:p-y bg-green-500">
                <GrTechnology width={28} height={28} className="text-white" />
              </div>
              <h2 className="text-[20px] font-[700] lg:text-[32px] lg:leading-[120%] mt-5 capitalize">
                Technology Using Augment Reality
              </h2>
              <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none ">
                Technology uses augmented reality as a guide to your hiking
                trail in the forest to the top of the mountain. Already
                supported by the latest technology without an internet
                connection
              </p>
            </li>
            <li className="flex w-full flex-1 flex-col items-start">
              <div className="rounded-full p-4 lg:p-y bg-green-500">
                <IoLocationOutline
                  width={28}
                  height={28}
                  className="text-white"
                />
              </div>
              <h2 className="text-[20px] font-[700] lg:text-[32px] lg:leading-[120%] mt-5 capitalize">
                Many New Locations Every Month
              </h2>
              <p className="text-[16px] font-[400] mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-none ">
                Lots of new locations every month, because we have a worldwide
                community of climbers who share their best experiences with
                climbing
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
