import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #282828;
  color: #ffffff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0;
  }
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  color: white;
  transition: all 0.3s;
  border-radius: 50%;
  background-color: transparent;

  &:hover {
    color: var(--color-brand-600);
    background-color: var(--color-grey-900);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const FooterText = styled.p`
  margin-top: 2rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const Footer = () => {
  return <FooterWrapper>Footer</FooterWrapper>;
};

export default Footer;
