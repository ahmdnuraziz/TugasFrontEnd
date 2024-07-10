import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #06D6A0;
    color: #fff;
    padding: 1rem;
    text-align: center;


  .content_right{
  items-align: right;
  }
  .footer__title {
    margin-bottom: 1rem;
  }
  
  .footer__author {
    margin-bottom: 1rem;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {

  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    /*
         * Nothing TODO here.
         * We dont change styling footer. 
         */
  }
`;

export const StyledLink = styled(Link)`
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: blue;
    text-decoration: none;
  }
`;