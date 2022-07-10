import Head from "next/head";
import NavBar from "../components/Home/NavBar";
import VideoCard from "../components/Home/VideoCard";
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
        actionUrl="https://www.suggestr.co/book-demo"
      />
    </>
  );
}
