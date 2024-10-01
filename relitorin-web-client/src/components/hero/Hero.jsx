import React, { useEffect, useRef, useState } from "react";
import useResize from "../hooks/useResize";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import slides from "./heroData";
import { HashLink as Link } from "react-router-hash-link";
import Button from "../ui/button/Button";

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;

  @media (min-width: 541px) {
    height: 65vh;
  }
`;

const Slide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2rem;

  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 6;
  border-radius: var(--border-radius-lg);
  padding: 1rem;
  color: var(--color-grey-50);
  max-width: 600px;
`;

const Header = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 10px;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Navigation = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1000;
`;

const NavButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.isActive ? "var(--color-brand-600)" : "var(--color-grey-50)"};
  cursor: pointer;
  z-index: 1000;
  &:focus {
    outline: none;
  }
`;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeOutref = useRef(null);
  const { width } = useResize();

  useEffect(() => {
    const startAutoPlay = () => {
      timeOutref.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000);
    };

    startAutoPlay();

    return () => clearInterval(timeOutref.current);
  }, []);

  const handleClick = (index) => {
    setCurrentSlide(index);

    clearInterval(timeOutref.current);
    timeOutref.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
  };

  return (
    <HeroContainer>
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <Slide
              key={slide.id}
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Overlay />
              <Content>
                <Header
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {slide.header}
                </Header>

                <Link key={slide.id} smooth to={slide.link}>
                  <Button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    size={`${width > 480 ? "medium" : "small"}`}
                  >
                    {slide.buttonLabel}
                  </Button>
                </Link>
              </Content>
            </Slide>
          ) : null
        )}
      </AnimatePresence>
      <Navigation>
        {slides.map((_, index) => (
          <NavButton
            key={index}
            isActive={index === currentSlide}
            onClick={() => handleClick(index)}
          />
        ))}
      </Navigation>
    </HeroContainer>
  );
};

export default Hero;
