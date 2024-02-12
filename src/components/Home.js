import React from "react";
import HomeImg from "../assets/img/bed-with-wooden-headboard-PDDQ94F-1080x720.jpg";
import Slider from "./Slider";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";

function Home() {
  return (
    <div className="2xl:text-xl">
      <div className="lg:hidden">
        <img
          className="h-96 w-full object-cover"
          src={HomeImg}
          alt="home-img"
        />
        <p className="text-center mt-4 font-bold text-3xl text-lightblue">
          BOOK A ROOM
        </p>
        <p className="text-center  font-bold text-3xl text-lightblue">
          {" "}
          BY THE SEA
        </p>
        <p className="text-center mt-4 text-lightblue m-2 text-sm">
          Discover a world of comfort, luxury, and unparalleled hospitality at
          Hoteller. Nestled in the heart of city, our exquisite hotel is your
          home away from home, where every stay is a memorable experience.
        </p>
        <p className="text-center bg-lightblue text-white mt-6 font-semibold text-sm pl-6 pr-6 pt-2 pb-2 w-56 m-auto ">
          BOOK YOUR STAY NOW
        </p>
        <img
          className="mt-10"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/interior-design-of-modern-living-room-2022-12-07-04-28-42-utc-1.jpg"
          alt="home-2"
        />
        <img
          className="mt-4"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/abstract-decorations-interior-design-2022-11-15-21-14-08-utc.jpg"
          alt="img-3"
        />
      </div>
      <div className="lg:hidden">
        <p className="text-center text-lightOrange font-bold text-3xl w-64 m-auto mt-8">
          ACCOMMODATION AT HOTELLER SUITES
        </p>
        <p className="text-center text-lightOrange  m-6">
          Indulge in elegance and relaxation as you step into our beautifully
          appointed rooms and suites. Whether you’re here for business or
          leisure, our accommodations offer the perfect blend of modern
          amenities and classic charm. From cozy standard rooms to spacious
          suites with breathtaking views, we have a space to suit every
          traveler’s needs.
        </p>
      </div>

      <div className="hidden  lg:flex w-11/12 m-auto ml-28  ">
        <div className="w-1/3 mt-52 ">
          <p className="text-6xl font-bold text-midnight">BOOK A ROOM</p>

          <div class="bg-gradient-to-tr to-blue-700 from-indigo-900 ">
            <div class="w-max">
              <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-midnight font-bold">
                BY THE SEA
              </h1>
            </div>
          </div>

          <p className="w-96 mt-8 mb-12 text-midnight font-normal">
            Discover a world of comfort, luxury, and unparalleled hospitality at
            Hoteller. Nestled in the heart of city, our exquisite hotel is your
            home away from home, where every stay is a memorable experience.
          </p>
          <p className="bg-midnight text-white p-3 w-56 pl-6">
            BOOK YOUR STAY NOW
          </p>
        </div>
        <img
          src={HomeImg}
          alt=""
          className="absolute top-0 right-0 z-0 w-[63%] h-[55rem]"
        />
      </div>


      <div class="hidden lg:block bg-gray-50 py-6 sm:py-12">
        <div class="container relative mx-auto">
          <div class="bouncing-ball absolute top-20 left-96 ">
          <img
          className=" w-1/3  h-[50%] "
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/interior-design-of-modern-living-room-2022-12-07-04-28-42-utc-1.jpg"
          alt=""
        />
          </div>
        </div>
      </div>

      <div className=" hidden lg:block mb-[50rem]">
        <img
          className="w-80 absolute right-48 top-[60rem]"
          src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/abstract-decorations-interior-design-2022-11-15-21-14-08-utc.jpg"
          alt=""
        />
      </div>

      <Slider />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
