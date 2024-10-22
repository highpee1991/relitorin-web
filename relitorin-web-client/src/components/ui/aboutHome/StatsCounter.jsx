import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: var(--color-grey-150);
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Statistics section
const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Each stat block
const Stat = styled.div`
  text-align: center;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

// Numbers for stats
const StatNumber = styled.h3`
  color: var(--color-brand-800);
  font-size: 2.5rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Stat description text
const StatText = styled.p`
  color: var(--color-text);
  font-size: 14px;
`;

const StatsCounter = () => {
  const [stats, setStats] = useState({ years: 0, locations: 0, clients: 0 });
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Counting function
  const countUp = (target, duration, key) => {
    let start = 0;
    const increment = target / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setStats((prevStats) => ({ ...prevStats, [key]: target }));
        clearInterval(timer);
      } else {
        setStats((prevStats) => ({ ...prevStats, [key]: Math.ceil(start) }));
      }
    }, 10);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the container is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      countUp(20, 1000, "years");
      countUp(50, 1000, "locations");
      countUp(100, 1000, "clients");
    }
  }, [inView]);

  return (
    <Wrap ref={containerRef}>
      <StatsContainer>
        <Stat>
          <StatNumber>{stats.years}+</StatNumber>
          <StatText>Years in Business</StatText>
        </Stat>
        <Stat>
          <StatNumber>{stats.locations}+</StatNumber>
          <StatText>Global Locations</StatText>
        </Stat>
        <Stat>
          <StatNumber>{stats.clients}+</StatNumber>
          <StatText>Major Clients</StatText>
        </Stat>
      </StatsContainer>
    </Wrap>
  );
};

export default StatsCounter;
