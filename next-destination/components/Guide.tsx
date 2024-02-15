import React from "react";

const Guide = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className=" px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24">
        <img src="./camp.svg" alt="camp" width={50} height={50} />
        <p className="text-[18px] font-[400] -mt-1 mb-3 text-green-500">
          WE ARE HERE FOR YOU
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="text-[40px] font-[700] leading-[120%] lg:text-[64px] xl:max-w-[390px] ">
            Guide You to Easy Path
          </h2>
          <p className="text-[16px] font-[400] text-gray-500 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-[1440px] relative w-full ">
        <img
          src="/boat.avif"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-3xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <img
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex items-center justify-between flex-col">
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between w-full">
                <p className="text-gray-500 text-[16px] font-[400]">
                  Destination
                </p>
                <p className="text-[16px] font-[700] text-green-500">48 min</p>
              </div>
              <p className="mt-2 text-[20px] font-[700]">Aguas Calientes</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="text-gray-500 text-[16px] font-[400]">
                Start track
              </p>

              <h4 className="mt-2 text-[20px] font-[700] whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
