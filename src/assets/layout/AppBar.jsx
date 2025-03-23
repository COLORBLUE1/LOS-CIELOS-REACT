import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  background: linear-gradient(180deg, #00000080, transparent);
  color: white;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: sticky;

  ul {
    display: flex;
    margin: 0;
    gap: 50px;
    width: 100%;
    justify-content: center;

    li {
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      transition: color 0.3s;

      &:hover {
        color: #f00;
      }
    }
  }
`;

const AppBar = () => {
  return (
    <Navbar>
      <ul>
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Servicios</li>
      </ul>
    </Navbar>
  );
};

export default AppBar;