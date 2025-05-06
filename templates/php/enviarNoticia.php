<?php
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "localhost"; // IP del servidor
$user = "root";   // usuario MySQL
$pass = ""; // contraseña MySQL
$db   = "blog";  // nombre de la base de datos

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$titulo = $_POST['titulo'];
$contenido = $_POST['contenido'];

// Seguridad básica
$titulo = $conn->real_escape_string($titulo);
$contenido = $conn->real_escape_string($contenido);

$sql = "INSERT INTO posts (titulo, contenido) VALUES ('$titulo', '$contenido')";

if ($conn->query($sql) === TRUE) {
  echo "Noticia guardada con éxito.";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();

?>
