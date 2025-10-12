
<?php

if(isset($_POST(['fname'])){
   $name = $_POST['fname'];

	$email = $_POST['email'] ?? '';

echo "Name is: " . htmlspecialchars($fname);
}
?>






