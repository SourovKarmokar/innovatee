import React from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import Flex from '../Layout/Flex/Flex';
import TestimonialSlider from './TestimonialSlider';
import "slick-carousel/slick/slick.css";
const Testimonial = () => {
    return (
        <section className='bg-[#F4FAFA] py-[200px]' >
            <Container>
                <Flex className='flex-col md:flex-row items-center justify-between'>
                    <div>
                    <h2 className='w-[594px] font-primary font-bold text-[46px] leading-[58px] text-title'>What they are talking
                        about us?</h2>
                    <p className='w-[503px] font-secondary text-lg text-[18px] mt-[20px] mb-[40px] leading-[32px] text-discription'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                    <a className="font-secondary text-lg font-medium py-5 px-12 bg-primary rounded-[6px] text-white ">Purchase Now</a>
                   <div className=' mt-[85px] w-[350px] flex justify-between items-center'>
                     <div className='relative  '>
                        <div className='w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-white'></div>
                        <div className='absolute top-0 left-[35px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                        <div className='absolute top-0 left-[75px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                        <div className='absolute top-0 left-[105px] w-[58px] h-[58px] rounded-full bg-[#C4C4C4] border-2 border-white'></div>
                    </div>
                    <div className='mt-80px'>
                        <Flex className='items-center' >
                        
                        <p className='relative after:absolute after:content-[] after:top-[5px] after:right-[-12px] after:w-[4px] after:h-[16px] after:bg-amber-500 font-primary font-bold text-[#52C586] text-2xl'>4.5</p>
                        <div className='flex ml-[22px]'>
                            <div><FaStar className='text-[#FDB400]'/></div>
                            <div><FaStar className='text-[#FDB400]'/></div>
                            <div><FaStar className='text-[#FDB400]'/></div>
                            <div><FaStar className='text-[#FDB400]'/></div>
                            <div><FaStar className='text-[#FDB400]'/></div>
                        
                    </div>
                    </Flex>
                    <p><p className='mt-1 '>280k Total Review</p></p>
                    </div>
                    {/* <p className='mt-1 '>280k Total Review</p> */}
                   </div>
                   
                </div>

                    <div className='mt-[20px]'>
                        <TestimonialSlider />
                         {/* <div className='relative w-[687px] bg-white pt-[64px] pb-[60px] px-[60px] rounded-[20px]'>
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
                </div> */}
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Testimonial
