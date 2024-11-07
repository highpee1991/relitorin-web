import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import useResize from "../../hooks/useResize";
import { useNavigate } from "react-router-dom";

// Styling for the card container
const CardContainer = styled.div`
  width: 250px;
  min-height: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 180px;
    min-height: 220px;
  }
`;

// Styling for the image
const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 15px;
  flex-grow: 1;
  font-size: 10px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  color: var(--color-brand-900);
`;

const CardImageWrapper = styled.div`
  cursor: pointer;
  display: inline-block;

  &:focus {
    outline: 2px solid #007acc;
  }
`;

const CarousalCard = ({ image, title, productId }) => {
  const { width } = useResize();
  const navigate = useNavigate();

  const handleProductViewId = (id) => {
    navigate(`/texasinventory/${id}`);
  };

  return (
    <CardContainer>
      <CardImageWrapper onClick={() => handleProductViewId(productId)}>
        <CardImage src={image} alt={title} />
      </CardImageWrapper>
      <CardContent>
        <Title>{title}</Title>
      </CardContent>
      <Button
        size={`${width > 480 ? "medium" : "small"}`}
        onClick={() => handleProductViewId(productId)}
      >
        View Product
      </Button>
    </CardContainer>
  );
};

export default CarousalCard;
