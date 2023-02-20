<?php
// Récupère données de notre input type 'file' envoyés
/*$image_file = $_FILES["image"];


// Déplace l'image d'un point temporaire à sa destination prévue
move_uploaded_file(
    // Location temporaire
    $image_file["tmp_name"],

    // Nouvelle destination image, __DIR__ est l'emplacement de ce dossier PHP
    __DIR__ . "/images/" . $image_file["name"]
);*/

























// Get reference to uploaded image
$image_file = $_FILES["image"];

// Exit if image file is zero bytes
if (filesize($image_file["tmp_name"]) <= 0) {
    die('Uploaded file has no contents.');
}

// Exit if is not a valid image file
$image_type = exif_imagetype($image_file["tmp_name"]);
if (!$image_type) {
    die('Uploaded file is not an image.');
}

// Get file extension based on file type, to prepend a dot we pass true as the second parameter
$image_extension = image_type_to_extension($image_type, true);

// Create a unique image name
$image_name = bin2hex(random_bytes(16)) . $image_extension;

// Move the temp image file to the images directory
move_uploaded_file(
    // Temp image location
    $image_file["tmp_name"],

    // New image location
    __DIR__ . "/images/" . $image_name
);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload PHP</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
        <img src="./images/Pancake-Cat.png" alt="Pancake Cat">
        <input type="file" name="image" accept="image/*" />
        <button type="submit">Upload</button>
    </form>
</body>

</html>