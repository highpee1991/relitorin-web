import React from "react";
import styled from "styled-components";
import { FaGlobe, FaUsers, FaClock, FaTruck } from "react-icons/fa";
import Button from "../button/Button";

const Section = styled.div`
  background-color: var(--color-grey-150);
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 2rem;
`;

const Headline = styled.h2`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--color-brand-800);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--color-brand-800);
  margin-bottom: 1rem;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: var(--color-grey-dark);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const WhyChooseUs = () => {
  return (
    <Section>
      <Headline>Why Choose Us</Headline>
      <CardGrid>
        <Card>
          <IconWrapper>
            <FaGlobe />
          </IconWrapper>
          <CardTitle>Global Reach</CardTitle>
          <CardDescription>
            We operate globally, ensuring seamless service across North America,
            Europe, and Africa.
          </CardDescription>
        </Card>

        <Card>
          <IconWrapper>
            <FaUsers />
          </IconWrapper>
          <CardTitle>Expert Staff</CardTitle>
          <CardDescription>
            Our team is composed of industry experts, ensuring top-quality
            service.
          </CardDescription>
        </Card>

        <Card>
          <IconWrapper>
            <FaClock />
          </IconWrapper>
          <CardTitle>Real-Time Delivery</CardTitle>
          <CardDescription>
            We deliver solutions in real-time, keeping your business operations
            smooth.
          </CardDescription>
        </Card>

        <Card>
          <IconWrapper>
            <FaTruck />
          </IconWrapper>
          <CardTitle>Efficient Logistics</CardTitle>
          <CardDescription>
            Our efficient logistics ensure timely and reliable delivery of your
            projects.
          </CardDescription>
        </Card>
      </CardGrid>

      <Button size="small" onclick="/" style={{ marginTop: "1.5rem" }}>
        Learn More
      </Button>
    </Section>
  );
};

export default WhyChooseUs;
