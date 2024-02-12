import React from "react";
import SectionImg from "../assets/img/section3.png";
function Section3() {
  return (
    <>
      <div className=" lg:hidden">
        <img src={SectionImg} className="w-full" alt="section-3" />
        <p className="text-center text-3xl mt-8 text-lightblue font-bold w-72 m-auto">
          WHERE EVERY STAY IS A HUG OF HOSPITALITY
        </p>
        <p className="text-center m-5 text-lightblue text-base">
          At Hoteller, we pride ourselves on providing a personalized and
          intimate experience for each guest. Our cozy rooms are thoughtfully
          designed to offer modern amenities while retaining the warmth and
          character of a home away from home. Whether you’re traveling for
          leisure or business, our comfortable accommodations ensure a restful
          night’s sleep.
        </p>
        <p className="text-center bg-lightblue text-white mt-6 font-semibold text-sm pl-6 pr-6 pt-2 pb-2 w-56 m-auto ">
          BOOK YOUR STAY NOW
        </p>
      </div>

      <div className="hidden lg:flex mt-12 2xl:justify-center 2xl:align-middle">
        <div className="w-1/2" >
          <img src={SectionImg} className="w-full h-[45rem]" alt="section-3" />
        </div>
        <div className="w-[27rem] 2xl:w-[32rem] mt-32 ml-52">
          <p className="text-5xl text-lightblue font-bold">
            WHERE EVERY STAY IS A HUG OF HOSPITALITY
          </p>
          <p className=" mt-8 text-lightblue ">
            At Hoteller, we pride ourselves on providing a personalized and
            intimate experience for each guest. Our cozy rooms are thoughtfully
            designed to offer modern amenities while retaining the warmth and
            character of a home away from home. Whether you’re traveling for
            leisure or business, our comfortable accommodations ensure a restful
            night’s sleep
          </p>
          <p className="bg-lightblue text-white w-52 p-2 mt-8">
            BOOK YOUR STAY NOW
          </p>
        <div class="bg-gray-50 py-6 sm:py-12">
          <div class="container relative mx-auto">
            <div class="bouncing-ball absolute -top-[30rem] -left-96 ">
              <img
                className=" w-11/12  h-[40%] "
                src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/stylish-and-modern-composition-of-living-room-2022-12-07-04-22-36-utc.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  );
}

export default Section3;
