import React from "react";
import styled from "styled-components";
import LocationHeaderWithImage from "../../../ui/locationHeaderImage/LocationHeaderWithImage";
import categories from "./pipesValvesFittingsData";
import WhatWeDoDropDown from "../../../ui/whatWeDo/WhatWeDoDropDown";

const ContentContainer = styled.div`
  margin: 3rem 1rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1020px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PvfImage = styled.img`
  width: 100%;
  max-width: 20rem;
  height: auto;
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: -2rem 0 0 2rem;
  }
`;

const Text = styled.h3`
  font-size: 1.8;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

const PipesValvesFittings = () => {
  return (
    <div>
      <LocationHeaderWithImage
        image="/what_we_do/PVF.webp"
        text="Pipes, Valves & Fittings"
      />
      <ContentContainer>
        <Description>
          <Text>
            Whatever the project—whether it's water and sewer line installation,
            stormwater retention systems, water/wastewater treatment plant
            construction, or fire protection equipment and services—Relitorin
            International Inc. offers a comprehensive range of solutions to meet
            your needs.
          </Text>
          <PvfImage src="/what_we_do/PVF.webp" alt="pvc" />
        </Description>
      </ContentContainer>
      <WhatWeDoDropDown categories={categories} />
    </div>
  );
};

export default PipesValvesFittings;
