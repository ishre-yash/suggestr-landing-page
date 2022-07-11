import React from "react";

function GetStarted() {
  return (
    <main className="container mx-auto p-0 md:px-10">
      <section className="gradient-01 rounded-none px-4 py-20 md:rounded-2xl md:px-10 md:py-36">
        <div className="flex  flex-col overflow-hidden rounded-3xl bg-white md:flex-row">
          <section className="w-full p-4 text-[#1d1d1f] md:w-[60%] md:p-10">
            <h2 className="mb-3 max-w-md text-2xl font-semibold md:text-3xl ">
              Get 19% higher conversions on your store today.
            </h2>
            <p className="my-2 max-w-lg text-xl font-medium tracking-tighter">
              Full access to research-grade AI that continuously gets smarter.
              Delight your customers. 30 day free trial.
            </p>
            <div className="mb-6 mt-10 flex items-center font-semibold tracking-tighter">
              <div className="w-[80%] text-base md:w-[25%]">
                What&apos;s included
              </div>
              <div className="ml-3 h-[1px] w-full bg-[#86868b26]"></div>
            </div>
            <section className="flex w-full flex-col gap-4 text-[#1d1d1f] md:flex-row">
              <div className="mb-3 flex w-full gap-2 border-b border-[#86868b26] pb-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe8ec] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff385c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>Product page recommendations</div>
              </div>
              <div className="mb-3 flex w-full gap-2 border-b border-[#86868b26] pb-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe8ec] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff385c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>Cart-page and integrations coming soon</div>
              </div>
            </section>
            <section className="flex w-full flex-col gap-4 text-[#1d1d1f] md:flex-row">
              <div className="mb-3 flex w-full gap-2 border-b border-[#86868b26] pb-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe8ec] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff385c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>Performance dashboard</div>
              </div>
              <div className="mb-3 flex w-full gap-2 border-b border-[#86868b26] pb-3 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffe8ec] p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff385c"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>24x7 live support</div>
              </div>
            </section>
          </section>
          <section className="flex w-full flex-col items-center justify-center bg-[#ffe8ec] p-10 text-center text-[#1d1d1f] md:w-[40%]">
            <div className="text-xl font-medium">
              I don&apos;t need to talk to anyone, I&apos;m ready to try
            </div>
            <button className="mt-6 flex  items-center justify-center rounded-full bg-[#ff385c] py-4 px-8 text-xl text-white transition delay-200 ease-in-out hover:bg-[#1d1d1f] hover:text-white">
              Start Free Trial
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default GetStarted;
