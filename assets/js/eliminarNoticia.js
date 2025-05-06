function eliminarNoticia(id) {
    if (confirm("¿Seguro que deseas eliminar esta noticia?")) {
      fetch("../blog/templates/php/eliminarNoticia.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `id=${id}`
      })
      .then(response => response.text())
      .then(data => {
        alert(data);
        cargarNoticias(); // Recarga las noticias
      });
    }
  }