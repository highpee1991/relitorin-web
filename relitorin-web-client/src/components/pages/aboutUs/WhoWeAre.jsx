import React from "react";
import styled from "styled-components";
import LocationHeaderWithImage from "../../ui/locationHeaderImage/LocationHeaderWithImage";

const Container = styled.div`
  line-height: 1.6;
  color: #333;
`;

const SectionContainer = styled.div`
  margin: 0 4rem 4rem 4rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: var(--color-brand-800);
`;

const Subtitle = styled.h3`
  font-size: 2.5rem;
  color: var(--color-brand-600);
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  color: #666;
`;

const ExpertiseList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 1rem 0 0 3rem;
`;

const ExpertiseItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  h5 {
    font-size: 2rem;
    color: var(--color-brand-700);
  }

  div {
    font-size: 1.5rem;
    color: #666;
  }
`;

const CoreServiceList = styled.ul`
  list-style-type: circle;
  padding-left: 3rem;
  margin: 1rem 0 0 3rem;

  li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
      color: var(--color-brand-600);
    }
  }
`;

const WhoWeAre = () => {
  return (
    <Container>
      <LocationHeaderWithImage image="/banner/banner4.jpg" text="Who We Are" />
      <SectionContainer>
        <Section>
          <Title>About Us</Title>
          <Paragraph>
            Relitorin International, founded in 2005 in the United Kingdom,
            specializes in procurement and engineering services for the oil and
            gas sectors. With a growing presence across Europe, North America,
            Asia, and Africa, we expanded to Houston, Texas, USA, in 2016 to
            support ongoing contracts and long-term partnerships with leading
            companies in the industry.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Statement</Subtitle>
          <Paragraph>
            We are committed to becoming an industry leader through our
            specialist technical knowledge, international support, and strong
            alliance partnerships. Our customer-focused culture prioritizes
            quality and high standards, ensuring our clients receive the best
            service and solutions tailored to their needs.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Vision</Subtitle>
          <Paragraph>
            Relitorin International aims to be a trusted, high-integrity project
            management provider across North America, Europe, and Africa. We are
            committed to being the preferred supplier of equipment and services
            for clients in the oil and gas, power, manufacturing, construction,
            health, and general industry sectors.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Expertise</Subtitle>
          <ExpertiseList>
            <ExpertiseItem>
              <h5>Design & Fabrication</h5>
              <div>
                We design and fabricate equipment tailored to meet specific
                project requirements.
              </div>
            </ExpertiseItem>
            <ExpertiseItem>
              <h5>Supply & Procurement</h5>
              <div>
                Our comprehensive supply chain management ensures genuine,
                high-performance products are sourced and delivered efficiently.
              </div>
            </ExpertiseItem>
            <ExpertiseItem>
              <h5>Installation & Maintenance</h5>
              <div>
                We provide expert installation, maintenance, and rental services
                to guarantee smooth and effective project execution.
              </div>
            </ExpertiseItem>
            <ExpertiseItem>
              <h5>Personnel Training</h5>
              <div>
                We offer thorough training to ensure the skilled operation and
                management of equipment and systems.
              </div>
            </ExpertiseItem>
          </ExpertiseList>

          <CoreServiceList>
            <li>
              <span>Procurement & Supply Chain:</span> Reliable procurement and
              supply chain solutions for diverse project needs.
            </li>
            <li>
              <span>Industrial Wares & Civil Construction Works:</span>
              Specialized industrial goods and construction expertise.
            </li>
            <li>
              <span>Rental Services:</span> Flexible, cost-effective rental
              options for a range of equipment.
            </li>
            <li>
              <span>Environmental Services:</span> Health & Safety consulting
              services to ensure compliance and personnel well-being.
            </li>
          </CoreServiceList>
        </Section>

        <Section>
          <Subtitle>Our Values</Subtitle>
          <Paragraph>
            Our commitment to quality, integrity, and client satisfaction drives
            us to deliver exceptional results across all our services. Relitorin
            International integrates procurement, construction, design, and
            environmental considerations to meet and exceed the expectations of
            our clients.
          </Paragraph>
        </Section>
      </SectionContainer>
    </Container>
  );
};

export default WhoWeAre;
