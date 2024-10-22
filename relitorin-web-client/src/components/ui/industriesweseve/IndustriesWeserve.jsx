import React, { useState } from "react";
import styled from "styled-components";
import Button from "../button/Button";

// Sample data
const whatWeDo = [
  {
    img: "/banner/banner1.jpg",
    items: "Oil & Gas",
    about: "Specialised in valves, pipes and fittings for oil and gas sectors",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner2.jpg",
    items: "Power & Energy",
    about: "Leading supplier of specialized oil and gas equipment.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner3.jpg",
    items: "Construction & Infrastructure",
    about: "Delivering efficient power generation systems worldwide.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner2.jpg",
    items: "Telecommunications & IT",
    about: "Leading supplier of specialized oil and gas equipment.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner4.jpg",
    items: "Manufacturing & Industrial",
    about: "Delivering efficient power generation systems worldwide.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner4.jpg",
    items: "Transportation & Logistics",
    about: "Delivering efficient power generation systems worldwide.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner4.jpg",
    items: "Safety & Security",
    about: "Delivering efficient power generation systems worldwide.",
    cta: "Request a Quote",
    link: "#",
  },
  {
    img: "/banner/banner4.jpg",
    items: "Environmental Solutions",
    about: "Delivering efficient power generation systems worldwide.",
    cta: "Request a Quote",
    link: "#",
  },
];

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

// Main Component
const IndustriesWeServe = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <>
      <Title>Industries We Serve</Title>
      <GridContainer>
        {whatWeDo.map((item, index) => (
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
                <Button size="small" onClick={item.link}>
                  {item.cta}
                </Button>
              </CardBack>
            </CardInner>
          </Card>
        ))}
      </GridContainer>
    </>
  );
};

export default IndustriesWeServe;
