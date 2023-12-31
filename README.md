# Challenge Nest - Documentación

## Descripción

Challenge Nest es una aplicación desarrollada en el framework Nest.js. Es una aplicación que gestiona productos y categorías en una base de datos MySQL. Proporciona una API RESTful para realizar operaciones CRUD en los productos y categorías.

## Requisitos

Node.js (v14.17.0 o superior)
npm (v6.14.0 o superior)

- MySQL

## Instalación

1. Clona el repositorio de Challenge Nest:

git clone <URL del repositorio> 2. Instala las dependencias:

npm install

csharp
Copy code

## Configuración de la base de datos

1. Crea una base de datos en MySQL para la aplicación.

2. Abre el archivo `ormconfig.json` en la raíz del proyecto y configura los datos de conexión a la base de datos:

`````json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "tu_contraseña",
  "database": "nombre_de_la_base_de_datos",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
# Challenge Nest - Documentación

## Descripción

Challenge Nest es una aplicación desarrollada en el framework Nest.js. Es una aplicación que gestiona productos y categorías en una base de datos MySQL. Proporciona una API RESTful para realizar operaciones CRUD en los productos y categorías.

## Requisitos

Node.js (v14.17.0 o superior)
npm (v6.14.0 o superior)

- MySQL

## Instalación

1. Clona el repositorio de Challenge Nest:

git clone https://github.com/CarlosGonzalezN/challenge-nest

2. Instala las dependencias:

npm install

prara iniciar ejecurat
npm run start:dev

## Configuración de la base de datos

1. Crea una base de datos en MySQL para la aplicación.

2. Abre el archivo `ormconfig.json` en la raíz del proyecto y configura los datos de conexión a la base de datos:

````json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "tu_contraseña",
  "database": "nombre_de_la_base_de_datos",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}

# Challenge Nest - Documentación

## Descripción

Challenge Nest es una aplicación desarrollada en el framework Nest.js. Es una aplicación que gestiona productos y categorías en una base de datos MySQL. Proporciona una API RESTful para realizar operaciones CRUD en los productos y categorías.




2. Abre el archivo `ormconfig.json` en la raíz del proyecto y configura los datos de conexión a la base de datos:

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "tu_contraseña",
  "database": "nombre_de_la_base_de_datos",
  "entities": ["dist/**/*.entity{.ts,.js}"],
  "synchronize": true
}
`````

# Uso de la API

## La aplicación proporciona las siguientes rutas de la API:

### Categorías

GET /categorys: Obtiene todas las categorías.

### Estados

GET /states-products: Obtiene todas las categorías.

### Productos

GET /products: Obtiene todos los productos.

GET /products/:id: Obtiene un producto por su ID.

POST /products: Crea un nuevo producto. Se espera un cuerpo de solicitud con los siguientes campos:
sku: SKU del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción del producto.
precio: Precio del producto.
id_categoria: ID de la categoría del producto.

PATCH /products/:id: Actualiza un producto existente por su ID. Se espera un cuerpo de solicitud con los siguientes campos:
sku: SKU del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción del producto.
precio: Precio del producto.
id_categoria: ID de la categoría del producto.

DELETE /products/:id: Elimina un producto por su ID.

# Tablas de la base de datos

La aplicación utiliza las siguientes tablas en la base de datos:

categorias: Almacena las categorías de los productos.
Campos: id (clave primaria), nombre_categoria.
productos: Almacena los productos.
Campos: id (clave primaria), sku, nombre_producto, descripcion, precio, id_categoria (clave foránea que referencia a la tabla categorias).
Licencia
Este proyecto está bajo la licencia UNLICENSED.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, puedes abrir un problema o enviar una solicitud de extracción.
