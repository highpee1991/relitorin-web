import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--color-grey-150);
  margin-top: 4rem;
  padding: 2rem;
`;

const MissionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1120px) {
    flex-direction: column;
    padding: 1rem;
    gap: 0;
  }
`;

const MissionStatementStyle = styled.p`
  font-size: 22px;
  color: var(--color-text);
  margin: 0;
  font-style: italic;
  max-width: 600px;
  line-height: 1.6;
  padding: 0 1rem;
  font-weight: 500;
  flex: 1;

  @media (max-width: 1120px) {
    text-align: center;
    font-size: 18px;
    padding: 1rem 0;
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

const MissionImage = styled.img`
  max-width: 100%;
  width: 600px;
  height: auto;
  border-radius: 10px;
  flex: 1;
  order: 2;

  @media (max-width: 1120px) {
    margin-bottom: 1.5rem;
    order: -1;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

const MissionStatement = () => {
  return (
    <Container>
      <MissionContainer>
        <MissionImage src="/abouthome/aa.jpg" alt="Our mission" />
        <MissionStatementStyle>
          Relitorin International, founded in 2005, specializes in procurement
          and engineering services for the oil and gas sectors. With a global
          presence across North America, Europe, Africa, and Asia, we are
          committed to delivering reliable, efficient, and innovative solutions.
          Our mission is to lead the industry through technical expertise,
          strong partnerships, and a customer-focused approach. We prioritize
          integrity, collaboration, and high-quality standards to meet the
          evolving needs of our clients and ensure sustainable growth
        </MissionStatementStyle>
      </MissionContainer>
    </Container>
  );
};

export default MissionStatement;
