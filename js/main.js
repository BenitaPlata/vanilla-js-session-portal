// ===============================
// Importo módulos
// ===============================

import { cargarSesiones } from "./api.js";
import { mostrarSesiones, mostrarVista } from "./ui.js";
import {
  inicializarCarrito,
  agregarAlCarrito,
  vaciarCarrito,
  sumarSesion,
  restarSesion
} from "./carrito.js";

// ===============================
// Variables globales
// ===============================

let sesionesCargadas = [];

// ===============================
// Cuando el DOM está listo
// ===============================

document.addEventListener("DOMContentLoaded", async () => {

  // ===============================
  // Inicialización
  // ===============================

  inicializarCarrito();

  // ===============================
  // Referencias al DOM
  // ===============================

  const btnVerSesiones = document.querySelector("#btnVerSesiones");
  const btnCarrito = document.querySelector("#btnCarrito");
  const btnPreferencias = document.querySelector("#btnPreferencias");
  const btnVaciarCarrito = document.querySelector("#btnVaciarCarrito");

  const gridSesiones = document.querySelector("#gridSesiones");
  const listaCarrito = document.querySelector("#listaCarrito");
  const inputBuscador = document.querySelector("#buscadorSesiones");

  const formPreferencias = document.querySelector("#formPreferencias");
  const mensajePreferencias = document.querySelector("#mensajePreferencias");
  const indicadorTema = document.querySelector("#indicadorTema");

  // ===============================
  // Navegación entre vistas
  // ===============================

  btnVerSesiones.addEventListener("click", async () => {
    if (sesionesCargadas.length === 0) {
      sesionesCargadas = await cargarSesiones();
    }

    if (inputBuscador) inputBuscador.value = "";

    mostrarSesiones(sesionesCargadas);
    mostrarVista("sesiones");
  });

  btnCarrito.addEventListener("click", () => {
    mostrarVista("carrito");
  });

  btnPreferencias.addEventListener("click", () => {
    mostrarVista("preferencias");
  });

  // ===============================
  // Buscador de sesiones
  // ===============================

  if (inputBuscador) {
    inputBuscador.addEventListener("input", () => {
      const texto = inputBuscador.value.toLowerCase();

      const sesionesFiltradas = sesionesCargadas.filter(sesion =>
        sesion.nombre.toLowerCase().includes(texto)
      );

      mostrarSesiones(sesionesFiltradas);
    });
  }

  // ===============================
  // Añadir sesión al carrito (desde sesiones)
  // ===============================

  gridSesiones.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn[data-id]");
    if (!boton) return;

    const idSesion = Number(boton.dataset.id);

    const sesionSeleccionada = sesionesCargadas.find(
      sesion => sesion.id === idSesion
    );

    if (sesionSeleccionada) {
      agregarAlCarrito(sesionSeleccionada);
    }
  });

  // ===============================
  // Sumar / Restar sesiones desde el carrito
  // ===============================

  listaCarrito.addEventListener("click", (e) => {
    const boton = e.target.closest("button");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    const accion = boton.dataset.accion;

    if (accion === "sumar") sumarSesion(id);
    if (accion === "restar") restarSesion(id);
  });

  // ===============================
  // Vaciar carrito
  // ===============================

  btnVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
  });

  // ===============================
  // Preferencias visuales (Zen / Activo)
  // ===============================

  const temaGuardado = localStorage.getItem("temaVisual");

  if (temaGuardado) {
    document.body.dataset.tema = temaGuardado;

    const inputTema = document.querySelector(
      `input[name="tema"][value="${temaGuardado}"]`
    );
    if (inputTema) inputTema.checked = true;
  } else {
    document.body.dataset.tema = "zen";
  }

  indicadorTema.textContent =
    document.body.dataset.tema === "activo" ? "⚡" : "🌿";

  formPreferencias.addEventListener("submit", (e) => {
    e.preventDefault();

    const temaSeleccionado = document.querySelector(
      'input[name="tema"]:checked'
    ).value;

    localStorage.setItem("temaVisual", temaSeleccionado);
    document.body.dataset.tema = temaSeleccionado;

    indicadorTema.textContent =
      temaSeleccionado === "activo" ? "⚡" : "🌿";

    mensajePreferencias.textContent =
      temaSeleccionado === "activo"
        ? "Modo Activo activado."
        : "Modo Zen activado.";
  });

});
