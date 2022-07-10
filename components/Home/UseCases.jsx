import React from "react";

function UseCases() {
  return (
    <section className="container mx-auto flex flex-col p-4 md:px-10 md:pt-28">
      <div className="mt-2 mb-4 text-xl font-medium text-[#8a8a8e]">
        Use cases
      </div>
      <div className="flex flex-col md:flex-row">
        <h2 className="flex max-w-2xl justify-start text-5xl font-bold text-[#1d1d1f]">
          Real stories about our technology
        </h2>
        <div className="mt-6 flex h-fit w-fit rounded-full border-2 border-[#1d1d1f] px-4 py-1 text-lg font-normal text-[#1d1d1f] transition delay-200 ease-in-out hover:bg-[#1d1d1f] hover:text-white md:mt-auto md:ml-auto md:justify-end">
          <a className="flex items-center gap-2">
            <div>Read all stories</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d1d1f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <ul className="my-10 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        <li className="w-full">
          <a>
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#f1f4f6]">
              <div className="min-h-32 overflow-hidden rounded-t-3xl ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://uploads-ssl.webflow.com/61024a7430eba45e0ea58f0c/62457889878fd29b45c326db_image%20325.jpeg"
                    className="h-72 w-full object-cover object-center transition duration-300 ease-in-out hover:scale-125"
                    alt="Blog Post"
                  />
                  <div className="absolute top-4 right-4 rounded-md bg-[#007aff] py-[1px] px-1 text-xs text-white">
                    Case Study
                  </div>
                </div>
              </div>
              <section className="h-24 rounded-b-3xl bg-[#f1f4f6] py-6 px-5 transition duration-100 ease-in hover:-translate-y-8">
                <h2 className="mb-4 text-xl font-semibold text-[#1d1d1f]">
                  Beyond The Vines – apparel and beyond
                </h2>
                <div className="items-center text-xs text-[#1d1d1f]">
                  February 15, 2022
                </div>
                <div className="mt-0 translate-y-2.5 pt-0 text-xs text-[#1d1d1f]">
                  In 2 weeks, Beyond The Vines saw an AB-tested 11% increase in
                  their revenue per session!
                </div>
              </section>
            </article>
          </a>
        </li>
        <li className="w-full">
          <a>
            <article className="group flex flex-col overflow-hidden rounded-3xl bg-[#f1f4f6]">
              <div className="min-h-32 overflow-hidden rounded-t-3xl ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://uploads-ssl.webflow.com/61024a7430eba45e0ea58f0c/62457889878fd29b45c326db_image%20325.jpeg"
                    className="h-72 w-full object-cover object-center transition duration-300 ease-in-out hover:scale-125"
                    alt="Blog Post"
                  />
                  <div className="absolute top-4 right-4 rounded-md bg-[#007aff] py-[1px] px-1 text-xs text-white">
                    Case Study
                  </div>
                </div>
              </div>
              <section className="h-24 rounded-b-3xl bg-[#f1f4f6] py-6 px-5 transition duration-100 ease-in hover:-translate-y-8">
                <h2 className="mb-4 text-xl font-semibold text-[#1d1d1f]">
                  Beyond The Vines – apparel and beyond
                </h2>
                <div className="items-center text-xs text-[#1d1d1f]">
                  February 15, 2022
                </div>
                <div className="mt-0 translate-y-2.5 pt-0 text-xs text-[#1d1d1f]">
                  In 2 weeks, Beyond The Vines saw an AB-tested 11% increase in
                  their revenue per session!
                </div>
              </section>
            </article>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default UseCases;
