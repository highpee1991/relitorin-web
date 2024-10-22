import React from "react";
import ContactText from "./ContactText";
import ContactsAddress from "./ContactsAddress";
import ContactForm from "../contactForm/ContactForm";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const ContactLocationWithForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <ContactText />
      <ContactLocationWithForm>
        <ContactsAddress />
        <ContactForm />
      </ContactLocationWithForm>
    </ContactContainer>
  );
};

export default ContactUs;
