const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();   

const port = process.env.PORT || 27017;

// Conexión a la base de datos (reemplaza con tu URI de MongoDB)
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Modelo de usuario
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const   
 User = mongoose.model('User',   
 userSchema);

// Ruta para registrar un nuevo usuario
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);   


    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'Usuario registrado exitosamente' });
} catch (err) {
    console.error('Error al registrar al usuario:', err);
    res.status(500).json({ error: 'Ha ocurrido un error al procesar tu solicitud' });
};

// Ruta para iniciar sesión
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({   
 error: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta'   
 });
    }

    res.json({ message: 'Autenticación exitosa' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});