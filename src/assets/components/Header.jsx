import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import 'animate.css';

const Headecontent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  gap: 100px;

  .header-content {
    width: 500px;
    height: 500px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    
    h2 {
        animation: fadeInUp;
        animation-duration: 1s;
        color: white;
        font-size: 3em;
        margin: 0;
        width: 380px;
    }
    p {
        color: white;
        margin: 0;
    }
  }

  a {
      background: #ffffff;
      padding: 0.5rem 1rem;
      border-radius: 15px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      width: 100px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #216cbd;
      animation: fadeIn;
      animation-duration: 1s;
    transition: all 0.1s;

    &:hover {
      background: #00e1ff;
      scale: 1.1;
      color: white;
    }
  }
  img {
    width: 40%;
    height: auto;
    animation: jackInTheBox;
    animation-duration: 2s;
  }
`;

const Header = () => {
  return (
    <Headecontent>
      <div className="header-content">
        <h2>Siéntete seguro volando con un instructor</h2>
        <p>
          El parapente es un deporte extremo que consiste en volar en un planeador ligero, impulsado por el viento y sin estructura rígida. Es una actividad turística que permite disfrutar de la sensación de volar.
        </p>
        <Link to={"/Login"}>Ingresar</Link>
      </div>
      <img
        src="https://png.pngtree.com/png-clipart/20240515/original/pngtree-paragliding-extreme-sports-design-vintage-retro-png-image_15100243.png"
        alt=""
      />
    </Headecontent>
  );
};

export default Header;
