import React from 'react'
import Container from '../Layout/Container'
import features from '../../assets/feature.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
const Features = () => {
  const item = [{
    img: icon1,
    titel: "Fast and Easy to use",
    discription: "Easily to convert API with just a few clicks",
  },
  {
    img: icon2,
    titel: " Safely Security ",
    discription: " All customer data is encrypted ",

  }


  ]
  return (
    <div id='features' className='pb-[66px]'>
      <Container>
        <div className='md:flex  justify-between'>
          <div>
            <img src={features} alt="#features" />
          </div>
          <div>
            <div className="flex items-center justify-center md:justify-start mb-[40px] md:mb-0">
            <h4 className='max-w-[250px] md:max-w-[553px] font-primary font-bold text-[25px] leading-[30px] md:text-[46px] md:leading-[58px] text-title'>
            We provide features for your Business
            </h4>
            </div>
            {/* <div>
          <img src={icon1} alt="" />
          <h4 className='font-primary font-bold text-[22px] text-title mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
          <p className=' w-[220px] font-secondary text-lg text-discription'>Easily to convert API with just a few clicks</p>
        </div> */}
           <div className='flex flex-col items-center ju md:flex-row md:justify-between md:mt-[40px]  gap-y-[40px]'>
             {
              item.map((item) => (
                <div> <img  className="flex justify-center items-center mx-auto md:mx-0 md:flex-strat  "  src={item.img} alt="" />
          <h4 className=' font-primary font-bold 
       text-[22px] md:text-[26px] lg:text-[22px]
       text-title 
         mt-[14px] md:mt-[18px] lg:mt-[14px]
              mb-[6px] md:mb-[10px] lg:mb-[6px]'>{item.titel}</h4>
          <p className=' w-[220px] font-secondary text-lg text-discription'>{item.discription}</p></div>
           
          
              ))
            }

            </div>

          <div className='mt-[40px]  md:mt-[64px] flex  flex-col md:flex-row items-center justify-between gap-4 md:gap-8  '>
             
              <div className='  mb-8 md:mb-0'>
              <img src={icon3} alt="Organization Icon" className='mx-auto md:mx-0' />
             <h4 className=' font-primary font-bold 
             text-[22px] md:text-[26px] lg:text-[22px]
             text-title 
               mt-[14px] md:mt-[18px] lg:mt-[14px]
              mb-[6px] md:mb-[10px] lg:mb-[6px]'>Get Organized</h4>
          <p  className='w-[220px] font-secondary text-lg text-discription'>From lists to boards, organize work your way.</p>
          </div>
           
          
            <a className="font-secondary text-lg font-medium py-[20px] px-[48px] bg-primary rounded-[6px] md:mt-[80px] text-white mb-[10px]">Get Started</a>   
            

            </div>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Features
