<?php
header('Content-Type: application/json');

echo json_encode([
    'success' => true,
    'message' => 'Catégorie enregistrée avec succès'
]);