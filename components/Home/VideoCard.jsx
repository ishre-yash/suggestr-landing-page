import React from "react";

function VideoCard({ videoSrc, title, content, callToAction, actionUrl }) {
  return (
    <>
      <section className="mx-0 pt-24 md:pt-28 lg:mx-10">
        <div className="relative h-full w-full overflow-hidden rounded-none md:rounded-3xl lg:h-[600px]">
          <video
            className="absolute top-0 left-0 h-full w-full object-cover"
            playsInline
            autoPlay
            muted
            loop
            src={videoSrc}
          ></video>
          <div className="relative h-full w-full bg-black/75 px-3  py-20 text-center text-white  sm:px-16 sm:pt-36">
            <div className=" mx-auto flex w-full flex-col items-center justify-center gap-6 md:max-w-4xl">
              <h1 className="title text-4xl font-bold tracking-tighter sm:text-5xl md:text-7xl">
                {title}
              </h1>
              <p className="content w-[90%] text-left text-xl font-normal md:w-[80%] lg:w-[45vw] lg:text-2xl">
                {content}
              </p>
              <a href={actionUrl}>
                <button className="action-btn rounded-full bg-white px-8 py-4 text-xl font-medium text-black transition delay-200 ease-in-out hover:bg-[#1d1d1f] hover:text-white">
                  {callToAction}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoCard;
