// ===============================
// Estado del carrito
// ===============================

let carrito = [];

// ===============================
// Inicializar carrito desde localStorage
// ===============================

export const inicializarCarrito = () => {
  const carritoGuardado = localStorage.getItem("carrito");

  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
  }

  pintarCarrito();
};

// ===============================
// Guardar carrito
// ===============================

const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// ===============================
// Añadir sesión al carrito
// ===============================

export const agregarAlCarrito = (sesion) => {
  const sesionExistente = carrito.find(item => item.id === sesion.id);

  if (sesionExistente) {
    sesionExistente.cantidad++;
  } else {
    carrito.push({
      ...sesion,
      cantidad: 1
    });
  }

  guardarCarrito();
  pintarCarrito();
};

// ===============================
// Sumar una unidad
// ===============================

export const sumarSesion = (id) => {
  const sesion = carrito.find(item => item.id === id);
  if (sesion) {
    sesion.cantidad++;
    guardarCarrito();
    pintarCarrito();
  }
};

// ===============================
// Restar una unidad
// ===============================

export const restarSesion = (id) => {
  const sesion = carrito.find(item => item.id === id);

  if (!sesion) return;

  sesion.cantidad--;

  if (sesion.cantidad <= 0) {
    carrito = carrito.filter(item => item.id !== id);
  }

  guardarCarrito();
  pintarCarrito();
};

// ===============================
// Vaciar carrito
// ===============================

export const vaciarCarrito = () => {
  carrito = [];
  guardarCarrito();
  pintarCarrito();
};

// ===============================
// Pintar carrito en el DOM
// ===============================

const pintarCarrito = () => {
  const lista = document.querySelector("#listaCarrito");
  const txtUnidades = document.querySelector("#txtUnidades");
  const txtTotal = document.querySelector("#txtTotal");

  lista.innerHTML = "";

  let total = 0;
  let unidades = 0;

  for (const item of carrito) {
    total += item.precio * item.cantidad;
    unidades += item.cantidad;

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.nombre}</strong>
      <div>
        <button class="btn btn-secondary" data-accion="restar" data-id="${item.id}">−</button>
        <span> ${item.cantidad} </span>
        <button class="btn btn-secondary" data-accion="sumar" data-id="${item.id}">+</button>
      </div>
    `;

    lista.appendChild(li);
  }

  txtUnidades.textContent = `${unidades} sesiones`;
  txtTotal.textContent = `${total.toFixed(2)} €`;
};
