import { useParams } from "react-router-dom";
import texasInventory from "./texasinventoryData";
import { formatCurrency } from "../utils/helper";
import Button from "../button/Button";
import {
  FaScrewdriverWrench,
  FaScrewdriver,
  FaCircleInfo,
  FaTruckFast,
  FaCircleDollarToSlot,
  FaWeightScale,
  FaRegSun,
  FaEnvelopeOpenText,
} from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import useResize from "../../hooks/useResize";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  gap: 2rem;
  padding: 0 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin: 4rem;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  img {
    width: 100%;
    height: auto;
    max-width: 40rem;
    border-radius: 8px;
  }
`;

const ContentContainer = styled.div`
  max-width: 70rem;
  color: black;
  text-transform: capitalize;

  p {
    font-size: 1.5;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    color: black;
  }
`;

const IconStyle = styled.span`
  margin-right: 1rem;
  color: var(--color-brand-800);
  text-align: center;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const PartNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 380px) {
    gap: 0;
  }
`;

const Title = styled.h1`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.span`
  font-weight: 900;
  margin-right: 0.5rem;
  text-transform: capitalize;
`;

const SubTitleWrapper = styled.div`
  text-transform: capitalize;
`;

const DescriptionDetails = styled.p`
  padding-left: 2.5rem;
  text-transform: capitalize;
`;

const IconSubTitle = styled.div`
  display: flex;
  align-items: center;
`;

const VenManPart = styled.span`
  text-transform: uppercase;
`;

const ProductDetails = () => {
  const { texasId } = useParams();
  const { width } = useResize();
  const [isLoading, setIsLoading] = useState(true);

  const product = texasInventory.find(
    (item) => item.id.toString() === texasId.toString()
  );

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <DetailsContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ImageContainer>
            <img
              src={
                product.image
                  ? `/${product.image}`
                  : `/texas-inventory/empty.jpg`
              }
              alt={product.title}
            />
          </ImageContainer>
          <ContentContainer>
            <Title>{product.title}</Title>
            <PartNumber>
              {product.vendorPartNum && (
                <IconSubTitle>
                  <IconStyle>
                    <FaScrewdriver />
                  </IconStyle>
                  <SubTitleWrapper>
                    <SubTitle>Vendor's Part Number:</SubTitle>{" "}
                    <VenManPart>{product.vendorPartNum}</VenManPart>
                  </SubTitleWrapper>
                </IconSubTitle>
              )}
              {product.manufacturerPartNum && (
                <IconSubTitle>
                  <IconStyle>
                    <FaScrewdriverWrench />
                  </IconStyle>
                  <SubTitleWrapper>
                    <SubTitle>Manufacturer's Part Number:</SubTitle>
                    <VenManPart>{product.manufacturerPartNum}</VenManPart>
                  </SubTitleWrapper>
                </IconSubTitle>
              )}
            </PartNumber>
            {product.brand && (
              <IconSubTitle>
                <IconStyle>
                  <FaRegSun />
                </IconStyle>
                <SubTitleWrapper>
                  <SubTitle> Brand:</SubTitle> {product.brand}
                </SubTitleWrapper>
              </IconSubTitle>
            )}
            {product.description && (
              <div>
                <IconSubTitle>
                  <IconStyle>
                    <FaCircleInfo />
                  </IconStyle>
                  <SubTitle>Item Description:</SubTitle>
                </IconSubTitle>
                <DescriptionDetails>{product.description}</DescriptionDetails>
              </div>
            )}
            {product.leadTime && (
              <IconSubTitle>
                <IconStyle>
                  <FaTruckFast />
                </IconStyle>
                <SubTitleWrapper>
                  <SubTitle>Lead Time:</SubTitle> {product.leadTime}
                </SubTitleWrapper>
              </IconSubTitle>
            )}
            {product.price && (
              <IconSubTitle>
                <IconStyle>
                  <FaCircleDollarToSlot />
                </IconStyle>
                {product.rental ? (
                  <SubTitle>Option to purchase:</SubTitle>
                ) : (
                  <SubTitle>Price:</SubTitle>
                )}
                {formatCurrency(product.price)}
              </IconSubTitle>
            )}
            {product.rental && (
              <IconSubTitle>
                <IconStyle>
                  <FaWeightScale />
                </IconStyle>
                <SubTitleWrapper>
                  <SubTitle>Rental:</SubTitle> {formatCurrency(product.rental)}
                </SubTitleWrapper>
              </IconSubTitle>
            )}
            <HashLink smooth to="#footer">
              <Button
                size={width <= 380 ? "small" : "large"}
                style={{ marginTop: "2rem", marginBottom: "4rem" }}
              >
                <FaEnvelopeOpenText /> Order
              </Button>
            </HashLink>
          </ContentContainer>
        </>
      )}
    </DetailsContainer>
  );
};

export default ProductDetails;
