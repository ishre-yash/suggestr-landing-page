import React from "react";

function footer() {
  return (
    <main className="container mx-auto mt-[2px] mb-6 p-0 md:my-10 md:px-10">
      <section className="rounded-none bg-[#1d1d1f] px-6 py-20 md:rounded-2xl md:px-10 md:py-20">
        <section className="flex flex-col gap-6 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-4 md:w-[40%]">
            <img className="h-20 w-fit" src="/logos/logoIcon.png" rel="" />
            <p className="my-2 w-full text-left text-xl font-medium text-[#8a8a8e]">
              Amazon-quality product recommendations for your brand. Increased
              conversions and higher AOV. Easy 3-min setup.
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col gap-2  pl-0 md:w-[40%] md:pl-16">
            <a className="text-2xl font-semibold text-white transition duration-300 hover:text-[#007AFF] md:text-3xl">
              Demo Store
            </a>
            <a className="text-2xl font-semibold text-white transition duration-300 hover:text-[#007AFF] md:text-3xl">
              Shopify App
            </a>
            <a className="text-2xl font-semibold text-white transition duration-300 hover:text-[#007AFF] md:text-3xl">
              Pricing
            </a>
            <a className="text-2xl font-semibold text-white transition duration-300 hover:text-[#007AFF] md:text-3xl">
              Contact Us
            </a>
            <a className="text-2xl font-semibold text-white transition duration-300 hover:text-[#007AFF] md:text-3xl">
              Book a Demo
            </a>
          </div>
          <div className=" flex w-full flex-col gap-2 md:w-[20%]">
            <a className="text-sm font-semibold text-white transition duration-300 hover:text-[#007AFF]">
              Shopify App FAQ
            </a>
            <a className="text-sm font-semibold text-white transition duration-300 hover:text-[#007AFF]">
              Terms of Use
            </a>
            <a className="text-sm font-semibold text-white transition duration-300 hover:text-[#007AFF]">
              Privacy Policy
            </a>
          </div>
        </section>
        <section className="mt-10 flex flex-col justify-between md:flex-row">
          <div className="flex flex-col gap-6 md:flex-row">
            <a className="flex flex-row">
              <img
                className="mr-3 h-10"
                src="/images/shopify-logo.png"
                rel=""
              />
              <div className="flex flex-col">
                <div className="text-left text-sm font-normal text-[#8a8a8e]">
                  Available On The
                </div>
                <div className="font-sm font-semibold text-white">
                  Shopify AppStore
                </div>
              </div>
            </a>
            <div className="mt-auto text-left text-sm font-normal text-[#8a8a8e]">
              Copyright © 2022 name Pte. Ltd.{" "}
            </div>
          </div>
          <div className="mr-8 mt-6 flex gap-2 md:mt-0 md:gap-4">
            <a className="iten-center flex h-8 w-8 justify-center rounded-full bg-white p-2 transition duration-300 hover:bg-[#007aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M24,4.4c-0.9,0.4-1.9,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.8c-1,0.6-2,1-3.1,1.2C19.3,2.6,18,2,16.6,2  c-2.8,0-5,2.3-4.9,5c0,0.4,0.1,0.8,0.1,1.2C7.8,8,4.1,6.1,1.7,2.9C0.4,5.2,1,8.2,3.2,9.7C2.4,9.6,1.7,9.4,1,9v0.1  c0,2.4,1.7,4.5,4,4.9c-0.7,0.2-1.5,0.2-2.2,0.1c0.6,2,2.5,3.5,4.6,3.5c-2,1.7-4.7,2.4-7.3,2.1C2.2,21.2,4.9,22,7.6,22  c9.1,0,14-7.7,14-14.4V7C22.5,6.3,23.3,5.4,24,4.4z" />
              </svg>
            </a>
            <a className="iten-center flex h-8 w-8 justify-center rounded-full bg-white p-2 transition duration-300 hover:bg-[#007aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M17,0c1.9-0.1,3.7,0.7,5.1,2c1.3,1.3,2,3.2,1.9,5v10c0,2.1-0.7,3.9-2,5.1c-1.4,1.3-3.2,2-5.1,1.9H7.1  c-1.9,0.1-3.7-0.6-5-1.9c-1.4-1.4-2.1-3.2-2-5.2V7c0-4.2,2.8-7,7-7H17z M17,2.2h-10c-1.5,0-2.7,0.4-3.5,1.2C2.6,4.4,2.2,5.7,2.2,7  v9.9c0,1.5,0.4,2.7,1.3,3.6c1,0.9,2.2,1.3,3.5,1.2h9.9c1.3,0.1,2.6-0.4,3.5-1.2c0.9-0.9,1.4-2.2,1.4-3.5V7c0-1.3-0.4-2.5-1.3-3.5  C19.6,2.6,18.3,2.2,17,2.2z M12,5.8c3.4,0,6.2,2.8,6.2,6.2c0,3.4-2.8,6.2-6.2,6.2c-3.4,0-6.2-2.8-6.2-6.2C5.8,8.5,8.6,5.8,12,5.8z   M12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z M18.4,4.2c0.8,0,1.4,0.6,1.4,1.4  c0,0.8-0.6,1.4-1.4,1.4c0,0,0,0,0,0C17.7,7,17,6.4,17,5.6S17.7,4.2,18.4,4.2z" />
              </svg>
            </a>
            <a className="iten-center flex h-8 w-8 justify-center rounded-full bg-white p-2 transition duration-300 hover:bg-[#007aff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M22.2,0H1.8C0.8,0,0,0.8,0,1.7v20.6c0,1,0.8,1.7,1.8,1.7h20.5c1,0,1.8-0.8,1.8-1.7V1.7C24,0.8,23.2,0,22.2,0z   M7.3,20.1H3.7V9.2h3.6V20.1z M5.5,7.8L5.5,7.8c-1.3,0-2-0.8-2-1.9C3.4,4.8,4.2,4,5.5,4c1.2,0,2,0.8,2,1.9C7.5,6.9,6.7,7.8,5.5,7.8  L5.5,7.8z M20.3,20.1h-3.6v-5.8c0-1.4-0.5-2.4-1.8-2.4c-1,0-1.6,0.7-1.9,1.3c-0.1,0.2-0.1,0.6-0.1,0.9v6.1H9.3c0,0,0.1-9.8,0-10.8  h3.6v1.5c0.7-1.2,1.9-1.9,3.3-1.8c2.4,0,4.2,1.6,4.2,4.9L20.3,20.1L20.3,20.1z" />
              </svg>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default footer;
