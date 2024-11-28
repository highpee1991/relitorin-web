import React from "react";
import styled from "styled-components";

const CardPVFStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  margin: 2rem auto;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  aspect-ratio: 1 / 1;

  &:hover {
    transform: scale(1.05);
  }
`;

const PVFImg = styled.img`
  width: 100%;
  max-width: 220px;
  height: 220px;
  border: 8px solid var(--color-brand-800);
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const PVFh1 = styled.h1`
  color: var(--color-brand-800);
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const WhatWeDoDroDownCard = ({ img, name, onClick }) => {
  return (
    <CardPVFStyle onClick={onClick}>
      <PVFImg src={img} alt={name} />
      <PVFh1>{name}</PVFh1>
    </CardPVFStyle>
  );
};

export default WhatWeDoDroDownCard;
