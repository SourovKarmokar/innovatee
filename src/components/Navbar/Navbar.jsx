import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Container from "../Layout/Container"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className="relative" >
      <div className=" relative top-0 left-0 py-8 px-8 w-full ">
      <Container>
        <div className="md:flex justify-between items-center">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="#logo" />
            </div>
            <div className=" block md:hidden">
              <FaBars onClick={handleClick} className=" text-white" />
            </div>
          </div>
          <div className="hidden md:flex  items-center md:gap-x-6 lg:gap-x-12">
            <ul className="md:flex gap-x-[50px] font-secondary text-lg font-medium text-white">
              <li><a href="">Home</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">Service</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Blog</a></li>
            </ul>
          </div>

          <div className="hidden md:flex font-secondary text-lg font-medium items-center gap-x-9">
            <a className="font-secondary text-lg font-medium text-white">Login</a>
            <a className="font-secondary text-lg font-medium py-5 px-12 bg-secondary rounded-[6px]">Register</a>
          </div>

        </div>
        
      </Container>
      {
          show && (
            <div className="fixed inset-0 z-[999] bg-blue-300 flex flex-col items-center justify-center px-6">
          {/* Close Icon */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-6 right-6 text-2xl text-white"
            aria-label="Close menu"
          >
            <RxCross2 />
          </button>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col items-center gap-y-6 text-black font-secondary text-lg font-medium">
            <li><a href="">Home</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Blog</a></li>
          </ul>

          {/* Login/Register for Mobile */}
          <div className="mt-10 flex flex-col items-center gap-y-4">
            <a className="text-black font-medium cursor-pointer">Login</a>
            <a className="py-3 px-10 bg-secondary rounded-[6px] text-white font-medium cursor-pointer">
              Register
            </a>
          </div>
        </div>
          )
        }
    </div>

    </div>
  );
};

export default Navbar;
