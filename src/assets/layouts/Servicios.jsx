import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import styled from "styled-components";



const SectionMain = styled.section`
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

div{
  width: 100%;
  display: flex;
  justify-content: center;
  
  p {
    width: 60%;
    text-align: center;
  }
}
`;

const SectionHeader = styled.header`
            background: url(https://invictaelectric.es/wp-content/uploads/CIELO-AZUL-scaled-1.jpg);
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
            background-position: center;
            height: 50vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        
        
            h2 {
              text-align: center;
              font-size: 50px;
              color: white;
            }
        `;

export function Servicios() {
  const { id } = useParams(); // Obtenemos el ID del tipo de parapente desde la URL
  const [parapente, setParapente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tipos-de-parapente/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setParapente(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los detalles:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!parapente) {
    return <p>Parapente no encontrado</p>;
  }

  return (
    <SectionMain>
      <SectionHeader>
        <h2>{parapente.nombre}</h2>

      </SectionHeader>
      <div>
        <p>{parapente.descripcionlarga}</p>
      </div>
    </SectionMain>
  );
}
