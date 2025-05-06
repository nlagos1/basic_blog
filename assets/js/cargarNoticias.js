async function cargarNoticias() {
  const contenedor = document.getElementById("noticiasContainer");
  if (!contenedor) return;

  try {
    const response = await fetch("../blog/templates/php/mostrarNoticia.php");
    const noticias = await response.json();

    contenedor.innerHTML = ""; // Limpia el contenedor

    if (noticias.length === 0) {
      contenedor.innerHTML = `<p class="text-muted">No hay noticias disponibles.</p>`;
      return;
    }

    noticias.forEach(noticia => {
      const noticiaHTML = `
        <div class="col-md-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">${noticia.titulo}</h3>
              <p class="card-text">${noticia.contenido}</p>
              <button class="btn btn-danger btn-sm" onclick="eliminarNoticia(${noticia.id})">Eliminar</button>
            </div>
          </div>
        </div>
      `;
      contenedor.innerHTML += noticiaHTML;
    });

  } catch (error) {
    console.error("Error al cargar noticias:", error);
    contenedor.innerHTML = `<p class="text-danger">Error al cargar las noticias.</p>`;
  }
}

// Cargar noticias al cargar la página
document.addEventListener("DOMContentLoaded", cargarNoticias);
