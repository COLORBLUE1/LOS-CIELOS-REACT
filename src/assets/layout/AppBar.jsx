import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

const Navbar = styled.nav`
  background: linear-gradient(180deg, #00000080, transparent);
  color: white;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: static;
  top: 0;

  ul {
    display: flex;
    margin: 0;
    gap: 50px;
    width: 100%;
    justify-content: center;

    li {
      background: #1f57b1;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.1rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      transition: color 0.3s;

      &:hover {
        background: #419dff;
      }
    }
  }

  ul:last-child li {
    background: #5594fa;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    a {
      color: white;
    }
    &:hover {
      background: #245891;
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
      <ul>
        <li>
          <Link to={"/"}>Ingresar</Link>
        </li>
      </ul>
    </Navbar>
  );
};

export default AppBar;
