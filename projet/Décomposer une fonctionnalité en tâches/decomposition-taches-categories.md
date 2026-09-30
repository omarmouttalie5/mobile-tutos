# Décomposition de la fonctionnalité : Gérer les catégories

## 1. Description de la fonctionnalité
**Objectif :** L’administrateur doit pouvoir consulter, ajouter, modifier et supprimer des catégories d'articles sur le Blog.

---

## 2. Plan de travail & Décomposition des tâches

| N° | Libellé de la tâche | Dépendance (Prérequis) |
| :--- | :--- | :--- |
| **Tâche 1** | **Créer le schéma de la base de données :** Créer la table SQL `categories` avec les colonnes `id`, `nom`, `couleur`, `icone` et `created_at`. | *Aucune* |
| **Tâche 2** | **Développer l'API Backend (CRUD) :** Créer les endpoints REST permettant d'obtenir la liste, d'ajouter, de modifier et de supprimer une catégorie. | **Tâche 1** |
| **Tâche 3** | **Construire l'interface utilisateur (HTML/CSS) :** Intégrer la page d'administration contenant le tableau d'affichage des catégories et le formulaire d'ajout/édition. | *Aucune* |
| **Tâche 4** | **Connecter l'interface à l'API (JavaScript/Fetch) :** Consommer les endpoints de l'API pour afficher dynamiquement la liste et traiter les soumissions de formulaire. | **Tâche 2, Tâche 3** |
| **Tâche 5** | **Tester et valider l'ensemble :** Vérifier que chaque action CRUD fonctionne sans erreur, avec gestion des validations et messages de retour. | **Tâche 4** |

---

## 3. Détail et Critères de Validation par Tâche

### Tâche 1 : Schéma de la base de données
* **Action :** Écrire et exécuter le script SQL d'initialisation de la table `categories`.
* **Critère de validation :** La table existe dans la base de données et accepte les insertions manuelles.

### Tâche 2 : API / Endpoints Backend
* **Action :** Implémenter le contrôleur et les modèles pour gérer les méthodes HTTP (`GET`, `POST`, `PUT`, `DELETE`).
* **Critère de validation :** Les requêtes testées (ex: via Postman ou Client REST) renvoient les données au format JSON avec les bons codes de statut (200, 201, 400, 404).

### Tâche 3 : Interface Utilisateur (UI)
* **Action :** Développer la structure HTML et appliquer les styles (Tailwind CSS) pour le tableau et les formulaires.
* **Critère de validation :** La page s'affiche correctement selon la maquette et le formulaire intègre la gestion du masquage/affichage.

### Tâche 4 : Intégration Frontend / Backend
* **Action :** Écrire les fonctions JS (`fetch`) pour effectuer les requêtes asynchrones vers l'API.
* **Critère de validation :** L'ajout ou la suppression d'une catégorie met à jour le tableau dynamiquement sans rechargement de page.

### Tâche 5 : Tests & Validation
* **Action :** Réaliser les tests de bout en bout (End-to-End) sur le scénario complet d'administration.
* **Critère de validation :** Toutes les actions CRUD s'exécutent avec succès et les saisies invalides affichent des messages d'erreur clairs.