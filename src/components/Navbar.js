import React, { useState } from "react";
import "../App.css";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false)
  const [color, setColor] =  useState(false)

  const changeColor = ()=>{
    if(window.scrollY >= 120){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)
  return (
    <>
      <div className="flex m-2  justify-between items-center lg:hidden">
        <i
          onClick={() => setShowMenu(true)}
          className="uil uil-bars text-2xl "
        ></i>
        <img
          className="w-24"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/logo-black.png"
          alt="logo"
        />
        <i className=" bg-pink-300 p-3 uil uil-calendar-alt "></i>
      </div>

      <div className="lg:hidden block">
        {
            showMenu && <div className="absolute top-0 p-4  bg-lightblue w-full h-full overscroll-none">
            <div className="flex">
              <i
                onClick={() => setShowMenu(false)}
                class="text-2xl mr-28 text-white font-bold uil uil-times"
              ></i>
              <img
                className="w-24 text-white"
                src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/logo-white.png"
                alt="logo"
              />
            </div>
    
            <div>
                <ul className="text-white absolute top-1/3 left-1/3">
                    <li className="font-bold text-lg pb-2">OUR ROOMS</li>
                    <li className="font-bold text-lg pb-2">RESTAURANT</li>
                    <li className="font-bold text-lg pb-2">ABOUT US</li>
                    <li className="font-bold text-lg pb-2">CONTACT US</li>
                    <li className="font-bold text-lg pb-2">BOOK NOW</li>
                </ul>
            </div>
          </div>
        }
      </div>




      <div className={` hidden lg:flex justify-between items-center pl-40 pr-40  z-40 fixed top-0 w-full left-0  ${color ? "bg-white" : "bg-transparent"}`} >
        <div className="">
          <ul className={`flex  ${color ? " p-0 " :  " pt-14 pb-14" }`}>
            <li onMouseLeave={()=> setShow(false)} onMouseOver={()=>setShow(true)} className="mr-8 text-sm hover:border-b-2">OUR ROOMS <i class="uil uil-angle-down"></i></li>
            <li className="mr-8 text-sm  hover:border-b-2 ">RESTAURANT</li>
            <li className=" text-sm  hover:border-b-2">ABOUT US</li>
          </ul>
        </div>
        {
         show && <div  onMouseLeave={()=> setShow(false)} onMouseOver={()=>setShow(true)} className="absolute top-20 ">
            <ul  className={`p-4 pt-1 pb-1 bg-menuBG text-white w-60`}>
              <li className="m-3">STANDARD</li>
              <li className="m-3">SUPERIOR</li>
              <li className="m-3">DELUXE</li>
              <li className="m-3">EXECUTIVE</li>
              <li className="m-3">PENTHOUSE</li>
            </ul>
         </div>
        }
        <img className={`w-36 -ml-20 z-40 ${color && " w-[6rem]"}`} src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/logo-black.png" alt="logo" />
        <div className="flex items-center z-40">
        <p className="mr-8 text-sm">CONTACT US</p>
        <p className="p-3 bg-lightPink text-sm hover:bg-midnight hover:text-white">BOOK NOW</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
