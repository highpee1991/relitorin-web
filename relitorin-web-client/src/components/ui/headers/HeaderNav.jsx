import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaTimes,
  FaCaretDown,
  FaEnvelope,
  FaPhoneVolume,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useResize from "../../hooks/useResize";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-grey-100);
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 1010px) {
    justify-content: flex-start;
    background-color: white;
    padding: 0;
  }
`;

const Logo = styled.img`
  width: 140px;
  height: auto;
  margin-left: 1rem;

  @media (max-width: 1010px) {
    margin-left: 1.5rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2.7rem;
  background-color: transparent;

  @media (max-width: 1010px) {
    display: block;
    height: 100%;
    padding: 1rem;
    background-color: var(--color-grey-250);
    border-radius: 0;
    color: black;
    box-sizing: border-box;
  }

  &:hover {
    color: var(--color-brand-900);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 1010px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 1010px) {
    flex-direction: column;
    /* gap: 1.5rem; */
    margin: 0;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  padding: 0.5rem 1rem;
  transition: border-color 0.3s ease-in-out;

  @media (min-width: 1011px) {
    &:hover {
      border-bottom: 1px solid var(--color-brand-800);
    }
  }

  a {
    text-decoration: none;
    color: var(--color-grey-800);
    transition: color 0.3s ease-in-out;
    font-size: 1.3rem;
    font-weight: 600;
    text-transform: capitalize;

    &:hover,
    &.active {
      color: var(--color-brand-900);
      font-weight: 700;
    }

    @media (max-width: 1010px) {
      font-size: 1.3rem;
    }
  }
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--color-grey-800);
  font-size: 1.3rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    color: var(--color-brand-900);
  }

  @media (max-width: 1010px) {
    font-size: 1.3rem;
  }
`;

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 135%;
  left: 0;
  min-width: 24rem;
  background-color: var(--color-grey-50);
  border: 1px solid #e9ecef;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  li {
    padding: 0.8rem 0;

    a {
      color: var(--color-grey-800);
      font-size: 1.4rem;
      font-weight: 500;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: var(--color-brand-900);
        font-weight: 600;
      }
    }
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  background-color: var(--color-grey-250);
  border: 1px solid #e9ecef;
  padding: 2rem;
  z-index: 2000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1999;
`;

const ContactIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  order: 2;
  margin-right: 2rem;

  a {
    color: var(--color-brand-900);
    font-size: 1.8rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: black;
    }
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: black;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: var(--color-brand-900);
  }
`;

const IconsSeprator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  @media (max-width: 1010px) {
    justify-content: flex-end;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useResize();
  const modalRef = useRef();
  let closeDropdownTimeout = null;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsModalOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  const toggleDropdown = (dropdownKey) => {
    if (closeDropdownTimeout) clearTimeout(closeDropdownTimeout);
    setIsDropdownOpen(dropdownKey);
  };

  const toggleDropdownMobile = (dropdownKey) => {
    setIsDropdownOpen((prevKey) =>
      prevKey === dropdownKey ? "" : dropdownKey
    );
  };

  const handleMouseLeave = () => {
    closeDropdownTimeout = setTimeout(() => {
      setIsDropdownOpen("");
    }, 300);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleClose = () => {
    setIsDropdownOpen("");
    if (width <= 1010) {
      setIsModalOpen(false);
    }
  };

  return (
    <Header>
      {width <= 1010 && (
        <>
          <Hamburger onClick={toggleMenu}>
            {isModalOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <Link to="/">
            <Logo src="/logo/rel11.png" alt="company logo" />
          </Link>
        </>
      )}
      <Nav isOpen={isOpen}>
        <NavList>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("about")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("about")}
            >
              About Us <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "about"}
              onMouseEnter={() => toggleDropdown("about")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/whoweare" onClick={handleClose}>
                  Who We Are
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/vissionmissionvalue" onClick={handleClose}>
                  Vision, Mission & Values
                </NavLink>
              </li> */}
              <li>
                <HashLink smooth to="#footer" onClick={handleClose}>
                  Our Location
                </HashLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={handleClose}>
                  Gallery
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("whatwedo")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("whatwedo")}
            >
              What We Do <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "whatwedo"}
              onMouseEnter={() => toggleDropdown("whatwedo")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/pipesvalvesfitting" onClick={handleClose}>
                  Pipes, Valves & Fittings
                </NavLink>
              </li>
              <li>
                <NavLink to="/electricalssolutions" onClick={handleClose}>
                  Electrical Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/heavyequipmentvehicles" onClick={handleClose}>
                  Heavy Equipment & Vehicles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/infrastructurecommunication"
                  onClick={handleClose}
                >
                  Infrastructure & Communication
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/specializedindustrialsolutions"
                  onClick={handleClose}
                >
                  Specialized Industrial Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/safetysecurity" onClick={handleClose}>
                  Safety & Security
                </NavLink>
              </li>
              <li>
                <NavLink to="/environmentalsolutions" onClick={handleClose}>
                  Environmental Solutions
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("services")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("services")}
            >
              Services <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "services"}
              onMouseEnter={() => toggleDropdown("services")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/training" onClick={handleClose}>
                  Training
                </NavLink>
              </li>
              <li>
                <NavLink to="/engineering" onClick={handleClose}>
                  Engineering
                </NavLink>
              </li>
              <li>
                <NavLink to="/installation" onClick={handleClose}>
                  Installations
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentainancesupport" onClick={handleClose}>
                  Maintenance Support
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("industries")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("industries")}
            >
              Industries <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "industries"}
              onMouseEnter={() => toggleDropdown("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/oilandgas" onClick={handleClose}>
                  Oil & Gas
                </NavLink>
              </li>
              <li>
                <NavLink to="/powerenergy" onClick={handleClose}>
                  Power & Energy
                </NavLink>
              </li>
              <li>
                <NavLink to="/constructioninfrastructure" onClick={handleClose}>
                  Construction & Infrastructure
                </NavLink>
              </li>
              <li>
                <NavLink to="/telecommunications" onClick={handleClose}>
                  Telecommunications & IT
                </NavLink>
              </li>
              <li>
                <NavLink to="/manufacturingidustrial" onClick={handleClose}>
                  Manufacturing & Industrial
                </NavLink>
              </li>
              <li>
                <NavLink to="/transportationlogistics" onClick={handleClose}>
                  Transportation & Logistics
                </NavLink>
              </li>
              <li>
                <NavLink to="/safetysecurity" onClick={handleClose}>
                  Safety & Security
                </NavLink>
              </li>
              <li>
                <NavLink to="/environmentalsolutions" onClick={handleClose}>
                  Environmental Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/agriculturefarming" onClick={handleClose}>
                  Agriculture & Farming
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("whychooseus")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("whychooseus")}
            >
              Why choose Us <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "whychooseus"}
              onMouseEnter={() => toggleDropdown("whychooseus")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/competitiveadvantages" onClick={handleClose}>
                  Competitive Advantages
                </NavLink>
              </li>
              <li>
                <NavLink to="/qualityassurance" onClick={handleClose}>
                  Quality Assurance
                </NavLink>
              </li>
              <li>
                <NavLink to="/customizationflexibility" onClick={handleClose}>
                  Customization Flexibility
                </NavLink>
              </li>
              <li>
                <NavLink to="/customercentricapproach" onClick={handleClose}>
                  Customer Centric Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/testimonialsscsestudies" onClick={handleClose}>
                  Testimonials & Case Studies
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("products")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("products")}
            >
              Products <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "products"}
              onMouseEnter={() => toggleDropdown("products")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/productsoverview" onClick={handleClose}>
                  Products Overview
                </NavLink>
              </li>
              <li>
                <NavLink to="/relitorinproducts" onClick={handleClose}>
                  Relitorin Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/medicalequipmentsupplies" onClick={handleClose}>
                  Medical Equipment Supplies
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <DropdownButton
              onMouseEnter={() => toggleDropdown("inventory")}
              onMouseLeave={handleMouseLeave}
              onClick={() => toggleDropdown("inventory")}
            >
              Inventory <FaCaretDown />
            </DropdownButton>
            <DropdownMenu
              isOpen={isDropdownOpen === "inventory"}
              onMouseEnter={() => toggleDropdown("inventory")}
              onMouseLeave={handleMouseLeave}
            >
              <li>
                <NavLink to="/inventorylist" onClick={handleClose}>
                  Inventory List
                </NavLink>
              </li>
              <li>
                <NavLink to="/texasinventories" onClick={handleClose}>
                  Texas Inventories
                </NavLink>
              </li>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <HashLink smooth to="#footer">
              CONTACT
            </HashLink>
          </NavItem>
        </NavList>
      </Nav>
      {/* Mobile */}
      {width <= 1010 && (
        <IconsSeprator>
          <>
            <ModalOverlay isOpen={isModalOpen} />
            <Modal isOpen={isModalOpen} ref={modalRef}>
              <CloseIcon onClick={toggleMenu} />
              <NavList>
                <NavItem>
                  <DropdownButton onClick={() => toggleDropdownMobile("about")}>
                    About Us <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "about"}>
                    <li>
                      <NavLink to="/whoweare" onClick={handleClose}>
                        Who We Are
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to="/vissionmissionvalue" onClick={handleClose}>
                        Vision, Mission & Values
                      </NavLink>
                    </li> */}
                    <li>
                      <HashLink smooth to="#footer" onClick={handleClose}>
                        Our Location
                      </HashLink>
                    </li>
                    <li>
                      <NavLink to="/gallery" onClick={handleClose}>
                        Gallery
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("whatwedo")}
                  >
                    What We Do <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "whatwedo"}>
                    <li>
                      <NavLink to="/pipesvalvesfitting" onClick={handleClose}>
                        Pipes, Valves & Fittings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/electricalssolutions" onClick={handleClose}>
                        Electrical Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/heavyequipmentvehicles"
                        onClick={handleClose}
                      >
                        Heavy Equipment & Vehicles
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/infrastructurecommunication"
                        onClick={handleClose}
                      >
                        Infrastructure & Communication
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/specializedindustrialsolutions"
                        onClick={handleClose}
                      >
                        Specialized Industrial Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/safetysecurity" onClick={handleClose}>
                        Safety & Security
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/environmentalsolutions"
                        onClick={handleClose}
                      >
                        Environmental Solutions
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("services")}
                  >
                    Services <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "services"}>
                    <li>
                      <NavLink to="/training" onClick={handleClose}>
                        Training
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/engineering" onClick={handleClose}>
                        Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/installation" onClick={handleClose}>
                        Installations
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mentainancesupport" onClick={handleClose}>
                        Maintenance Support
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("industries")}
                  >
                    Industries <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "industries"}>
                    <li>
                      <NavLink to="/oilandgas" onClick={handleClose}>
                        Oil & Gas
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/powerenergy" onClick={handleClose}>
                        Power & Energy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/constructioninfrastructure"
                        onClick={handleClose}
                      >
                        Construction & Infrastructure
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/telecommunications" onClick={handleClose}>
                        Telecommunications & IT
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/manufacturingidustrial"
                        onClick={handleClose}
                      >
                        Manufacturing & Industrial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/transportationlogistics"
                        onClick={handleClose}
                      >
                        Transportation & Logistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/safetysecurity" onClick={handleClose}>
                        Safety & Security
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/environmentalsolutions"
                        onClick={handleClose}
                      >
                        Environmental Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/agriculturefarming" onClick={handleClose}>
                        Agriculture & Farming
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("whychooseus")}
                  >
                    Why choose Us <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "whychooseus"}>
                    <li>
                      <NavLink
                        to="/competitiveadvantages"
                        onClick={handleClose}
                      >
                        Competitive Advantages
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/qualityassurance" onClick={handleClose}>
                        Quality Assurance
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/customizationflexibility"
                        onClick={handleClose}
                      >
                        Customization Flexibility
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/customercentricapproach"
                        onClick={handleClose}
                      >
                        Customer Centric Approach
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/testimonialsscsestudies"
                        onClick={handleClose}
                      >
                        Testimonials & Case Studies
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("products")}
                  >
                    Products <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "products"}>
                    <li>
                      <NavLink to="/productsoverview" onClick={handleClose}>
                        Products Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/relitorinproducts" onClick={handleClose}>
                        Relitorin Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/medicalequipmentsupplies"
                        onClick={handleClose}
                      >
                        Medical Equipment Supplies
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <DropdownButton
                    onClick={() => toggleDropdownMobile("inventory")}
                  >
                    Inventory <FaCaretDown />
                  </DropdownButton>
                  <DropdownMenu isOpen={isDropdownOpen === "inventory"}>
                    <li>
                      <NavLink to="/inventorylist" onClick={handleClose}>
                        Inventory List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/texasinventories" onClick={handleClose}>
                        Texas Inventories
                      </NavLink>
                    </li>
                  </DropdownMenu>
                </NavItem>
                <NavItem>
                  <HashLink smooth to="#footer" onClick={handleClose}>
                    CONTACT
                  </HashLink>
                </NavItem>
              </NavList>
            </Modal>
          </>
          <ContactIcons>
            <a href="tel:8329922340">
              <FaPhoneVolume />
            </a>
            <a href="mailto:reliance@relitorin.com">
              <FaEnvelope />
            </a>
          </ContactIcons>
        </IconsSeprator>
      )}
    </Header>
  );
};

export default Navbar;
