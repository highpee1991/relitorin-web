import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 14rem;
  margin-bottom: 1rem;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* Dark overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LocationHeaderWithImage = ({ text, image }) => {
  return (
    <Wrapper image={image}>
      <Header>{text}</Header>
    </Wrapper>
  );
};

export default LocationHeaderWithImage;
