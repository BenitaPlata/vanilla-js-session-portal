# Mindful Sessions – Portal de Sesiones Interactivas de Supra Consciencia

Aplicación web desarrollada íntegramente en **JavaScript del lado cliente**, que permite consultar sesiones espirituales, gestionar un carrito persistente y personalizar la experiencia visual del usuario, todo ello **sin backend** y ejecutándose directamente en el navegador.

Este proyecto forma parte de la asignatura **Desarrollo en Entorno Cliente**, y ha sido diseñado siguiendo buenas prácticas de modularización, manipulación del DOM y gestión de estado en aplicaciones frontend.

---

## 🧘‍♀️ Funcionalidades principales

- 📖 **Consulta de sesiones espirituales** cargadas desde un archivo JSON local mediante `fetch`.
- 🔍 **Buscador de sesiones por nombre**, con filtrado dinámico en tiempo real.
- 🛒 **Carrito espiritual**:
  - Añadir sesiones
  - Acumular cantidades
  - Vaciar carrito
  - Persistencia mediante `localStorage`
- 🎨 **Preferencias de usuario**:
  - Selección de modo visual *Zen* o *Activo*
  - Preferencia guardada en `localStorage`
  - Cambio visual dinámico con CSS Variables
- 🧠 **Interfaz dinámica**, sin recargas de página.
- 📦 **Código dividido en módulos ES6** (`import / export`).

---

## 🛠️ Tecnologías utilizadas

- **HTML5** – estructura semántica
- **CSS3** – diseño visual, variables CSS y transiciones
- **JavaScript (ES6+)**
  - Manipulación avanzada del DOM
  - Módulos ES
  - `fetch` + `async/await`
  - `localStorage`

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
│ ├── ui.js # Renderizado del DOM
│ └── carrito.js # Gestión del carrito y localStorage
└── data/
└── sesiones.json # Datos de las sesiones


---

## ▶️ Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir el proyecto con **Live Server** (VS Code recomendado).
3. No es necesario instalar dependencias ni ejecutar comandos.

> ⚠️ El uso de Live Server es necesario para que `fetch` funcione correctamente.

---

## 🎓 Objetivos académicos cumplidos

- JavaScript básico y estructuras de datos
- Manipulación avanzada del DOM
- Consumo de datos mediante `fetch`
- Gestión de estado con `localStorage`
- Modularización con ES Modules
- Interfaz cuidada y experiencia de usuario coherente

---

## ✨ Autoría

Proyecto desarrollado por Benita Plata 
Estudiante de Desarrollo de Aplicaciones Web  

---

## 📌 Posibles mejoras futuras

- Eliminar sesiones individuales del carrito
- Mostrar contador de sesiones en la barra superior
- Añadir animaciones suaves adicionales
- Conectar con una API real

---

