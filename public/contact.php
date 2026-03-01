<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = isset($data["name"]) ? htmlspecialchars(trim($data["name"])) : "";
$email = isset($data["email"]) ? filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL) : "";
$type = isset($data["type"]) ? htmlspecialchars(trim($data["type"])) : "";
$message_body = isset($data["message"]) ? htmlspecialchars(trim($data["message"])) : "";

if (empty($name) || empty($email) || empty($message_body)) {
    http_response_code(400);
    echo json_encode(["message" => "Fields are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid email address."]);
    exit;
}

$to = "pierluigi@vivirito.it";
$subject = "Nuova Richiesta dal Sito Web - $type";

$body = "Hai ricevuto un nuovo messaggio dal form contatti di Gigi il decoratore:\n\n";
$body .= "Dettagli del Mittente:\n";
$body .= "Nome: $name\n";
$body .= "Email: $email\n";
$body .= "Tipo di Lavorazione: $type\n";
$body .= "------------------------\n\n";
$body .= "Messaggio:\n$message_body\n";

$headers = "From: webmaster@vivirito.it\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["message" => "Success"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email."]);
}
?>
