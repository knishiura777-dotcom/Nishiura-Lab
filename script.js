// --- script.js (Logic Only) ---
// データは translations.js (window.translations) から読み込みます

// 【重要】 HTMLのボタンから呼べるように window.setLanguage にする
window.setLanguage = (lang) => {
  // 1. ボタンの見た目を更新
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent.trim().toLowerCase();
    if (lang === 'ja' && btnText === 'jp') btn.classList.add('active');
    else if (lang === 'en' && btnText === 'en') btn.classList.add('active');
    else if (lang === 'se' && btnText === 'se') btn.classList.add('active');
  });

  // 2. テキストの書き換え
  // translations.js で定義した window.translations を参照
  const allTranslations = window.translations;
  
  if (allTranslations && allTranslations[lang]) {
    const data = allTranslations[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) {
        // HTMLタグを含むデータ(body, list, sub)は innerHTML、それ以外は textContent
        if (key.includes('body') || key.includes('list') || key.includes('sub')) {
          el.innerHTML = data[key];
        } else {
          el.textContent = data[key];
        }
      }
    });
  } else {
    // データが読み込めていない場合のエラー表示
    console.warn('Translation data not found. Check if translations.js is loaded correctly.');
  }

  // 3. HTMLタグの言語設定更新
  document.documentElement.lang = lang;
};

// --- 初期化処理 ---
const initLanguage = () => {
  // translations.js の読み込みを待つ
  if (!window.translations) {
    // まだ読み込まれていなければ、50ms後に再トライ
    setTimeout(initLanguage, 50);
    return;
  }

  const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
  if (browserLang === 'ja') {
    window.setLanguage('ja');
  } else if (browserLang === 'sv') {
    window.setLanguage('se');
  } else {
    window.setLanguage('en');
  }
};

// DOM読み込み完了後に初期化を実行
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    // フッターの年号更新
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// --- UI Logic (ナビゲーション・スクロール) ---

// スクロール時のナビゲーションバー背景切り替え
const nav = document.getElementById('siteNav');
if (nav) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    window.addEventListener('pageshow', onScroll);
    onScroll();
}

// 現在のセクションをハイライト
const sections = ['home','news','about','research','publications','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const links = Array.from(document.querySelectorAll('.nav-links a[data-link]'));

const setActive = (id) => {
  links.forEach(a => a.classList.toggle('active', a.dataset.link === id));
};

if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target && visible.target.id) setActive(visible.target.id);
    }, { root: null, threshold: [0.2, 0.35, 0.5, 0.65] });
    
    sections.forEach(s => observer.observe(s));
}

// フェードインアニメーション
const fades = document.querySelectorAll('.fade-up');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });
fades.forEach(el => fadeObs.observe(el));

// --- ニュース読み込み (JSON) ---
const newsList = document.getElementById('news-list');
if (newsList) {
  fetch('./news.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      const html = data.map(item => `
        <li class="news-item">
          <div class="news-meta">
            <span class="news-date">${item.date}</span>
            <span class="news-cat">${item.category}</span>
          </div>
          <a href="${item.url}" class="news-link" ${item.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            ${item.title}
          </a>
          <span class="news-arrow" aria-hidden="true">&rarr;</span>
        </li>
      `).join('');
      
      newsList.innerHTML = html;
    })
    .catch(err => {
      console.error('News load failed:', err);
      newsList.innerHTML = '<li style="padding:20px; color:#94a3b8; font-size:13px;">News information could not be loaded.</li>';
    });
}