
<?php
if (isset($_POST['fname'])) {
    $fname = $_POST['fname'];
} else {
    $fname = '';
}

$email = $_POST['email'] ?? '';

echo "Name is: " . htmlspecialchars($fname);
?>






