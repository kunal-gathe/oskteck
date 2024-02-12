import React from "react";
import Section4Img from "../assets/img/section4.png";
function Section4() {
  return (
    <>
      <div className="mt-8 lg:hidden">
        <img src={Section4Img} alt="section4" />
        <p className="text-center mt-8 text-3xl font-bold text-lightOrange w-60 m-auto">
          SOULFUL MOMENTS FOR THE HEART
        </p>
        <p className="text-center m-5 text-lightOrange ">
          Step into a world of elegance and charm as you enter Soul Food. Our
          tastefully designed interior seamlessly blends modern sophistication
          with warm, inviting tones. Whether you’re celebrating a special
          occasion
        </p>
        <p className="text-center bg-lightOrange w-40 p-1 m-auto text-white font-semibold">
          LEARN MORE
        </p>
      </div>
      <div className="mt-8 lg:hidden">
        <img
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/waiter-serving-plates-on-a-table-at-the-restaurant-2022-12-16-21-30-24-utc.jpg"
          alt="sec-4"
        />
        <div className="mt-10 ml-16 mb-10">
          <div className="h-4 mb-6 bg-lightblue"></div>
          <div className="h-4 mb-6 bg-lightblue"></div>
          <div className="h-4 mb-6 bg-lightblue"></div>
        </div>
        <p className="text-center text-3xl font-bold text-lightblue w-52 m-auto">
          LONG AND SHORT STAYS
        </p>
        <p className="mt-6 text-center m-5 text-lightblue ">
          At Hoteller, our commitment to guest satisfaction is unwavering. Our
          friendly and attentive staff is dedicated to ensuring your stay is
          comfortable and memorable. From arranging transportation to offering
          local recommendations, we’re here to assist you 24/7.
        </p>
        <p className="text-center bg-lightblue text-white mt-6 font-semibold text-sm pl-6 pr-6 pt-2 pb-2 w-56 m-auto ">
          BOOK YOUR STAY NOW
        </p>
      </div>
      <div className="lg:hidden">
        <p className="text-center mt-8 mb-6 text-3xl text-lightblue font-bold">
          HOW TO FIND OUR HOTEL
        </p>
        <p className="text-center text-lightblue m-5">
          Let us be your hosts as you create cherished memories and discover the
          true essence of Zurich. Book your stay with us today and open the door
          to a world of comfort, charm, and heartfelt hospitality.
        </p>
      </div>
      <div className="flex justify-evenly lg:hidden">
        <div className="">
          <img
            className="w-16 m-auto"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/noun-airport-5307369.png"
            alt=""
          />
          <p className=" w-40 text-sm text-center font-bold text-orange-500 mt-2 mb-2">
            31 KILOMETERS FROM AIRPORT
          </p>
          <p className="text-center text-sm w-40 text-orange-500">
            The drive from The Airport to Hoteller Suites takes approximately 35
            minutes.
          </p>
        </div>
        <div className="">
          <img
            className="w-14 m-auto"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/noun-map-city-5121150.png"
            alt=""
          />
          <p className="text-sm text-center w-32 font-bold text-orange-500 mt-2 mb-2">
            1.3 KILOMETRES FROM City Center
          </p>
          <p className="text-center text-sm w-32 text-orange-500">
            The drive from the city center to Hoteller Suites takes
            approximately 10 minutes.
          </p>
        </div>
      </div>

      <div className="hidden lg:flex mt-20 2xl:justify-center 2xl:align-middle">
        <div className="w-[28rem] ml-24 m-32">
          <p className="text-lightOrange text-5xl font-bold">
            SOULFUL MOMENTS FOR THE HEART
          </p>
          <p className="text-lightOrange  mt-8 mb-8">
            Step into a world of elegance and charm as you enter Soul Food. Our
            tastefully designed interior seamlessly blends modern sophistication
            with warm, inviting tones. Whether you’re celebrating a special
            occasion
          </p>
          <p className="bg-lightOrange text-white p-2 w-36 pl-4">LEARN MORE</p>
        </div>
        <div>
          <img src={Section4Img} className="w-[50rem] h-[40rem]" alt="" />
        </div>
      </div>
      <div className=" hidden lg:block">
        <img
          className="w-72 ml-40 -mt-16"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/waiter-serving-plates-on-a-table-at-the-restaurant-2022-12-16-21-30-24-utc.jpg"
          alt=""
        />
        <div class="bg-gray-50 py-6 sm:py-12">
          <div class="container relative mx-auto">
            <div class="bouncing-ball absolute  -top-[30rem] right-20">
              <img
                className=" w-1/4  h-[30%] absolute right-[24rem]"
                src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/close-up-of-cooked-octopus-in-a-restaurant-serving-2021-08-28-06-38-44-utc.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-between">
        <div className=" mt-32 mb-32">
          <p className="p-3 w-[40rem] bg-lightblue mb-4"></p>
          <p className="p-3 bg-lightblue  mb-4"></p>
          <p className="p-3 bg-lightblue "></p>
        </div>
        <div className="mr-60">
          <p className="text-6xl font bold text-lightblue w-96">
            LONG AND SHORT STAYS
          </p>
          <p className="mt-8 mb-8 text-lightblue w-[30rem] 2xl:w-[40rem]">
            At Hoteller, our commitment to guest satisfaction is unwavering. Our
            friendly and attentive staff is dedicated to ensuring your stay is
            comfortable and memorable. From arranging transportation to offering
            local recommendations, we’re here to assist you 24/7.
          </p>
          <p className="bg-lightblue text-white pl-3 p-2 w-48">
            BOOK YOU STAY NOW
          </p>
        </div>
      </div>

      <div className="hidden lg:flex m-36 mt-20 2xl:justify-center 2xl:align-middle">
       <div className="mr-8">
       <p className=" font-bold text-5xl text-lightblue w-[32rem] ">HOW TO FIND OUR HOTEL</p>
        <p className="mt-8 mb-8 text-lightblue w-[32rem]">
          Let us be your hosts as you create cherished memories and discover the
          true essence of Zurich. Book your stay with us today and open the door
          to a world of comfort, charm, and heartfelt hospitality.
        </p>
        <div className=" flex">
          <div className="mr-4">
            <img
            className="w-20 mb-4"
              src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/noun-airport-5307369.png"
              alt=""
            />
            <p className="text-lightOrange mb-4">31 KILOMETRES FROM AIRPORT</p>
            <p className="text-lightOrange w-72">
              The drive from The Airport to Hoteller Suites takes approximately
              35 minutes.
            </p>
          </div>
          <div className="mr-4">
            <img
            className="w-16 mb-4"
              src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/noun-map-city-5121150.png"
              alt=""
            />
            <p className="text-lightOrange mb-4">1.3 KILOMETRES FROM City Center</p>
            <p className="text-lightOrange w-72">
            The drive from the city center to Hoteller Suites takes approximately 10 minutes.
            </p>
          </div>
          
        </div>
       </div>

        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29772.720202541543!2d79.02064277431643!3d21.128905000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07e10bf61e3%3A0xa27a64d8f3196b79!2sOSKIT%20Solutions%20-%20Digital%20Marketing%20Agency%20%7C%20Graphic%20Designing%20%7C%20Marketplace%20Management%20%7C%20Website%20Development%20company!5e0!3m2!1sen!2sin!4v1707638847912!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </>
  );
}

export default Section4;
