// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const AyurVedic = () => {
//     function MultipleItems() {
//         const settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 3,
//           slidesToScroll: 3
//         };
//   return (
//     <div>
//       <div className="max-w-[800px] mx-auto mt-[50px] ">
//         <div className="relative">
//           <p className="Dinpro mx-[10px]  mb-[24px] text-[#3A643B] text-center font-bold text-[32px] md:text-[48px] leading-[41.22px] md:leading-[61.82px]">
//             Our Ayurvedic Approach
//           </p>
//           <div className="h-1 w-[600px] top-[48px] hidden  md:block left-[100px] absolute bg-[#C3D0C4]"></div>
//         </div>

//         <p className=" max-w-[800px] mx-[20px] text-center text-[#323232] ">
//           At Amrutam we follow a unique and personalized approach to healing.
//           Our expert practitioners begin each treatment process by conducting a
//           thorough analysis of the patient’s body type, medical history, and
//           current health conditions.
//         </p>
//       </div>
//       <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//         <div>
//           <h3>9</h3>
//         </div>
//       </Slider>
//       </div>

//       {/* <div>
//         <div className=" bg-[#FFF7E2] w-[300px] shadow-top rounded-b-[20px] relative px-[24px] pt-[45px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
//           <p className="Dinpro font-bold mb-5 text-[24px] text-[#3A643B]">
//             precise diagnosis
//           </p>
//           <p className=" text-[#414141] Dinpro text-[20px]">
//             Ayurveda's core principles revolve around Vata, Pitta, and Kapha
//             doshas, guiding you with precise diagnosis and treatment.
//           </p>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default AyurVedic;

import Slider from "react-slick"; // Assuming you're using react-slick for your slider

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AyurVedic = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    responsive: [
      {
        breakpoint: 950, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="max-w-[800px] mx-auto mt-[50px]">
        <div className="relative">
          <p className="Dinpro mx-[10px] mb-[24px] text-[#3A643B] text-center font-bold text-[32px] md:text-[48px] leading-[41.22px] md:leading-[61.82px]">
            Our Ayurvedic Approach
          </p>
          <div className="h-1 w-[600px] top-[48px] hidden md:block left-[100px] absolute bg-[#C3D0C4]"></div>
        </div>

        <p className="max-w-[800px] mx-[20px]  text-center text-[#323232]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>

      <div className="pt-20">
        <div className="lg:flex  max-w-[1400px] lg:mx-auto e hidden ">
          <div className=" bg-[#FFF7E2] flex  gap- justify-center items-center flex-col w-[500px] shadow-top  rounded-b-[20px] relative px-[24px] -[100px] ml- pt-[20px] pb-[40px] rounded-tl-[50px]  border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <div className="-ml-[199px] w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
              1
            </div>
            <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
              Make Appointment
            </p>
            <p className="text-center text-[20px] text-[#2E2E2E]">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
          <div className=" bg-[#FFF7E2] flex gap-4 justify-center items-center flex-col w-[500px] shadow-top ml-[20px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
              1
            </div>
            <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
              Make Appointment
            </p>
            <p className="text-center text-[20px] text-[#2E2E2E]">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
          <div className=" bg-[#FFF7E2] flex gap-4 justify-center items-center flex-col w-[500px] shadow-top ml-[20px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
              1
            </div>
            <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
              Make Appointment
            </p>
            <p className="text-center text-[20px] text-[#2E2E2E]">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
          <div className=" bg-[#FFF7E2] flex mr-[20px] gap-4 justify-center items-center flex-col w-[500px] shadow-top ml-[20px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
            <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
              1
            </div>
            <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
              Make Appointment
            </p>
            <p className="text-center text-[20px] text-[#2E2E2E]">
              You must make an appointment in advance, to choose the service and
              date.
            </p>
          </div>
        </div>
      </div>

      <div className="slider-container block lg:hidden max-w-[800px] mx-auto">
        <Slider {...settings}>
          <div>
            <div className=" bg-[#FFF7E2] flex ml-[60px]  gap-4 justify-center items-center flex-col w-[300px] shadow-top md:ml-[30px] rounded-b-[20px] mx-[100px] relative px-[20px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
              <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
                1
              </div>
              <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
                Make Appointment
              </p>
              <p className="text-center text-[20px] text-[#2E2E2E]">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
              <div></div>
            </div>
          </div>
          <div>
            <div className=" bg-[#FFF7E2] flex gap-4 justify-center  ml-[60px] items-center flex-col w-[300px] shadow-top md:ml-[30px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
              <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
                1
              </div>
              <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
                Make Appointment
              </p>
              <p className="text-center text-[20px] text-[#2E2E2E]">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
              <div></div>
            </div>
          </div>
          <div>
            <div className=" bg-[#FFF7E2] flex gap-4 ml-[60px] justify-center items-center flex-col w-[300px] shadow-top md:ml-[20px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
              <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
                1
              </div>
              <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
                Make Appointment
              </p>
              <p className="text-center text-[20px] text-[#2E2E2E]">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
              <div></div>
            </div>
          </div>
          <div>
            <div className=" bg-[#FFF7E2] flex ml-[60px] gap-4 justify-center items-center flex-col w-[300px] shadow-top md:ml-[20px] rounded-b-[20px] relative px-[24px] pt-[20px] pb-[40px] rounded-tl-[50px] border-[#3A643B] border-t-[8px] rounded-tr-[50px] ">
              <div className="   w-[90px] h-[90px] pt-2 rounded-full text-white bg-[#77ad79] mt-[14px] text-[48px] font-bold text-center ">
                1
              </div>
              <p className="Dinpro font-bold text-[24px] text-[#3A643B] text-center">
                Make Appointment
              </p>
              <p className="text-center text-[20px] text-[#2E2E2E]">
                You must make an appointment in advance, to choose the service
                and date.
              </p>
              <div></div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AyurVedic;
