import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000;
  padding: 4rem 3rem;
  max-width: 800px;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  font-size: 4rem;
  color: var(--color-brand-800);
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: var(--color-brand-800);
  margin-bottom: 1.5rem;
  font-weight: 900;
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
  line-height: 1.6;
  max-width: 600px;
`;

const DescriptionKey = styled(Description)`
  font-weight: 900;
`;

const ContactText = () => {
  return (
    <TextContainer>
      <IconWrapper>
        <FaEnvelopeOpenText />
      </IconWrapper>
      <Title>Contact Us</Title>
      <Description>
        If you have any general inquiries about our products or would like to
        request a quote, please reach out to us at reliance@relitorin.com or
        fill out the form below.
      </Description>
      <DescriptionKey>We look forward to hearing from you!</DescriptionKey>
    </TextContainer>
  );
};

export default ContactText;
