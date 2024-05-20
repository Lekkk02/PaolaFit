import Image from "next/image";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import About from "@/components/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
