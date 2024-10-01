import React from "react";
import Hero from "../hero/Hero";
import Carousel from "../ui/texasInventaryCarousal/Carousal";
import AboutHome from "../ui/aboutHome/AboutHome";
import WhatWeDo from "../ui/whatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <AboutHome />
      <WhatWeDo />
    </div>
  );
};

export default Home;
