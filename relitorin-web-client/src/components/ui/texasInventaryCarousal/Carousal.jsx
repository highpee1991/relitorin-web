import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import items from "../../hero/heroData";
import { useNavigate, useParams } from "react-router-dom";
import CarousalCard from "./Carousalcard";
import useResize from "../../hooks/useResize";
import Button from "../button/Button";
import { FaShare } from "react-icons/fa6";

const Wrapp = styled.div`
  margin: 0 2rem;
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
`;

const Title = styled.div`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  margin: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: relative;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled(motion.div)`
  min-width: 250px;
  height: 300px;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${(props) => (props.isActive ? 1 : 0.9)});
  transition: transform 0.5s ease, opacity 0.5s ease;

  @media (max-width: 768px) {
    min-width: 200px;
    height: 250px;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  ${(props) => (props.left ? "left: 10px;" : "right: 10px;")}

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const navigate = useNavigate();
  const texasInventoryId = useParams();
  const { width } = useResize();
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = handleNext;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const getDisplayItems = () => {
    const visibleItems = width > 480 ? 5 : 1;
    let itemsToDisplay = [];

    for (
      let i = -Math.floor(visibleItems / 2);
      i <= Math.floor(visibleItems / 2);
      i++
    ) {
      const index = (currentIndex + i + items.length) % items.length;
      itemsToDisplay.push(items[index]);
    }
    return itemsToDisplay;
  };

  const handleViewAll = () => {
    navigate("/texasinventories");
  };

  return (
    <Wrapp>
      <Title>Texas Inventory</Title>
      <CarouselContainer>
        <NavigationButton left onClick={handlePrev}>
          Prev
        </NavigationButton>

        <CarouselWrapper>
          {getDisplayItems().map((item, index) => {
            const isActive = index === Math.floor(getDisplayItems().length / 2);
            return (
              <CarouselItem key={index} isActive={isActive}>
                <CarousalCard
                  key={item.id}
                  image={item.image}
                  title={item.header}
                  productId={item.id}
                />
              </CarouselItem>
            );
          })}
        </CarouselWrapper>

        <NavigationButton onClick={handleNext}>Next</NavigationButton>
      </CarouselContainer>
      <Button
        onClick={handleViewAll}
        size={`${width > 480 ? "medium" : "small"}`}
        style={{
          width: `100%`,
          marginTop: `-1.7rem`,
        }}
      >
        All Texas Inventory
        <FaShare />
      </Button>
    </Wrapp>
  );
};

export default Carousel;
