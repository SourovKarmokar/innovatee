import React from 'react'
import Container from '../Layout/Container'
import query from '../../assets/query.png'
import Flex from '../Layout/Flex/Flex'
const Query = () => {
  return (
    <div className=' relative'>
      <Container >
        {/* <img src={query} alt="" />
             <Flex className=' justify-between'>
                 <h3 className=' absolute top-[90px] left-[150px] font-primary w-[577px] font-bold text-[46px] leading-[58px] text-white'>Don’t find the answer?  contact us for any query.</h3>
                 <a className='absolute  top-[120px] right-[150px]  font-secondary text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]' href="">Contact Us</a>
             </Flex> */}

        <div className='
          mt-[80px] md:mt-[160px] 
          mb-[60px] md:mb-[124px] 
          bg-[url(assets/query.png)] 
          bg-cover bg-no-repeat bg-center 
          py-12 md:py-25 
          px-6 md:px-26 
          flex flex-col md:flex-row 
          justify-between items-center 
          gap-6 md:gap-0
          text-center md:text-left
          rounded-[40px] md:rounded-[40px] lg:rounded-none
          
        '>
          {/* Heading - changes size and width on mobile */}
          <h3 className='
            font-primary 
            w-full md:w-[577px] 
            font-bold 
            text-2xl md:text-[46px] 
            leading-8 md:leading-[58px] 
            text-white
          '>
            Don't find the answer? contact us for any query.
          </h3>

          {/* Contact button - changes size on mobile */}
          <a className='
            py-2 md:py-3 
            px-6 md:px-10 
            bg-secondary 
            rounded-[6px] 
            text-[#2C2643] 
            font-medium 
            cursor-pointer
            whitespace-nowrap
          ' href="">
            Contact Us
          </a>
        </div>

      </Container>
    </div>
  )
}

export default Query
