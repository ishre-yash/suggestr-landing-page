import React from "react";

function Research() {
  return (
    <main className="container mx-auto p-4 md:px-10">
      <section className="rounded-2xl bg-[#1d1d1f]">
        <div className="flex flex-col p-6 md:flex-row md:p-16">
          <div className="flex w-full flex-col items-start justify-center md:w-[50%]">
            <h4 className=" text-xl font-medium text-[#8a8a8e]">
              Research-grade Sales AI
            </h4>
            <h1 className="w-full text-3xl font-semibold text-white md:max-w-md">
              Machine learning models that understand your products just like
              humans do. Perfect recommendations from day 1.
            </h1>
          </div>
          <div className="mt-8 flex w-full flex-col md:mt-0 md:w-[50%]">
            <section className="flex flex-col gap-6 md:flex-row">
              <div className="module fade-in-1st max-w-5xl rounded-3xl bg-transparent bg-[#2a2a2c] p-6 md:p-10">
                <div className="icon-container w-fit rounded-[31%] bg-white p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d1d1f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
                  </svg>
                </div>
                <div className="description mt-16 mb-2 max-w-lg text-xl font-medium text-white">
                  16+ style settings for granular customization
                </div>
              </div>
              <div className="module fade-in-1st max-w-5xl rounded-3xl bg-transparent bg-[#2a2a2c] p-6 md:p-10">
                <div className="icon-container w-fit rounded-[31%] bg-white p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d1d1f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="description mt-16 mb-2 max-w-lg text-xl font-medium text-white">
                  Effective for new visitors coming to your store
                </div>
              </div>
            </section>
            <section className="mt-6 flex flex-col gap-6 md:flex-row">
              <div className="module fade-in-1st max-w-5xl rounded-3xl bg-transparent bg-[#2a2a2c] p-6 md:p-10">
                <div className="icon-container w-fit rounded-[31%] bg-white p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d1d1f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <div className="description mt-16 mb-2 max-w-lg text-xl font-medium text-white">
                  Supports new SKUs and new stores with no orders
                </div>
              </div>
              <div className="module fade-in-1st max-w-5xl rounded-3xl bg-transparent bg-[#2a2a2c] p-6 md:p-10">
                <div className="icon-container w-fit rounded-[31%] bg-white p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1d1d1f"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                </div>
                <div className="description mt-16 mb-2 max-w-lg text-xl font-medium text-white">
                  Performance dashboard with fair attribution of Suggestr sales
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Research;
