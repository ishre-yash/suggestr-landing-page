import Head from "next/head";
import NavBar from "../components/Home/NavBar";
import VideoCard from "../components/Home/VideoCard";
import HighlightCard from "../components/Home/HighlightCard";

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

function CaseStudy({ title }) {
  return (
    <>
      <section className="container mx-auto flex flex-col py-28 px-10">
        <div className="mt-2 mb-4 text-xl font-medium text-[#8a8a8e]">
          Use cases
        </div>
        <div className="flex flex-row">
          <h2 className="flex max-w-2xl justify-start text-5xl font-bold text-[#1d1d1f]">
            Real stories about our technology
          </h2>
          <div className="flex h-fit justify-end rounded-full border-2 border-[#1d1d1f] px-4 py-2 text-lg font-normal text-[#1d1d1f]">
            <a className="flex items-center gap-2">
              <div>Read all stories</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1d1d1f"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
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
      <CaseStudy />
    </>
  );
}
