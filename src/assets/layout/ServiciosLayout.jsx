import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionService = styled.section`
  padding: 200px;

  div {
    background: url("https://www.valthorens.com/app/uploads/iris-images/5867/220811-seek-peak-l.brochot-ot-val-thorens-77-1920x1080-f50_50.webp");
    background-size: cover;
    background-repeat: no-repeat;
    height: 450px;
    width: 60%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 20px;

    h2 {
      text-align: center;
      color: white;
      font-size: 50px;
    }
    div {
      height: 100%;
      width: 70%;
      border-radius: 10px;
      position: absolute;
      top: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f1c7c7;
    }
  }
`;

const Servicios = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SectionService>
      <div data-aos="fade-up">
        <h2>Servicios</h2>
        <img src="" alt="" />
        <div></div>
      </div>
    </SectionService>
  );
};

export default Servicios;
