import React from "react";
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-grey-50);
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 375px) {
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  margin-right: 2rem;

  img {
    max-width: 150px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    justify-content: center;

    span {
      margin-left: 1rem;
      font-size: 1.7rem;
    }
  }

  @media (max-width: 768px) {
    div {
      justify-content: center;
    }

    span {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

const ContactIcon = styled.span`
  color: var(--color-brand-700);
  font-size: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IconText = styled.div`
  margin-left: 2rem;
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
          <span>832 992 2340</span>
        </IconText>
        <IconText>
          <ContactIcon>
            <FaEnvelope />
          </ContactIcon>
          <span>reliance@relitorin.com</span>
        </IconText>
      </ContactInfo>
    </LogoContacts>
  );
};

export default HeaderLogoContacts;
