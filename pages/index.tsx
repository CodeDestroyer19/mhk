import Navbar from "@/components/Navigation/Navbar";
import Blog from "@/components/Sections/Blogs";
import Roadmap from "@/components/Sections/Roamap";
import ServicesSection from "@/components/Sections/Services";
import React from "react";
import LandingPage from "../components/Sections/Landing";
import { ParallaxProvider } from "react-scroll-parallax";
import MetaData from "@/components/Meta/MetaData";
import Footer from "@/components/Navigation/Footer";
import TokenEconomics from "@/components/comps/InteractiveTokenomics";

export default function Home() {
  return (
    <ParallaxProvider>
      <MetaData />
      <Navbar />
      <div className="grad">
        <LandingPage />
      </div>
      <ServicesSection />
      <Roadmap />
      <TokenEconomics />
      <div className="grad">
        <Blog />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
