import Head from "next/head";
import NavBar from "../components/Home/NavBar";
import VideoCard from "../components/Home/VideoCard";
import HighlightCard from "../components/Home/HighlightCard";
import Section3 from "../components/Home/Section3";
import UseCases from "../components/Home/UseCases";
import Research from "../components/Home/Research";
import GettingStarted from "../components/Home/GettingStarted";
import FAQ from "../components/Home/Faq";
import GetStarted from "../components/Home/GetStarted";
import Footer from "../components/Home/Footer";

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
      <GetStarted />
      <Footer />
    </>
  );
}
