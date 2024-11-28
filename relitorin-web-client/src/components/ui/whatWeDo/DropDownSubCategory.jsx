import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Backbutton from "../backButton/Backbutton";
import Button from "../button/Button";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const SubParentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Container = styled.div`
  padding: 1rem;
  max-width: 100%;
  width: 80rem;
`;

const SubCategoryTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-brand-800);
`;

const SubCategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SubCategoryItem = styled.li`
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
`;

const SubCategoryDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SubCatName = styled.h3`
  color: var(--color-brand-800);
  font-weight: 700;
  font-size: 2.2rem;
`;

const SubCategoryImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

const Details = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
`;

const DropDownSubCategory = ({ categories, buttonLabel = "Contact us" }) => {
  const { categoryId } = useParams();

  // Find the matching category
  const categoryDisplay = categories.find((cat) => cat.id === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!categoryDisplay) {
    return <p>Category not found.</p>;
  }

  return (
    <SubParentContainer>
      <Container>
        <Backbutton name={categoryDisplay.name} />
        <SubCategoryTitle>{categoryDisplay.name}</SubCategoryTitle>

        <SubCategoryList>
          {categoryDisplay.subcategories.map((subCat) => (
            <SubCategoryItem key={subCat.id}>
              <SubCatName>{subCat.name}</SubCatName>
              <SubCategoryDetails>
                {subCat.image && (
                  <SubCategoryImage src={subCat.image} alt={subCat.name} />
                )}
                <Details>{subCat.details}</Details>
              </SubCategoryDetails>
            </SubCategoryItem>
          ))}
        </SubCategoryList>
      </Container>
      <HashLink smooth to="#footer">
        <Button size="small">{buttonLabel}</Button>
      </HashLink>
    </SubParentContainer>
  );
};

export default DropDownSubCategory;
