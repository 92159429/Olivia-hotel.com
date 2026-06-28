/* Olivia bilingual copy patch. Loaded after site.js before DOMContentLoaded. */
(function(){
  if (!window.OLIVIA_I18N) return;

  window.OLIVIA_I18N['zh-Hant'] = Object.assign(window.OLIVIA_I18N['zh-Hant'] || {}, {
    'home.carousel1.kicker': '主題故事',
    'home.carousel1.title': '抵達與建築',
    'home.carousel2.kicker': '生活氛圍',
    'home.carousel2.title': '餐桌與細節',
    'home.carousel3.kicker': '安靜停留',
    'home.carousel3.title': '房間篇章',
    'conversion.cuisineHook': '有些人，是為了這張餐桌再回來。',
    'cuisine.privateKitchen': 'Olivia Private Kitchen 奧莉薇雅私廚'
  });

  window.OLIVIA_I18N.en = Object.assign(window.OLIVIA_I18N.en || {}, {
    'home.carousel1.kicker': 'Main Story',
    'home.carousel1.title': 'Arrival & Architecture',
    'home.carousel2.kicker': 'Living Atmosphere',
    'home.carousel2.title': 'Table & Details',
    'home.carousel3.kicker': 'Quiet Stay',
    'home.carousel3.title': 'Room Chapters',
    'conversion.cuisineHook': 'Some guests return for this table alone.',
    'cuisine.privateKitchen': 'Olivia Private Kitchen',
    'stories.heroLabel': 'Living Moments',
    'stories.heroTitle': 'About space, and how life finds its place within it.',
    'stories.heroBody': 'Olivia Boutique Hotel was born from a shared vision between a mother and her daughter. Not just a hotel, but a lived expression of everyday life.',
    'stories.originLabel': 'Origin',
    'stories.originTitle': 'An architecture shaped by love and living.',
    'stories.originBody1': 'Olivia began from a simple but profound starting point — a mother creating an ideal living space for her daughter.',
    'stories.originBody2': 'Their imagination of life, beauty, and time was gradually transformed into this building, so that space could be felt rather than merely occupied.',
    'stories.philosophyLabel': 'Philosophy',
    'stories.philosophyTitle': 'Travel is never only a stay.',
    'stories.philosophyBody1': 'At Olivia, travel is never just an overnight stop. It is an extension of living — a way of seeing yourself again through time and space.',
    'stories.philosophyBody2': 'Light, table rituals, scent, texture, and silence are arranged into a rhythm that gently leads you back to life itself.',
    'stories.lifeLabel': 'Life Chapters',
    'stories.lifeTitle': 'Ten emotions, ten ways of living.',
    'stories.lifeBody1': 'Joy, Desire, Adore, Secret, Love, Plato, Truth, Affair, Courage, and Eternity are not room types, but emotional states people have passed through or are still living in.',
    'stories.lifeBody2': 'You are not choosing a room. You are stepping into a version of yourself.',
    'stories.livingLabel': 'Living',
    'stories.livingTitle': 'A slower way of living.',
    'stories.livingBody': 'Here, morning does not begin so much as continue. You wake in light, linger by the table, spend the afternoon with yourself, and let time grow softer.'
  });

  const originalApplyExtra = window.applyExtraI18n;
  window.applyExtraI18n = function(lang){
    if (typeof originalApplyExtra === 'function') originalApplyExtra(lang);
    const activeLang = (window.OLIVIA_I18N[lang] ? lang : 'zh-Hant');
    const dict = window.OLIVIA_I18N[activeLang] || window.OLIVIA_I18N['zh-Hant'];
    const path = (location.pathname.split('/').pop() || 'index.html');
    const setText = function(selector, key, all){
      const nodes = all ? document.querySelectorAll(selector) : [document.querySelector(selector)];
      nodes.forEach(function(node){ if (node && dict[key] != null) node.textContent = dict[key]; });
    };
    const setStoryBodies = function(sectionSelector, key1, key2){
      const nodes = document.querySelectorAll(sectionSelector + ' .story-body');
      if (nodes[0] && dict[key1] != null) nodes[0].textContent = dict[key1];
      if (nodes[1] && dict[key2] != null) nodes[1].textContent = dict[key2];
    };

    if (path === 'index.html' || path === ''){
      setText('.hero-feature-primary .carousel-kicker', 'home.carousel1.kicker');
      setText('.hero-feature-primary .carousel-title', 'home.carousel1.title');
      setText('.hero-feature-secondary .carousel-kicker', 'home.carousel2.kicker');
      setText('.hero-feature-secondary .carousel-title', 'home.carousel2.title');
      setText('.hero-feature-tertiary .carousel-kicker', 'home.carousel3.kicker');
      setText('.hero-feature-tertiary .carousel-title', 'home.carousel3.title');
    }

    if (path === 'stories.html'){
      setText('.cinematic-hero .section-label', 'stories.heroLabel');
      setText('.cinematic-hero h1', 'stories.heroTitle');
      setText('.cinematic-hero .hero-deck', 'stories.heroBody');
      setText('.cinematic-split .story-kicker', 'stories.originLabel');
      setText('.cinematic-split h2', 'stories.originTitle');
      setStoryBodies('.cinematic-split', 'stories.originBody1', 'stories.originBody2');
      setText('.cinematic-centered .story-kicker', 'stories.philosophyLabel');
      setText('.cinematic-centered h2', 'stories.philosophyTitle');
      setStoryBodies('.cinematic-centered', 'stories.philosophyBody1', 'stories.philosophyBody2');
      setText('.cinematic-band .story-kicker', 'stories.lifeLabel');
      setText('.cinematic-band h2', 'stories.lifeTitle');
      setStoryBodies('.cinematic-band', 'stories.lifeBody1', 'stories.lifeBody2');
      setText('.cinematic-mosaic .story-kicker', 'stories.livingLabel');
      setText('.cinematic-mosaic h2', 'stories.livingTitle');
      setText('.cinematic-mosaic .story-body', 'stories.livingBody');
    }

    if (path === 'cuisine.html'){
      setText('.private-kitchen-section .carousel-kicker', 'cuisine.privateKitchen');
      setText('.soft-hook', 'conversion.cuisineHook');
    }
  };
})();
