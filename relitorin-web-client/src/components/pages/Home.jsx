import React from "react";
import Hero from "../hero/Hero";
import Carousel from "../ui/texasInventaryCarousal/Carousal";
import AboutHome from "../ui/aboutHome/AboutHome";
import WhatWeDo from "../ui/whatWeDo/WhatWeDo";
import WhyChooseUs from "../ui/whyChooseus/WhyChooseus";
import IndustriesWeServe from "../ui/industriesweseve/IndustriesWeserve";
import FeaturedProjects from "../ui/projects/FeauturedProjects";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <AboutHome />
      <WhatWeDo />
      <WhyChooseUs />
      <IndustriesWeServe />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
