import React from "react";
import HeaderLogoContacts from "../ui/headers/HeaderLogoContacts";
import useResize from "../hooks/useResize";
import Navbar from "../ui/headers/HeaderNav";

const Header = () => {
  const { width } = useResize();
  return (
    <div>
      {width > 1010 && <HeaderLogoContacts />}
      <Navbar />
    </div>
  );
};

export default Header;
