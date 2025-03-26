import React from "react";
import styled from "styled-components";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ParapenteCards } from "../components/ServiciosCard";


const SectionHeader = styled.header`
  background: url("https://res.cloudinary.com/manawa/image/private/f_auto,c_limit,w_3840,q_auto/bbf560ab326f0ed02d9908084b152283");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;

  div {
    backdrop-filter: blur(3px);
    height: 100%;
    width: 100%;

    h1 {
      text-align: center;
    }
  }
`;

const Sectionthree = styled.section`
  height: 100vh;
  background: url("https://botiga.entrenuvols.com/wp-content/uploads/sites/5/2022/02/volt4-airdesign.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`;
const Sectiontwe = styled.section`
  height: 150vh;
`;
export function Landing() {
  return (
    <>
      <SectionHeader>
        <div>
          {/* <AppBar /> */}
          <Header />
        </div>
      </SectionHeader>
      <Sectiontwe>
        <ParapenteCards />
      </Sectiontwe>
      <Sectionthree />

      <Footer />
    </>
  );
}
