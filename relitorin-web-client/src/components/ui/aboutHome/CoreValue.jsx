import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { FaCircleExclamation } from "react-icons/fa6";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 3rem;
  width: 320px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    margin: 1.5rem;
    width: 100%;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-brand-800);
  margin-bottom: 10px;
  border: 5px solid var(--color-brand-800);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--color-brand-800);
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 1rem;
  max-width: 60rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const We = styled.span`
  color: var(--color-brand-800);
  font-weight: 700;
`;

const CoreValue = () => {
  return (
    <SectionContainer>
      <Section>
        <Circle>
          <img src="/abouthome/reliable.png" alt="Reliable" />
        </Circle>
        <SectionText>Reliable</SectionText>
        <Description>
          We are <We>Reliable</We>, delivering consistently to the oil sector
          since 2003.
        </Description>
        <Button size="small">
          About Us <FaCircleExclamation />
        </Button>
      </Section>

      <Section>
        <Circle>
          <img src="/abouthome/efficient.png" alt="Efficient" />
        </Circle>
        <SectionText>Efficient</SectionText>
        <Description>
          We are <We>Efficient</We>, continuously expanding globally to serve
          diverse industries.
        </Description>
        <Button size="small">
          About Us <FaCircleExclamation />
        </Button>
      </Section>

      <Section>
        <Circle>
          <img src="/abouthome/effective.png" alt="Effective" />
        </Circle>
        <SectionText>Effective</SectionText>
        <Description>
          We are <We>Effective</We> in delivering top-tier products and custom
          solutions worldwide.
        </Description>
        <Button size="small">
          About Us <FaCircleExclamation />
        </Button>
      </Section>
    </SectionContainer>
  );
};

export default CoreValue;
