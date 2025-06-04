import React from "react";
import Container from "../Layout/Container";
import laptop from "../../assets/laptop.png"
const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat md:pt-[195px] pb-[300px] md:pb-[558px] text-white">

      <Container>
        <div className="relative">
          <div className="text-center">
          <h1 className="md:w-[796px] mx-auto font-primary text-[25px] md:text-[56px] leading-[30px]  md:leading-[64px]">
            Get your work done with Management Tool
          </h1>
          <p className="w-full sm:max-w-[400px] md:max-w-[467px] mx-auto font-secondary text-base md:text-lg leading-relaxed md:leading-[32px] mt-5 text-center">

            The world's first project management platform that connects everything
          </p>
          <div className="  relative mt-8 mb-8 flex justify-center">
            <input
              className=" w-full max-w-[320px] md:max-w-[480px] py-5 pl-6  md:pr-[140px] border bg-white outline-none placeholder:text-gray-400 text-gray-400 rounded-[6px]"
              type="text"
              placeholder="Your Business Email"
            />
            <a className="  absolute top-[75px] md:top-[4px] md:right-[480px] font-secondary text-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px] text-[#2C2643]">
              Try for free
            </a>
          </div>
        </div>

        <div className="absolute bottom-[-300px] md:bottom-[-820px] left-[-33px]">
        <img src={laptop} alt="#laptop" />
      </div>

        </div>
      </Container>
      
    </div>
  );
};

export default Banner;
