# TechServices - Site de Services Techniques et Certifications

Site web moderne inspiré de DEKRA, développé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

### Pages principales
- **Accueil** : Bannière hero, présentation des services, témoignages clients et statistiques
- **Services** : Liste complète des services avec filtres par catégorie (Certifications, Inspections, Tests, Formations, Conseil)
- **Solutions** : Solutions sectorielles adaptées (Automobile, Industrie, BTP, Logistique, International, Énergie)
- **À propos** : Histoire de l'entreprise, valeurs, équipe et accréditations
- **Contact** : Formulaire de contact avec validation, informations de contact et FAQ
- **Espace Client** : Espace sécurisé avec authentification pour gérer dossiers et certificats

### Composants UI
- Boutons personnalisés (primary, secondary, outline)
- Cards avec effet hover
- Inputs, TextArea et Select avec gestion d'erreurs
- Navigation responsive avec menu déroulant
- Footer complet avec liens et informations

### Fonctionnalités techniques
- Routing avec React Router DOM
- Contexte d'authentification (AuthContext)
- Filtrage dynamique des services
- Formulaire de contact avec validation complète
- Design responsive (mobile-first)
- Palette de couleurs inspirée de DEKRA (vert #006b52)

## Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server
- **React Router DOM** - Navigation
- **Tailwind CSS v3** - Framework CSS utility-first
- **Lucide React** - Icônes

## Installation et démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances
```bash
cd dekra-services
npm install
```

### Démarrage du serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```

Le build sera généré dans le dossier `dist/`

### Prévisualisation du build
```bash
npm run preview
```

## Structure du projet

```
dekra-services/
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── TextArea.tsx
│   ├── context/          # Contextes React
│   │   └── AuthContext.tsx
│   ├── layouts/          # Layouts de pages
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   └── Navbar.tsx
│   ├── pages/            # Pages de l'application
│   │   ├── About.tsx
│   │   ├── ClientSpace.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   └── Solutions.tsx
│   ├── types/            # Types TypeScript
│   │   └── index.ts
│   ├── utils/            # Utilitaires
│   ├── App.tsx           # Composant principal avec routing
│   ├── main.tsx          # Point d'entrée
│   └── index.css         # Styles Tailwind
├── public/               # Assets statiques
├── dist/                 # Build de production
├── tailwind.config.js    # Configuration Tailwind
├── postcss.config.js     # Configuration PostCSS
├── tsconfig.json         # Configuration TypeScript
├── vite.config.ts        # Configuration Vite
└── package.json
```

## Espace Client - Compte de démonstration

Pour tester l'espace client, utilisez :
- **Email** : demo@example.com
- **Mot de passe** : 123456 (minimum 6 caractères)

## Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js`. La palette primaire est basée sur le vert DEKRA :
- Primary 700: #006b52 (couleur principale DEKRA)
- Primary 600: #008c74
- Primary 500: #00af91

Pour modifier les couleurs, éditez le fichier `tailwind.config.js`.

### Contenu
Les données (services, solutions, témoignages) sont actuellement statiques dans les composants. Pour une version production, connectez ces données à une API ou un CMS.

## Fonctionnalités implémentées

### Navigation
- Menu responsive avec hamburger sur mobile
- Menu déroulant pour les services
- Navigation sticky
- Liens actifs

### Authentification
- Système de connexion simple
- Persistance avec localStorage
- Protection des routes (espace client)
- Déconnexion

### Formulaires
- Validation complète des champs
- Messages d'erreur personnalisés
- Gestion des états (loading, success, error)
- Format email et téléphone

### Design
- Design moderne et professionnel
- Responsive (mobile, tablet, desktop)
- Animations et transitions
- Effets hover
- Dégradés de couleurs

## Améliorations futures possibles

- Connexion à une vraie API backend
- Système d'authentification JWT
- Upload de documents dans l'espace client
- Système de notifications
- Multi-langue (i18n)
- Dark mode
- Amélioration de l'accessibilité (ARIA)
- Tests unitaires et e2e (Jest, React Testing Library)
- Animation et transitions avancées (Framer Motion)
- SEO optimization
- PWA (Progressive Web App)
- Lazy loading des images
- Skeleton loaders

## Scripts disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer un build de production
npm run preview  # Prévisualiser le build de production
npm run lint     # Linter le code avec ESLint
```

## Résolution des problèmes

### Le build échoue
Si vous rencontrez des erreurs lors du build, assurez-vous d'avoir installé les bonnes versions des dépendances :
- Tailwind CSS v3.4.x (pas v4)
- React Router DOM v6
- Node.js v16+

### Les styles ne s'appliquent pas
Vérifiez que le fichier `postcss.config.js` contient bien la configuration Tailwind CSS.

## Licence

Ce projet est un prototype de démonstration créé à des fins éducatives.

## Auteur

Créé avec React + TypeScript + Vite + Tailwind CSS
