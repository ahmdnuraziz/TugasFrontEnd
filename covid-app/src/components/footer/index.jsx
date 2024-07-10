
import { Link } from "react-router-dom";
import { ContainerFooter, StyledLink } from "./StyleFooter";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <ContainerFooter>
      <div className="content_right">
        <h2 className='footer__title'>Covid App</h2>
        <p className='footer__author'>Developed by Ahmdaziz</p>
      </div>

      <div className="content_left">
        <div className="footer__link">
          <StyledLink to="/">
            Global
          </StyledLink>
          <StyledLink to="/indonesia">
            Indonesia
          </StyledLink>
          <StyledLink to="/provinsi">
            Provinsi
          </StyledLink>
          <StyledLink to="/about">
            About
          </StyledLink>
        </div>

      </div>

    </ContainerFooter>
  );
}

export default Footer;