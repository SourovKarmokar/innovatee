import React from 'react'
import icon from "../../assets/customericon.png"
import icon1 from "../../assets/customericon1.png"
import Container from '../Layout/Container'
import Flex from '../Layout/Flex/Flex'
const Customers = () => {
  return (
    <div className='relative overflow-hidden'>
       <Container>
          <img className='mt-[147px] z-10' src={icon} alt="" />
          <Flex className="items-center justify-between flex-wrap gap-10">
            <div className='absolute top-[192px] left-[80px]'>
            <img src={icon1} alt="" />
          </div>
          <div className='w-[680px] z-99 absolute top-[223px] right-[65px]'>
            <h4 className='font-primary font-bold text-[44px] leading-auto text-white w-[554px] ' >Trusted by 35,000+ happy customers.</h4>
            <Flex className='justify-between items-center mt-[65px]'>
                <div>
                    <h3 className='w-[115px] font-primary font-black text-[44px] leading-[54px] text-white '>720+</h3>
                    <p className='w-[179px] font-primary font-medium text-[18px] leading-[32px] text-white '>Over 500 business powered with us</p> 
                </div>
                <div>
                    <h3 className='w-[115px] font-primary font-black text-[44px] leading-[54px] text-white '>4.9</h3>
                    <p className='w-[179px] font-primary font-medium text-[18px] leading-[32px] text-white '>Rating on google play and app store</p> 
                </div>
                <div>
                    <h3 className='w-[115px] font-primary font-black text-[44px] leading-[54px] text-white '>200+</h3>
                    <p className='w-[179px] font-primary font-medium text-[18px] leading-[32px] text-white '>Easily integrate with your favorite apps</p> 
                </div>
            </Flex>
          </div>
          </Flex>
       </Container>
    </div>
  )
}

export default Customers
