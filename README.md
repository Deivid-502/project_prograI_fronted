# project_progral_fronted

Frontend Angular para el laboratorio de vulnerabilidades web.

Este proyecto está diseñado para demostrar vulnerabilidades comunes como **XSS**, inyección de código y manipulación de endpoints, dentro de un entorno visual moderno y atractivo.

---

## 🔧 Requisitos

- Node.js **v16 o superior**
- npm (o yarn)
- Angular CLI (`npm install -g @angular/cli`)

---

## 🚀 Instalación y ejecución

1. Clona el repositorio y accede al directorio:

   ```bash
   git clone <url-del-repo>
   cd project_progral_fronted
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

3. Ejecuta la aplicación en modo desarrollo:

   ```bash
   ng serve --open
   ```

   Esto abrirá `http://localhost:4200` en tu navegador.

---

## 🏗️ Comandos útiles

### 🔨 Build para producción

```bash
ng build --configuration production
```

Genera los archivos optimizados dentro de `dist/project_progral_fronted`.

### 🧪 Ejecutar pruebas (unitarias)

```bash
ng test
```

### 🔍 Linter

```bash
ng lint
```

### 💅 Formatear código con Prettier (si está configurado)

```bash
npx prettier --write .
```

---

## 📂 Assets necesarios

Coloca los siguientes archivos en la carpeta `src/assets/`:

- `LogoUniversidad.png` → Logo institucional usado en el header.
- `Fondo.webp` → Fondo animado/difuminado de pantalla completa.

> El fondo se adapta a la pantalla y usa `backdrop-filter: blur(4px)` para lograr el efecto difuminado sobre los componentes.

---

## 🧩 Estructura general del proyecto

```plaintext
src/
├── app/
│   ├── api.service.ts         # Comunicación con backend
│   ├── login/                 # Componente de login
│   ├── products/              # Formulario y listado de productos
│   └── app.component.*        # Header, footer y layout global
├── assets/                    # Logo, fondo animado, etc.
├── environments/              # Configuración local vs producción
```

---

## 🎨 Estilo y tema

- Fondo oscuro animado + `blur` para enfoque en contenido.
- Layout fijo con header y footer modernos.
- Componentes redondeados, sombras suaves y animaciones al interactuar.
- Responsive y estéticamente balanceado.

---

## 👨‍💻 Funcionalidades

- Login con validación de campos.
- Listado de productos en formato grid con íconos edit/delete.
- Formulario de creación/edición con validaciones y diseño compacto.
- Modo visual amigable para pruebas de vulnerabilidad.

---

## 🧪 Cómo probar vulnerabilidades (XSS)

1. Crea un producto con una descripción que incluya código malicioso como:

   ```html
   <script>alert('XSS')</script>
   ```

2. Al listar los productos, deberías ver la alerta de prueba (inyección DOM).

3. También puedes usar la consola del navegador para inspeccionar el HTML inyectado.

---

## ✅ Pruebas desde Postman o CURL

> Asegúrate que el backend esté corriendo en `http://localhost:8080`.

### Crear producto:

```bash
curl -X POST http://localhost:8080/api/products   -H "Content-Type: application/json"   -d '{ "name":"TestXSS","description":"<script>alert(1)</script>","price":0 }'
```

### Ver lista:

```bash
curl http://localhost:8080/api/products
```

### Editar producto:

```bash
curl -X PUT http://localhost:8080/api/products/1   -H "Content-Type: application/json"   -d '{ "name":"Edited","description":"<b>bold</b>","price":5 }'
```

### Borrar producto:

```bash
curl -X DELETE http://localhost:8080/api/products/1
```

---

## ⚠️ Notas adicionales

- El proyecto no implementa sanitización de entradas por fines educativos.
- El frontend está conectado al backend de Spring Boot (`project_progral_backend`).
- Asegúrate que CORS esté habilitado en el backend si haces pruebas cruzadas.
- El login no tiene gestión de tokens, por lo que solo simula acceso.

---

> Este `README.md` documenta toda la funcionalidad del proyecto frontend: instalación, compilación, estructura, estilo, y cómo hacer pruebas de seguridad de forma controlada.