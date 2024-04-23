import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#99b89a] h-[924px] ">
        <div className="grid w-[296px] mx-auto gap-5 ">
          <div className="flex flex-col Dinpro  gap-3  sm:hidden">
            <p className="text-[#3A643B] font-bold pt-10 #3A643B">
              Get in touch
            </p>
            <p>support@amrutam.co.in</p>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001{" "}
            </p>
            <p>+91 9713171999</p>
          </div>
          <div className="block sm:hidden">
            <img src="Frame 1000006082.png" alt="Description of the image" />
          </div>
          <div className="Dinpro flex flex-col pt-10 sm:pt-none gap-3">
            <div>
              <p className="Dinpro font-bold text-[#3A643B]">Information</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Privacy Policy for Mobile Apps</p>
              <p>Shipping and Returns Policy</p>
              <p>International Delivery</p>
              <p>For Businesses, Hotels and Resorts</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:hidden">
            <p className="text-[#3A643B]">
              Subscribe to our Newsletter and join Amrutam Family today!
            </p>
            <img className="block sm:hidden" src="Frame 1000006086.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; // Only one default export allowed in the file

// Remove any additional default exports if present
