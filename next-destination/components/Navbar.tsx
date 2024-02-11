import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">Home</Link>{" "}
      {/* here I need a logo image instead of the text
       */}
    </nav>
  );
};

export default Navbar;
