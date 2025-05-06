<?php
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$host = "localhost"; // IP del servidor
$user = "root";   //  usuario MySQL
$pass = ""; // contraseña MySQL
$db   = "blog"; 

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
  die("Conexión fallida: " . $conn->connect_error);
}

$id = intval($_POST['id']);
$sql = "DELETE FROM posts WHERE id = $id";

if ($conn->query($sql) === TRUE) {
  echo "Noticia eliminada";
} else {
  echo "Error: " . $conn->error;
}

$conn->close();
?>