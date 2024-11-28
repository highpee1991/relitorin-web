import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MoveBtn = styled.div`
  cursor: pointer;
  color: var(--color-brand-800);
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 1rem;

  &:hover {
    color: var(--color-brand-600);
  }
`;

const Backbutton = ({ name }) => {
  const navigate = useNavigate();

  const moveBack = () => navigate(-1);

  return (
    <MoveBtn onClick={moveBack}>
      <FaArrowLeft /> Go back to {name}
    </MoveBtn>
  );
};

export default Backbutton;
