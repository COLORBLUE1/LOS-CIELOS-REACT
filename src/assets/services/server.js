import express from 'express';
import cors from 'cors'; // Importa cors
import parapenteData from './parapente.json' assert { type: 'json' };

const app = express();
const port = 3000;

// Habilita CORS para todas las solicitudes
app.use(cors()); // Esto permite solicitudes desde cualquier origen

// Ruta raíz para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Parapente');
});

// Endpoint para obtener todos los tipos de parapente
app.get('/api/parapente', (req, res) => {
  res.json(parapenteData);
});

// Endpoint para obtener un tipo de parapente por su ID
app.get('/api/parapente/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const parapente = parapenteData.tipos_de_parapente.find(p => p.id === id);
  if (parapente) {
    res.json(parapente);
  } else {
    res.status(404).json({ error: 'Parapente no encontrado' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
