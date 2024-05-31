<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start output buffering to prevent issues with header redirection
ob_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $purpose = $_POST['test'];

    // Process form data (e.g., save to database)
    // For demonstration, we'll just simulate processing with a sleep function
    sleep(1); // Simulate processing time

    // Redirect to registrationForm.html after processing
    header("Location: registrationForm.html");
    exit();
} else {
    // If the form was not submitted via POST, redirect back to the form
    header("Location: form.html");
    exit();
}

// Flush the output buffer and turn off output buffering
ob_end_flush();
?>
