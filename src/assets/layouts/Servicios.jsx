import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export function Servicios() {
  const { id } = useParams(); // Obtenemos el ID del tipo de parapente desde la URL
  const [parapente, setParapente] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/parapente/${id}`)
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
    return <p>Cargando...</p>;
  }

  if (!parapente) {
    return <p>Parapente no encontrado</p>;
  }

  return (
    <div>
      <h2>{parapente.nombre}</h2>
      <img src={parapente.imagen} alt={parapente.nombre} />
      <p>{parapente.descripcion}</p>
      {/* Aquí puedes agregar más detalles si los tienes */}
    </div>
  );
}
