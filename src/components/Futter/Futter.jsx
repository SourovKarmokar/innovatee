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
    <div className='mt-[124px]'>
      <Container>
        <Flex>
         <div className="w-[263px]">
            <img src={futer} alt="" />
            <p className='w-[263px] font-secondary font-[16px] leading-[28px] text-[#645E76] mt-[26px] mb-[24px]'>Build a modern and creative website with Innovate.</p>
            <Flex className='justify-between items-center '>
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
        <div className='ml-[199px] mr-[83px]  flex items-center justify-between'>
          <div className="w-[103px]  flex flex-wrap">
              <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Product</h1>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Landingpages</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Pricing</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Benefits</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Features</a>
        </div>
            <div className="w-[103px] ml-[84px] mr-[81px]  flex flex-wrap"> 
              <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Company</h1>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]' href="">About</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Privacy Policy</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Terms & Conditions</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Partners</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Contact</a>
        </div>
        <div className="w-[103px] mr-[83px] flex flex-wrap">
             <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Resources</h1>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Guides and resources</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Blog</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Tools</a>
              <a className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'  href="">Support</a>
        </div>
        </div>
        <div className="relative w-[285px]  flex flex-wrap">
             <h1 className='font-secondary font-medium text-[18px] leading-[32px] text-[#2C2643] mb-[18px]'>Get Latest Updates</h1>
              <p className='font-secondary font-normal text-[16px] leading-[26px]text-[#645E76] mb-[12px]'>Subscribe to our newsletter and get many interesting things every week</p>
              <input type="text" className='  pt-[12px]pb-[12px] pl-[18px] pr-[148px] border-[#D2D2D2] border-[1px] rounded-[5px]' placeholder='Your Email Address'    />
             <div>
               <img src={sent}  className='absolute  top-[180px]  right-[-39px] w-[36px] h-[36px]' alt="" />
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
