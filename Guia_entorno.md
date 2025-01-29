# Guía paso a paso

Comenzar con la configuración del entorno de desarrollo y la estructura básica del proyecto. 

## 1. Configuración del Entorno de Desarrollo

### Instalación de Node.js y npm

- **Node.js**: Si no lo tienes instalado, descárgalo e instálalo desde [nodejs.org](https://nodejs.org/).
- **npm**: Viene incluido con Node.js, pero asegúrate de tener la última versión ejecutando:
  ```bash
  npm install -g npm
  ```
- Ver las versiones de `npm` y `Node.js`

  ```bash
  npm -version
  node --version
  ```

### Creación del Repositorio en GitHub

1. Crea un nuevo repositorio en GitHub. `teapptro`
2. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/jeigar2/teapptro.git
   cd teapptro
   ```

## 2. Estructura del Proyecto

### Frontend (React.js)

1. **Crear una aplicación React**:
   ```bash
   npx create-react-app frontend
   cd frontend
   ```
  - si hay errores ver estes posibles correcciones

2. **Instalar dependencias adicionales**:
   ```bash
   npm install axios socket.io-client
   ```
   - `axios`: Para hacer peticiones HTTP al backend.
   - `socket.io-client`: Para la comunicación en tiempo real.

3. **Estructura de carpetas**:
   ```
   frontend/
   ├── public/
   ├── src/
   │   ├── components/
   │   │   ├── Header.js
   │   │   ├── Footer.js
   │   │   ├── UploadText.js
   │   │   ├── SelectPlay.js
   │   │   ├── DialogueInterface.js
   │   │   └── Menu.js
   │   ├── App.js
   │   ├── index.js
   │   └── styles/
   │       └── App.css
   ├── package.json
   └── README.md
   ```

### Backend (Node.js con Express.js)

1. **Inicializar un proyecto Node.js**:
   ```bash
   cd ..
   mkdir backend
   cd backend
   npm init -y
   ```
2. **Instalar dependencias**:
   ```bash
   npm install express mongoose socket.io cors body-parser
   ```
   - `express`: Framework para crear el servidor.
   - `mongoose`: Para interactuar con MongoDB.
   - `socket.io`: Para la comunicación en tiempo real.
   - `cors`: Para permitir solicitudes cruzadas.
   - `body-parser`: Para parsear el cuerpo de las solicitudes HTTP.

3. **Estructura de carpetas**:
   ```
   backend/
   ├── models/
   │   ├── Play.js
   │   ├── User.js
   │   └── Dialogue.js
   ├── routes/
   │   ├── playRoutes.js
   │   ├── userRoutes.js
   │   └── dialogueRoutes.js
   ├── controllers/
   │   ├── playController.js
   │   ├── userController.js
   │   └── dialogueController.js
   ├── config/
   │   └── db.js
   ├── server.js
   ├── package.json
   └── README.md
   ```

## 3. Configuración de MongoDB

1. **Crear una base de datos en MongoDB**:
   - Puedes usar MongoDB Atlas (en la nube) o instalar MongoDB localmente.
   - Obtén la cadena de conexión a tu base de datos.

2. **Configurar la conexión a MongoDB**:
   - En `backend/config/db.js`:
     ```javascript
     const mongoose = require('mongoose');

     const connectDB = async () => {
       try {
         const conn = await mongoose.connect('tu-cadena-de-conexion', {
           useNewUrlParser: true,
           useUnifiedTopology: true,
         });
         console.log(`MongoDB Connected: ${conn.connection.host}`);
       } catch (error) {
         console.error(`Error: ${error.message}`);
         process.exit(1);
       }
     };

     module.exports = connectDB;
     ```

## 4. Crear el Servidor Express

1. **Configurar el servidor**:
   - En `backend/server.js`:
     ```javascript
     const express = require('express');
     const cors = require('cors');
     const bodyParser = require('body-parser');
     const connectDB = require('./config/db');
     const playRoutes = require('./routes/playRoutes');
     const userRoutes = require('./routes/userRoutes');
     const dialogueRoutes = require('./routes/dialogueRoutes');

     const app = express();

     // Conectar a la base de datos
     connectDB();

     // Middleware
     app.use(cors());
     app.use(bodyParser.json());

     // Rutas
     app.use('/api/plays', playRoutes);
     app.use('/api/users', userRoutes);
     app.use('/api/dialogues', dialogueRoutes);

     const PORT = process.env.PORT || 5000;
     const server = app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
     });

     // Configurar Socket.io
     const io = require('socket.io')(server, {
       cors: {
         origin: "http://localhost:3000",
         methods: ["GET", "POST"]
       }
     });

     io.on('connection', (socket) => {
       console.log('Nuevo cliente conectado');

       socket.on('disconnect', () => {
         console.log('Cliente desconectado');
       });
     });
     ```

## 5. Definir Modelos de MongoDB

1. **Modelo de Obra (Play)**:
   - En `backend/models/Play.js`:
     ```javascript
     const mongoose = require('mongoose');

     const PlaySchema = new mongoose.Schema({
       title: { type: String, required: true },
       author: { type: String, required: true },
       scenes: [{
         sceneNumber: { type: Number, required: true },
         dialogues: [{
           character: { type: String, required: true },
           text: { type: String, required: true },
           nextDialogue: { type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue' }
         }]
       }]
     });

     module.exports = mongoose.model('Play', PlaySchema);
     ```

2. **Modelo de Usuario (User)**:
   - En `backend/models/User.js`:
     ```javascript
     const mongoose = require('mongoose');

     const UserSchema = new mongoose.Schema({
       username: { type: String, required: true, unique: true },
       password: { type: String, required: true },
       selectedCharacter: { type: String }
     });

     module.exports = mongoose.model('User', UserSchema);
     ```

3. **Modelo de Diálogo (Dialogue)**:
   - En `backend/models/Dialogue.js`:
     ```javascript
     const mongoose = require('mongoose');

     const DialogueSchema = new mongoose.Schema({
       playId: { type: mongoose.Schema.Types.ObjectId, ref: 'Play', required: true },
       sceneNumber: { type: Number, required: true },
       character: { type: String, required: true },
       text: { type: String, required: true },
       nextDialogue: { type: mongoose.Schema.Types.ObjectId, ref: 'Dialogue' }
     });

     module.exports = mongoose.model('Dialogue', DialogueSchema);
     ```

## 6. Crear Controladores y Rutas

1. **Controlador de Obras (PlayController)**:
   - En `backend/controllers/playController.js`:
     ```javascript
     const Play = require('../models/Play');

     const uploadPlay = async (req, res) => {
       const { title, author, scenes } = req.body;
       try {
         const newPlay = new Play({ title, author, scenes });
         await newPlay.save();
         res.status(201).json(newPlay);
       } catch (error) {
         res.status(400).json({ message: error.message });
       }
     };

     module.exports = { uploadPlay };
     ```

2. **Rutas de Obras (PlayRoutes)**:
   - En `backend/routes/playRoutes.js`:
     ```javascript
     const express = require('express');
     const { uploadPlay } = require('../controllers/playController');

     const router = express.Router();

     router.post('/upload', uploadPlay);

     module.exports = router;
     ```

## 7. Iniciar el Proyecto

1. **Iniciar el servidor backend**:
   ```bash
   cd backend
   node server.js
   ```

2. **Iniciar el servidor frontend**:
   ```bash
   cd ../frontend
   npm start
   ```

## 8. Pruebas Iniciales

- **Subir una obra**: Usa Postman o cualquier cliente HTTP para enviar una solicitud POST a `http://localhost:5000/api/plays/upload` con un cuerpo JSON que contenga el título, autor y escenas de la obra.
- **Verificar la base de datos**: Asegúrate de que la obra se haya guardado correctamente en MongoDB.

## Conclusión
Hemos configurado la estructura básica del proyecto, tanto en el frontend como en el backend. Ahora podemos comenzar a implementar las funcionalidades específicas, como la subida y análisis de texto, la selección de obras y personajes, y la interfaz de diálogos.

¿Te gustaría continuar con alguna de estas funcionalidades en particular? ¡Estoy listo para ayudarte en lo que necesites!