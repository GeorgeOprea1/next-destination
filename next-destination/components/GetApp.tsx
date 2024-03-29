import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px]">
      <div className=" max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-[16px] font-[400] text-gray-500">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <button
              type="button"
              className="flex justify-center items-center gap-3 rounded-full bg-white px-8 py-5 text-green-500 font-[700] transition-all hover:bg-black"
            >
              <FaApple /> App Store
            </button>
            <button
              type="button"
              className="flex justify-center items-center gap-3 rounded-full border-2 border-white  font-[700] bg-transparent px-8 py-5 text-white transition-all hover:bg-black"
            >
              <FaGooglePlay /> Play Store
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <img src="/phones.avif" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
