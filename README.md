# teapptro

Ayuda a los ensayos teatrales

## Notas
Fases del desarrollo, desde la planificación inicial hasta la implementación y las pruebas. 
Abordar cada parte del proyecto paso a paso, asegurándo de que todos los requisitos se cumplan y que la aplicación funcione según lo esperado.

Voy a mantener un registro escrito de todo lo que hemos se ha esgrimido hasta ahora, por si en algún momento se necesita repasar algún detalle o profundizar en alguna parte específica.
No dudar en partir desde aquí. Este es un resumen de lo que se ha cubierto hasta ahora para consultar en cualquier momento:

### Resumen del Proyecto

#### Requisitos Funcionales

1. **Subida y Análisis de Texto**: Descomponer el texto en escenas, actores, diálogos y relaciones.
2. **Escenificación de la Obra**: Inscripción de usuarios, selección de personajes y comienzo de la obra.
3. **Interfaz de Diálogos**: Tabla de 5 filas y 2 columnas para mostrar diálogos actuales, siguientes y pasados.
4. **Avance de Diálogos**: Control de quién puede avanzar los diálogos.
5. **Voces y Sonido**: Reproducción de diálogos con voces predefinidas.
6. **Marcado de Texto y Puntuación**: Captura de voz y puntuación de la precisión de la lectura.
7. **Cabecera y Pie de Página**: Información de la obra y tiempo de ejecución.
8. **Menú Hamburguesa**: Opciones adicionales accesibles desde un menú desplegable.

#### Requisitos No Funcionales

- Usabilidad, rendimiento, seguridad y escalabilidad.

#### Arquitectura del Sistema

- **Frontend**: React.js o Angular.
- **Backend**: Node.js con Express.js y MongoDB.
- **Comunicación en Tiempo Real**: WebSockets (Socket.io).

#### Flujo de Trabajo

1. Subida y análisis de texto.
2. Selección de obra y personaje.
3. Escenificación de la obra.
4. Finalización de la obra.

#### Herramientas y Tecnologías

- Frontend: React.js, HTML, CSS, JavaScript.
- Backend: Node.js, Express.js, MongoDB.
- Comunicación en Tiempo Real: WebSockets (Socket.io).
- Autenticación: JWT (JSON Web Tokens).
- Despliegue: Docker, Kubernetes, AWS/GCP/Azure.

### Próximos Pasos

Comenzar con la configuración inicial del proyecto, estableciendo la estructura básica del frontend y backend. 
Plan inicial para empezar:

1. **Configuración del Entorno de Desarrollo**:
   - Instalar Node.js y npm.
   - Crear un repositorio en GitHub para el proyecto.
   - Configurar un proyecto básico con React.js para el frontend y Node.js con Express.js para el backend.

2. **Diseño de la Base de Datos**:
   - Definir las colecciones necesarias en MongoDB (obras, usuarios, diálogos, etc.).
   - Crear esquemas para cada colección.

3. **Implementación de la Subida y Análisis de Texto**:
   - Crear un componente en el frontend para subir el texto.
   - Implementar la lógica en el backend para analizar el texto y almacenarlo en la base de datos.

4. **Autenticación de Usuarios**:
   - Implementar un sistema de autenticación usando JWT.
   - Crear rutas protegidas en el backend.

5. **Interfaz de Usuario**:
   - Diseñar la interfaz para la selección de obras y personajes.
   - Implementar la tabla de diálogos con la lógica para mostrar los textos actuales, siguientes y pasados.

