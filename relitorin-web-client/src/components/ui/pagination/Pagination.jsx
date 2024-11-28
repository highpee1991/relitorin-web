import React, { useEffect, useState } from "react";
import texasInventory from "../texasInventaryCarousal/texasinventoryData";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  margin-bottom: 4rem;
`;

const PaginationButton = styled.button`
  background: ${(props) => (props.active ? "var(--color-brand-800)" : "#eee")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: var(--color-brand-800);
    color: #fff;
  }
`;

const Pagination = ({ items, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // useEffect(() => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const paginatedData = items.slice(startIndex, startIndex + itemsPerPage);
  //   onPageChange(paginatedData);
  // }, [items, currentPage, itemsPerPage, onPageChange]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = items.slice(startIndex, startIndex + itemsPerPage);
    onPageChange(paginatedData, page);
  };

  return (
    <PaginationContainer>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        &lt;
      </PaginationButton>
      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationButton
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
