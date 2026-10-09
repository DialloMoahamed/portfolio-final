// Catégories : "app" (applications), "site" (sites vitrines / e-commerce), "learn" (apprentissage)
// `demo` n'est renseigné que pour les dépôts statiques (HTML/CSS/JS) : active GitHub Pages
// dans Settings → Pages du dépôt concerné pour que le lien fonctionne.
const GH = "https://github.com/DialloMoahamed";
const PAGES = "https://diallomoahamed.github.io";

export const CATEGORIES = [
  { id: "all",   label: "Tous" },
  { id: "app",   label: "Applications" },
  { id: "site",  label: "Sites web" },
  { id: "learn", label: "Apprentissage" },
];

export const PROJECTS = [
  // ── APPLICATIONS ────────────────────────────────────────────────
  {
    id: 1, category: "app", title: "BTP Compta",
    desc: "Plateforme de gestion comptable pour une entreprise de BTP : tableau de bord, facturation, comptabilité, versements, pointage, bulletins de paie, traçabilité et gestion des rôles.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    color: "#00D9FF", icon: "◈",
    github: `${GH}/Afrimove`,
  },
  {
    id: 26, category: "app", private: true, title: "SIGES",
    desc: "Plateforme SaaS multi-établissements de gestion scolaire : notes et bulletins PDF, absences, frais scolaires et paiements, messagerie, portail parents, visioconférence, mode hors-ligne (PWA) et notifications WhatsApp.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    color: "#1D9874", icon: "◎",
  },
  {
    id: 27, category: "app", private: true, title: "Boutique de charbon",
    desc: "Boutique en ligne pour un vendeur de charbon : catalogue, panier, commandes géolocalisées, avis clients modérés, messagerie interne, et espace d'administration (stocks, clients, équipe, journal d'activité).",
    tags: ["Next.js", "SQLite", "PWA"],
    color: "#FFC107", icon: "◉",
  },
  {
    id: 2, category: "app", title: "HerdTech",
    desc: "Application de gestion d'élevage : cheptel, carte, stockage, suivi, tâches et notifications, avec connexion/inscription et thème clair/sombre.",
    tags: ["HTML", "Bootstrap", "JavaScript"],
    color: "#10B981", icon: "◉",
    github: `${GH}/HerdTech-App`, demo: `${PAGES}/HerdTech-App`,
  },
  {
    id: 3, category: "app", title: "Pharm Inventory",
    desc: "Boutique de pharmacie en ligne : catalogue alimenté par un fichier JSON, fiche produit, panier, et espace administrateur pour gérer produits et paramètres du site.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    color: "#34D399", icon: "✦",
    github: `${GH}/Pharm-Invantor`, demo: `${PAGES}/Pharm-Invantor`,
  },
  {
    id: 4, category: "app", title: "Facturation",
    desc: "Création de devis, factures et acomptes, gestion des clients et des articles, avec calcul automatique des totaux et de la TVA. Données conservées dans le navigateur (localStorage).",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#F59E0B", icon: "◎",
    github: `${GH}/Facturation`, demo: `${PAGES}/Facturation`,
  },
  {
    id: 5, category: "app", title: "Dashboard App",
    desc: "Interface d'administration multi-pages : connexion, utilisateurs, tâches, calendrier, messages et compte.",
    tags: ["HTML", "CSS"],
    color: "#6366F1", icon: "⬡",
    github: `${GH}/Dashboard-App`, demo: `${PAGES}/Dashboard-App`,
  },
  {
    id: 6, category: "app", title: "Stock Manager",
    desc: "Maquette de tableau de bord de gestion de stock (produits électroniques) : analytics, commandes, notifications, rapports et paramètres. Intégration HTML/CSS responsive.",
    tags: ["HTML", "CSS"],
    color: "#22D3EE", icon: "◉",
    github: `${GH}/Stock-Manager`, demo: `${PAGES}/Stock-Manager`,
  },
  {
    id: 7, category: "app", title: "Suivi Journalier",
    desc: "Petit outil de suivi journalier avec résumé des activités, pour planifier et suivre ses journées.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#FB923C", icon: "◎",
    github: `${GH}/Plan-journalier`, demo: `${PAGES}/Plan-journalier`,
  },
  {
    id: 8, category: "app", title: "Budget App",
    desc: "Application de gestion de budget : suivi du budget, des dépenses et du solde restant.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#F43F5E", icon: "⚡",
    github: `${GH}/Budget-app`, demo: `${PAGES}/Budget-app`,
  },

  // ── SITES WEB ───────────────────────────────────────────────────
  {
    id: 9, category: "site", title: "BMS — Boutique Niamey",
    desc: "Site e-commerce pour une boutique de Niamey : présentation des produits, mise en avant des offres et parcours d'achat simple.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "#00D9FF", icon: "◈",
    github: `${GH}/SiteEcommerce`, demo: `${PAGES}/SiteEcommerce`,
  },
  {
    id: 10, category: "site", title: "Woudjoula",
    desc: "Site de restauration autour du goût du terroir : plats, avis clients et livraison par quartier.",
    tags: ["HTML", "CSS"],
    color: "#A855F7", icon: "✦",
    github: `${GH}/Woujdoula`, demo: `${PAGES}/Woujdoula`,
  },
  {
    id: 11, category: "site", title: "Al-Baraka Voyages",
    desc: "Site vitrine d'agence de voyages spécialisée Hadj & Oumra : formules, services, témoignages.",
    tags: ["HTML", "CSS"],
    color: "#F59E0B", icon: "◎",
    github: `${GH}/agence`, demo: `${PAGES}/agence`,
  },
  {
    id: 12, category: "site", title: "Oumra Prestige",
    desc: "Site d'organisation de voyages Oumra : présentation, témoignages de pèlerins, page de réservation et contact.",
    tags: ["HTML", "CSS"],
    color: "#34D399", icon: "◉",
    github: `${GH}/Oumra_Prestige`, demo: `${PAGES}/Oumra_Prestige`,
  },
  {
    id: 13, category: "site", title: "SahelDigital",
    desc: "Site d'agence web à Niamey : services, réalisations et tarifs pensés pour le marché nigérien.",
    tags: ["HTML", "CSS"],
    color: "#6366F1", icon: "⬡",
    github: `${GH}/PortfolioPro`, demo: `${PAGES}/PortfolioPro`,
  },
  {
    id: 14, category: "site", title: "StarNet Wi-Fi",
    desc: "Site d'accès Internet par Wi-Fi (hotspot) avec page d'administration, accompagné d'une étude de budget matériel (Starlink + routeur).",
    tags: ["HTML", "CSS"],
    color: "#22D3EE", icon: "◈",
    github: `${GH}/Wifi_com`, demo: `${PAGES}/Wifi_com`,
  },
  {
    id: 15, category: "site", title: "École coranique",
    desc: "Site de présentation d'une école : projet éducatif, enseignants et approche pédagogique.",
    tags: ["HTML", "CSS"],
    color: "#FB923C", icon: "◎",
    github: `${GH}/ecole`, demo: `${PAGES}/ecole/ecole_coranique.html`,
  },
  {
    id: 16, category: "site", title: "Feane — Restaurant",
    desc: "Intégration d'un site de restaurant multi-pages : accueil, menu, à propos et réservation de table.",
    tags: ["HTML", "CSS"],
    color: "#F43F5E", icon: "⚡",
    github: `${GH}/Feane`, demo: `${PAGES}/Feane`,
  },
  {
    id: 17, category: "site", title: "BookStore",
    desc: "Site de librairie multi-pages : boutique, articles et contact.",
    tags: ["HTML", "CSS"],
    color: "#A855F7", icon: "✦",
    github: `${GH}/BookStore`, demo: `${PAGES}/BookStore`,
  },
  {
    id: 18, category: "site", title: "Prime Tech App",
    desc: "Site vitrine tech construit avec Next.js : header, slider d'images, cartes produits, pages produits et contact.",
    tags: ["Next.js", "TypeScript", "React"],
    color: "#F59E0B", icon: "◈",
    github: `${GH}/Prime_Tech_App`,
  },

  // ── APPRENTISSAGE ───────────────────────────────────────────────
  {
    id: 19, category: "learn", title: "Certification JavaScript",
    desc: "Les 5 projets de la certification freeCodeCamp « JavaScript Algorithms and Data Structures » : Drum Machine, convertisseur Markdown → HTML, système de vote, gestion de compte bancaire et application météo.",
    tags: ["JavaScript", "DOM", "API"],
    color: "#F7DF1E", icon: "⚡",
    github: `${GH}/Javascript_Codeloccol`,
  },
  {
    id: 20, category: "learn", title: "Agritech App",
    desc: "Projet du cursus Codeloccol : connexion, formations et indicateurs agricoles, avec le DOM et le localStorage comme base de données simulée.",
    tags: ["Bootstrap", "JavaScript", "LocalStorage"],
    color: "#6366F1", icon: "⬡",
    github: `${GH}/Bootstrap_Projet1`, demo: `${PAGES}/Bootstrap_Projet1`,
  },
  {
    id: 21, category: "learn", title: "Carbone Emission",
    desc: "Dashboard D3.js des émissions de CO₂ par pays (carte, barres, camembert), réalisé en suivant le projet d'un bootcamp D3 : mon terrain d'entraînement pour la visualisation de données.",
    tags: ["D3.js", "JavaScript", "CSS"],
    color: "#22D3EE", icon: "◈",
    github: `${GH}/Carbone_Emission`, demo: `${PAGES}/Carbone_Emission`,
  },
  {
    id: 22, category: "learn", title: "Conseiller Agricole",
    desc: "Petit outil de conseils agricoles en JavaScript, première approche de la logique métier côté navigateur.",
    tags: ["HTML", "JavaScript"],
    color: "#10B981", icon: "◉",
    github: `${GH}/Conseil_sur_Agriculture`, demo: `${PAGES}/Conseil_sur_Agriculture`,
  },
  {
    id: 23, category: "learn", title: "Jeu de croix",
    desc: "Morpion en React/Next.js et TypeScript, inspiré du tutoriel officiel de React : composants, état, historique des coups.",
    tags: ["Next.js", "TypeScript", "React"],
    color: "#00D9FF", icon: "✦",
    github: `${GH}/Jeu_de_croix`,
  },
  {
    id: 24, category: "learn", title: "Exercices JavaScript",
    desc: "Série d'exercices JavaScript (algorithmes, boucles, tests) pour consolider les bases du langage avant de passer aux projets plus complets.",
    tags: ["JavaScript", "HTML"],
    color: "#F43F5E", icon: "⚡",
    github: `${GH}/Notion_Js`,
  },
  {
    id: 25, category: "learn", title: "Portfolio Bootstrap",
    desc: "Une version précédente de mon portfolio, construite avec Bootstrap : pages à propos, projets, blog et contact.",
    tags: ["HTML", "Bootstrap", "CSS"],
    color: "#A855F7", icon: "⬡",
    github: `${GH}/portfolio_Bootstrap`, demo: `${PAGES}/portfolio_Bootstrap`,
  },
];
