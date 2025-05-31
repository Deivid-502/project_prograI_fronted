# 🛡️ project_prograI_frontend

> Un frontend hecho con Angular para experimentar vulnerabilidades web (SQL Injection, XSS, DOM Injection, etc.).  
> Ideal para que vean ejemplos prácticos de cómo **NO** validar datos y cómo se explotan estas fallas.

🔗 **Repositorio principal:**  
https://github.com/Deivid-502/project_prograI_frontend.git

---

## 🔀 Ramas del Proyecto

Este repositorio tiene tres ramas principales que conviene conocer:

1. **`main`**
2. **`web-version`**
3. **`first-preview`**

### 1. `main`
- **Merge** directo de `web-version`.
- Usa **variables de entorno** (mediante `src/assets/env.js` y los archivos en `src/environments`).
- Preparada para despliegues en plataformas como Vercel (puedes definir variables de entorno en producción).
- Si clonas el repositorio sin especificar rama, estarás en `main` por defecto.

### 2. `web-version`
- Versiones “servibles” en un host (por ejemplo, Vercel o Netlify).
- Estructura y archivos **idénticos** a `main`, solo que `main` es el resultado de un merge final.
- Usa **env.js** y `environment.ts` / `environment.prod.ts` para separar URLs de backend según entorno.

### 3. `first-preview`
- Versión local “para desarrollo rápido” sin manejo de variables de entorno.
- Todas las URLs y configuraciones están **hardcodeadas** en los servicios Angular.
- Ideal si solo quieres clonar y ver todo funcionando sin editar `env.js` ni preocuparte por `.env`.
- **Importante:** no encontrarás archivos `src/assets/env.js` ni referencias a `window.__env`.

> 🔍 **Consejo**: Si vas a mostrar este proyecto en un servidor público (por ejemplo Vercel), es mejor usar la rama `web-version` o `main`. Si solo quieres probar en tu máquina sin complicarte, la rama `first-preview` va bien.

---

## 📌 Requisitos Previos

Antes de arrancar el proyecto (en cualquiera de sus ramas), asegúrate de tener:

1. **Node.js v20.11.x**
   - Descárgalo en [nodejs.org](https://nodejs.org/).
   - Si manejas varias versiones, usa [nvm](https://github.com/nvm-sh/nvm).
   - Verifica con:

   ```bash
   node -v
   ```

   Debe mostrar algo como:

   ```text
   v20.11.x
   ```

2. **npm** (se instala junto con Node.js)
   - Confirma la versión:

   ```bash
   npm -v
   ```

   Debe mostrar algo como:

   ```text
   10.x.x
   ```

3. **Angular CLI** (solo para desarrollo local)
   - Si no lo tienes, instálalo con:

   ```bash
   npm install -g @angular/cli@~17.0.0
   ```

   - Verifica que esté disponible:

   ```bash
   ng version
   ```

---

## ⚙️ Instalación y Ejecución (Desarrollo)

A continuación encontrarás instrucciones concretas para cada rama. Elige la que más se ajuste a tu flujo:

### 🔸 1. Rama `main` / `web-version` (con variables de entorno)

#### 1.1 Clonar la rama
```bash
git clone https://github.com/Deivid-502/project_prograI_frontend.git
```
```bash
cd project_prograI_frontend
```
```bash
git checkout web-version   # O “main” si prefieres; ambas están sincronizadas
```

#### 1.2 Configurar `env.js`

En `src/assets/env.js` (ya existe en la rama), verás algo como:

```js
(function (window) {
  window.__env = window.__env || {};
  window.__env.API_URL = 'http://localhost:8080/api';
  // Para producción, define aquí el endpoint real de tu backend
  // window.__env.API_URL = 'https://mi-backend-produccion.com/api';
})(this);
```

- **Opcional**: Si vas a desplegar en Vercel/Netlify, ve a los ajustes de tu proyecto y crea una variable de entorno llamada `API_URL` (o edita `env.js` en el servidor).
- En local, no necesitas modificar nada a menos que tu backend esté en otra ruta.

#### 1.3 Instalar dependencias
```bash
npm install --legacy-peer-deps
```

> Usamos `--legacy-peer-deps` para evitar conflictos de “peer dependency” entre Angular y otras librerías.

#### 1.4 Levantar servidor de desarrollo
```bash
ng serve --open
```
- Se abrirá automáticamente en `http://localhost:4200/`.
- Cada vez que guardes cambios, la página se recargará (Live Reload).

#### 1.5 Build de producción (opcional)
```bash
ng build --configuration production
```
- Genera una carpeta `dist/project_prograI_frontend` lista para subir a tu servidor o CDN.

---

### 🔹 2. Rama `first-preview` (sin variables de entorno)

#### 2.1 Clonar la rama
```bash
git clone https://github.com/Deivid-502/project_prograI_frontend.git
```
```bash
cd project_prograI_frontend
```
```bash
git checkout first-preview
```

#### 2.2 Instalar dependencias
```bash
npm install --legacy-peer-deps
```

#### 2.3 Levantar servidor de desarrollo
```bash
ng serve --open
```
- Abre en `http://localhost:4200/`.
- No existe `src/assets/env.js`, por lo que todos los endpoints de la API están “hardcodeados” en los servicios.

#### 2.4 Build de producción (opcional)
```bash
ng build --configuration production
```
- Aquí no hay variables de entorno dinámicas, así que el bundle final tendrá las URLs ya empotradas en el código.

---

## 🔍 ¿Qué Hace Este Proyecto?

- 🤖 **Login Básico**: Pantalla donde puedes “loguearte” con credenciales que luego se procesan de forma insegura.
- ⚠️ **Formularios Vulnerables**:
   - Ejemplo de **SQL Injection** al enviar datos sin limpiar en peticiones al backend.
   - Ejemplo de **DOM Injection/XSS** al mostrar texto ingresado sin escaparlo.
- 🔧 **Servicios de Angular**:
   - En `main`/`web-version`, usan `environment.apiUrl` (obtenido desde `window.__env.API_URL`).
   - En `first-preview`, las URLs están codificadas en `auth.service.ts` (u otros servicios).
- 📋 **Código Comentado**: Cada vulnerabilidad viene con anotaciones que explican el fallo y la forma de mitigarlo.

### Objetivo principal
1. **Demostrar** qué pasa cuando no validas datos en el cliente.
2. **Ver en acción** cómo una cadena maliciosa en SQL o HTML explota la aplicación.
3. **Brindar** ejemplos de buenas y malas prácticas a estudiantes y profesores.

---

## 📂 Estructura del Proyecto

La estructura general es la misma en todas las ramas, salvo la presencia o no de `src/assets/env.js`. Aquí un esquema simplificado:

```
project_prograI_frontend/
├── src/
│   ├── app/
│   │   ├── components/            
│   │   ├── pages/                 
│   │   │   └── login/             
│   │   │       ├── login.component.ts
│   │   │       ├── login.component.html
│   │   │       └── login.component.css
│   │   ├── services/              
│   │   │   └── auth.service.ts     # En first-preview contiene URL hardcodeada
│   │   ├── app-routing.module.ts  
│   │   └── app.module.ts          
│   │
│   ├── assets/
│   │   ├── env.js                  # Sólo existe en main/web-version
│   │   ├── images/                 
│   │   └── styles/                 
│   │
│   ├── environments/
│   │   ├── environment.ts          # Usa window.__env.API_URL
│   │   └── environment.prod.ts     # Usa window.__env.API_URL
│   │
│   ├── favicon.ico                 
│   ├── index.html                  
│   ├── main.ts                     
│   ├── polyfills.ts                # Contiene “import 'zone.js/dist/zone';”
│   ├── styles.css                  
│   └── ...
│
├── angular.json                    
├── package.json                    
├── tsconfig.json                   
├── README.md                       
└── ...
```

> 🔎 En **`first-preview`** observarás que no hay carpeta `src/assets/env.js` ni referencia a `window.__env` en los `environment.ts`. En su lugar, los servicios apuntan directamente a algo como `http://localhost:8080/api/auth/login` (o la ruta que corresponda).

---

## 🚀 Cómo Probar las Vulnerabilidades

1. **SQL Injection**
   - Abre la pantalla de login.
   - En el campo de usuario o contraseña, introduce:

     ```text
     admin' OR '1'='1
     ```

   - Observa la respuesta. Si el backend no filtra correctamente, la consulta se “autoreemplaza” y te “loguea” sin credenciales válidas.

2. **DOM Injection / XSS**
   - Ve a un formulario donde la app muestre texto ingresado (por ejemplo, un campo de comentarios o usuario).
   - Escribe algo como:

     ```html
     <img src=x onerror=alert('XSS')>
     ```

   - Si el código no escapa ese input, verás el `alert('XSS')` explotarse en tu pantalla.

3. **Experimentos Adicionales**
   - Modifica los servicios en `src/app/services`:
      - En `main`/`web-version`, observa cómo usa `environment.apiUrl`.
      - En `first-preview`, edita la URL directa que apunta al backend.
   - Deshabilita validaciones en el cliente (por ejemplo, quita los `Validators` en formularios) y observa cómo reacciona el backend (inseguro).

---

## ✅ Pruebas desde Postman o CURL

> Asegúrate de que el backend esté corriendo en `http://localhost:8080`.

### 🛠 Preparación

1. Inicia el backend (proyecto aparte) con:
   ```bash
   ./mvnw spring-boot:run  # O el comando que corresponda si usas Gradle / desde tu IDE
   ```

2. Verifica en el navegador o con una petición CURL básica:
   ```bash
   curl http://localhost:8080/api/products
   ```
   Deberías obtener un JSON (lista de productos vacía o con datos de ejemplo).

---

### 📑 Endpoints Disponibles

| Método | Endpoint                     | Descripción                              |
|--------|------------------------------|------------------------------------------|
| GET    | `/api/products`              | Obtener todos los productos              |
| GET    | `/api/products/{id}`         | Obtener producto por ID                  |
| POST   | `/api/products`              | Crear un nuevo producto                  |
| PUT    | `/api/products/{id}`         | Actualizar un producto existente         |
| DELETE | `/api/products/{id}`         | Eliminar un producto por ID              |
| POST   | `/api/auth/login`            | Autenticar usuario (login)               |
| POST   | `/api/auth/register`         | Registrar nuevo usuario                  |

---

### 🖥️ Pruebas de Productos

1. **Crear un producto (XSS incluido)**

   - **CURL**:
     ```bash
     curl -X POST http://localhost:8080/api/products        -H "Content-Type: application/json"        -d '{ "name":"TestXSS", "description":"<script>alert(1)</script>", "price":0 }'
     ```

   - **Postman**:
      - Selecciona método `POST`.
      - URL: `http://localhost:8080/api/products`.
      - En Body, elige `raw` y `JSON`, y pega:
        ```json
        {
          "name": "TestXSS",
          "description": "<script>alert(1)</script>",
          "price": 0
        }
        ```

2. **Listar todos los productos**

   - **CURL**:
     ```bash
     curl http://localhost:8080/api/products
     ```

   - **Postman**:
      - Método `GET`.
      - URL: `http://localhost:8080/api/products`.

3. **Obtener producto por ID (p. ej., ID = 1)**

   - **CURL**:
     ```bash
     curl http://localhost:8080/api/products/1
     ```

   - **Postman**:
      - Método `GET`.
      - URL: `http://localhost:8080/api/products/1`.

4. **Editar producto (DOM Injection / HTML)**

   - **CURL**:
     ```bash
     curl -X PUT http://localhost:8080/api/products/1        -H "Content-Type: application/json"        -d '{ "name":"EditedName", "description":"<b>bold text</b>", "price":5 }'
     ```

   - **Postman**:
      - Método `PUT`.
      - URL: `http://localhost:8080/api/products/1`.
      - Body `raw` JSON:
        ```json
        {
          "name": "EditedName",
          "description": "<b>bold text</b>",
          "price": 5
        }
        ```

5. **Borrar producto (SQLi intento en ID)**

   - **CURL**:
     ```bash
     curl -X DELETE http://localhost:8080/api/products/1
     ```

   - **Postman**:
      - Método `DELETE`.
      - URL: `http://localhost:8080/api/products/1`.

6. **Intento de SQL Injection**
   - En un entorno donde el backend forme consultas concatenando strings directamente, algo como:
     ```bash
     curl -X GET http://localhost:8080/api/products/1 OR 1=1
     ```
   - Si la URL concatenara sin parametrizar, devolvería todos los productos o fallaría con un error. Prueba en tu código qué respuesta obtienes.

---

### 🔑 Autenticación (Login / Register)

1. **Registrar nuevo usuario**

   - **CURL**:
     ```bash
     curl -X POST http://localhost:8080/api/auth/register        -H "Content-Type: application/json"        -d '{ "username":"testuser", "password":"SecurePass123" }'
     ```

   - **Postman**:
      - Método `POST`.
      - URL: `http://localhost:8080/api/auth/register`.
      - Body `raw` JSON:
        ```json
        {
          "username": "testuser",
          "password": "SecurePass123"
        }
        ```

2. **Login de usuario**

   - **CURL**:
     ```bash
     curl -X POST http://localhost:8080/api/auth/login        -H "Content-Type: application/json"        -d '{ "username":"testuser", "password":"SecurePass123" }'
     ```

   - **Postman**:
      - Método `POST`.
      - URL: `http://localhost:8080/api/auth/login`.
      - Body `raw` JSON:
        ```json
        {
          "username": "testuser",
          "password": "SecurePass123"
        }
        ```
   - **Respuesta esperada**:
     ```json
     {
       "token": "<JWT_TOKEN>",
       "username": "testuser"
     }
     ```

   - **Probar token**: Después del login exitoso, usa el `token` en peticiones protegidas:
      - **CURL**:
        ```bash
        curl -H "Authorization: Bearer <JWT_TOKEN>" http://localhost:8080/api/products
        ```

---

## 💾 Scripts Útiles (`package.json`)

```jsonc
{
  "scripts": {
    "start": "ng serve",                              // Levanta el dev server
    "build": "ng build",                              // Crea la carpeta dist/
    "build:prod": "ng build --configuration production", // Build optimizado
    "watch": "ng build --watch --configuration development", // Recompila al vuelo
    "test": "ng test",                                // Tests unitarios
    "lint": "ng lint"                                 // Linting de TS/HTML/CSS
  }
}
```

- **Instalar en cualquier rama**:
  ```bash
  npm install --legacy-peer-deps
  ```
- **Levantar servidor de desarrollo**:
  ```bash
  ng serve --open
  ```
- **Build de producción**:
  ```bash
  ng build --configuration production
  ```

---

## 🔍 ¿Por Qué Vale la Pena Revisar Este Frontend?

- 🎓 **Material Educativo** para compañeros y profesores: ejemplos claros de vulnerabilidades web.
- 🛠️ **Código Didáctico**: cada vulnerabilidad está comentada paso a paso.
- 🔓 **Práctica Directa**: rompe validaciones, inyecta payloads y aprende a parchear.
- 🎨 **Angular 17**: utiliza lo último de Angular (componentes, servicios, rutas, interceptores…).

---

## 📈 Siguientes Pasos (Opcional)

1. **Levantar el backend inseguro** (repositorio aparte) para que los endpoints respondan con datos inseguros.
2. **Probar con Postman o Insomnia**:
   - Manda peticiones con payloads maliciosos (SQLi, XSS) y observa la respuesta.
   - Revisa el código fuente para entender cómo falla la validación.
3. **Parchar el código**:
   - En `main`/`web-version`, modifica `environment.ts` (o `env.js`) para apuntar a un backend seguro.
   - En `first-preview`, edita la URL hardcodeada y cambia las consultas a métodos parametrizados o usa librerías de escape.
   - Agrega validaciones en el cliente (Angular `Validators`, sanitización con `DomSanitizer`, etc.) y prácticas seguras en el backend (consultas preparadas, escapado de caracteres).

---
