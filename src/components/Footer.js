import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-footerColor lg:hidden ">
        <img
          className="w-28 m-auto pt-6"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/logo-white.png"
          alt="logo"
        />
        <p className="text-white text-center w-72 m-auto mt-4">
          Welcome to our exquisite Beach Hotel, where relaxation meets luxury,
          and every moment is a seaside dream come true.
        </p>
        <div className="mt-6 flex justify-evenly">
          <div className="text-white">
            <p className="text-center mb-4 font-bold text-xl">ADDRESS</p>
            <p className="text-center w-40">
              The Hoteller 456 Urban Avenue Cityville, NY 10001 United States
            </p>
          </div>
          <div className="text-white">
            <p className="text-center mb-4 font-bold text-xl">CONTACT</p>
            <p className="text-center w-32">+45 35634 3444 contact@thehotel</p>
          </div>
        </div>
        <div className="w-80 m-auto mt-8 text-white">
          <p className="text-center font-bold text-2xl">FOLLOW</p>
          <div className="text-center">
            <i class="text-2xl p-3 uil uil-facebook-f"></i>
            <i class="text-2xl p-3 uil uil-twitter"></i>
            <i class="text-2xl p-3 uil uil-youtube"></i>
            <i class="text-2xl p-3 uil uil-instagram"></i>
          </div>
        </div>
        <p className="text-center text-white mt-6 bg-orange-600 w-40 m-auto p-2 font-semibold ">
          BOOK NOW
        </p>
        <p className="text-white text-center mt-4 p-4 pb-8">
          2023 All Rights Reserved
        </p>
      </div>

      <div className="hidden lg:flex bg-footerColor text-white pl-28 pr-28 pt-16  justify-between">
        <div>
          <img
          className="w-40"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/logo-white.png"
            alt=""
          />
          <p className="mt-6 w-96">
            Welcome to our exquisite Beach Hotel, where relaxation meets luxury,
            and every moment is a seaside dream come true.
          </p>
        </div>
        <div>
          <p className="text-2xl">ADDRESS</p>
          <p className="mt-6 w-48">The Hoteller 456 Urban Avenue Cityville, NY 10001 United States</p>
        </div>
        <div>
          <p className="text-2xl mb-6">CONTACT</p>
          <p>+45 35634 3444</p>
          <p>contact@thehotel.com</p>
        </div>
        <div>
          <p className="text-2xl mb-6">FOLLOW</p>
          <div className="text-left">
            <i class="text-2xl p-3 uil uil-facebook-f"></i>
            <i class="text-2xl p-3 uil uil-twitter"></i>
            <i class="text-2xl p-3 uil uil-youtube"></i>
            <i class="text-2xl p-3 uil uil-instagram"></i>
          </div>
        </div>
      </div>
        <div className=" hidden lg:flex justify-between pl-28 pr-28 bg-footerColor text-white pt-20 pb-20">
          <p className="bg-lightOrange p-2">BOOK NOW</p>
          <p>© 2023 All Rights Reserved</p>
        </div>
    </>
  );
}

export default Footer;
