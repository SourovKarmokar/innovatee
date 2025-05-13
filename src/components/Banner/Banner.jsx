import React from "react";
import Container from "../Layout/Container";
import laptop from "../../assets/laptop.png"
const Banner = () => {
  return (
    <div className=" bg-cover bg-center bg-no-repeat pt-[195px] pb-[558px] text-white">
      <Container>
        <div className="relative">
          <div className="text-center">
          <h1 className="max-w-[796px] mx-auto font-primary text-[56px] leading-[64px]">
            Get your work done with Management Tool
          </h1>
          <p className="max-w-[467px] mx-auto font-secondary text-lg leading-[32px] mt-5">
            The world's first project management platform that connects everything
          </p>
          <div className="relative mt-8 mb-8 flex justify-center">
            <input
              className="w-[480px] py-5 pl-6 pr-32 border bg-white outline-none placeholder:text-gray-400 text-gray-400 rounded-[6px]"
              type="text"
              placeholder="Your business email"
            />
            <a className="absolute top-[4px]  right-[480px] font-secondary text-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px] text-[#2C2643]">
              Try for free
            </a>
          </div>
        </div>

        <div className="absolute bottom-[-850px]left-[-33px]">
        <img src={laptop} alt="#laptop" />
      </div>

        </div>
      </Container>
      
    </div>
  );
};

export default Banner;
