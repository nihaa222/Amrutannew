import React from "react";

const Consultations = () => {
  return (
    <div className="bg-gradient-to-br mt-[70px] font-bold h-full pb-[200px]  from-yellow-100 to-yellow-50   w-full">
      <div className="pt-[79px]">
        <p
          className="text-center text-[#3A643B] 
 Dinpro bold text-[48px] leading-[61.82px]"
        >
          What sets Ayurvedic consultations apart?
        </p>
      </div>
      <div className="mt-[100px]  lg:mx-[200px] mx-[20px]">
        <div className="grid gap-2 grid-cols-maxy lg:grid-cols-4">
          {/* 1 */}
          <div className=" bg-white w-full border-[#3A643B] border-t-[8px] rounded-tl-[50px] rounded-tr-[50px] pt-[48px] pb-[48px] px-[32px] h-full col-span-1 md:col-span-2 text-center  ">
            <p className="font-semibold leading-[50.88px] text-[32px] text-[#3A643B] ">
              स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"
            </p>
            <p className="text-[16px] leading-[23.18px] text-center text-[#3A643B]">
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
          {/* 2 */}
          <div>
            <img
              className="h-full w-full"
              src="/why/Rectangle 4144 (1).png"
            ></img>
          </div>
          {/* 3 */}
          <div className=" bg-white shadow-top  relative px-[24px] pt-[45px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <p className="Dinpro font-bold mb-5 text-[24px] text-[#3A643B]">
              precise diagnosis
            </p>
            <p className=" text-[#414141] Dinpro text-[20px]">
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>

          {/* 4 */}
          <div className=" bg-white shadow-top  relative px-[24px] pt-[48px] pb-[48px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <p className="Dinpro font-bold mb-6 text-[24px] leading-[30.91px] text-[#3A643B]">
              Zero side-effects
            </p>
            <p className="Dinpro text-[20px] pb-5  rounded-tl-[30px] rounded-tr-[500px] leading-[25.76px] text-[#414141]">
              Ayurvedic treatments are devoid of chemicals, and are based
              completely on natural herbs 
            </p>
          </div>
          {/* 5 */}
          <div>
            <img className="w-full" src="/why/Rectangle 4146 (1).png"></img>
          </div>
          <div className=" bg-white shadow-top  relative px-[24px] pt-[45px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <p className="Dinpro font-bold mb-5 text-[24px] text-[#3A643B]">
              Individual Treatment
            </p>
            <p className=" text-[#414141] Dinpro text-[20px]">
              all Treatments are personalized based on a person's unique
              constitution and health concerns..
            </p>
          </div>
          {/* 6 */}
          <div>
            <img
              className="h-full w-full"
              src="/why/Rectangle 4148 (1).png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;
