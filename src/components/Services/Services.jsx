import React from 'react'
import Container from '../Layout/Container'
import Services1 from '../../assets/s1.png'
import Services2 from '../../assets/s2.png'
import Services3 from '../../assets/s3.png'
import Services4 from '../../assets/s4.png'
import Flex from '../Layout/Flex/Flex'
import Arrow from '../../assets/sarrow.png'

const items = [
  {
    id: 1,
    img: Services1,
    title: "Plan Product Roadmap",
    description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
    button: "Read More",
    src: Arrow,
  },
  {
    id: 2,
    img: Services2,
    title: "Assign Any Work",
    description: "Work assignment or job assignment is allocating work to work centers or appropriate",
    button: "Read More",
    src: Arrow,
  },
  {
    id: 3,
    img: Services3,
    title: "Monitor Work Progress",
    description: "Keeping records and monitoring activities helps people see progress",
    button: "Read More",
    src: Arrow,
  },
  {
    id: 4,
    img: Services4,
    title: "Perfect Integration",
    description: "App integration, in a general sense, is the process of resources or capabilities from one application",
    button: "Read More",
    src: Arrow,
  },
];
const Services = () => {
  return (
    <div>
      <div>
        <Container>
            <div>
                <p className='font-secondary text-integrations font-normal text-[20px] items-center text-center mt-[140px]'>Our Services</p>
            <h4 className='font-primary font-bold text-[46px] text-title w-[304px] leading-[58px] items-center text-center m-auto mt-1'>How It Works</h4>
            </div>


            {/* <Flex className='justify-between' >
           <div className='bg-[#DCE7FE] rounded-2xl pb-[36px]'>
             <div className='w-[330px] ml-[36px] relative  '>
                <img className='w-[92px] mt-[36px] ' src={Services1} alt="" />
                <h4 className='font-primary font-bold text-[22px] text-title leading-[34px] w-[258px] mt-[26px] ' >Plan Product Roadmap</h4>
                <p className='font-secondary font-normal text-[16px] leading-[26px] w-[258px] mt-[8px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                <a className='text-primary font-primary font-medium text-[16px] leading-[26px] w-[81px] mt-[26px]  ' href="">Read More </a>
                <img className='absolute mt-[-17px] ml-[88px] '  src={Arrow} alt="" />
            </div>
           </div>
            </Flex> */}
         <Flex className=' gap-x-[30px] mt-[80px] mb-[80px] justify-between items-center ' >
            {
                items.map((item)=>(
                    <div key={item.id} className='bg-[#DCE7FE] rounded-2xl pb-[36px]'>
             <div className='w-[330px] ml-[36px] relative  '>
                <img className='w-[92px] mt-[36px] ' src={item.img} alt="" />
                <h4 className='font-primary font-bold text-[22px] text-title leading-[34px] w-[258px] mt-[26px] ' >{item.title}</h4>
                <p className='font-secondary font-normal text-[16px] leading-[26px] w-[258px] mt-[8px]'>{item.description}</p>
                <a className='text-primary font-primary font-medium text-[16px] leading-[26px] w-[81px] mt-[26px]  ' href="">{item.button} </a>
                <img className='absolute mt-[-17px] ml-[88px] '  src={item.src} alt="" />
            </div>
           </div>
                ) )
            },
            </Flex>


        </Container>
      </div>
    </div>
  )
}

export default Services
