import React from "react";
import styled from "styled-components";
import Button from "../button/Button";

const projects = [
  {
    title: "Oil Rig Maintenance",
    description: "On-site maintenance for oil extraction facilities.",
    image: "/banner/banner1.jpg",
  },
  {
    title: "Pipeline Expansion",
    description: "Extending key infrastructure in the energy sector.",
    image: "/banner/banner1.jpg",
  },
  {
    title: "Pipeline Expansion",
    description: "Extending key infrastructure in the energy sector.",
    image: "/banner/banner1.jpg",
  },
  // Add more projects here...
];

const SectionWrapper = styled.div`
  padding: 4rem 1rem;
  text-align: center;
`;

const Headline = styled.h2`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
`;

const FeaturedProjects = () => {
  return (
    <SectionWrapper>
      <Headline>Featured Projects</Headline>
      <GridContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <img src={project.image} alt={project.title} />
            <Overlay className="overlay">
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </Overlay>
          </ProjectCard>
        ))}
      </GridContainer>
      <Button size="small" style={{ marginTop: "1rem" }}>
        Explore More
      </Button>
    </SectionWrapper>
  );
};

export default FeaturedProjects;
