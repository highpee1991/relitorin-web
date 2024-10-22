import React from "react";
import styled from "styled-components";
import ContactUs from "../ui/contacts/ContactUs";

const FooterWrapper = styled.footer`
  background-color: var(--color-grey-100);
  padding: 2rem 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <ContactUs />
    </FooterWrapper>
  );
};

export default Footer;
