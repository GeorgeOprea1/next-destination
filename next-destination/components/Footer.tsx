import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center mb-24">
      <div className="px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <h1 className="bg-gradient-to-r from-green-800 to-orange-500 bg-clip-text text-transparent text-[16px] font-black">
              Next Destination{" "}
            </h1>
          </Link>
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <h1 className="text-[18px] font-[700] whitespace-nowrap">
                Learn More
              </h1>
              <ul className="text-[16px] font-[400]   text-gray-400">
                <li>About next</li>
                <li>Press Release</li>
                <li>Environment</li>
                <li>Jobs</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[18px] font-[700] whitespace-nowrap">
                Our Community
              </h1>
              <ul className="text-[16px] font-[400]   text-gray-400">
                <li>Climbing xixixi</li>
                <li>Hiking Next Destination</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[18px] font-[700] whitespace-nowrap">
                Contact Us
              </h1>
              <div>
                <ul className="text-[16px] font-[400]  flex gap-5 text-gray-400">
                  <li>Admin Officer:</li>
                  <li className="text-blue-900 font-[600]">123-456-789</li>
                </ul>
                <ul className="text-[16px] font-[400] flex gap-5   text-gray-400">
                  <li>Email Officer:</li>
                  <li className=" text-blue-900 font-[600]">
                    destination@contact.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[18px] font-[700] whitespace-nowrap">
                Social{" "}
              </h1>
              <div className="text-[24px] flex gap-4">
                <a
                  href="https://github.com/GeorgeOprea1/next-destination"
                  className="cursor-pointer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaXTwitter className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
                <FaWordpress className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-400" />
        <p className="flex w-full items-center justify-center text-[16px] text-gray-400">
          2024 Next Destination | All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
