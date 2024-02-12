import React from "react";

let images = [
  "https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/interior-design-of-stylish-living-room-interior-2022-12-07-04-27-20-utc-1-660x913.jpg",
  "https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/pastel-pink-and-emerald-bedding-on-comfortable-kin-2021-08-26-15-45-33-utc-660x913.jpg",
  "https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/multifunctional-bedroom-and-workspace-interior-wit-2021-08-26-15-45-47-utc-660x913.jpg",
  "https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/metal-bed-in-modern-bedroom-2021-08-26-15-45-23-utc-660x913.jpg",
  "https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/big-bed-in-vintage-bedroom-2021-08-26-15-45-24-utc-660x913.jpg",
];

function Slider() {
  return (
    <>
      <div className="flex overflow-x-scroll md:hidden  ">
        <div className="ml-6 w-52  ">
          <img
            className="w-68 h-52 md:w-full"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/interior-design-of-stylish-living-room-interior-2022-12-07-04-27-20-utc-1-660x913.jpg"
            alt="img"
          />
          <div className="flex justify-between mt-3">
            <p className="font-bold text-md text-lightblue">STANDARD ROOM</p>
            <p className="text-sm text-right">
              from <span className="font-bold text-2xl text-lightblue">$59</span>
            </p>
          </div>
          <p className="text-xs">27 m2 / 2 adults 1</p>
          <p>children</p>
        </div>
        <div className="ml-6 w-52 ">
          <img
            className="w-52 h-52 md:w-full"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/pastel-pink-and-emerald-bedding-on-comfortable-kin-2021-08-26-15-45-33-utc-660x913.jpg"
            alt="img"
          />
          <div className="flex justify-between mt-3">
            <p className="font-bold text-md text-lightblue">SUPERIOR ROOM</p>
            <p className="text-sm text-right">
              from <span className="font-bold text-2xl text-lightblue">$79</span>
            </p>
          </div>
          <p className="text-xs">32 m2 / 2 adults 1</p>
          <p>children</p>
        </div>
        <div className="ml-6 w-52">
          <img
            className="w-52 h-52"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/multifunctional-bedroom-and-workspace-interior-wit-2021-08-26-15-45-47-utc-660x913.jpg"
            alt="img"
          />
          <div className="flex justify-between mt-3">
            <p className="font-bold text-md text-lightblue">DELUXE ROOM</p>
            <p className="text-sm text-right">
              from{" "}
              <span className="font-bold text-2xl text-lightblue">$129</span>
            </p>
          </div>
          <p className="text-xs">39 m2 / 3 adults 1</p>
          <p>children</p>
        </div>
        <div className="ml-6 w-52">
          <img
            className="w-52 h-52"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/metal-bed-in-modern-bedroom-2021-08-26-15-45-23-utc-660x913.jpg"
            alt="img"
          />
          <div className="flex justify-between mt-3">
            <p className="font-bold text-md text-lightblue">EXECUTIVE ROOM</p>
            <p className="text-sm text-right">
              from{" "}
              <span className="font-bold text-2xl text-lightblue">$199</span>
            </p>
          </div>
          <p className="text-xs">37 m2 / 3 adults 2</p>
          <p>children</p>
        </div>
        <div className="ml-6 w-52">
          <img
            className="w-52 h-52"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/big-bed-in-vintage-bedroom-2021-08-26-15-45-24-utc-660x913.jpg"
            alt="img"
          />
          <div className="flex justify-between mt-3">
            <p className="font-bold text-md text-lightblue">PentHouse</p>
            <p className="text-sm text-right">
              from <span className="font-bold text-2xl text-lightblue">$59</span>
            </p>
          </div>
          <p className="text-xs">90 m2 / 3 adults 1</p>
          <p>children</p>
        </div>
      </div>

      <div className="hidden md:overflow-x-scroll">
        {images.map((e, index) => {
          return (
            <div className="flex m-2">
              <img className="w-80 m-3" src={e} alt="img" />
            </div>
          );
        })}
      </div>

      <div className="mt-10 mb-10 lg:hidden">
        <div className="h-4 mb-6 bg-lightblue"></div>
        <div className="h-4 mb-6 bg-lightblue"></div>
        <div className="h-4 mb-6 bg-lightblue"></div>
      </div>

      <div className="hidden lg:block w-2/5 ml-40 mt-0">
        <p className="text-chocolate text-5xl font-bold ">
          ACCOMMODATION AT HOTELLER SUITS
        </p>
        <p className="text-chocolate mt-8 ">
          Indulge in elegance and relaxation as you step into our beautifully
          appointed rooms and suites. Whether you’re here for business or
          leisure, our accommodations offer the perfect blend of modern
          amenities and classic charm. From cozy standard rooms to spacious
          suites with breathtaking views, we have a space to suit every
          traveler’s needs.
        </p>
      </div>
 
      <div className="hidden lg:flex justify-between mt-12 m-20 overflow-x-auto">
        <div className="w-96 ">
          <img
            className="w-96"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/interior-design-of-stylish-living-room-interior-2022-12-07-04-27-20-utc-1-660x913.jpg"
            alt=""
          />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-2xl text-lightblue">STANDARD ROOM</p>
              <p>27 m2 / 2 adults 1 children</p>
            </div>
            <div>
              <p>from </p>
              <span className="text-lightblue text-3xl">$59</span>
            </div>
          </div>
        </div>
        <div className="w-96 ml-12">
          <img
            className="w-96"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/pastel-pink-and-emerald-bedding-on-comfortable-kin-2021-08-26-15-45-33-utc-660x913.jpg"
            alt=""
          />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-2xl text-lightblue">SUPERIOR ROOM</p>
              <p>32 m2 / 2 adults 1 children</p>
            </div>
            <div>
              <p>from </p>
              <span className="text-lightblue text-3xl">$79</span>
            </div>
          </div>
        </div>
        <div className="w-96 ml-12">
          <img
            className="w-96"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/multifunctional-bedroom-and-workspace-interior-wit-2021-08-26-15-45-47-utc-660x913.jpg"
            alt=""
          />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-2xl text-lightblue">DElUXE ROOM</p>
              <p>39 m2 / 3 adults 1 children</p>
            </div>
            <div>
              <p>from </p>
              <span className="text-lightblue text-3xl">$129</span>
            </div>
          </div>
        </div>
        <div className="w-96 ml-12">
          <img
            className="w-96"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/metal-bed-in-modern-bedroom-2021-08-26-15-45-23-utc-660x913.jpg"
            alt=""
          />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-2xl text-lightblue">EXECUTIVE ROOM</p>
              <p>73 m2 / 3 adults 2 children</p>
            </div>
            <div>
              <p>from </p>
              <span className="text-lightblue text-3xl">$199</span>
            </div>
          </div>
        </div>
        <div className="w-96 ml-12">
          <img
            className="w-96"
            src="https://hotellerv6-5.b-cdn.net/lifestyle/wp-content/uploads/sites/3/2023/09/big-bed-in-vintage-bedroom-2021-08-26-15-45-24-utc-660x913.jpg"
            alt=""
          />
          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-2xl text-lightblue">PENTHOUSE</p>
              <p>90 m2 / 3 adults 2 children</p>
            </div>
            <div>
              <p>from </p>
              <span className="text-lightblue text-3xl">$229</span>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Slider;
