// Función que carga las sesiones desde el archivo JSON
export const cargarSesiones = async () => {
  try {
    // Hago la petición al archivo local JSON
    const respuesta = await fetch("../data/sesiones.json");

    // Convierto la respuesta a un objeto JavaScript
    const sesiones = await respuesta.json();

    // Devuelvo las sesiones al módulo que las necesite
    return sesiones;

  } catch (error) {
    console.error("Error al cargar las sesiones:", error);
    return [];
  }
};
