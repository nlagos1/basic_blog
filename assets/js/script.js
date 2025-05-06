document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("noticiaForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const titulo = form.titulo.value.trim();
    const contenido = form.contenido.value.trim();

    // Validación
    if (!titulo || !contenido) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (titulo.length < 5 || titulo.length > 100) {
      alert("El título debe tener entre 5 y 100 caracteres.");
      return;
    }

    if (contenido.length < 20 || contenido.length > 1000) {
      alert("El contenido debe tener entre 20 y 1000 caracteres.");
      return;
    }

    try {
      const response = await fetch("../blog/templates/php/enviarNoticia.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ titulo, contenido })
      });

      const result = await response.text();
      alert(result);
      form.reset();

      // Recargar el feed automáticamente
      if (typeof cargarNoticias === "function") {
        cargarNoticias();
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al guardar la noticia.");
    }
  });
});
