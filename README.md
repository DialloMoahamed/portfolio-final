<div align="center">

# ✦ Mohamed Attahir Diallo — Portfolio

**Développeur Frontend** · Niamey, Niger

[![Live Demo](https://img.shields.io/badge/Live_Demo-00D9FF?style=for-the-badge&logo=vercel&logoColor=black)](https://mohamedattahir.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DialloMoahamed)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohamedattahirdiallo@gmail.com)

</div>

---

## 📋 À propos

Portfolio personnel développé avec **React + Vite**, présentant mes projets, compétences et coordonnées. Conçu avec une attention particulière au design, aux animations et à l'expérience utilisateur.

---

## ✨ Fonctionnalités

- 🌙 **Mode sombre / clair** — thème sauvegardé dans le navigateur
- 🖱️ **Cursor personnalisé** — point + anneau avec effet d'inertie
- ⏳ **Loader d'entrée** — animation `<MA/>` au chargement de la page
- 📊 **Barre de progression** — scroll progress en haut de page
- 📬 **Formulaire de contact** — intégration EmailJS, validation complète
- 📄 **Téléchargement CV** — bouton direct vers le PDF
- 🗺️ **Page 404 personnalisée** — effet glitch + redirection automatique
- 📱 **Responsive** — adapté mobile, tablette et desktop
- 🔍 **SEO + Open Graph** — meta tags, Twitter Card, favicon personnalisé

---

## 🛠️ Stack technique

| Catégorie   | Technologies                              |
| ------------ | ----------------------------------------- |
| Framework    | React 19, Vite                            |
| Routing      | React Router v7                           |
| Styles       | CSS custom properties, animations natives |
| Email        | EmailJS                                   |
| Déploiement | Vercel / Netlify                          |

---

## 🚀 Lancer le projet en local

```bash
# 1. Cloner le dépôt
git clone https://github.com/DialloMoahamed/portfolio-final.git
cd portfolio-final

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173`

---

## ⚙️ Configuration EmailJS

Pour activer le formulaire de contact, ouvre `src/sections/Contact.jsx` et renseigne tes clés :

```js
const EMAILJS_SERVICE_ID  = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "k1hodw9";
const EMAILJS_PUBLIC_KEY  = "W0QvLbGOavk1E1P2c";
```

Crée un compte gratuit sur [emailjs.com](https://www.emailjs.com/) si ce n'est pas encore fait.

---

## 📁 Structure du projet

```
portfolio-final/
├── public/
│   ├── favicon.svg         # Favicon avec initiales MA
│   ├── og-image.png        # Image Open Graph (1200×630)
│   └── CV.pdf              # ← Ajoute ton CV ici
├── src/
│   ├── components/
│   │   ├── Cursor.jsx      # Curseur personnalisé
│   │   ├── Loader.jsx      # Animation d'entrée
│   │   ├── Nav.jsx         # Navigation + toggle thème
│   │   ├── ProjectCard.jsx # Carte projet avec lien GitHub
│   │   └── ScrollProgress.jsx
│   ├── data/
│   │   ├── projects.js     # ← Tes projets ici
│   │   └── skills.js       # ← Tes compétences ici
│   ├── hooks/
│   │   └── useTheme.js     # Gestion dark/light mode
│   ├── pages/
│   │   └── NotFound.jsx    # Page 404
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
└── index.html              # Meta tags + EmailJS CDN
```

---

## 📦 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualiser le build
```

---

## 🌍 Déploiement

### Vercel (recommandé)

```bash
npm install -g vercel
vercel
```

### Netlify

Connecte ton repo GitHub sur [netlify.com](https://netlify.com), build command : `npm run build`, publish directory : `dist`.

---

<div align="center">

Fait avec ❤️ par **Mohamed Attahir Diallo** · [github.com/DialloMoahamed](https://github.com/DialloMoahamed)

</div>
