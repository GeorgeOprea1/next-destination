"use client";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <h1 className="bg-gradient-to-r from-green-800 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
          Next Destination{" "}
        </h1>
      </Link>{" "}
      <ul className="hidden h-full gap-12 lg:flex">
        <Link
          href="/"
          className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          How does it work?
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Services
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Pricing
        </Link>
        <Link
          href="/"
          className="text-[16px] font-[400] text-gray-500 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Contact Us
        </Link>
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <button
          type="button"
          className="flex justify-center items-center gap-3 rounded-full border bg-green-900 px-8 py-4 text-white transition-all hover:bg-black"
        >
          {" "}
          <FaRegUser /> <span>Login</span>
        </button>
      </div>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <div>
          <IoIosMenu
            className={`inline-block cursor-pointer lg:hidden hover:scale-110 w-[30px] h-[30px] ${
              toggle ? "hidden" : ""
            }`}
            onClick={() => setToggle(true)}
          />

          <IoClose
            className={`inline-block cursor-pointer lg:hidden hover:scale-110 w-[30px] h-[30px] ${
              toggle ? "" : "hidden"
            }`}
            onClick={() => setToggle(false)}
          />
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gray-100 absolute top-20 right-0 mx-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex  justify-end flex-col items-center flex-1">
            <Link
              href="/"
              className="text-[16px] font-[400] text-gray-800 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-[16px] font-[400] text-gray-800 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              How does it work?
            </Link>
            <Link
              href="/"
              className="text-[16px] font-[400] text-gray-800 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-[16px] font-[400] text-gray-800 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="text-[16px] font-[400] text-gray-800 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
