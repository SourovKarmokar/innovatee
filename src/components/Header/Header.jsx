import React from "react";
import bannerShape from "../../assets/backgroundshape.png";
const Header = ({children}) => {
  return (
   <div
  className='bg-cover bg-center bg-no-repeat '
  style={{
    backgroundImage : `url(${bannerShape})`
  }}
>
  {children}
</div>

  );
};

export default Header;
