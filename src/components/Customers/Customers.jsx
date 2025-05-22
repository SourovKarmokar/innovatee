import React from 'react'
import icon from "../../assets/customericon.png"
import Container from '../Layout/Container'
const Customers = () => {
  return (
    <div>
       <Container>
          <img className='mt-[147px]' src={icon} alt="" />
          <div>
            <h4 >Trusted by 35,000+ happy customers.</h4>
            <div>
                <div>
                    <h3>720+</h3>
                    <p>Over 500 business powered with us</p>
                </div>
            </div>
          </div>
       </Container>
    </div>
  )
}

export default Customers
