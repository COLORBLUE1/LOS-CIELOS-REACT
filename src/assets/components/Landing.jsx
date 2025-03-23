import React from "react";
import styled from "styled-components";
import AppBar from "../layout/AppBar";

const SectionHeader = styled.header`
  background: url("https://res.cloudinary.com/manawa/image/private/f_auto,c_limit,w_3840,q_auto/bbf560ab326f0ed02d9908084b152283");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 60vh;

  div {
    backdrop-filter: blur(3px);
    height: 100%;
    width: 100%;

    h1 {
      text-align: center;
    }
  }
`;

const Landing = () => {
  return (
    <>
      <SectionHeader>
        <div>
          <AppBar />
        </div>
      </SectionHeader>
      <SectionHeader>
        <div>
          <h1>Perra</h1>
        </div>
      </SectionHeader>
    </>
  );
};

export default Landing;
