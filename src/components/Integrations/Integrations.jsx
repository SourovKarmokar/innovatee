import React from 'react'
import Container from '../Layout/Container'
import Flex from '../../components/Layout/Flex/Flex'
import band1 from '../../assets/band1.png'
import band12 from '../../assets/band12.png'
import band21 from '../../assets/band21.png'
import band22 from '../../assets/band22.png'
import band23 from '../../assets/band23.png'
import band31 from '../../assets/band31.png'
import band32 from '../../assets/band32.png'
import band33 from '../../assets/band33.png'
const Integrations = () => {
  return (
    <div className='bg-[#F4FAFA]'>
     <Container>
         <Flex className='justify-between ' >
            <div className='w-[587px] justify-between mt-[173px] mb-[173px]'>
            <h4 className='font-secondary text-integrations w-[113px]font-medium text-[20px]'>Integrations</h4>
            <h2 className='w-[587px] font-primary font-bold leading-[58px] text-[46px] text-title'>Easily integrate with your favorite apps</h2>
            <p className='font-secondary font-normal text-[18px] text-discription w-[533px] leading-[32px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
            <a className='inline-block font-secondary text-lg font-medium py-[20px] px-[48px] bg-primary rounded-[6px] text-white mt-6' href="">
  Get Started
</a>


        </div >
        <div className='w-[697px] mt-[124px] mb[120px]' > 
            <div  className='flex justify-between '>
              <img className='w-[322px]' src={band1} alt="" />
              <img className='w-[322px]'  src={band12} alt="" />
            </div>
            <div className="flex justify-between">
              <img className='w-[151px]' src={band21} alt="" />
              <img className='w-[321px]'  src={band22} alt="" />
              <img className='w-[151px]'  src={band23} alt="" />
            </div>
            <div className="flex justify-between">
              <img className='w-[290px]' src={band31} alt="" />
              <img className='w-[151px]'  src={band32} alt="" />
              <img className='w-[196px]'  src={band33} alt="" />
            </div>
       

        </div>
         </Flex>
        
        
      
     </Container>

    </div>
  )
}

export default Integrations
