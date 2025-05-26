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
      !flex justify-center items-center  rounded-full"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaAngleRight size={30} className='text-white' /></span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
     className="-translate-y-1/2  absolute top-[50%] left-[-20px]  !bg-primary w-[50px] h-[50px] 
      !flex justify-center items-center  rounded-full z-[999]"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    ><FaAngleLeft size={30} className="text-white" /></span>
  );
}


function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    
      <div className='w-[700px]'>
        <Slider {...settings}>
        <div>
            <div className='relative w-[687px] bg-white pt-[64px] pb-[60px] px-[60px] rounded-[20px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px]
                            h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
                    <p className='w-[567px] font-secondary text-[22px] leading-[44px] text-discription '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                    <Flex className='  w-[567px] justify-between mt-[37px]'>
                        <div>
                            <h5 className='font-primary text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                        <p className='font-secondary text-base mt-1 text-discription'>Digital Marketer</p>
                        </div>
                        <div>
                           <div className='flex items-end'>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                    
                    </div>
                        </div>
                    </Flex>
            </div>
        </div>
        <div>
            <div className='relative w-[687px] bg-white pt-[64px] pb-[60px] px-[60px] rounded-[20px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px]
                            h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
                    <p className='w-[567px] font-secondary text-[22px] leading-[44px] text-discription '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                    <Flex className='  w-[567px] justify-between mt-[37px]'>
                        <div>
                            <h5 className='font-primary text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                        <p className='font-secondary text-base mt-1 text-discription'>Digital Marketer</p>
                        </div>
                        <div>
                           <div className='flex items-end'>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                    
                    </div>
                        </div>
                    </Flex>
            </div>
        </div>
        <div>
            <div className='relative w-[687px] bg-white pt-[64px] pb-[60px] px-[60px] rounded-[20px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px]
                            h-[124px] bg-gray-300 rounded-full border-4 border-[#F4FAFA]'></div>
                    <p className='w-[567px] font-secondary text-[22px] leading-[44px] text-discription '>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                    <Flex className='  w-[567px] justify-between mt-[37px]'>
                        <div>
                            <h5 className='font-primary text-2xl font-bold text-[#30344E]'>Robert Fox</h5>
                        <p className='font-secondary text-base mt-1 text-discription'>Digital Marketer</p>
                        </div>
                        <div>
                           <div className='flex items-end'>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar size={25} className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                            <div><FaStar  size={25}className='text-[#FDB400]'/></div>
                    
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
