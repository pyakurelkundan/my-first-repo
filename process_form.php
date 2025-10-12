<?php
$fname = $_POST['fname'] ?? '';
$email = $_POST['email'] ?? '';
echo "Name is: " . htmlspecialchars($fname);
?>
