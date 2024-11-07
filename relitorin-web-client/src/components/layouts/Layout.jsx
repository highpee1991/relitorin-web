import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect } from "react";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const location = useLocation();
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <LayoutContainer ref={mainContentRef}>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
