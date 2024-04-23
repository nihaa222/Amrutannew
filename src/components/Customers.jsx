import { Rating } from "@mui/material";
import Slider from "react-slick";

const Customers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-full h-[710px] relative mt-[100px] pt-[100px] bg-[#FFF7E2]">
        <p className="lg:text-[48px] text-[32px] mb-20 mx-[30px] text-center text-[#3A643B] Dinpro font-bold">
          STORIES FROM OUR VALUED CUSTOMERS!
          <div className="h-1 w-[600px] top-[140px]  hidden md:block left-[170px] absolute bg-[#C3D0C4]"></div>
        </p>

        <div className="max-w-[1200px] mx-auto">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="mx-auto  ml-[40px] md:ml-0">
                <div className="ml-0 relative">
                  <div className="bg-[#F5F3FC] font-bold relative pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className=" ml-[60px] md:ml-0 ">
                  <div className="bg-[#ECFEE7] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-[60px] md:ml-0">
                <div className="ml-0 ">
                  <div className="bg-[#ECFEE7] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden md:block ml-[60px] md:ml-0">
                <div className="ml-0 ">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden md:block ml-[60px] md:ml-0">
                <div className="ml-0 ">
                  <div className="bg-[#ECFEE7] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden">
                <div className="ml-0 ">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" hidden md:block ml-[60px] md:ml-0">
                <div className="ml-0 ">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block ml-[60px] md:ml-0">
                <div className="ml-0 ">
                  <div className="bg-[#ECFEE7] font-bold pt-[10px] text-black w-[304px] h-[55px] pl-[26px]">
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
                    <Rating value={5} readOnly className="pt-3 ml-[10px]" />
                    <p className="text-black -ml-10 mt-6 font-bold text-[22px] text-center">
                      "One of a kind Service"
                    </p>
                    <p className="leading-[30px] ">
                      Ultrices eros in cursus turpis massa tincidunt sem nulla
                      pharetra diam sit amet nisl suscipit adipis.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
