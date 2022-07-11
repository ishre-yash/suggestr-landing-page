import React from "react";

function Section3({ title, subtitle, content }) {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center py-28">
      <div className="mb-4 text-2xl font-medium tracking-tighter text-[#8a8a8e] md:text-3xl">
        {title}
      </div>
      <h1 className="mb-12 max-w-5xl text-center text-5xl font-bold tracking-tighter text-[#1d1d1f] md:text-8xl">
        {subtitle}
      </h1>
      <p className=" max-w-2xl text-center text-xl font-medium text-[#1d1d1f] md:text-2xl">
        {content}
      </p>
    </section>
  );
}

export default Section3;
