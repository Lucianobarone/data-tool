# Data-tool-app

### PARA INICIAR EL PROYECTO:

1. > **Crear Base de Datos en Postgres.**

2. >**Modificar en el archivo `env.json` dentro de la carpera `Data-tool\data-tool-api\src\config\env` , ACLARAR:**

```
   - DATABASE: nombre de la Base de Datos.
 
   - USER: usuario Postgres si posee uno. (por default: postgres)
 
   - PASSWORD: contraseña Postgres si posee una. (Windows)

   - PORT: puerto Localhost
   ```
   

3. > **Parado en la carpeta `Data-tool/data-tool-api` correr `npm run seed` en la terminal.**

4. > **Parado en las carpetas `Data-tool/data-tool-api` && `Data-tool/data-tool-app` correr `npm i` y luego `npm start` en la terminal.**



### DATOS ADICIONALES:

*Se podra Ingresar a traves de los Usuarios creados mediante el Seed o tambien podra `Registrar` un nuevo Usuario.*

*Si el Usuario no esta Logueado no podra:*
```
Crear Pedidos (bug/feature)
Eliminar Pedidos
Votar Pedidos
```




Tecnologias usadas: `react, react-redux, ant.design, node.js, express, postgres-sequelize`
