import React from "react";
import logo from "../../assets/logo.png";
import Container from"../Layout/Container"

const Navbar = () => {
  return (
    <div className="py-8 px-8">
      
        <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="#logo" />
          </div>
          <div>
            <ul className="flex gap-x-[50px] font-secondary text-lg font-medium text-white" >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">Pages</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex font-secondary text-lg font-medium items-center gap-x-9">
            <a className="font-secondary text-lg font-medium text-white">Login</a>
            <a className="font-secondary text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]">Register</a>
          </div>
        </div>
        </Container>
        
      </div>
    
  );
};

export default Navbar;
