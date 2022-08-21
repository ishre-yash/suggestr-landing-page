import React, { lazy } from "react";

function GettingStarted() {
  return (
    <>
      <section className="container mx-auto flex w-full flex-col p-4 md:flex-row md:px-10">
        <div className="hidden h-full overflow-hidden rounded-none md:mr-6 md:block md:w-[50%] md:rounded-3xl lg:h-[600px]">
          <video
            className="top-0 left-0 h-full w-full object-cover"
            playsInline
            autoPlay
            muted
            loop
            loading={lazy}
            src="/videos/start.webm"
          ></video>
        </div>
        <div className="h-full w-full overflow-hidden rounded-3xl bg-[#f1f4f6] p-4 text-[#1d1d1f] md:w-[50%] md:p-10 lg:h-[600px]">
          <h3 className="mt-1 mb-8 text-xl font-medium text-[#8a8a8e]">
            Getting started is as easy as 1-2-3
          </h3>
          <ul>
            <li className="mb-6 border-b border-[#86868b26] pb-6">
              <div className="flex items-center justify-start gap-2">
                <div className="flex h-5  w-5 items-center justify-center rounded-full bg-[#1d1d1f] p-1 text-center text-xs font-semibold text-white">
                  1
                </div>
                <div className="my-2 max-w-xl text-xl font-medium">
                  Install the app from Shopify app store
                </div>
              </div>
              <p className="w-full text-sm font-normal tracking-tighter text-[#8a8a8e] md:w-[75%]">
                Installation and initial processing takes under 3 minutes. A
                customer happiness manager will reach out to you to hold your
                hand every step of the way.
              </p>
            </li>
            <li className="mb-6 border-b border-[#86868b26] pb-6">
              <div className="flex items-center justify-start gap-2">
                <div className="flex h-5  w-5 items-center justify-center rounded-full bg-[#1d1d1f] p-1 text-center text-xs font-semibold text-white">
                  2
                </div>
                <div className="my-2 max-w-xl text-xl font-medium">
                  We will customize it for you
                </div>
              </div>
              <p className="w-full text-sm font-normal tracking-tighter text-[#8a8a8e] md:w-[75%]">
                Suggestr will inherit the basic style of your theme while our
                developers will make the recommendation section look native for
                your particular store.
              </p>
            </li>
            <li className="mb-6 pb-6">
              <div className="flex items-center justify-start gap-2">
                <div className="flex h-5  w-5 items-center justify-center rounded-full bg-[#1d1d1f] p-1 text-center text-xs font-semibold text-white">
                  3
                </div>
                <div className="my-2 max-w-xl text-xl font-medium">
                  Enjoy meaningful recommendations in your storefront
                </div>
              </div>
              <p className="w-full text-sm font-normal tracking-tighter text-[#8a8a8e] md:w-[75%]">
                Congratulations! You store is now displaying the smartest
                product recommendations on Shopify. Check out the dashboard to
                see exactly how much sales Suggestr has generated for your
                store.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default GettingStarted;
