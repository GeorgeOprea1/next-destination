import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <h1>Logo</h1>
        {/* here I need a logo image instead of the text
         */}
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
          How Next Destination work?
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
    </nav>
  );
};

export default Navbar;
