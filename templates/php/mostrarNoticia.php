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

$sql = "SELECT * FROM posts ORDER BY fecha DESC";
$result = $conn->query($sql);

$noticias = [];

while ($row = $result->fetch_assoc()) {
  $noticias[] = $row;
}

echo json_encode($noticias);
$conn->close();
?>
