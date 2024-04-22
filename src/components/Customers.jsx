import { Rating } from "@mui/material";
import Slider from "react-slick";

const Customers = () => {
  // Define settings for the Slider component
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
    <>
      <div className="w-full h-[710px] mt-[100px] pt-[100px] bg-[#FFF7E2]">
        <p className="lg:text-[48px] text-[32px] mb-12 mx-[30px] text-center text-[#3A643B] Dinpro font-bold">
          STORIES FROM OUR VALUED CUSTOMERS!
        </p>

        <div className="slider-container max-w-[1230px] mx-auto ml-[70px]">
          {/* Use the Slider component with the settings */}
          <Slider {...settings}>
            <div>
              <div className="bg-[#F5F3FC] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
                <p>Consulted for Skin</p>
              </div>
              <div className="h-[317px] w-[304px] pt-[35px] pl-[16px] bg-[#FFFFFF]">
                <div className="flex gap-5">
                  <div className="w-[60px] h-[60px]  rounded-full bg-[#515151]"></div>
                  <div>
                    <p>Sophie Moore</p> <p>Chennai</p>
                  </div>

                  <div>17/02/24</div>
                </div>
                <Rating readOnly className="pt-3 ml-[10px]" />
                <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                  "One of a kind Service"
                </p>
                <p className="leading-[30px] ">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipis.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#F5F3FC] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
                <p>Consulted for Skin</p>
              </div>
              <div className="h-[317px] w-[304px] pt-[35px] pl-[16px] bg-[#FFFFFF]">
                <div className="flex gap-5">
                  <div className="w-[60px] h-[60px]  rounded-full bg-[#515151]"></div>
                  <div>
                    <p>Sophie Moore</p> <p>Chennai</p>
                  </div>

                  <div>17/02/24</div>
                </div>
                <Rating readOnly className="pt-3 ml-[10px]" />
                <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                  "One of a kind Service"
                </p>
                <p className="leading-[30px] ">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipis.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-[#F5F3FC] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
                <p>Consulted for Skin</p>
              </div>
              <div className="h-[317px] w-[304px] pt-[35px] pl-[16px] bg-[#FFFFFF]">
                <div className="flex gap-5">
                  <div className="w-[60px] h-[60px]  rounded-full bg-[#515151]"></div>
                  <div>
                    <p>Sophie Moore</p> <p>Chennai</p>
                  </div>

                  <div>17/02/24</div>
                </div>
                <Rating readOnly className="pt-3 ml-[10px]" />
                <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                  "One of a kind Service"
                </p>
                <p className="leading-[30px] ">
                  Ultrices eros in cursus turpis massa tincidunt sem nulla
                  pharetra diam sit amet nisl suscipit adipis.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Customers;
