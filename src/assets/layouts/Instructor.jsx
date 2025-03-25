import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, TextField, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const Sectionmain = styled.header`
  background: url("https://imagenes.eltiempo.com/files/image_1200_600/uploads/2024/03/05/65e7754a37250.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding: 2rem;

  div {
    backdrop-filter: blur(3px);
    height: 70%;
    width: 100%;
    color: #000000;
  }
`;

export function Instructor() {
  const [tiposParapente, setTiposParapente] = useState([]);
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', imagen: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTiposParapente();
  }, []);

  // Obtener todos los tipos de parapente
  const fetchTiposParapente = async () => {
    const response = await fetch('http://localhost:3000/api/tipos-de-parapente');
    const data = await response.json();
    setTiposParapente(data);
  };

  // Manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Crear o actualizar un tipo de parapente
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      // Actualizar tipo de parapente
      const response = await fetch(`http://localhost:3000/api/tipos-de-parapente/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setEditingId(null);
        fetchTiposParapente();
        setFormData({ nombre: '', descripcion: '', imagen: '' });
      }
    } else {
      // Crear tipo de parapente
      const response = await fetch('http://localhost:3000/api/tipos-de-parapente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchTiposParapente();
        setFormData({ nombre: '', descripcion: '', imagen: '' });
      }
    }
  };

  // Eliminar un tipo de parapente
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3000/api/tipos-de-parapente/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchTiposParapente();
    }
  };

  // Manejar la edición de un tipo de parapente
  const handleEdit = (parapente) => {
    setFormData({ nombre: parapente.nombre, descripcion: parapente.descripcion, imagen: parapente.imagen });
    setEditingId(parapente.id);
  };

  return (
    <Sectionmain>
      <div>
        <Typography variant="h3" gutterBottom>
          Gestión de Tipos de Parapente
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Descripción"
                variant="outlined"
                fullWidth
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Imagen URL"
                variant="outlined"
                fullWidth
                name="imagen"
                value={formData.imagen}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {editingId ? 'Actualizar Tipo de Parapente' : 'Crear Tipo de Parapente'}
              </Button>
            </Grid>
          </Grid>
        </form>

        <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Imagen</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tiposParapente.map((parapente) => (
                <TableRow key={parapente.id}>
                  <TableCell>{parapente.nombre}</TableCell>
                  <TableCell>{parapente.descripcion}</TableCell>
                  <TableCell><img src={parapente.imagen} alt={parapente.nombre} width="100" /></TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(parapente)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(parapente.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Sectionmain>
  );
}
