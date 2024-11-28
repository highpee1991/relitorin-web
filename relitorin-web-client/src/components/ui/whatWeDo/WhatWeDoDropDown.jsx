import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WhatWeDoDroDownCard from "./WhatWeDoDroDownCard";
import { useEffect } from "react";

const PVFStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const WhatWeDoDropDown = ({ categories }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <PVFStyle>
      {categories.map((cat) => (
        <WhatWeDoDroDownCard
          key={cat.id}
          img={cat.image}
          name={cat.name}
          onClick={() => handleClick(cat.id)}
        />
      ))}
    </PVFStyle>
  );
};

export default WhatWeDoDropDown;
