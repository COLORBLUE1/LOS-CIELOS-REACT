import express from 'express';
import cors from 'cors'; // Importa cors
import mysql from 'mysql2';
import parapenteData from './parapente.json' assert { type: 'json' };

const app = express();
const port = 3000;

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',  // Cambia esto por tu usuario de MySQL
  password: 'tu_contraseña', // Cambia esto por tu contraseña
  database: 'parapentebd',  // Asegúrate de que esta es la base de datos correcta
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Habilitar CORS
app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

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

// Ruta para autenticación de usuarios
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Consulta SQL para verificar las credenciales del usuario
  const query = 'SELECT * FROM credenciales WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error en la consulta a la base de datos' });
    }

    if (result.length > 0) {
      const user = result[0];
      return res.status(200).json({
        id: user.id,
        email: user.email,
        rol: user.rol, // Enviar el rol del usuario
      });
    } else {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
