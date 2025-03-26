import React from "react";
import styled from "styled-components";

const SectionFooter = styled.footer`
  height: 20vh;

  .footer {
    width: 100vw;
  }

  .footer-content {
    text-align: center;
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-heading {
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .footer-link {
    color: var(--text-muted);
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    font-family: sans-serif;
  }
  .footer-link:hover {
    color: aqua;
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 30px;
      padding: 20px;
    }
    .footer-title-container {
      width: 90%;
    }
  }
`;

const Footer = () => {
  return (
    <SectionFooter className="footer">
      <div className="footer-content">
        <nav>
          <h6 className="footer-heading">Servicios</h6>
          <a className="footer-link">vaijes</a>
        </nav>
        <nav>
          <h6 className="footer-heading">Compañia</h6>
          <a className="footer-link">Legal</a>
        </nav>
        <nav>
          <h6 className="footer-heading">Personaje</h6>
          <a className="footer-link">¿Quien?</a>
        </nav>
      </div>
    </SectionFooter>
  );
};

export default Footer;
