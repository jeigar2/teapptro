# Instalacion mongodb en local

Guía paso a paso para instalar MongoDB localmente y obtener la cadena de conexión a tu base de datos.

---

## Instalar MongoDB Localmente

### 1. Instalar MongoDB en Linux (UbuntDebian)**

1. **Importar la clave GPG de MongoDB**:
   ```bash
   sudo apt-get install gnupg
   wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
   ```

2. **Agregar el repositorio de MongoDB**:
   ```bash
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   ```

- no hay version Victoria linux mint 21.2

3. **Actualizar la lista de paquetes**:
   ```bash
   sudo apt-get update
   ```

4. **Instalar MongoDB**:
   ```bash
   sudo apt-get install -y mongodb-org
   ```

5. **Iniciar el servicio de MongoDB**:
   ```bash
   sudo systemctl start mongod
   ```

6. **Habilitar MongoDB para que se inicie automáticamente**:
   ```bash
   sudo systemctl enable mongod
   ```

7. **Verificar que MongoDB esté en ejecución**:
   ```bash
   sudo systemctl status mongod
   ```

---

### 2. Instalar MongoDB en macOS

1. **Instalar Homebrew (si no lo tienes)**:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Instalar MongoDB**:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

3. **Iniciar MongoDB**:
   ```bash
   brew services start mongodb-community
   ```

4. **Verificar que MongoDB esté en ejecución**:
   ```bash
   brew services list
   ```

---

### 3. Instalar MongoDB en Windows

1. **Descargar el instalador de MongoDB**:
   - Ve a la [página oficial de MongoDB](https://www.mongodb.com/try/download/community).
   - Selecciona la versión adecuada para tu sistema operativo y descarga el instalador.

2. **Ejecutar el instalador**:
   - Sigue las instrucciones del instalador.
   - Asegúrate de seleccionar la opción **"Install MongoDB as a Service"** para que MongoDB se ejecute como un servicio en Windows.

3. **Iniciar MongoDB**:
   - MongoDB se iniciará automáticamente como un servicio después de la instalación.

4. **Verificar que MongoDB esté en ejecución**:
   - Abre el **Administrador de Tareas** y busca el servicio `MongoDB`.

---

## Obtener la Cadena de Conexión a MongoDB

Una vez que MongoDB esté instalado y en ejecución, puedes conectarte a él desde tu aplicación. Aquí te explico cómo obtener la cadena de conexión:

### 1. Conexión Local (por defecto)
Si estás ejecutando MongoDB localmente, la cadena de conexión será:
```
mongodb://localhost:27017
```

- **`localhost`**: Es el host donde se ejecuta MongoDB.
- **`27017`**: Es el puerto predeterminado de MongoDB.

### 2. Conexión con Autenticación (opcional)
Si has configurado autenticación en MongoDB, la cadena de conexión incluirá el nombre de usuario y la contraseña:
```
mongodb://usuario:contraseña@localhost:27017
```

### 3. Conexión a una Base de DatoEspecífica**
Puedes especificar la base de datos a la que deseas conectarte directamente en la cadena de conexión:
```
mongodb://localhost:27017/nombre_de_la_base_de_datos
```

---

## Probar la Conexión a MongoDB

Puedes probar la conexión a MongoDB usando la shell de MongoDB (`mongo` o `mongosh`):

1. **Abrir la shell de MongoDB**:
   ```bash
   mongosh
   ```

2. **Listar las bases de datos**:
   ```bash
   show dbs
   ```

3. **Crear una nueva base de datos**:
   ```bash
   use nombre_de_la_base_de_datos
   ```

4. **Insertar un documento en una colección**:
   ```bash
   db.nombre_de_la_coleccion.insertOne({ clave: "valor" })
   ```

5. **Verificar la inserción**:
   ```bash
   db.nombre_de_la_coleccion.find()
   ```

---

## Conectar MongoDB a tu Aplicación

En tu aplicación Node.js, puedes usar la cadena de conexión para conectarte a MongoDB. Aquí tienes un ejemplo usando `mongoose`:

1. **Instalar `mongoose`**:
   ```bash
   npm install mongoose
   ```

2. **Conectar a MongoDB**:
   ```javascript
   const mongoose = require('mongoose');

   const connectDB = async () => {
     try {
       await mongoose.connect('mongodb://localhost:27017/nombre_de_la_base_de_datos', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
       });
       console.log('MongoDB Connected');
     } catch (error) {
       console.error('Error connecting to MongoDB:', error.message);
       process.exit(1);
     }
   };

   module.exports = connectDB;
   ```

3. **Llamar a `connectDB` en tu aplicación**:
   ```javascript
   const connectDB = require('./config/db');
   connectDB();
   ```

---

## Conclusión

Ahora tienes MongoDB instalado localmente y sabes cómo obtener la cadena de conexión para usarla en tu aplicación.