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
app.get('/api/tipos-de-parapente', (req, res) => {
  res.json(parapenteData.tipos_de_parapente);
});

// Endpoint para obtener un tipo de parapente por su ID
app.get('/api/tipos-de-parapente/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const parapente = parapenteData.tipos_de_parapente.find(p => p.id === id);
  if (parapente) {
    res.json(parapente);
  } else {
    res.status(404).json({ error: 'Parapente no encontrado' });
  }
});

// Ruta para crear un nuevo tipo de parapente
app.post('/api/tipos-de-parapente', (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  const nuevoId = parapenteData.tipos_de_parapente.length + 1;
  const nuevoParapente = {
    id: nuevoId,
    nombre,
    descripcion,
    imagen
  };
  parapenteData.tipos_de_parapente.push(nuevoParapente);
  res.status(201).json(nuevoParapente);
});

// Ruta para actualizar un tipo de parapente por su ID
app.put('/api/tipos-de-parapente/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, imagen } = req.body;

  let parapente = parapenteData.tipos_de_parapente.find(p => p.id === parseInt(id));
  if (!parapente) {
    return res.status(404).json({ message: 'Parapente no encontrado' });
  }

  parapente = { ...parapente, nombre, descripcion, imagen };
  res.status(200).json(parapente);
});

// Ruta para eliminar un tipo de parapente
app.delete('/api/tipos-de-parapente/:id', (req, res) => {
  const { id } = req.params;
  const index = parapenteData.tipos_de_parapente.findIndex(p => p.id === parseInt(id));

  if (index !== -1) {
    parapenteData.tipos_de_parapente.splice(index, 1);
    return res.status(200).json({ message: 'Parapente eliminado con éxito' });
  }

  return res.status(404).json({ message: 'Parapente no encontrado' });
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

// consultas SQL 

// Ruta para obtener todos los usuarios (Leer)
app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT * FROM credenciales';
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
    res.status(200).json(result);
  });
});

// Ruta para crear un nuevo usuario (Insertar)
app.post('/api/usuarios', (req, res) => {
  const { email, password, rol } = req.body;
  const query = 'INSERT INTO credenciales (email, password, rol) VALUES (?, ?, ?)';
  db.query(query, [email, password, rol], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al crear usuario' });
    }
    res.status(201).json({ message: 'Usuario creado con éxito' });
  });
});

// Ruta para actualizar un usuario (Actualizar)
app.put('/api/usuarios/:id', (req, res) => {
  const { email, password, rol } = req.body;
  const { id } = req.params;
  const query = 'UPDATE credenciales SET email = ?, password = ?, rol = ? WHERE id = ?';
  db.query(query, [email, password, rol, id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar usuario' });
    }
    res.status(200).json({ message: 'Usuario actualizado con éxito' });
  });
});

// Ruta para eliminar un usuario (Eliminar)
app.delete('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM credenciales WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar usuario' });
    }
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
