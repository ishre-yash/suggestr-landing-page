import InnerCard from "./InnerCard";

export default function HighlightCard() {
  return (
    <main className="container mx-auto p-4 md:p-10 md:pt-28">
      <section
        className="rounded-2xl  "
        style={{
          background:
            "radial-gradient(circle farthest-side at 0 100%,#fff1eb,#ace0f9)",
        }}
      >
        <div className="flex flex-col p-6 md:flex-row md:p-10">
          <div className="flex w-full flex-col items-start justify-center md:w-[60%]">
            <h4 className=" text-xl font-medium text-[#8a8a8e]">
              Why should I care
            </h4>
            <h1 className="w-full text-3xl font-semibold text-[#1d1d1f] md:max-w-md">
              Businesses make an average of 11% more within 20 days of setup.
            </h1>
            <button className="mt-6 flex  items-center justify-center rounded-full bg-[#007AFF] py-4 px-8 text-xl text-white">
              Book a Demo
            </button>
          </div>
          <div className="mt-8 flex w-full flex-col md:mt-0 md:w-[40%]">
            <div className="border-b border-[#b5d6e6]">
              <InnerCard
                highlight="33x"
                title="What's the ROI?"
                content="Clear revenue attribution. 30-day free trial."
              />
            </div>
            <InnerCard
              highlight="13ms"
              title="Will this slow down my store?"
              content="Time is money and Suggestr is built for extreme performance. Loads faster than a Google search."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
