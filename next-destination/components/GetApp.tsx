const GetApp = () => {
  return (
    <section className="flex items-center justify-center w-full flex-col pb-[100px]">
      <div className=" max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-900 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="text-[16px] font-[400] text-gray-500">
            Available on iOS and Android
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
