<?php
$dsn = 'pgsql:host=localhost;port=5432;dbname=postgres';
$username = 'postgres';
$password = 'qwerty123';

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Optionally, test the connection
    //echo "Connected successfully!";
} catch (PDOException $e) {
    // Handle connection errors
    echo "Connection failed: " . $e->getMessage();
}

?>