import React, { useEffect } from "react";
import Button from "../../../ui/button/Button";
import useResize from "../../../hooks/useResize";
import {
  FaCircleDollarToSlot,
  FaRegSun,
  FaScrewdriver,
  FaScrewdriverWrench,
  FaTruckFast,
  FaDiamondTurnRight,
} from "react-icons/fa6";
import { formatCurrency } from "../../../ui/utils/helper";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TexasStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  /* Switch to column layout on small screens */
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
`;

const Contentwrap = styled.div`
  /* Keep consistent height */
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 30rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  /* Center content on smaller screens */
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  color: var(--color-brand-800);
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-brand-800);
  max-width: 30rem;
  margin-bottom: 1rem;

  /* Truncate long titles */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;

  img {
    width: 100%;
    height: auto;
    max-width: 18rem;
    border-radius: 8px;
    margin-top: 1.8rem;
    margin-right: 2rem;

    /* Center the image on small screens */
    @media (max-width: 768px) {
      margin: 0 auto 1rem;
    }
  }
`;

const Icon = styled.span`
  color: var(--color-brand-800);
  margin-right: 1.5rem;
`;

const IconBtn = styled.span`
  margin-left: 1rem;
`;

const IconText = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const SubTitle = styled.span`
  font-weight: 900;
  margin-right: 0.5rem;
  text-transform: capitalize;
`;

const TexasInventoryCard = ({
  productId,
  title,
  vendorPart,
  ManPart,
  brand,
  leadTime,
  price,
  image,
  rental,
}) => {
  const { width } = useResize();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductViewId = (id) => {
    navigate(`/texasinventory/${id}`);
  };

  return (
    <TexasStyle>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <Contentwrap>
        <Title>{title}</Title>
        {vendorPart && (
          <IconText>
            <Icon>
              <FaScrewdriver />
            </Icon>
            <SubTitle>Vendor's Part #:</SubTitle> {vendorPart}
          </IconText>
        )}
        {ManPart && (
          <IconText>
            <Icon>
              <FaScrewdriverWrench />
            </Icon>
            <SubTitle>Manufacturer's Part #:</SubTitle> {ManPart}
          </IconText>
        )}
        {brand && (
          <IconText>
            <Icon>
              <FaRegSun />
            </Icon>
            <SubTitle>Brand:</SubTitle> {brand}
          </IconText>
        )}
        {leadTime && (
          <IconText>
            <Icon>
              <FaTruckFast />
            </Icon>
            <SubTitle>Lead Time:</SubTitle> {leadTime}
          </IconText>
        )}
        {rental === null || rental === undefined ? (
          ""
        ) : (
          <IconText>
            <Icon>
              <FaRegSun />
            </Icon>
            <SubTitle>Rental:</SubTitle> {formatCurrency(rental)}
          </IconText>
        )}
        {price && (
          <IconText>
            <Icon>
              <FaCircleDollarToSlot />
            </Icon>
            {rental ? (
              <SubTitle>Option to purchase</SubTitle>
            ) : (
              <SubTitle>Price</SubTitle>
            )}
            : {formatCurrency(price)}
          </IconText>
        )}
        <Button
          size={width <= 750 ? "small" : "large"}
          style={{ marginTop: ".7rem", marginBottom: "4rem" }}
          onClick={() => handleProductViewId(productId)}
        >
          More details
          <IconBtn>
            <FaDiamondTurnRight />
          </IconBtn>
        </Button>
      </Contentwrap>
    </TexasStyle>
  );
};

export default TexasInventoryCard;
