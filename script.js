// --- Translation Data ---
const translations = {
  ja: {
    lab_name_short: "Nishiura Lab.",
    univ_name_short: "Miyagi Gakuin Women's Univ.",
    nav_home: "home",
    nav_news: "news",
    nav_about: "about",
    nav_research: "research",
    nav_publications: "publications",
    nav_contact: "contact",
    location: "Sendai, Japan",
    hero_h1_1: "Learning",
    hero_h1_2: "Design",
    hero_sub: "& Psychology",
    hero_desc_strong: "Kazuki Nishiura Laboratory",
    hero_desc_text: "explores the intersection of Technology, Mind, and Creativity.",
    // 修正: 最新の定義文に更新
    hero_desc_sub: "西浦研究室は、教育心理学とICTを融合し、<br>学習・創造性・ウェルビーイングを科学的に探究する研究室です。",
    scroll_down: "SCROLL DOWN",
    news_title: "News & Topics",
    news_caption: "最新情報",
    about_kicker: "About Professor",
    about_head: "ウェルビーイングと教育心理学の架け橋",
    about_body: `宮城学院女子大学 教育学部 教育学科 教授。<br>
      専門は教育心理学、健康心理学、教育工学。私たちは、単に知識を伝達するだけでなく、学習者一人ひとりの内発的な動機づけ（Motivation）と創造性（Creativity）をいかに引き出すかを問い続けています。<br><br>
      北欧スウェーデンのウェルビーイングと最新のICT技術を融合させ、心理学を基盤とした新しい学びの生態系をデザインすること。それが私たちのミッションです。`,
    about_bg_title: "Background",
    about_bg_list: `
      <li>博士（心理学）</li>
      <li>宮城学院女子大学 教育学部 教授</li>
      <li>ストックホルム商科大学 客員教授</li>`,
    about_aff_title: "Affiliations",
    about_aff_list: `
      <li>日本心理学会</li>
      <li>日本教育心理学会</li>
      <li>日本教育工学会 (JSET)</li>`,
    research_title: "Research Areas",
    research_caption: "Core Focus & Methodology",
    res_1_title: "Educational Technology",
    res_1_text: "独自開発の『Web心理学実験プラットフォーム』にて、ストループ効果など10の実験プログラムを無料公開中。ICTがいかに学習者の理解と関心を深めるかを実証的に研究しています。",
    view_experiments: "View Experiments",
    view_creativity: "View Creativity", 
    view_wellbeing: "View Well-being",
    res_2_title: "Creativity & Learning",
    res_2_text: "創造性は脳内だけのプロセスではありません。テクノロジー、身体性、認知メカニズムの交差点から、人間の創造的振る舞いを科学的に解明し、拡張することを目指しています。",
    res_3_title: "Well-being & Psychology",
    res_3_text: "CWWHやアウトドア教育の観点から、人間の「ウェルビーイング」を科学的に探求。北欧の知見と最新のセンシング技術を掛け合わせ、教育とケアの現場に新たな価値を創造します。",
    pub_kicker: "Archive",
    pub_title: "Selected Publications",
    pub_1_title: "脳と学習ー未来の学校に必要な知識",
    pub_1_source: "宮城学院女子大学西浦研究室 (編訳)",
    pub_2_title: "森のこども園の誕生、現在、そして未来",
    pub_2_source: "宮城学院女子大学附属発達科学研究所",
    pub_3_title: "北欧スウェーデン発 森の教室－生きる知恵と喜びを生み出すアウトドア教育",
    pub_3_source: "北大路書房",
    pub_4_title: "青年期女性の食行動異常に関する心理学的研究",
    pub_4_source: "岩手大学教育学部附属教育実践総合センター研究紀要",
    role_edit_trans: "編訳",
    role_coauthor: "共著",
    role_cotrans: "共訳",
    view_researchmap: "View all on Researchmap",
    contact_title: "Let's Connect",
    contact_text: "研究に関するお問い合わせ、大学院進学のご相談はメールにて受け付けています。教育とテクノロジーの未来について語り合いましょう。",
    univ_name: "Miyagi Gakuin Women's University",
    faculty_name: "Faculty of Education",
    address: "9-1-1 Sakuragaoka, Aoba-ku, Sendai, Miyagi 981-8557",
    univ_site: "University Site",
    privacy: "Privacy Policy"
  },
  en: {
    lab_name_short: "Nishiura Lab.",
    univ_name_short: "Miyagi Gakuin Women's Univ.",
    nav_home: "home",
    nav_news: "news",
    nav_about: "about",
    nav_research: "research",
    nav_publications: "publications",
    nav_contact: "contact",
    location: "Sendai, Japan",
    hero_h1_1: "Learning",
    hero_h1_2: "Design",
    hero_sub: "& Psychology",
    hero_desc_strong: "Kazuki Nishiura Laboratory",
    hero_desc_text: "explores the intersection of Technology, Mind, and Creativity.",
    // 修正: 日本語に合わせて英訳を更新（所属名だけでなく定義文へ）
    hero_desc_sub: "Fusing Educational Psychology and ICT to scientifically explore<br>Learning, Creativity, and Well-being.",
    scroll_down: "SCROLL DOWN",
    news_title: "News & Topics",
    news_caption: "Latest Updates",
    about_kicker: "About Professor",
    about_head: "Bridging Education and Psychology",
    about_body: `Professor, Faculty of Education, Miyagi Gakuin Women's University.<br>
      Specializing in Educational Psychology, Health Psychology, and Educational Technology. We continuously ask not only how to transmit knowledge, but how to elicit intrinsic Motivation and Creativity from each learner.<br><br>
      Our mission is to design a new ecosystem of learning based on psychology, fusing Nordic/Swedish well-being with the latest ICT technology.`,
    about_bg_title: "Background",
    about_bg_list: `
      <li>Ph.D. in Psychology</li>
      <li>Professor, Miyagi Gakuin Women's Univ.</li>
      <li>Visiting Professor, Stockholm School of Economics</li>`,
    about_aff_title: "Affiliations",
    about_aff_list: `
      <li>Japanese Psychological Association</li>
      <li>Jpn. Assoc. of Educational Psychology</li>
      <li>Jpn. Soc. for Educational Technology (JSET)</li>`,
    research_title: "Research Areas",
    research_caption: "Core Focus & Methodology",
    res_1_title: "Educational Technology",
    res_1_text: "We provide a unique 'Web-based Psychology Experiment Platform' with 10 programs, including the Stroop effect, available for free. We empirically study how ICT deepens learner understanding and interest.",
    view_experiments: "View Experiments",
    view_creativity: "View Creativity",
    view_wellbeing: "View Well-being",
    res_2_title: "Creativity & Learning",
    res_2_text: "Creativity is not solely a brain process. We aim to scientifically unravel and expand creative behavior at the intersection of Technology, Embodiment, and Cognitive Mechanisms.",
    res_3_title: "Well-being & Psychology",
    res_3_text: "Scientifically exploring human 'well-being' from the perspectives of CWWH and Outdoor Education. We create new value in education and care by combining Nordic insights with sensing technology.",
    pub_kicker: "Archive",
    pub_title: "Selected Publications",
    pub_1_title: "Brain and Learning: Knowledge for Future Schools",
    pub_1_source: "Nishiura Lab, Miyagi Gakuin Women's Univ. (Ed/Trans)",
    pub_2_title: "The Birth, Present, and Future of Forest Kindergartens",
    pub_2_source: "Institute for Development Science, MGWU",
    pub_3_title: "Forest Classrooms from Sweden: Outdoor Education",
    pub_3_source: "Kitaohji Shobo",
    pub_4_title: "Psychological Study on Abnormal Eating Behaviors",
    pub_4_source: "Bulletin of the Center for Edu. Research, Iwate Univ.",
    role_edit_trans: "Ed/Trans",
    role_coauthor: "Co-author",
    role_cotrans: "Co-trans",
    view_researchmap: "View all on Researchmap",
    contact_title: "Let's Connect",
    contact_text: "We welcome inquiries regarding research and graduate school consultations via email. Let's discuss the future of education and technology.",
    univ_name: "Miyagi Gakuin Women's University",
    faculty_name: "Faculty of Education",
    address: "9-1-1 Sakuragaoka, Aoba-ku, Sendai, Miyagi 981-8557, Japan",
    univ_site: "University Site",
    privacy: "Privacy Policy"
  },
  se: {
    lab_name_short: "Nishiura Lab.",
    univ_name_short: "Miyagi Gakuin Kvinnouniversitet",
    nav_home: "hem",
    nav_news: "nyheter",
    nav_about: "om oss",
    nav_research: "forskning",
    nav_publications: "publikationer",
    nav_contact: "kontakt",
    location: "Sendai, Japan",
    hero_h1_1: "Lärande",
    hero_h1_2: "Design",
    hero_sub: "& Psykologi",
    hero_desc_strong: "Kazuki Nishiura Laboratory",
    hero_desc_text: "utforskar skärningspunkten mellan teknik, sinne och kreativitet.",
    // 修正: スウェーデン語も定義文に合わせて更新
    hero_desc_sub: "Nishiura Lab utforskar vetenskapligt lärande, kreativitet och välbefinnande<br>genom att förena pedagogisk psykologi och IKT.",
    scroll_down: "SCROLLA NER",
    news_title: "Nyheter & Ämnen",
    news_caption: "Senaste Nytt",
    about_kicker: "Om Professorn",
    about_head: "En bro mellan utbildning och psykologi",
    about_body: `Professor vid Pedagogiska fakulteten, Miyagi Gakuin Kvinnouniversitet.<br>
      Specialiserad på pedagogisk psykologi, hälsopsykologi och utbildningsteknologi. Vi frågar oss ständigt inte bara hur man förmedlar kunskap, utan hur man lockar fram inre motivation och kreativitet hos varje inlärare.<br><br>
      Vårt uppdrag är att utforma ett nytt ekosystem för lärande baserat på psykologi, genom att förena nordiskt/svenskt välbefinnande (well-being) med den senaste IKT-tekniken.`,
    about_bg_title: "Bakgrund",
    about_bg_list: `
      <li>Fil.dr i psykologi</li>
      <li>Professor, Miyagi Gakuin Kvinnouniversitet</li>
      <li>Gästprofessor, Handelshögskolan i Stockholm</li>`,
    about_aff_title: "Affiliations",
    about_aff_list: `
      <li>Japanese Psychological Association</li>
      <li>Jpn. Assoc. of Educational Psychology</li>
      <li>Jpn. Soc. for Educational Technology (JSET)</li>`,
    research_title: "Forskningsområden",
    research_caption: "Fokus & Metodik",
    res_1_title: "Utbildningsteknologi",
    res_1_text: "Vi erbjuder en unik 'Webbaserad psykologisk experimentplattform' med 10 program, inklusive Stroop-effekten, tillgängliga gratis. Vi studerar hur IKT fördjupar inlärarens förståelse och intresse.",
    view_experiments: "Se experiment",
    view_creativity: "Se Kreativitet",
    view_wellbeing: "Se Välbefinnande",
    res_2_title: "Kreativitet & Lärande",
    res_2_text: "Kreativitet sker inte enbart i hjärnan. Vi strävar efter att vetenskapligt klargöra och utvidga kreativt beteende i skärningspunkten mellan teknologi, kroppslighet och kognitiva mekanismer.",
    res_3_title: "Välbefinnande & Psykologi",
    res_3_text: "Vi utforskar vetenskapligt mänskligt 'välbefinnande' genom CWWH och utomhuspedagogik. Genom att kombinera nordiska insikter med den senaste sensortekniken skapar vi nya värden.",
    pub_kicker: "Arkiv",
    pub_title: "Utvalda Publikationer",
    pub_1_title: "Hjärnan och lärande: Kunskap för framtidens skolor",
    pub_1_source: "Nishiura Lab, Miyagi Gakuin Kvinnouniversitet (Red/Övers)",
    pub_2_title: "Skogsförskolans födelse, nutid och framtid",
    pub_2_source: "Institutet för utvecklingsvetenskap, MGWU",
    pub_3_title: "Skogsklassrum från Sverige: Utomhuspedagogik",
    pub_3_source: "Kitaohji Shobo",
    pub_4_title: "Psykologisk studie om onormala ätbeteenden",
    pub_4_source: "Bulletin of the Center for Edu. Research, Iwate Univ.",
    role_edit_trans: "Red/Övers",
    role_coauthor: "Medförf",
    role_cotrans: "Medövers",
    view_researchmap: "Visa alla på Researchmap",
    contact_title: "Kontakta oss",
    contact_text: "Vi välkomnar förfrågningar om forskning och konsultationer om forskarutbildning via e-post. Låt oss diskutera framtiden för utbildning och teknik.",
    univ_name: "Miyagi Gakuin Kvinnouniversitet",
    faculty_name: "Pedagogiska fakulteten",
    address: "9-1-1 Sakuragaoka, Aoba-ku, Sendai, Miyagi 981-8557, Japan",
    univ_site: "Universitetswebbplats",
    privacy: "Integritetspolicy"
  }
};

// --- I18n Logic ---
const setLanguage = (lang) => {
  // 1. Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent.toLowerCase();
    if (lang === 'ja' && btnText === 'jp') btn.classList.add('active');
    else if (lang === 'en' && btnText === 'en') btn.classList.add('active');
    else if (lang === 'se' && btnText === 'se') btn.classList.add('active');
  });

  // 2. Update text content
  const data = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      // 修正: 'sub' (hero_desc_sub) もHTMLタグ(<br>)を有効にするため条件に追加
      if (key.includes('body') || key.includes('list') || key.includes('sub')) {
        el.innerHTML = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  });

  // 3. Update html lang attribute
  document.documentElement.lang = lang;
};

// --- Initialize Language based on Browser Settings ---
const initLanguage = () => {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2).toLowerCase();
  if (browserLang === 'ja') {
    setLanguage('ja');
  } else if (browserLang === 'sv') {
    setLanguage('se');
  } else {
    setLanguage('en');
  }
};

// Execute initialization
initLanguage();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav style on scroll
const nav = document.getElementById('siteNav');
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

// Active nav highlight
const sections = ['home','news','about','research','publications','contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const links = Array.from(document.querySelectorAll('.nav-links a[data-link]'));

const setActive = (id) => {
  links.forEach(a => a.classList.toggle('active', a.dataset.link === id));
};

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible && visible.target && visible.target.id) setActive(visible.target.id);
}, { root: null, threshold: [0.2, 0.35, 0.5, 0.65] });

sections.forEach(s => observer.observe(s));

// Fade-up on view
const fades = document.querySelectorAll('.fade-up');
const fadeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });
fades.forEach(el => fadeObs.observe(el));

// --- Load News from JSON (Improved) ---
const newsList = document.getElementById('news-list');
if (newsList) {
  fetch('./news.json')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      // データを取得できたら表示を更新
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
      // エラー時の表示
      newsList.innerHTML = '<li style="padding:20px; color:#94a3b8; font-size:13px;">News information could not be loaded.</li>';
    });
}