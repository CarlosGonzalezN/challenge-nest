Challenge Nest - Documentación
Descripción
Challenge Nest es una aplicación desarrollada en el framework Nest.js. Es una aplicación que gestiona productos y categorías en una base de datos MySQL. Proporciona una API RESTful para realizar operaciones CRUD en los productos y categorías.

Requisitos
Node.js (v14.17.0 o superior)
npm (v6.14.0 o superior)
MySQL
Instalación
Clona el repositorio de Challenge Nest:

bash
Copy code
git clone https://github.com/CarlosGonzalezN/challenge-nest
Instala las dependencias:

Copy code
npm install
Configuración de la base de datos
Crea una base de datos en MySQL para la aplicación.

Abre el archivo ormconfig.json en la raíz del proyecto y configura los datos de conexión a la base de datos:

json
Copy code
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
Asegúrate de reemplazar tu_contraseña con la contraseña de tu base de datos y nombre_de_la_base_de_datos con el nombre de la base de datos que creaste.

Ejecución
Compila la aplicación:

arduino
Copy code
npm run build
Inicia la aplicación:

sql
Copy code
npm start
La aplicación estará disponible en http://localhost:3000.

Uso de la API
La aplicación proporciona las siguientes rutas de la API:

Categorías
GET /categories: Obtiene todas las categorías.
GET /categories/:id: Obtiene una categoría por su ID.
POST /categories: Crea una nueva categoría. Se espera un cuerpo de solicitud con los siguientes campos:
nombre_categoria: Nombre de la categoría.
PUT /categories/:id: Actualiza una categoría existente por su ID. Se espera un cuerpo de solicitud con los siguientes campos:
nombre_categoria: Nombre de la categoría.
DELETE /categories/:id: Elimina una categoría por su ID.
Productos
GET /products: Obtiene todos los productos.
GET /products/:id: Obtiene un producto por su ID.
POST /products: Crea un nuevo producto. Se espera un cuerpo de solicitud con los siguientes campos:
sku: SKU del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción del producto.
precio: Precio del producto.
id_categoria: ID de la categoría del producto.
PUT /products/:id: Actualiza un producto existente por su ID. Se espera un cuerpo de solicitud con los siguientes campos:
sku: SKU del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción del producto.
precio: Precio del producto.
id_categoria: ID de la categoría del producto.
DELETE /products/:id: Elimina un producto por su ID.
Tablas de la base de datos
La aplicación utiliza las siguientes tablas en la base de datos:

categorias: Almacena las categorías de los productos.
Campos: id (clave primaria), nombre_categoria.
productos: Almacena los productos.
Campos: id (clave primaria), sku, nombre_producto, descripcion, precio, id_categoria (clave foránea que referencia a la tabla categorias).
Licencia
Este proyecto está bajo la licencia UNLICENSED.

Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, puedes abrir un problema o enviar una solicitud de extracción.
