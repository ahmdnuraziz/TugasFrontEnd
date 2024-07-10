import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #06D6A0;
  padding: 1rem;
  color: #fff;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    ul {
      display: flex;
    }
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Brand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const NavbarList = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const NavbarItem = styled.li`
  margin-bottom: 1rem;
  list-style-type: none;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: none;
  }
`;
