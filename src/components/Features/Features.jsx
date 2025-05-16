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
    <div className='pb-[66px]'>
      <Container>
        <div className='flex  justify-between'>
          <div>
            <img src={features} alt="#features" />
          </div>
          <div>
            <h4 className='w-[553px] font-primary font-bold text-[46px] leading-[58px] text-title'>We provide features for your Business</h4>
            {/* <div>
          <img src={icon1} alt="" />
          <h4 className='font-primary font-bold text-[22px] text-title mt-[14px] mb-[6px]'>Fast and Easy to use</h4>
          <p className=' w-[220px] font-secondary text-lg text-discription'>Easily to convert API with just a few clicks</p>
        </div> */}
           <div className='mt-[40px] flex justify-between'>
             {
              item.map((item) => (
                <div> <img src={item.img} alt="" />
          <h4 className='font-primary font-bold text-[22px] text-title mt-[14px] mb-[6px]'>{item.titel}</h4>
          <p className=' w-[220px] font-secondary text-lg text-discription'>{item.discription}</p></div>
           
          
              ))
            }

            </div>

          <div className='mt-[64px] flex justify-between'>
             
                <div> <img src={icon3} alt="" />
          <h4 className='font-primary font-bold text-[22px] text-title mt-[14px] mb-[6px]'>Get Organized</h4>
          <p className=' w-[220px] font-secondary text-lg text-discription'>From lists to boards, organize work your way.</p></div>
           
          
            <a className="font-secondary text-lg font-medium py-[20px] px-[48px] bg-primary rounded-[6px] mt-[80px] text-white mb-[10px]">Get Started</a>   
            

            </div>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Features
