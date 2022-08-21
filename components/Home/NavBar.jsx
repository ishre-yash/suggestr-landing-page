import React, { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="fixed z-50 mt-4 w-full">
        <div className="container top-5 z-50 mx-auto flex w-11/12 items-center justify-between rounded-full border-2 border-gray-100 bg-white p-2 text-sm shadow-sm md:max-w-4xl md:flex-row md:justify-center md:gap-4">
          <div className=" flex-1 items-center justify-center">
            <img
              src="/logos/logo.png"
              alt="Suggester"
              loading="lazy"
              className="h-6 w-36 object-cover"
            />
          </div>

          <div
            onClick={() => setShow(!show)}
            className=" cursor-pointer items-center justify-center rounded-full bg-black p-3 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </div>
          <section className={`${show ? "block" : "hidden"} md:block`}>
            <div className="absolute top-20 right-7 ml-4 flex flex-col items-end justify-end gap-2 text-right antialiased  md:relative md:top-auto md:right-auto md:flex-row md:items-center md:justify-center ">
              <div className="nav-link-wrapper relative flex items-center overflow-hidden rounded-full bg-white text-center hover:text-white">
                <a className="z-10 rounded-full px-5 py-3 font-semibold leading-4 text-[#1d1d1f] transition-colors delay-150 duration-300 hover:bg-[#1d1d1f] hover:text-white">
                  Demo Store
                </a>
                <div className="nav-bg z-10 rounded-full px-5 py-2"></div>
              </div>
              <div className="nav-link-wrapper relative flex items-center overflow-hidden rounded-full bg-white text-center hover:text-white">
                <a className="z-10 rounded-full px-5 py-3 font-semibold leading-4 text-[#1d1d1f] transition-colors delay-150 duration-300 hover:bg-[#1d1d1f] hover:text-white">
                  Shopify App
                </a>
                <div className="nav-bg z-10 rounded-full px-5 py-2"></div>
              </div>

              <div className="nav-link-wrapper relative flex items-center overflow-hidden rounded-full bg-white text-center hover:text-white">
                <a className="z-10 rounded-full px-5 py-3 font-semibold leading-4 text-[#1d1d1f] transition-colors delay-150 duration-300 hover:bg-[#1d1d1f] hover:text-white">
                  Pricing
                </a>
                <div className="nav-bg z-10 rounded-full px-5 py-2"></div>
              </div>
              <div className="nav-link-wrapper relative flex items-center overflow-hidden rounded-full bg-white text-center hover:text-white">
                <a className="z-10 rounded-full px-5 py-3 font-semibold leading-4 text-[#1d1d1f] transition-colors delay-150 duration-300 hover:bg-[#1d1d1f] hover:text-white">
                  Contact us
                </a>
                <div className="nav-bg z-10 rounded-full px-5 py-2"></div>
              </div>
              <div className="nav-link-wrapper relative flex items-center overflow-hidden  rounded-full bg-white text-center hover:text-white md:bg-[#ededee]">
                <a className="z-10 rounded-full  px-5 py-3 font-semibold leading-4 text-[#1d1d1f] transition-colors delay-150 duration-300 hover:bg-[#1d1d1f] hover:text-white">
                  Book a Demo
                </a>
                <div className="nav-bg z-10 rounded-full px-5 py-2 "></div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
