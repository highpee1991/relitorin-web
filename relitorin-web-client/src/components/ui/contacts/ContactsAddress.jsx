import React from "react";
import styled from "styled-components";
import {
  FaPhoneVolume,
  FaMobileRetro,
  FaFax,
  FaLocationDot,
  FaUserLarge,
} from "react-icons/fa6";

const AddressInfo = [
  {
    loactionAdd: "US Office",
    officeLine: "Office: 832-369-6881",
    mobileLine: "Mobile: 832-992-2340",
    fax: "Fax: 281-645-4166",
    address:
      "Relitorin Int, Inc.<br />1920 Rankin Road, STE: 145 Houston Texas 77073",
  },
  {
    loactionAdd: "UK Office",
    officeLine: "Office: +44 (0) 7946 471 690",
    address: "38 Westerham Bayham Street<br />London NW1 0JU London UK",
  },
  {
    loactionAdd: "Nigeria Office",
    officeLine: "Office: +234 816 422 4266",
    address:
      "Relitorin International Limited<br />10B Plot 23 Austin Agbolahor Close, Magodo GRA II Shangisha, Lagos",
  },
  {
    loactionAdd: "Senegal Office",
    officeLine: "Office: +221 77 176 80 93",
    mobileLine: "Mobile: +221 33 860 86 11",
    address:
      "Relitorin International Sarl<br />Cite-Avion, Villa N°43 BP: 24304 Ouakam Dakar-Senegal",
    contact: "Contact: Khady Kane Ngom",
  },
];

const AddressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const AddressCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  text-align: left;
  transition: transform 0.2s;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const LocationHeading = styled.h3`
  font-size: 2.5rem;
  color: var(--color-brand-800);
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  display: flex;
  color: #000;
  font-size: 1.6rem;
  margin: 0.5rem 0;
`;

const ContactText = styled.p`
  color: #888;
  font-style: italic;
  margin-top: 1rem;
`;

const CallIcon = styled.span`
  color: var(--color-brand-800);
  margin-right: 1rem;
`;

const ContactsAddress = () => {
  return (
    <AddressContainer>
      {AddressInfo.map((add, index) => (
        <AddressCard key={index}>
          <LocationHeading>{add.loactionAdd}</LocationHeading>
          <InfoText>
            <CallIcon>
              <FaPhoneVolume />
            </CallIcon>{" "}
            {add.officeLine}
          </InfoText>
          {add.mobileLine && (
            <InfoText>
              <CallIcon>
                <FaMobileRetro />
              </CallIcon>
              {add.mobileLine}
            </InfoText>
          )}
          {add.fax && (
            <InfoText>
              <CallIcon>
                <FaFax />
              </CallIcon>
              {add.fax}
            </InfoText>
          )}
          <InfoText>
            <CallIcon>
              <FaLocationDot />
            </CallIcon>
            <span dangerouslySetInnerHTML={{ __html: add.address }} />
          </InfoText>
          {add.contact && (
            <ContactText>
              <CallIcon>
                <FaUserLarge />
              </CallIcon>
              {add.contact}
            </ContactText>
          )}
        </AddressCard>
      ))}
    </AddressContainer>
  );
};

export default ContactsAddress;
