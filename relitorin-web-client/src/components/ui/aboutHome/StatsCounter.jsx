import React from "react";
import styled from "styled-components";

// Statistics section
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Each stat block
const Stat = styled.div`
  text-align: center;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

// Numbers for stats
const StatNumber = styled.h3`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Stat description text
const StatText = styled.p`
  color: var(--color-text);
  font-size: 14px;
`;

const StatsCounter = () => {
  return (
    <div>
      {" "}
      <StatsContainer>
        <Stat>
          <StatNumber>20+</StatNumber>
          <StatText>Years in Business</StatText>
        </Stat>
        <Stat>
          <StatNumber>50+</StatNumber>
          <StatText>Global Locations</StatText>
        </Stat>
        <Stat>
          <StatNumber>100+</StatNumber>
          <StatText>Major Clients</StatText>
        </Stat>
      </StatsContainer>
    </div>
  );
};

export default StatsCounter;
