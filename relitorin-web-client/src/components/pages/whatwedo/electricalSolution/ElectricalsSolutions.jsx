import React from "react";
import styled from "styled-components";
import LocationHeaderWithImage from "../../../ui/locationHeaderImage/LocationHeaderWithImage";
import WhatWeDoDropDown from "../../../ui/whatWeDo/WhatWeDoDropDown";
import electricalData from "./electricalData";

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

const ElectricalsSolutions = () => {
  return (
    <div>
      <LocationHeaderWithImage
        image="/electricity/variableFrequencyDrive.jpg"
        text="Electrical Solutions"
      />
      <ContentContainer>
        <Description>
          <Text>
            Whatever the project—whether it's industrial power distribution,
            residential wiring systems, renewable energy installations, or
            advanced electrical control and automation—Relitorin International
            Inc. provides a comprehensive range of solutions designed to power
            your success.
          </Text>
          <PvfImage src="/electricity/oilFiltererdTransformer.jpg" alt="pvc" />
        </Description>
      </ContentContainer>
      <WhatWeDoDropDown path="electrical" categories={electricalData} />
    </div>
  );
};

export default ElectricalsSolutions;
