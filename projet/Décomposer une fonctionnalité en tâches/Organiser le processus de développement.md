### Organiser le processus de développement

| Phase | Étape | Objectif & Description | Livrables clés | Critère de succès |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Cadrer** | Comprendre le besoin métier et définir le périmètre des fonctionnalités (ajout, affichage, modification, suppression). | Spécifications fonctionnelles & Règles de gestion | Le besoin du CRUD des catégories est clairement défini et validé. |
| **02** | **Concevoir** | Modéliser la base de données, structurer les formulaires et concevoir l'architecture de l'API REST. | Schéma de BDD (`categories`: `id`, `nom`, `couleur`...) & Maquettes UI | La structure des données et le contrat d'API sont prêts. |
| **03** | **Développer** | Créer la table SQL, développer l'API REST (`GET`, `POST`, `PUT`, `DELETE`) et intégrer le formulaire HTML/JS avec pré-validation. | Code source complet (Frontend + API + Fichier `.sql`) | L'interface et l'API interagissent sans erreur. |
| **04** | **Tester** | Vérifier le bon fonctionnement de toutes les opérations CRUD et répertorier les bugs éventuels. | Rapport de tests & Cahier de bugs (Journal d'erreurs) | 0 bug critique restant, toutes les fonctionnalités réagissent comme prévu. |
| **05** | **Valider** | Contrôler la conformité finale par rapport aux exigences initiales et valider le déploiement. | Fiche de recette finale & Validation client/lead | La fonctionnalité est conforme au cahier des charges et prête pour la production. |