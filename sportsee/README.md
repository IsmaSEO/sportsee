# Projet React : SportSee - Tableau de bord d'analyse avec React

## Description

P12 de la formation Développeur d'application Javascript React | OpenClassrooms.

### Objectif du projet

Le but est de créer la page de profil d'un utilisateur en utilisant des maquettes fournies : [Maquettes Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1).

Les tâches sont organisées en Kanban selon des User Stories : [Kanban Notion](https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e).

Le backend est disponible ici : [Backend GitHub](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

---

## Outils et Contraintes Techniques

### Outils standards

- **Create React App**
- **React Router**
- **Styling** : CSS
- **Recharts.js** : Librairie de graphiques

### Contraintes techniques

#### React

- Découpage en composants modulaires et réutilisables (un composant par fichier).
- Structure logique des fichiers et utilisation des props et du state au besoin.
- Gestion des événements.
- Externalisation des appels API en dehors des composants.
- Standardisation des données provenant de l'API.
- Utilisation recommandée (non obligatoire) des composants fonctionnels.

#### React Router

- Gestion des paramètres de route avec React Router.
- Une page par route, avec une page 404 pour les routes inexistantes ou si une valeur dans l'URL est absente des données.
- Logique du routeur centralisée dans un seul fichier.

---

## Scripts Disponibles

Pour démarrer le projet, vous pouvez utiliser :

```bash
npm start
```

Lance l'application en mode développement. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le rendu. La page se rechargera automatiquement lors de modifications, et vous verrez également les éventuelles erreurs de linter dans la console.

```bash
npm test
```

Lance les tests en mode interactif "watch".

```bash
npm run build
```

Construit l'application pour la production dans le dossier `build`. React est correctement packagé en mode production et optimisé pour de meilleures performances. Les fichiers sont minimisés, et les noms de fichiers contiennent des hash uniques.

```bash
npm run eject
```

> **Note** : Cette opération est irréversible. Elle copie toutes les dépendances de configuration (Webpack, Babel, ESLint, etc.) directement dans votre projet, vous permettant d'avoir un contrôle total. Utilisez-la uniquement si vous avez besoin de personnaliser la configuration avancée du projet.

---

## Informations supplémentaires

Pour plus d’informations sur le déploiement, les tests ou la configuration, consultez la documentation officielle de Create React App.

---
