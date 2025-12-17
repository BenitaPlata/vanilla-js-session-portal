# Mindful Sessions – Client-Side Session Portal

Aplicación web desarrollada íntegramente en **JavaScript del lado cliente**, que permite consultar sesiones interactivas, gestionar un carrito persistente y personalizar la experiencia visual del usuario.  
La aplicación se ejecuta directamente en el navegador, **sin backend**, y simula el comportamiento de una pequeña **SPA frontend**.

Este proyecto forma parte de la asignatura **Desarrollo en Entorno Cliente** y ha sido diseñado aplicando buenas prácticas de modularización, manipulación del DOM y gestión de estado en aplicaciones frontend.

---

## 🧘‍♀️ Funcionalidades principales

- 📖 **Consulta de sesiones** cargadas desde un archivo JSON local mediante `fetch`.
- 🔍 **Buscador de sesiones por nombre**, con filtrado dinámico en tiempo real.
- 🛒 **Carrito de sesiones**:
  - Añadir sesiones desde el listado
  - Incrementar y reducir cantidades por sesión
  - Eliminación automática al llegar a cero unidades
  - Vaciar carrito completo
  - Persistencia mediante `localStorage`
- 🎨 **Preferencias de usuario**:
  - Selección de modo visual *Zen* o *Activo*
  - Preferencias guardadas en `localStorage`
  - Cambios visuales dinámicos mediante CSS Variables
- 🧠 **Interfaz dinámica**, sin recarga de página.
- 📦 **Código organizado en módulos ES6** (`import / export`).

---

## 🛠️ Tecnologías utilizadas

- **HTML5** – estructura semántica
- **CSS3**
  - Variables CSS
  - Diseño responsive
  - Transiciones suaves
- **JavaScript (ES6+)**
  - Manipulación avanzada del DOM
  - Módulos ES
  - `fetch` + `async/await`
  - Gestión de estado con `localStorage`

> No se utilizan frameworks ni dependencias externas.

---

## 📁 Estructura del proyecto

proyectoec/
│
├── index.html
├── css/
│ └── styles.css
├── js/
│ ├── main.js # Coordinador principal
│ ├── api.js # Carga de sesiones (fetch)
│ ├── ui.js # Renderizado y gestión del DOM
│ └── carrito.js # Lógica del carrito y localStorage
└── data/
└── sesiones.json # Datos de las sesiones


---

## ▶️ Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir el proyecto con **Live Server** (recomendado VS Code).
3. No es necesario instalar dependencias ni ejecutar comandos.

> ⚠️ El uso de Live Server es necesario para que `fetch` funcione correctamente con archivos locales.

---

## 🌐 Demo online

👉 https://benitaplata.github.io/vanilla-js-session-portal/

---

## 🎓 Objetivos académicos cumplidos

- Uso de JavaScript básico y estructuras de datos
- Manipulación avanzada del DOM
- Consumo de datos mediante `fetch`
- Gestión de estado con `localStorage`
- Modularización del código con ES Modules
- Desarrollo de una interfaz cuidada y coherente

---

## ✨ Autoría

Proyecto desarrollado por **Benita Plata**  
Estudiante de Desarrollo de Aplicaciones Web  

---

## 📌 Posibles mejoras futuras

- Eliminación directa de una sesión completa con un solo clic
- Mostrar un contador de sesiones en la barra superior
- Añadir animaciones suaves adicionales
- Conectar la aplicación con una API pública real
