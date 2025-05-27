import React from 'react'
import Container from '../Layout/Container'
import query from '../../assets/query.png'
import Flex from '../Layout/Flex/Flex'
const Query = () => {
  return (
    <div className=' relative'>
      <Container >
            <img src={query} alt="" />
             <Flex className=' justify-between'>
                 <h3 className=' absolute top-[100px] left-[497px] font-primary w-[577px] font-bold text-[46px] leading-[58px] text-white'>Don’t find the answer?  contact us for any query.</h3>
                 <a className='absolute  top-[145px] right-[502px]  font-secondary text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]' href="">Contact Us</a>
             </Flex>
      </Container>
    </div>
  )
}

export default Query
