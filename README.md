# Uso de la API

La aplicación proporciona las siguientes rutas de la API:

## Categorías

GET /categorys: Obtiene todas las categorías.

## Productos

GET /products: Obtiene todos los productos.

GET /products/:id: Obtiene un producto por su ID.

POST /products: Crea un nuevo producto. Se espera un cuerpo de solicitud con los siguientes campos:
sku: SKU del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción del producto.
precio: Precio del producto.
id_categoria: ID de la categoría del producto.

PUT /products/:id: Actualiza un producto existente por su ID. Se espera un cuerpo de solicitud con los siguientes campos:

## Estados

GET /states: Obtiene todas las categorías.
