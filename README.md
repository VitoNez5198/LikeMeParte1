# Proyecto Like Me

Este proyecto es una aplicación web para compartir y dar "me gusta" a publicaciones. Permite agregar nuevos posts y ver los posts existentes.

## Requerimientos

1. Habilitar los CORS en el servidor utilizando el paquete npm `cors`. 
2. Utilizar el paquete npm `pg` para conectarse e interactuar con la base de datos PostgreSQL. 
3. Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL.
4. Crear una ruta POST con Express que reciba y almacene en PostgreSQL un nuevo registro.

## Configuración

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes paquetes y dependencias:

- Node.js 
- PostgreSQL 

### Instalación

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/VitoNez5198/LikeMeParte1.git
```

2. Ve al directorio del proyecto:

```
cd 'Directorio_proyecto'
```

3. Instala las dependencias utilizando npm:

```
npm install
```

4. Configura la conexión a la base de datos PostgreSQL en el archivo `db/config.js`. Asegúrate de proporcionar los detalles correctos de tu base de datos.

5. Habilita los CORS en el servidor modificando el archivo `server.js` e incluyendo el middleware de `cors`.

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

// ...

app.use(cors());

// ...
```

## Uso

1. Inicia el servidor:

```
npm start
```

2. Accede a la aplicación en tu navegador web:

```
http://localhost:3000
```

3. La página principal mostrará los posts existentes y un formulario para agregar nuevos posts. Al agregar un nuevo post, este se almacenará en la base de datos y se mostrará en la lista de posts.
