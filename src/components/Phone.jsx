import React from "react";

const Phone = () => {
  return (
    <div className="h-[1059px] md:h-[808px] bg-[#FFF7E2]  lg:p-[200px]  pt-[100px] grid grid-cols-1 md:grid-cols-2 mt-[100px] md:flex-row gap-6">
      <div className=" w-[306px] md:w-full  self-end justify-self-center lg:justify-self-start ">
        {" "}
        {/* Adding flex and items-center classes */}
        <div>
          <p className="text-[32px] whitespace-nowrap text-center md:text-start md:text-[48px] font-bold text-[#3A643B]">
            Amrutan Home
          </p>
          <p className="Dinpro font-bold  md:text-[16px] text-[#676767] text-[14px]">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
      </div>
      <div className="text-center md:text-start w-[277px] md:w-full mx-auto order-1">
        <p className="text-[#000000] leading-[28px] md:leading-[44.22px] mb-3 Dinpro font-semibold text-[20px] md:text-[32px]">
          Get a diet & lifestyle consultation with ayurvedic experts across the
          globe
        </p>
        <p className="text-[36px] pb-0 md:pb-10 text-[#000000] mb-3 Dinpro font-bold">
          Get The App Now
        </p>
        <div className="flex flex-col md:flex-row gap-3">
          <img
            className="w-[270px]"
            src="/desktop/image 67.png"
            alt="Image 1"
          ></img>
          <img
            className="w-[270px]"
            src="/desktop/image 68.png"
            alt="Image 2"
          ></img>
        </div>
      </div>
      <div className="row-span-2  grid justify-self-end ">
        <img src="/desktop/Group 39489.png" alt="Image"></img>
      </div>
    </div>
  );
};

export default Phone;
