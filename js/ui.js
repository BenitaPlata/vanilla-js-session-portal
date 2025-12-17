// ===============================
// Referencias a las distintas vistas
// ===============================

const vistaInicio = document.querySelector("#vistaInicio");
const vistaSesiones = document.querySelector("#vistaSesiones");
const vistaCarrito = document.querySelector("#vistaCarrito");
const vistaPreferencias = document.querySelector("#vistaPreferencias");

// ===============================
// Contenedor donde se pintan las sesiones
// ===============================

const gridSesiones = document.querySelector("#gridSesiones");

// ===============================
// Mostrar una vista y ocultar el resto
// ===============================

export const mostrarVista = (vista) => {
  // Oculto todas las vistas
  vistaInicio.hidden = true;
  vistaSesiones.hidden = true;
  vistaCarrito.hidden = true;
  vistaPreferencias.hidden = true;

  // Muestro solo la vista solicitada
  if (vista === "inicio") vistaInicio.hidden = false;
  if (vista === "sesiones") vistaSesiones.hidden = false;
  if (vista === "carrito") vistaCarrito.hidden = false;
  if (vista === "preferencias") vistaPreferencias.hidden = false;
};

// ===============================
// Pintar las sesiones en el DOM
// ===============================

export const mostrarSesiones = (sesiones = []) => {
  // Limpio el contenedor antes de volver a pintar
  gridSesiones.innerHTML = "";

  // Recorro el array de sesiones
  for (const sesion of sesiones) {
    // Creo la tarjeta de la sesión
    const card = document.createElement("article");
    card.className = "product";

    // Inserto el contenido de la tarjeta
    card.innerHTML = `
      <h4>${sesion.nombre}</h4>

      <p class="descripcion">
        ${sesion.descripcion}
      </p>

      <p class="price">${sesion.precio} €</p>

      <button class="btn" data-id="${sesion.id}">
        Añadir al carrito
      </button>
    `;

    // Añado la tarjeta al grid
    gridSesiones.appendChild(card);
  }

  // Si no hay sesiones (por ejemplo, tras una búsqueda)
  if (sesiones.length === 0) {
    gridSesiones.innerHTML = `
      <p class="descripcion">
        No se han encontrado sesiones con ese nombre.
      </p>
    `;
  }
};
