import { useState } from "react";
import {
  Container,
  NavbarWrapper,
  BrandWrapper,
  Brand,
  ToggleButton,
  NavbarList,
  NavbarItem,
  StyledLink
} from "./StyleNavbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <NavbarWrapper>
        <BrandWrapper>
          <Brand>Covid ID</Brand>
          <ToggleButton onClick={handleToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </ToggleButton>
        </BrandWrapper>
        <NavbarList isOpen={isOpen}>
          <ul>
            <StyledLink to="/"><NavbarItem>Global</NavbarItem></StyledLink>
            <StyledLink to="/Indonesia"><NavbarItem>Indonesia</NavbarItem></StyledLink>
            <StyledLink to="/provinsi"><NavbarItem>Provinsi</NavbarItem></StyledLink>
            <StyledLink to="/about"><NavbarItem>About</NavbarItem></StyledLink>
          </ul>
        </NavbarList>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
