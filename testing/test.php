<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Dummy validation for example purpose
    if ($email == "user@example.com" && $password == "password") {
        echo "Login successful!";
    } else {
        echo "Invalid email or password.";
    }
}
?>
