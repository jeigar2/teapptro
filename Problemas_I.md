# Problemas I

## Ejecución

```bash
npx create-react-app frontend
Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y) y

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
npm warn deprecated fstream@1.0.12: This package is no longer supported.
npm warn deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in /home/user1/dev/ws/teapptro/frontend.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1324 packages in 44s

268 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: frontend@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error /home/user1/.npm/_logs/2025-01-29T01_01_13_396Z-eresolve-report.txt
npm error A complete log of this run can be found in: /home/user1/.npm/_logs/2025-01-29T01_01_13_396Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed
```

Si estás enfrentando algunos problemas con las dependencias al crear tu aplicación React. Los mensajes de advertencia indican que algunas dependencias están obsoletas y que hay un conflicto en la resolución de dependencias debido a la versión de React que se está utilizando.

### Solución Paso a Paso

#### 1. **Resolver el Conflicto de Dependencias**
El error principal es un conflicto de dependencias entre `react@19.0.0` y `@testing-library/react@13.4.0`, que espera `react@^18.0.0`. Aquí hay algunas opciones para resolver este problema:

- **Opción 1: Usar `--legacy-peer-deps`**:
  Puedes forzar la instalación ignorando los conflictos de dependencias usando el flag `--legacy-peer-deps`:
  ```bash
  npx create-react-app frontend --legacy-peer-deps
  ```

- Fui por ésta

  ```bash
  npx create-react-app frontend --legacy-peer-deps
  
  The directory frontend contains files that could conflict:

  node_modules/
  package-lock.json
  package.json
  public/
  src/
  ```

Either try using a new directory name, or remove the files listed above.

- **Opción 2: Usar `--force`**:
  Otra opción es usar el flag `--force` para forzar la instalación:
  ```bash
  npx create-react-app frontend --force
  ```

- **Opción 3: Instalar Dependencias Manualmente**:
  Si prefieres tener más control sobre las dependencias, puedes crear el proyecto sin instalar las dependencias y luego instalarlas manualmente:
  ```bash
  npx create-react-app frontend --template cra-template --skip-install
  cd frontend
  npm install --legacy-peer-deps
  ```

#### 2. **Actualizar Dependencias Obsoletas**
Una vez que hayas creado el proyecto, puedes actualizar las dependencias obsoletas para evitar advertencias y posibles problemas de seguridad:

1. **Instalar `npm-check-updates`**:
   ```bash
   npm install -g npm-check-updates
   ```

2. **Actualizar Dependencias**:
   ```bash
   ncu -u
   npm install
   ```

#### 3. **Verificar y Corregir Conflictos**
Si después de la instalación aún encuentras problemas, verifica las dependencias en tu `package.json` y asegúrate de que todas las versiones sean compatibles. Puedes usar herramientas como `npm ls` para ver el árbol de dependencias y detectar conflictos.

### Ejemplo de Comandos para Crear el Proyecto

1. **Crear el Proyecto con `--legacy-peer-deps`**:
   ```bash
   npx create-react-app frontend --legacy-peer-deps
   cd frontend
   npm start
   ```

2. **Instalar Dependencias Adicionales**:
   ```bash
   npm install axios socket.io-client
   ```

### Conclusión
Siguiendo estos pasos, deberías poder crear tu aplicación React sin problemas de dependencias. Si encuentras más problemas o necesitas ayuda adicional, no dudes en preguntar. ¡Estoy aquí para ayudarte en cada paso del camino!


---


## Persiste el error

Parece que el proyecto se creó correctamente, pero hay un problema con la dependencia `web-vitals`, que no se instaló correctamente. Esto puede ocurrir debido a conflictos de dependencias o porque la instalación no se completó como se esperaba.

Vamos a solucionar este problema paso a paso:

---

### Solución al Error "Module not found: Can't resolv'web-vitals'"**

1. **Eliminar la carpeta `node_modules` y el archivo `package-lock.json`**:
   Estos archivos pueden estar causando conflictos debido a una instalación previa incompleta o incorrecta. Ejecuta los siguientes comandos:
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   ```

2. **Reinstalar las dependencias**:
   Vuelve a instalar todas las dependencias del proyecto usando `npm install`:
   ```bash
   npm install
   ```

3. **Verificar si `web-vitals` está instalado**:
   Asegúrate de que `web-vitals` esté listado en tu archivo `package.json` bajo `dependencies`. Si no está, instálalo manualmente:
   ```bash
   npm install web-vitals
   ```

4. **Reiniciar el servidor de desarrollo**:
   Una vez que todas las dependencias estén instaladas correctamente, reinicia el servidor:
   ```bash
   npm start
   ```

---

### Si el problema persiste

Si después de seguir los pasos anteriores el error continúa, es posible que haya un problema con la configuración del proyecto o con alguna dependencia conflictiva. Aquí hay algunas soluciones adicionales:

#### Opción 1: Eliminar y recrear el proyecto
Si el proyecto aún no tiene cambios importantes, puedes eliminarlo y recrearlo desde cero:
1. Elimina la carpeta `frontend`:
   ```bash
   cd ..
   rm -rf frontend
   ```
2. Vuelve a crear el proyecto con `create-react-app`:
   ```bash
   npx create-react-app frontend --legacy-peer-deps
   cd frontend
   npm start
   ```

#### Opción 2: Revisar el archivo `reportWebVitals.js`

El archivo `src/reportWebVitals.js` es opcional y no es necesario para el funcionamiento básico de la aplicación. Si no lo necesitas, puedes comentar o eliminar su importación en `src/index.js`:
1. Abre `src/index.js` y comenta o elimina las líneas relacionadas con `reportWebVitals`:
   ```javascript
   // import reportWebVitals from './reportWebVitals';

   // Si ves esta línea, también coméntala o elimínala:
   // reportWebVitals();
   ```
2. Guarda el archivo y reinicia el servidor:
   ```bash
   npm start
   ```

#### Opción 3: Instalar manualmente las dependencias faltantes
Si el problema persiste, es posible que otras dependencias no se hayan instalado correctamente. Revisa el archivo `package.json` y asegúrate de que todas las dependencias estén instaladas:
1. Instala manualmente las dependencias principales:
   ```bash
   npm install react react-dom react-scripts web-vitals
   ```
2. Reinicia el servidor:
   ```bash
   npm start
   ```

---

### Conclusión

Siguiendo estos pasos, deberías poder resolver el error relacionado con `web-vitals` y hacer que tu aplicación React funcione correctamente. 