# project\_progral\_fronted

Frontend Angular para el laboratorio de vulnerabilidades.

## 🔧 Requisitos

* Node.js v16+
* npm (o yarn)
* Angular CLI

## 🚀 Instalación y ejecución

1. Clona el repositorio y ve a la carpeta:

   ```bash
   git clone <url-del-repo>
   cd project_progral_fronted
   ```
2. Instala dependencias:

   ```bash
   npm install
   # o yarn install
   ```
3. Ejecuta la aplicación en modo desarrollo:

   ```bash
   ng serve --open
   ```

   Esto abrirá `http://localhost:4200`.

## 📂 Assets

Coloca los siguientes archivos en `src/assets/`:

* `LogoUniversidad.png` (logo de la UMG)
* `Fondo.webp` (fondo animado)

## ⚙️ Estructura principal

* `src/app/app.component.html` y `.css` → Header y footer fijos.
* `src/app/login` → Componente de login con estilo centrado y animaciones.
* `src/app/products` → Formulario y lista de productos modernizados.
* `src/app/api.service.ts` → Métodos HTTP al backend (incluye `getProduct`).

## 🎨 Tema y estilo

* Fondo difuminado con `backdrop-filter: blur(4px)`.
* Componentes con fondo semitransparente, bordes redondeados y sombras suaves.
* Animaciones `fadeIn` en cards y botones.

## 🧪 Cómo probar vulnerabilidades (XSS)

1. Crea un producto con descripción maliciosa:

   ```html
   <script>alert('XSS')</script>
   ```

2. Al listar productos, deberías ver la alerta (DOM Injection).

3. Inspecciona con la consola del navegador para ver contenido sin sanitizar.

## ✅ Pruebas desde Postman/CURL

* **Crear producto**:

  ```bash
  curl -X POST http://localhost:8080/api/products \
    -H "Content-Type: application/json" \
    -d '{ "name":"TestXSS","description":"<script>alert(1)</script>","price":0 }'
  ```
* **Ver lista**:

  ```bash
  curl http://localhost:8080/api/products
  ```
* **Editar producto**:

  ```bash
  curl -X PUT http://localhost:8080/api/products/1 \
    -H "Content-Type: application/json" \
    -d '{ "name":"Edited","description":"<b>bold</b>","price":5 }'
  ```
* **Borrar producto**:

  ```bash
  curl -X DELETE http://localhost:8080/api/products/1
  ```

> Este README completa la documentación del frontend con instrucciones y ejemplos de pruebas de vulnerabilidad.
