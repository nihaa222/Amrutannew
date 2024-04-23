import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let obj = {
  img: "/Ellipse 725.png",
  tag: "/Frame 427319038.png",
  name: "Dr. Vaishali sharma",
  desp: "Ayurveda Practitioner(BAMS, MD)",
  hat: "/exp.png",
  text: "/text.png",
  last: "/Frame 427319039.png",
};

let array = new Array(9).fill(obj);
for (let i = 0; i < array.length; i++) {
  array[i] = { ...obj, id: i + 1 };
}

const Expert = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <>
      <div className=" h-[808px] mt-[100px] w-full bg-white ">
        <div className="Dinpro w-[296px] mx-auto md:w-full relative text-center text-[#3A643B] font-bold text-[32px] lg:text-[48px]">
          Meet our Ayurveda experts
          <div className="h-1 w-[800px] mx-auto top-[58px] hidden lg:block left-[600px] absolute bg-[#C3D0C4]"></div>{" "}
        </div>

        <div className=" max-w-[1200px] mx-auto">
          <div className="h-[808px] w-full bg-white pt-2">
            <Slider {...settings}>
              {array.map((item) => (
                <div
                  key={item.id}
                  className=" rounded-[40px] w-[206px] pt-8 border-[2px] h-[446px] flex  items-center justify-center "
                >
                  <div className="relative h-full  flex flex-col gap-3 justify-center items-center ">
                    <div>
                      <img src={item.img}></img>
                    </div>

                    <div className="absolute top-[130px] left-[100px]">
                      <img src={item.tag}></img>
                    </div>

                    <p className="Dinpro text-[20px] mt-8 text-black leading-[24px] font-bold">
                      {item.name}
                    </p>
                    <p className="text-[15px] font-semibold text-[#838383] ">
                      {item.desp}
                    </p>
                    <div>
                      <img className="mb-5" src={item.hat}></img>
                      <img src={item.text}></img>
                    </div>
                    <img className="mt-5" src={item.last}></img>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expert;
