import React, { useEffect, useState } from "react";
import TexasInventoryCard from "./TexasinventoryCard";
import LocationHeaderWithImage from "../../../ui/locationHeaderImage/LocationHeaderWithImage";
import texasInventory from "../../../ui/texasInventaryCarousal/texasinventoryData";
import styled from "styled-components";
import Pagination from "../../../ui/pagination/Pagination";
import Spinner from "../../../ui/spinner/Spinner";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Texasinventories = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    setisLoading(true);
    setTimeout(() => {
      setCurrentItems(texasInventory.slice(0, itemsPerPage));
      setisLoading(false);
    }, 1000);
  }, []);

  // Scroll to top whenever currentPage changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (paginatedData, newPage) => {
    setisLoading(true);
    setCurrentItems(paginatedData);
    setCurrentPage(newPage);
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  };

  return (
    <div>
      <LocationHeaderWithImage
        text="Texas inventory"
        image="/banner/banner1.jpg"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Wrap>
          {currentItems.map((product) => (
            <TexasInventoryCard
              key={product.id}
              productId={product.id}
              title={product.title}
              vendorPart={
                product.vendorPartNum.length > 8
                  ? product.vendorPartNum.substring(0, 8) + "..."
                  : product.vendorPartNum
              }
              ManPart={
                product.manufacturerPartNum.length > 8
                  ? product.manufacturerPartNum.substring(0, 8) + "..."
                  : product.manufacturerPartNum
              }
              brand={product.brand}
              leadTime={product.leadTime}
              price={product.price}
              image={`/${product.image}`}
              rental={product.rental}
            />
          ))}
        </Wrap>
      )}
      <Pagination
        items={texasInventory}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Texasinventories;
