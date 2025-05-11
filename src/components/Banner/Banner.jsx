import React from "react";
import Container from "../Layout/Container";

const Banner = () => {
  return (
    <div className="bg-primary py[98px] text-white ">
      <Container>
        <div className="text-center ">
          <h1 className="w-[796px] m-auto font-primary text-[56px] leading-[64px]">
            Get your work done with Management Tool
          </h1>
          <p className="w-[467px] m-auto font-secondary text-lg  leading-[32px] mt-5">
            The world's first project management platform that connects
            everything
          </p>
          <div className="relative mt-8">
            <input
              className="w-[480px] py-5 border pl-6  bg-white outline-0 placeholder:text-gray-400 text-gray-400 rounded-[6px]"
              type="text"
              placeholder="Your business email"
            />
            <a className="absolute top-[4px] right-[480px] font-secondary text-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px] text-[#2C2643]">
              Try for free
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
