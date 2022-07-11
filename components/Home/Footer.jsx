import React from "react";

function footer() {
  return (
    <main className="container mx-auto mt-[2px] mb-6 p-0 md:my-10 md:px-10">
      <section className="rounded-none bg-[#1d1d1f] px-6 py-20 md:rounded-2xl md:px-10 md:py-20">
        <section className="flex flex-col gap-6 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-4 md:w-[40%]">
            <img
              className="h-20 w-fit"
              src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/610ba235b00a602ea0b78ae9_logo_3D_png-p-500.png"
              rel=""
            />
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
                src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61137573fdefcd7eb862ebb9_shopify-logo-white.png"
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
              <img
                className="h-4 w-4"
                src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61024a7430eba48296a58fc0_twitter-black.svg"
                rel=""
              />
            </a>
            <a className="iten-center flex h-8 w-8 justify-center rounded-full bg-white p-2 transition duration-300 hover:bg-[#007aff]">
              <img
                className="h-4 w-4"
                src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61024a7430eba4da66a58f98_instagram-black.svg"
                rel=""
              />
            </a>
            <a className="iten-center flex h-8 w-8 justify-center rounded-full bg-white p-2 transition duration-300 hover:bg-[#007aff]">
              <img
                className="h-4 w-4"
                src="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61024a7430eba4a0bea58fbf_linkedin-black.svg"
                rel=""
              />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default footer;
