// Función que carga las sesiones desde el archivo JSON
export const cargarSesiones = async () => {
  try {
    // Petición correcta usando ruta relativa al index.html
    const respuesta = await fetch("./data/sesiones.json");

    // Convierto la respuesta a objeto JavaScript
    const sesiones = await respuesta.json();

    return sesiones;
  } catch (error) {
    console.error("Error al cargar las sesiones:", error);
    return [];
  }
};
