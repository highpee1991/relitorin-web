import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LocationHeaderWithImage from "../../ui/locationHeaderImage/LocationHeaderWithImage";
import Pagination from "../../ui/pagination/Pagination";
import Spinner from "../../ui/spinner/Spinner";

const galleryData = [
  { image: "./gallery/bifold1.jpg" },
  { image: "./gallery/bifold2.jpg" },
  { image: "./gallery/bifold3.jpg" },
  { image: "./gallery/bifold4.jpg" },
  { image: "./gallery/bifold5.jpg" },
  { image: "./gallery/bifold6.jpg" },
  { image: "./gallery/elect1.avif" },
  { image: "./gallery/elect2.jpg" },
  { image: "./gallery/elect3.avif" },
  { image: "./gallery/elect4.jpg" },
  { image: "./gallery/elect5.avif" },
  { image: "./gallery/elect6.jpg" },
  { image: "./gallery/elect7.jpg" },
  { image: "./gallery/elect8.jpg" },
  { image: "./gallery/elect9.jpg" },
  { image: "./gallery/elect10.avif" },
  { image: "./gallery/rest_room1.jpg" },
  { image: "./gallery/rest_room2.jpg" },
  { image: "./gallery/rest_room3.jpg" },
  { image: "./gallery/gene.jpg" },
  { image: "./gallery/hvac1.jpg" },
  { image: "./gallery/hvac2.jpg" },
  { image: "./gallery/hvac3.jpg" },
  { image: "./gallery/hvac4.jpg" },
  { image: "./gallery/hvac5.jpg" },
  { image: "./gallery/installation.jpg" },
  { image: "./gallery/operator.jpg" },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  /* max-width: 1200px; */
  /* margin: 0 auto; */
`;

const GalleryGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }
`;

const Gallery = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentItems(galleryData.slice(0, itemsPerPage));
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (paginatedData, newPage) => {
    setIsLoading(true);
    setCurrentItems(paginatedData);
    setCurrentPage(newPage);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <LocationHeaderWithImage text="Gallery" image="./banner/banner7.jpg" />
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <GalleryGrid>
            {currentItems.map((imageData, index) => (
              <GalleryImage key={index} src={imageData.image} alt="gallery" />
            ))}
          </GalleryGrid>
        )}
        <Pagination
          items={galleryData}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </Container>
    </>
  );
};

export default Gallery;
