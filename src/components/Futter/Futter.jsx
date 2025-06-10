import React from 'react'
import Container from '../Layout/Container'



import Flex from '../Layout/Flex/Flex'
import futer from "../../assets/futterlogo.png"
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import sent from '../../assets/sentfutter.png';

const Futter = () => {
  return (
    <div className='mt-[60px] md:mt-[124px]'>
      <Container>
        <Flex className='flex flex-col items-center md:items-start md:flex-row md:justify-between lg:items-start gap-8 md:gap-4'>
         <div className="w-full md:w-[263px] ">
            <div className='w-full md:w-[263px] flex flex-col items-center md:items-start' >
              <img  src={futer} alt="Company logo" />
            </div>
            <p className=' md-full md:w-[263px] font-secondary font-[16px] leading-[28px] text-[#645E76] mt-[26px] mb-[24px] text-center md:text-left'>Build a modern and creative website with Innovate.</p>
            <Flex className='justify-between items-center md:justify-start gap-4 w-full  '>
               <div>
                <div>
                   <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
                    <BiLogoGmail className="text-[#645E76] text-[18px]" />
                   </div>
                    
                </div>
               </div>
               <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
               <FaSquareXTwitter size={25} className="text-[#645E76]" />
               </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
                <FaInstagramSquare size={25} className="text-[#645E76]" />
                </div>
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#EEEEEE]">
                <FaLinkedin size={25} className="text-[#645E76]" />
               </div>
            </Flex>
        </div>
        <div className='lg:ml-[199px] lg:mr-[83px] flex flex-col items-center md:flex-row md:justify-between w-full lg:w-auto lg:items-start'>
  {/* First Two Columns Container */}
  <div className='flex flex-col md:flex-row items-center w-full lg:contents'>
    {/* Product Column */}
    <div className="w-full text-center md:text-left lg:w-[103px] mb-8 md:mb-0 lg:mb-0">
      <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Product</h1>
      <div className="flex flex-col items-center md:items-start">
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Landingpages</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Pricing</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Benefits</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76]' href="">Features</a>
      </div>
    </div>

    {/* Company Column */}
    <div className="w-full text-center md:text-left lg:w-[103px] my-8 md:my-0 lg:my-0 lg:mx-[80px]">
      <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Company</h1>
      <div className="flex flex-col items-center md:items-start">
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">About</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Privacy Policy</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Terms & Conditions</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Partners</a>
        <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76]' href="">Contact</a>
      </div>
    </div>
  </div>

  {/* Resources Column (3rd div) - Centered only on mobile */}
  <div className="w-full text-center lg:text-left lg:w-[103px] lg:mr-[83px]">
    <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Resources</h1>
    <div className="flex flex-col items-center lg:items-start">
      <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Guides and resources</a>
      <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Blog</a>
      <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76] mb-[12px]' href="">Tools</a>
      <a className='font-secondary font-normal text-[16px] leading-[26px] text-[#645E76]' href="">Support</a>
    </div>
  </div>
</div>
        <div className="relative w-[285px] flex flex-col items-center justify-center md:flex-row md:justify-start md:flex flex-wrap ">
             <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Get Latest Updates</h1>
              <p className='font-secondary font-normal  md:text-[16px] leading-[26px]text-[#645E76] mb-[12px]'>Subscribe to our newsletter and get many interesting things every week</p>
              <input type="text" className=' hidden md:block  pt-[15px] pl-[10px] pr-[148px] border-[#D2D2D2] border-[5px] rounded-[5px]' placeholder='Your Email Address'    />
             <div>
               <img src={sent}  className=' hidden  md:block absolute  top-[116px]  right-[-39px] w-[36px] h-[36px]' alt="" />
             </div>
        </div>
         

        </Flex>
        <div className="mt-10 border-t border-[#D2D2D2]  w-full"></div>
         <p className="flex  flex-row text-center mt-6 mb-[30px] text-sm text-gray-500 ">© 2024 Innovate - All Rights Reserved</p>
      </Container>
    </div>
  )
}

export default Futter
