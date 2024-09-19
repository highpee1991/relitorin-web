import React from "react";
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  margin-bottom: -0.7rem;

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  img {
    max-width: 150px;
    height: auto;
  }

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.8rem;
  color: var(--color-brand-700);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  color: var(--color-grey-600);
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover ${ContactIcon} {
    color: var(--color-brand-800);
  }

  &:hover ${Text} {
    color: var(--color-grey-700);
  }
`;

const HeaderLogoContacts = () => {
  return (
    <LogoContacts>
      <LogoContainer>
        <Link to="/">
          <img src="/logo/rel1.png" alt="rel-logo" />
        </Link>
      </LogoContainer>
      <ContactInfo>
        <IconText>
          <ContactIcon>
            <FaPhoneVolume />
          </ContactIcon>
          <Text>832 992 2340</Text>
        </IconText>
        <IconText>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <Text>reliance@relitorin.com</Text>
        </IconText>
      </ContactInfo>
    </LogoContacts>
  );
};

export default HeaderLogoContacts;
