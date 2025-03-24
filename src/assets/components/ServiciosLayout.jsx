import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // Se añadió la importación correcta del carrusel
import CircularProgress from '@mui/material/CircularProgress';


const Header = styled.section`
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


  
`;
const SectionService = styled.section`
  padding: 100px 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 40px;
  }
`;

const CarouselWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 45%;
  
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
 box-shadow: 0 0 4px 4px rgb(0 0 0 / 25%);
  background-color: #fffdfd;
  border-radius: 10px;
  width: 300px !important;
  height: 350px !important;
  padding: 20px;
  margin: 10px;

  text-align: center;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  h3 {
    margin: 15px 0;
    font-size: 1.2rem;
  }

  p {
    font-size: 14px;
    color: #666;
    margin-bottom: 15px;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #008cba;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #005f7f;
  }
`;

const Servicios = () => {
  const [parapenteData, setParapenteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    fetch("http://localhost:3000/api/parapente")
      .then((response) => response.json())
      .then((data) => {
        setParapenteData(data.tipos_de_parapente || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SectionService>
      <Header>
        <h2 data-aos="fade-up">Servicios</h2>
        <CarouselWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            <Slider {...settings}>
              {parapenteData.map((parapente) => (
                <Card data-aos="zoom-in" key={parapente.id}>
                  <img src={parapente.imagen} alt={parapente.nombre} />
                  <h3>{parapente.nombre}</h3>
                  <p>{parapente.descripcion}</p>
                  <Link to={`/parapente/${parapente.id}`} className="btn">
                    Ver más
                  </Link>
                </Card>
              ))}
            </Slider>
          )}
        </CarouselWrapper>
      </Header>
    </SectionService>
  );
};

export default Servicios;