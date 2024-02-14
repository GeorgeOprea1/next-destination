import React from "react";

const Features = () => {
  return (
    <section className="flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <img
            src="./phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
