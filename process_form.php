<?php
// Database credentials
$host = 'localhost';
$dbname = 'contactdb';
$username = 'root'; // Replace with your MySQL username
$password = '';     // Replace with your MySQL password

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate inputs
    if (!empty($name) && !empty($email) && !empty($message)) {
        try {
            // Connect to the database
            $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Insert data into the database
            $sql = "INSERT INTO messages (name, email, message) VALUES (:name, :email, :message)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':name' => $name,
                ':email' => $email,
                ':message' => $message,
            ]);

            // Return a JSON response for success
            echo json_encode(["status" => "success", "message" => "Thank you for your message, $name!"]);
        } catch (PDOException $e) {
            // Return a JSON response for error
            echo json_encode(["status" => "error", "message" => "Error: " . $e->getMessage()]);
        }
    } else {
        // Return a JSON response for missing fields
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
    }
} else {
    // Return a JSON response for invalid request
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
