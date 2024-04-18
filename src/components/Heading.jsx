export const Heading = () => {
  return (
    <>
      <div className="md:hidden mx-6 flex items-center gap-20 sm:gap-60">
        <img className="h-4 w-7 my-8" src="lines.png" alt="Lines"></img>
        <img src="image 45.png" alt="Image 45"></img>
      </div>
      <div className="bg-[#FFF7E2] h-[839px] w-full flex-col flex items-center">
        <div className="flex relative md:flex-row flex-col  items-start md:items-center w-full h-[450px] md:h-[639px]">
          {/* <div className="absolute z-10 pl-8 text-white pt-[8px] md:text-[80px]">
          <p className="text-[#FFF7E2] text-base font-normal mb-4 text-left md:text-[28px] font-mono">
            Namaste, Welcome to Amrutam
          </p>
          <p className="text-[24px] md:text-[48px]">
            Step into Holistic Healing with{" "}
            <span className="underline">Ayurveda</span> Book Consultation with
            certified Experts.
          </p>
        </div> */}
          <div className="w-1/2"></div>
          <div className="h-[639px] w-full self-start md:self-center md:w-1/2 bg-no-repeat bg-cover md:bg-cover bg-[#FFF7E2] flex items-center bg-[url(/small.png)] md:bg-[url(/large.png)] bg-start md:bg-right"></div>
          <div className="hidden md:block absolute top-30 your-element-class md:h-[639px] w-full"></div>
          <div className="block md:hidden absolute top-0 your-element-class2 h-full w-full object-cover"></div>
        </div>
        <div className="self-start flex flex-col md:flex-row max-w-[1500px] mx-auto gap-0 md:gap-[20px]">
          <div className="flex items-center max-w-[310px]">
            <img src="/desktop/Frame 427319082.png"></img>
            <p className="Dinpro font-bold text-[18px] text-[#3A643B]">
              Convenient Online & In-Clinic Consultations
            </p>
          </div>
          <div className="flex items-center max-w-[360px] md:max-w-[310]">
            <img src="/desktop/Frame 427319083.png"></img>
            <p className="Dinpro font-bold text-[18px] text-[#3A643B]">
              Safe And Effective Treatment
            </p>
          </div>
          <div className="flex items-center max-w-[360px] md:max-w-[310]">
            <img src="/desktop/Frame 427319084.png"></img>
            <p className="Dinpro font-bold text-[18px] text-[#3A643B]">
              Experienced Ayurvedic Practicioners
            </p>
          </div>
          <div className="flex items-center max-w-[360px] md:max-w-[310]">
            <img src="/desktop/Frame 427319085.png"></img>
            <p className="Dinpro font-bold text-[18px] text-[#3A643B]">
              Personalised Treatment Plans & Guidance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
