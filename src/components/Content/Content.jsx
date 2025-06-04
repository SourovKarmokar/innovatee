import React from 'react'
import Container from "../Layout/Container"
import contenticon1 from "../../assets/contenticon1.png"
import contenticon2 from "../../assets/contenticon2.png"
import contenticon3 from "../../assets/contenticon3.png"
const Content = () => {


  const item = [{
    img: contenticon1,
    titel: "Login or sign up to be able use our platform",
    description: "This quickstart shows you how to use Identity Platform to sign in a user with an email and password.",
  },

  {
    img: contenticon2,
    titel: "Connect your website with just a few click",
    description: "Once your website is online, you can configure it, I will show you how to put your website online.",
  },

  {
    img: contenticon3,
    titel: "Take some sales data that you want",
    description: "Sell your data directly: The most straightforward method is to sell your data directly to another.",
  }
  ]


  return (

    <div className="pt-[100px] md:pt-[336px] pb-[160px]">
      <Container>

        <div className='px-[20px] md:px-[50px]'>
          <div className='md:flex justify-between'>
            <h2 className='md:w-[504px] font-primary font-bold text-[35px] md:text-[46px]   leading-[50px] md:leading-[58px] text-title text-center md:text-start'>How simple is it to use our platform?</h2>
            <p className='md:w-[530px] font-secondary text-lg leading-[32px] text-discription text-center md:text-start mt-5 md:mt-0'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
          </div>
        </div>

        {/* <div className='w-[300px]  flex  flex-col items-center' >
              <img className='w-[110px]' src={contenticon1} alt="#icon" />
              <h4 className='font-primary font-bold text-[24px] leading-[36px] text-title'>Login or sign up to be able use our platform</h4>
              <p className='font-secondary  text-lg leading-[32px] text-description'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div> */}

            <div className='md:flex justify-around items-center text-center mt-[116px]'>
                 {
           item.map((item, index) => (
            <div key={`First-${index}`} className='w-[300px] flex flex-col items-center'>
              <img className='w-[110px] my-5 md:my-0' src={item.img} alt="#" />
              <h4 className='font-primary font-bold text-[24px] leading-[36px] text-title'>{item.titel}</h4>
              <p className='font-secondary text-lg leading-[32px] text-description'>{item.description}</p>
            </div>
          ))
        }
            </div>
       
      

      </Container>

    </div>
  )
}

export default Content
