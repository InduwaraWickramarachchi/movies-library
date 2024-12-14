<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header(
    "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
);

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    if (
        empty($data["firstname"]) ||
        empty($data["lastname"]) ||
        empty($data["email"]) ||
        empty($data["message"])
    ) {
        echo json_encode([
            "success" => false,
            "message" => "First Name, Last Name, Email are required!",
        ]);
        exit();
    }

    $jsonFile = "form-data.json";
    $existingData = [];

    if (file_exists($jsonFile)) {
        $existingContent = file_get_contents($jsonFile);
        $existingData = json_decode($existingContent, true);
        if (!is_array($existingData)) {
            $existingData = [];
        }
    }

    $existingData[] = $data;

    if (
        file_put_contents(
            $jsonFile,
            json_encode($existingData, JSON_PRETTY_PRINT)
        )
    ) {
        echo json_encode([
            "success" => true,
            "message" => "Form saved successfully!",
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to save the form data!",
        ]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
}
?>
