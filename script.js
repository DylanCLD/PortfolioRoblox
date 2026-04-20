/* ============================================================
   PORTFOLIO — script.js
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    nav_home: "ACCUEIL",
    nav_about: "À PROPOS",
    nav_projects: "PROJETS",
    nav_contact: "CONTACT",
    hero_tag: "STUDIO ROBLOX — SCRIPTING · BUILDS · UI/UX · VFX",
    stat_players: "Joueurs atteints",
    stat_orders: "Commandes livrées",
    stat_assets: "Assets créés",
    about_title: "UN STUDIO ROBLOX COMPLET<br>SCRIPTING, BUILDS, MODÉLISATION<br>& UI/UX — TOUT SOUS UN MÊME TOIT.",
    projects_title: "PROJETS",
    projects_desc: "Chez OLabs, chaque projet est pensé pour Roblox : des scripts optimisés, des maps immersives et des interfaces soignées qui font la différence dans un jeu. On livre du sérieux, à chaque fois.",
    team_title: "L'ÉQUIPE",
    role_snyko: "Developper + VFX",
    role_wolfis: "UI/UX Designer",
    role_byzerma: "Modélisateur 3D",
    contact_title: "CONTACT",
    contact_desc: "Prêt à démarrer un projet avec nous ? Nous prenons toutes les commandes sur notre serveur Discord.",
    contact_btn: "Rejoindre le Discord OLabs",
    footer_rights: "© 2026 OLabs — Tous droits réservés. Ce site et ses contenus sont la propriété de leurs créateurs respectifs. Toute reproduction est interdite sans autorisation préalable."
  },
  en: {
    nav_home: "HOME",
    nav_about: "ABOUT",
    nav_projects: "PROJECTS",
    nav_contact: "CONTACT",
    hero_tag: "ROBLOX STUDIO — SCRIPTING · BUILDS · UI/UX · VFX",
    stat_players: "Players reached",
    stat_orders: "Orders delivered",
    stat_assets: "Assets created",
    about_title: "A COMPLETE ROBLOX STUDIO<br>SCRIPTING, BUILDS, 3D MODELING<br>& UI/UX — ALL UNDER ONE ROOF.",
    projects_title: "PROJECTS",
    projects_desc: "At OLabs, every project is built for Roblox: optimized scripts, immersive maps, and polished interfaces that make a real difference in a game. We deliver quality, every time.",
    team_title: "THE TEAM",
    role_snyko: "Developer + VFX",
    role_wolfis: "UI/UX Designer",
    role_byzerma: "3D Modeler",
    contact_title: "CONTACT",
    contact_desc: "Ready to start a project with us? We take all our orders directly on our Discord server.",
    contact_btn: "Join OLabs Discord",
    footer_rights: "© 2026 OLabs — All rights reserved. This site and its contents are the property of their respective creators. Any reproduction is prohibited without prior authorization."
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  const langFlag = document.getElementById('lang-flag');
  if (langFlag) {
    langFlag.src = lang === 'fr' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/fr.png';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key]; 
    }
  });

  renderProjects();
  
  if (document.body.classList.contains('modal-open') && currentProject) {
    openModal(currentProject.id);
  }
}

const PROJECTS = [
  {
    id: 'vfx-anims',
    title: 'VFX & Animations',
    title_fr: 'VFX & Animations',
    category: 'script',
    categoryLabel: 'VFX & Anims',
    categoryLabel_en: 'VFX & Anims',
    short: 'Effets visuels et animations réalisés avec Moon Animator pour différents projets Roblox.',
    short_en: 'Visual effects and animations made with Moon Animator for various Roblox projects.',
    long: `Collection de VFX et animations créés pour Roblox :\n• Animations de combat et de mouvements\n• Effets de particules custom\n• Transitions et animations UI\n• Réalisé avec Moon Animator 2\n• Optimisé pour les performances`,
    long_en: `Collection of VFX and animations created for Roblox:\n• Combat and movement animations\n• Custom particle effects\n• UI transitions and animations\n• Made with Moon Animator 2\n• Performance optimized`,
    tags: ['VFX', 'Moon Animator 2', 'Particles', 'LuaU', 'TweenService'],
    thumbnail: 'Assets/Project/VFX/image.png',
    youtubeId: 'YC3747LODdM',
    images: [
      'Assets/Project/VFX/image.png',
      'Assets/Project/VFX/image1.png'
    ]
  },
  {
    id: 'portfolio-3d',
    title: 'Portfolio 3D',
    title_fr: 'Portfolio 3D',
    category: 'model',
    categoryLabel: 'Modélisation 3D',
    categoryLabel_en: '3D Modeling',
    short: 'Collection de modèles 3D — armes, armures et assets créés pour Roblox.',
    short_en: 'Collection of 3D models — weapons, armor and assets created for Roblox.',
    long: `Sélection de modèles 3D réalisés pour différents projets :\n• Armure custom\n• Hache de combat\n• Dague\n• Gourdin\n• Sceptre\n• Assets divers`,
    long_en: `Selection of 3D models made for various projects:\n• Custom armor\n• Battle axe\n• Dagger\n• Club\n• Scepter\n• Various assets`,
    tags: ['ZBrush', 'Blender', 'Low-poly', 'Textures', 'Roblox'],
    thumbnail: 'Assets/Project/3d/Armor._Camera_1.png',
    youtubeId: '',
    images: [
      'Assets/Project/3d/Armor._Camera_1.png',
      'Assets/Project/3d/Axe_Camera_1_005.png',
      'Assets/Project/3d/Dague_Camera_1_004.png',
      'Assets/Project/3d/Gourdin_Camera_1.png',
      'Assets/Project/3d/Sceptre._Camera_1.png',
      'Assets/Project/3d/image.png',
      'Assets/Project/3d/image2.png',
      'Assets/Project/3d/image3.png',
      'Assets/Project/3d/image4.png'
    ]
  },
  {
    id: 'portfolio-ui',
    title: 'Portfolio UI/UX',
    title_fr: 'Portfolio UI/UX',
    category: 'uiux',
    categoryLabel: 'UI/UX',
    categoryLabel_en: 'UI/UX',
    short: 'Collection d\'interfaces UI conçues pour différents jeux Roblox.',
    short_en: 'Collection of UI interfaces designed for various Roblox games.',
    long: `Sélection d'interfaces UI/UX réalisées pour différents projets :\n• Menus principaux\n• HUD in-game\n• Systèmes d'inventaire\n• Écrans de progression\n• Interfaces de boutique`,
    long_en: `Selection of UI/UX interfaces made for various projects:\n• Main menus\n• In-game HUD\n• Inventory systems\n• Progression screens\n• Shop interfaces`,
    tags: ['Figma', 'ScreenGui', 'TweenService', 'UI Design', 'Roblox'],
    thumbnail: 'Assets/Project/UI/image.png',
    youtubeId: '',
    images: [
      'Assets/Project/UI/image.png',
      'Assets/Project/UI/image2.png',
      'Assets/Project/UI/image3.png',
      'Assets/Project/UI/image4.png',
      'Assets/Project/UI/image5.png',
      'Assets/Project/UI/image6.png',
      'Assets/Project/UI/image7.png'
    ]
  },
  {
    id: 'anime-maps',
    title: 'Anime World Maps',
    title_fr: 'Cartes Monde Anime',
    category: 'map',
    categoryLabel: 'Maps',
    categoryLabel_en: 'Maps',
    short: '5 cartes inspirées des univers One Piece, DBZ, Bleach, Naruto et Solo Leveling.',
    short_en: '5 maps inspired by One Piece, DBZ, Bleach, Naruto and Solo Leveling universes.',
    long: `5 mondes anime construits pour Anime Treasure Simulator :\n• One Piece — Grand Line\n• Dragon Ball Z — Namek & Terre\n• Bleach — Soul Society\n• Naruto — Village de Konoha\n• Solo Leveling — Donjons & Porte`,
    long_en: `5 anime worlds built for Anime Treasure Simulator:\n• One Piece — Grand Line\n• Dragon Ball Z — Namek & Earth\n• Bleach — Soul Society\n• Naruto — Konoha Village\n• Solo Leveling — Dungeons & Gate`,
    tags: ['Map', 'Anime', 'One Piece', 'DBZ', 'Naruto', 'Bleach', 'Solo Leveling'],
    thumbnail: 'Assets/Project/Map1/image.png',
    youtubeId: '',
    images: [
      'Assets/Project/Map1/image.png',
      'Assets/Project/Map1/image2.png',
      'Assets/Project/Map1/image3.png',
      'Assets/Project/Map1/image4.png',
      'Assets/Project/Map1/image5.png'
    ]
  },
  {
    id: 'anime-factory',
    title: 'Anime Factory',
    title_fr: 'Anime Factory',
    category: 'map',
    categoryLabel: 'Map',
    categoryLabel_en: 'Map',
    short: 'Map AFK pour un jeu de type factory — attendre des box et collecter des héros animé.',
    short_en: 'AFK factory-style map — wait for boxes and collect anime heroes.',
    long: `Map complète pour un jeu AFK factory anime :\n• Zone de production de boxes en idle\n• Système de héros animé à collectionner\n• Ambiance factory industrielle et anime\n• Optimisée pour de nombreux joueurs simultanés`,
    long_en: `Complete map for an anime AFK factory game:\n• Idle box production area\n• Collectable anime hero system\n• Industrial anime factory atmosphere\n• Optimized for many simultaneous players`,
    tags: ['Map', 'AFK', 'Factory', 'Anime', 'Simulator'],
    thumbnail: 'Assets/Project/Maps2/image.png',
    youtubeId: '',
    images: [
      'Assets/Project/Maps2/image.png',
      'Assets/Project/Maps2/image2.png',
      'Assets/Project/Maps2/image3.png',
      'Assets/Project/Maps2/image4.png',
      'Assets/Project/Maps2/image5.png',
      'Assets/Project/Maps2/image6.png'
    ]
  },
  {
    id: 'anime-treasure',
    title: 'Anime Treasure Simulator',
    title_fr: 'Anime Treasure Simulator',
    category: 'script',
    categoryLabel: 'Jeu Complet',
    categoryLabel_en: 'Full Game',
    short: 'Jeu complet — cherche et déterre des trésors, améliore ta base et explore de nouveaux mondes.',
    short_en: 'Full game — search and dig up treasures, upgrade your base and discover new worlds.',
    long: `Un jeu Roblox complet de type simulateur :\n• Système de creusage et détection de trésors\n• Amélioration de base progressive\n• Exploration de nouveaux mondes débloquables\n• Progression et récompenses procédurales\n• Univers anime avec assets custom`,
    long_en: `A complete Roblox simulator game:\n• Digging & treasure detection system\n• Progressive base upgrading\n• Explorable unlockable worlds\n• Procedural progression & rewards\n• Anime universe with custom assets`,
    tags: ['Full Game', 'Simulator', 'LuaU', 'DataStore', 'MoonAnimator2'],
    thumbnail: 'Assets/Project/game1/image.png',
    youtubeId: 'ZYCvFV-1o4s',
    images: [
      'Assets/Project/game1/image.png',
      'Assets/Project/game1/image2.png'
    ]
  },
  {
    id: 'rpg-progression',
    title: 'Modular RPG Progression & UI System',
    title_fr: 'Système Modulaire de Progression RPG & UI',
    category: 'script',
    categoryLabel: 'Script',
    categoryLabel_en: 'Script',
    short: 'Système de progression RPG modulaire avec UI data-binding, réplication réseau et anti-exploit.',
    short_en: 'Modular RPG progression system with UI data-binding, network replication and anti-exploit.',
    long: `Système de progression RPG complet et modulaire :\n• UI data-binding dynamique\n• Optimisation mémoire poussée\n• Anti-exploit côté serveur\n• Réplication réseau optimisée\n• Architecture modulaire réutilisable`,
    long_en: `Complete modular RPG progression system:\n• Dynamic UI data-binding\n• Memory-optimized architecture\n• Server-side anti-exploit\n• Optimized network replication\n• Reusable modular structure`,
    tags: ['UI/Data Binding', 'Memory Optimized', 'Anti-Exploit', 'Network Replication', 'Modular Structure'],
    thumbnail: 'Assets/Project/RpgProgressionUI/image.png',
    youtubeId: 'acuwandB8s0',
    images: ['Assets/Project/RpgProgressionUI/image.png']
  },
  {
    id: 'procedural-dungeon',
    title: 'Seed-Based Procedural Dungeon Engine',
    title_fr: 'Moteur de Donjon Procédural Basé sur Seed',
    category: 'script',
    categoryLabel: 'Script',
    categoryLabel_en: 'Script',
    short: 'Moteur de génération de donjons procédurale basé sur seed avec pathfinding dynamique.',
    short_en: 'Seed-based procedural dungeon generation engine with dynamic pathfinding.',
    long: `Moteur de génération procédurale avancé :\n• Génération basée sur seed reproductible\n• Théorie des graphes pour la structure\n• Object pooling pour les performances\n• Gestion des seeds\n• Pathfinding dynamique`,
    long_en: `Advanced procedural generation engine:\n• Reproducible seed-based generation\n• Graph theory for dungeon structure\n• Object pooling for performance\n• Seed management system\n• Dynamic pathfinding`,
    tags: ['PCG', 'Graph Theory', 'Object Pooling', 'Seed Management', 'Dynamic Pathfinding'],
    thumbnail: 'Assets/Project/Dungeon/image1.png',
    youtubeId: '-PQRMW4v3l8',
    images: ['Assets/Project/Dungeon/image1.png', 'Assets/Project/Dungeon/image2.png']
  },
  {
    id: 'reward-system',
    title: 'Optimized Procedural Reward System',
    title_fr: 'Système de Récompense Procédural Optimisé',
    category: 'script',
    categoryLabel: 'Script',
    categoryLabel_en: 'Script',
    short: 'Système de récompenses procédural optimisé avec animations Moon Animator et effets sonores.',
    short_en: 'Optimized procedural reward system with Moon Animator animations and SFX.',
    long: `Système de récompenses fluide et performant :\n• LuaU optimisé\n• TweenService pour les animations UI\n• Client-authoritative pour la réactivité\n• Intégration MoonAnimator2\n• Effets sonores synchronisés`,
    long_en: `Smooth and performant reward system:\n• Optimized LuaU code\n• TweenService for UI animations\n• Client-authoritative for responsiveness\n• MoonAnimator2 integration\n• Synchronized SFX`,
    tags: ['LuaU', 'TweenService', 'Client-Authoritative', 'MoonAnimator2', 'SFX'],
    thumbnail: 'Assets/Project/Chest/image.png',
    youtubeId: 'Z1YpsINUhv8',
    images: ['Assets/Project/Chest/image.png']
  }
];

/* ============================================================
   RENDU DES CARTES PROJETS
   ============================================================ */

const grid = document.getElementById('projects-grid');

function renderProjects() {
  grid.innerHTML = PROJECTS.map(p => {
    const hasThumb = !!p.thumbnail;
    const media = hasThumb
      ? `<img src="${p.thumbnail}" alt="${escapeHtml(p.title)}" onerror="this.src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80'"/>`
      : `<img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80" alt="Placeholder" style="width:100%;height:100%;object-fit:cover;"/>`;

    const mediaBadge = p.youtubeId
      ? `<div class="media-badge badge-video">▶ Vidéo disponible</div>`
      : (p.images && p.images.length > 1)
        ? `<div class="media-badge badge-gallery">⬡ ${p.images.length} screenshots</div>`
        : '';

    return `
      <article class="laptop-mockup reveal" data-cat="${p.category}" data-id="${p.id}">
        <div class="laptop-screen">
          ${media}
          ${mediaBadge}
        </div>
        <div class="laptop-keyboard"></div>
        <div class="card-pill">
          <span class="pill-cat">${currentLang === 'en' && p.categoryLabel_en ? p.categoryLabel_en : p.categoryLabel}</span>
          <span class="pill-title">${escapeHtml(p.title)}</span>
        </div>
      </article>
    `;
  }).join('');

  // Attach click handlers
  grid.querySelectorAll('.laptop-mockup').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });

  // Re-observe reveals
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
    } else {
      e.target.classList.remove('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   STICKY ACTIONS (DISCORD & LANG)
   ============================================================ */
const stickyActions = document.getElementById('sticky-actions');
if (stickyActions) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      stickyActions.classList.add('floating');
    } else {
      stickyActions.classList.remove('floating');
    }
  });
}

/* ============================================================
   SCROLL DOWN BTN (Hero to Next Section)
   ============================================================ */
const scrollBtn = document.getElementById('scroll-down-btn');
const sections = document.querySelectorAll('section');
if (scrollBtn) {
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let nextSection = null;
    const currentScroll = window.scrollY + window.innerHeight / 2;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > currentScroll) {
            nextSection = sections[i];
            break;
        }
    }
    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }
  });
}

/* ============================================================
   SKILL BARS
   ============================================================ */

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const w = parseFloat(e.target.dataset.w || 0.8) * 100;
      e.target.style.width = w + '%';
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

/* ============================================================
   FILTRE PROJETS
   ============================================================ */

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = f === 'all' || card.dataset.cat === f;
      card.setAttribute('data-hidden', show ? 'false' : 'true');
    });
  });
});

/* ============================================================
   MODAL PROJET (vidéo YouTube + galerie images)
   ============================================================ */

const modal = document.getElementById('project-modal');
const stage = document.getElementById('media-stage');
const thumbs = document.getElementById('media-thumbs');
const modalCat = document.getElementById('modal-cat');
const modalTitle = document.getElementById('modal-title');
const modalSub = document.getElementById('modal-sub');
const modalDesc = document.getElementById('modal-desc');
const modalTags = document.getElementById('modal-tags');

let currentProject = null;
let currentMediaIndex = 0; // 0 = video si présente, sinon première image

/**
 * Construit la liste des médias du projet :
 *   [{ type: 'video', youtubeId }, { type: 'image', src }, ...]
 */
function buildMediaList(project) {
  const list = [];
  if (project.youtubeId) {
    list.push({ type: 'video', youtubeId: project.youtubeId });
  }
  (project.images || []).forEach(src => list.push({ type: 'image', src }));
  return list;
}

function openModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;
  currentProject = project;

  // Header
  modalCat.className = 'project-cat cat-' + project.category;
  modalCat.textContent = currentLang === 'en' && project.categoryLabel_en ? project.categoryLabel_en : project.categoryLabel;
  modalTitle.textContent = project.title;
  modalSub.textContent = currentLang === 'en' && project.short_en ? project.short_en : project.short;
  modalDesc.textContent = currentLang === 'en' && project.long_en ? project.long_en : (project.long || project.short);
  modalTags.innerHTML = project.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');

  // Media list
  const media = buildMediaList(project);
  currentMediaIndex = 0;

  if (media.length === 0) {
    stage.innerHTML = `<div class="media-empty">Aucun média disponible pour ce projet.</div>`;
    thumbs.innerHTML = '';
  } else {
    renderThumbs(media);
    showMedia(media, 0);
  }

  document.body.classList.add('modal-open');
  modal.setAttribute('aria-hidden', 'false');
}

function renderThumbs(media) {
  thumbs.innerHTML = media.map((m, i) => {
    if (m.type === 'video') {
      const ytThumb = `https://img.youtube.com/vi/${m.youtubeId}/mqdefault.jpg`;
      return `
        <div class="thumb" data-index="${i}">
          <img src="${ytThumb}" alt="Vidéo" onerror="this.style.display='none'"/>
          <div class="thumb-video-badge">▶ VIDEO</div>
        </div>`;
    }
    return `
      <div class="thumb" data-index="${i}">
        <img src="${m.src}" alt="Screenshot ${i}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'thumb-video-badge',textContent:'?'}))"/>
      </div>`;
  }).join('');

  thumbs.querySelectorAll('.thumb').forEach(t => {
    t.addEventListener('click', () => {
      const idx = parseInt(t.dataset.index, 10);
      showMedia(media, idx);
    });
  });
}

function showMedia(media, index) {
  currentMediaIndex = index;
  const m = media[index];

  // Highlight active thumb
  thumbs.querySelectorAll('.thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  // Swap stage content
  if (m.type === 'video') {
    stage.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${m.youtubeId}?rel=0&modestbranding=1"
        title="Vidéo du projet"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`;
  } else {
    const fitClass = currentProject && (currentProject.category === 'uiux' || currentProject.id === 'vfx-anims' || currentProject.id === 'portfolio-3d') ? ' fit-contain' : '';
    stage.innerHTML = `<img src="${m.src}" alt="Screenshot" class="${fitClass.trim()}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'media-empty',textContent:'Image introuvable.'}))"/>`;
  }
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  // Stop YouTube playback by clearing iframe
  stage.innerHTML = '';
  thumbs.innerHTML = '';
  currentProject = null;
}

// Close triggers
modal.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-close')) closeModal();
});

// ESC to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();

  // Arrow keys to navigate media
  if (modal.getAttribute('aria-hidden') === 'false' && currentProject) {
    const media = buildMediaList(currentProject);
    if (!media.length) return;
    if (e.key === 'ArrowRight') {
      showMedia(media, (currentMediaIndex + 1) % media.length);
    } else if (e.key === 'ArrowLeft') {
      showMedia(media, (currentMediaIndex - 1 + media.length) % media.length);
    }
  }
});

/* ============================================================
   INIT
   ============================================================ */

const langSwitchBtn = document.getElementById('lang-btn');
if (langSwitchBtn) {
  langSwitchBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });
}

/* ============================================================
   EASTER EGG HERO TITLE (10 Pops -> Explode)
   ============================================================ */
const heroTitle = document.querySelector('.hero-title');
let titleClicks = 0;

if (heroTitle) {
  heroTitle.style.cursor = 'pointer';

  // Lance l'animation d'entrée via une classe, puis la retire proprement
  heroTitle.classList.add('animating-in');
  heroTitle.addEventListener('animationend', (e) => {
    if (e.animationName === 'heroTitleIn') {
      heroTitle.classList.remove('animating-in');
    }
  }, { once: true });

  heroTitle.addEventListener('click', () => {
    // Stop interaction if currently exploded
    if (heroTitle.classList.contains('exploded')) return;
    
    titleClicks++;
    
    if (titleClicks >= 10) {
      heroTitle.classList.remove('pop-anim');
      heroTitle.classList.add('exploded');
      
      setTimeout(() => {
        heroTitle.classList.remove('exploded');
        heroTitle.classList.add('restore-anim');
        titleClicks = 0;
        
        setTimeout(() => heroTitle.classList.remove('restore-anim'), 1000);
      }, 5000);
      
    } else {
      heroTitle.classList.remove('pop-anim');
      // Trigger reflow to restart animation reliably
      void heroTitle.offsetWidth;
      heroTitle.classList.add('pop-anim');
    }
  });
}

// Initialise la langue qui s'attend également à appeler renderProjects()
setLanguage(currentLang);
