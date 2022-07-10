import Head from "next/head";
import NavBar from "../components/Home/NavBar";
import VideoCard from "../components/Home/VideoCard";
import HighlightCard from "../components/Home/HighlightCard";
import UseCases from "../components/Home/UseCases";
import Research from "../components/Home/Research";
import GettingStarted from "../components/Home/GettingStarted";
import FAQ from "../components/Home/Faq";

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

function Started() {
  return (
    <>
      <main className="container mx-auto p-4 md:px-10">
        <section className="gradient-01 rounded-2xl px-4 py-20 md:px-10 md:py-36">
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
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Suggestr - Product Recommendations AI for Shopify</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <VideoCard
        videoSrc="https://uploads-ssl.webflow.com/61024a7430eba47b88a58edb/61026868d660e73f263f5661_a_guy_on_ecommerce_site_choosing_clothes_2021_04_06_23_50_49_utc-transcode.mp4"
        title="Make more money with better product recommendations"
        content="Increase revenue by 11%+ with no additional work. See what Suggestr can do for your store."
        callToAction="Book a Demo"
        actionUrl="/"
      />

      <HighlightCard />
      <Section3
        title="Supercharge your store"
        subtitle="with AI that can see"
        content="113% higher CTR — Improve the discovery across your whole catalog with
        visual AI that understands your products just like a human does."
      />
      <UseCases />
      <Research />
      <GettingStarted />
      <FAQ />

      <Started />
    </>
  );
}
