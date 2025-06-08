import React from 'react'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import Flex from '../Layout/Flex/Flex';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="-translate-y-1/2 absolute top-[50%] right-[-20px] !bg-primary w-[50px] h-[50px] 
      !flex justify-center items-center rounded-full"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaAngleRight size={30} className='text-white' /></span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
     className="-translate-y-1/2 absolute top-[50%] left-[-20px] !bg-primary w-[50px] h-[50px] 
      !flex justify-center items-center rounded-full z-[999]"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaAngleLeft size={30} className="text-white" /></span>
  );
}

function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
        }
      }
    ]
  };
  
  return (
    <div className='w-full max-w-[300px] md:w-[700px] md:max-w-none'>
      <Slider {...settings}>
        <div>
          <div className='relative w-full md:w-[687px] bg-white pt-[40px] md:pt-[64px] pb-[40px] md:pb-[60px] px-[20px] md:px-[60px] rounded-[20px]'>
            <div className='absolute top-[-60px] left-[50%] md:left-[48px] transform md:transform-none -translate-x-1/2 md:translate-x-0 w-[80px] md:w-[124px] h-[80px] md:h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
            <p className='w-full md:w-[567px] font-secondary text-base md:text-[22px] leading-[30px] md:leading-[44px] text-discription text-center md:text-left'>
              "Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.
            </p>
            <Flex className='w-full md:w-[567px] justify-between mt-[25px] md:mt-[37px] flex-col md:flex-row items-center md:items-start'>
              <div className='text-center md:text-left mb-3 md:mb-0'>
                <h5 className='font-primary text-xl md:text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                <p className='font-secondary text-sm md:text-base mt-1 text-discription'>Digital Marketer</p>
              </div>
              <div>
                <div className='flex justify-center md:justify-start'>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                </div>
              </div>
            </Flex>
          </div>
        </div>
        <div>
          <div className='relative w-full md:w-[687px] bg-white pt-[40px] md:pt-[64px] pb-[40px] md:pb-[60px] px-[20px] md:px-[60px] rounded-[20px]'>
            <div className='absolute top-[-60px] left-[50%] md:left-[48px] transform md:transform-none -translate-x-1/2 md:translate-x-0 w-[80px] md:w-[124px] h-[80px] md:h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
            <p className='w-full md:w-[567px] font-secondary text-base md:text-[22px] leading-[30px] md:leading-[44px] text-discription text-center md:text-left'>
              "Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.
            </p>
            <Flex className='w-full md:w-[567px] justify-between mt-[25px] md:mt-[37px] flex-col md:flex-row items-center md:items-start'>
              <div className='text-center md:text-left mb-3 md:mb-0'>
                <h5 className='font-primary text-xl md:text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                <p className='font-secondary text-sm md:text-base mt-1 text-discription'>Digital Marketer</p>
              </div>
              <div>
                <div className='flex justify-center md:justify-start'>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                </div>
              </div>
            </Flex>
          </div>
        </div>
        <div>
          <div className='relative w-full md:w-[687px] bg-white pt-[40px] md:pt-[64px] pb-[40px] md:pb-[60px] px-[20px] md:px-[60px] rounded-[20px]'>
            <div className='absolute top-[-60px] left-[50%] md:left-[48px] transform md:transform-none -translate-x-1/2 md:translate-x-0 w-[80px] md:w-[124px] h-[80px] md:h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
            <p className='w-full md:w-[567px] font-secondary text-base md:text-[22px] leading-[30px] md:leading-[44px] text-discription text-center md:text-left'>
              "Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.
            </p>
            <Flex className='w-full md:w-[567px] justify-between mt-[25px] md:mt-[37px] flex-col md:flex-row items-center md:items-start'>
              <div className='text-center md:text-left mb-3 md:mb-0'>
                <h5 className='font-primary text-xl md:text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                <p className='font-secondary text-sm md:text-base mt-1 text-discription'>Digital Marketer</p>
              </div>
              <div>
                <div className='flex justify-center md:justify-start'>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                  <FaStar size={20} md:size={25} className='text-[#FDB400]'/>
                </div>
              </div>
            </Flex>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TestimonialSlider;