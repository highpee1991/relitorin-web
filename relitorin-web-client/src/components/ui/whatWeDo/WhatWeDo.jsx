import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import whatWeDoData from "./whatWeDoData";
import { useNavigate } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  margin-top: 3rem;
  margin-bottom: -1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const Card = styled.div`
  position: relative;
  perspective: 1000px;
  height: 250px;
  cursor: pointer;

  &:hover .card-inner {
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    &:hover .card-inner {
      transform: none;
    }
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  padding: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  background-color: rgb(206, 206, 206);
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--color-brand-800);
  transform: rotateY(180deg);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 2rem;
  background-color: #171717b6;
  padding: 0 1rem;

  border-radius: 2rem;
`;

const CardTitleBack = styled.h3`
  margin-bottom: 10px;
  font-size: 2rem;
`;

const CardDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
  background-color: white;
  color: var(--color-brand-800);
  border: 2px solid var(--color-brand-100);
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-brand-300);
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

// Main Component
const WhatWeDo = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handleNavigate = (link) => {
    if (link !== "#") {
      navigate(link);
    }
  };

  return (
    <>
      <Title>What We Do</Title>
      <GridContainer>
        {whatWeDoData.map((item, index) => (
          <Card key={index} onClick={() => handleClick(index)}>
            <CardInner
              className="card-inner"
              style={{
                transform:
                  clickedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Card Front */}
              <CardFront image={item.img}>
                <CardTitle>{item.items}</CardTitle>
              </CardFront>

              {/* Card Back */}
              <CardBack>
                <CardTitleBack>{item.items}</CardTitleBack>
                <CardDescription>{item.about}</CardDescription>
                <CTAButton
                  size="small"
                  onClick={() => handleNavigate(item.link)}
                >
                  View Details
                </CTAButton>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </GridContainer>
    </>
  );
};

export default WhatWeDo;
