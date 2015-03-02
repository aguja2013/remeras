<?php
$nombre = $_POST['nombre'];
$calle = $_POST['calle'];
$piso = $_POST['piso'];
$postal = $_POST['postal'];
$localidad = $_POST['localidad'];
$provincia = $_POST['provincia'];
$email = $_POST['email'];

$para = 'aguja13@hotmail.com';
$titulo = 'Nuevo pedido de remeras';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Calle:\n $calle\n Piso:\n $piso\n Código Postal:\n $postal\n Localidad:\n $localidad\n Provincia:\n $provincia";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.'); 
window.location.href = 'http://revolution.aguja2013.com/pago.html';
</script>";
} else {
echo 'Falló el envio';
}
}
?>