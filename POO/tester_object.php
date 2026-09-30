<?php

require_once "backend/Categorie.php";

$categorie1 = new Categorie(1, "UI/UX", "Blue", "XS");
$categorie2 = new Categorie(2, "Functional programming", "Red", "XO");

$categorie1->setId(3);
$categorie1->setNom("UI/UX Design");
$categorie1->setCouleur("Navy Blue");
$categorie1->setIcone("icon-ui");

$categorie2->setId(4);
$categorie2->setNom("Functional Programming");
$categorie2->setCouleur("Crimson");
$categorie2->setIcone("icon-fp");

// Display updated values
$categorie1->afficher();
$categorie2->afficher();