(() => {
  const STORAGE_KEY = "its-lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "es", "ru", "hi", "ja", "zh-CN", "zh-Hant", "en-meow", "zh-meow"];

  const dict = {
    en: {
      meta_title_home: "Ice Tea Studio — Official Website",
      meta_desc_home:
        "Ice Tea Studio is an independent studio founded in 2023. We design and build digital work with care—clean interfaces, small tools, and finished details.",
      meta_title_people: "People — Ice Tea Studio",
      meta_desc_people:
        "Meet the people behind Ice Tea Studio—developers, designers, and open seats still brewing.",
      nav_aria: "Primary",
      nav_home: "Home",
      nav_people: "People",
      lang_aria: "Language",
      since: "Since 2023",
      scroll_about: "Scroll to About",
      about_title: "About",
      about_kicker: "Who we are",
      about_p1:
        "Ice Tea Studio is an independent studio founded in 2023. We design and build digital work with care—clean interfaces, small tools, and finished details.",
      about_p2_html:
        'This website is our official home. Meet the <a href="people.html">people</a> behind it. For feedback or questions, write to <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>. Public code lives on <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>.',
      projects_title: "Projects",
      project_ardel_desc: "A native-style all-in-one Minecraft launcher.",
      project_ardel_notice: "Coming soon. Stay tuned.",
      project_cingem_desc: "A simple P2P chat tool for friends.",
      project_cingem_notice: "Sorry, this tool is for internal use only.",
      project_trovanto_desc: "An incognito browser.",
      project_trovanto_notice: "Early build complete — now in private beta.",
      projects_more: "And more…",
      powered_prefix: "Powered by",
      people_kicker: "Core team",
      people_title: "People",
      people_lead: "The minds behind the work—and a couple of seats still warming up.",
      role_flame: "Founder & Lead Developer",
      role_cinder: "Studio Mascot / Inspiration Director",
      open_seat: "Open seat",
      open_seat_role: "Campaigning · Producing Coffee",
    },
    es: {
      meta_title_home: "Ice Tea Studio — Sitio oficial",
      meta_desc_home:
        "Ice Tea Studio es un estudio independiente fundado en 2023. Diseñamos y construimos trabajo digital con cuidado: interfaces limpias, herramientas pequeñas y detalles terminados.",
      meta_title_people: "Personas — Ice Tea Studio",
      meta_desc_people:
        "Conoce a las personas detrás de Ice Tea Studio: desarrolladores, diseñadores y asientos abiertos que aún se están preparando.",
      nav_aria: "Principal",
      nav_home: "Inicio",
      nav_people: "Personas",
      lang_aria: "Idioma",
      since: "Desde 2023",
      scroll_about: "Ir a Acerca de",
      about_title: "Acerca de",
      about_kicker: "Quiénes somos",
      about_p1:
        "Ice Tea Studio es un estudio independiente fundado en 2023. Diseñamos y construimos trabajo digital con cuidado: interfaces limpias, herramientas pequeñas y detalles terminados.",
      about_p2_html:
        'Este sitio web es nuestro hogar oficial. Conoce a las <a href="people.html">personas</a> detrás de él. Para comentarios o preguntas, escribe a <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>. El código público está en <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>.',
      projects_title: "Proyectos",
      project_ardel_desc: "Un lanzador de Minecraft todo en uno de estilo nativo.",
      project_ardel_notice: "Próximamente. Mantente atento.",
      project_cingem_desc: "Una herramienta simple de chat P2P para amigos.",
      project_cingem_notice: "Lo sentimos, esta herramienta es solo para uso interno.",
      project_trovanto_desc: "Un navegador de incógnito.",
      project_trovanto_notice: "Compilación temprana completa: ahora en beta privada.",
      projects_more: "Y más…",
      powered_prefix: "Con tecnología de",
      people_kicker: "Equipo principal",
      people_title: "Personas",
      people_lead: "Las mentes detrás del trabajo, y un par de asientos que aún se están calentando.",
      role_flame: "Fundador y desarrollador principal",
      role_cinder: "Mascota del estudio / Director de inspiración",
      open_seat: "Asiento abierto",
      open_seat_role: "En campaña · Produciendo café",
    },
    ja: {
      meta_title_home: "Ice Tea Studio — 公式サイト",
      meta_desc_home:
        "Ice Tea Studio は 2023 年設立のインディペンデント・スタジオです。きれいなインターフェース、小さなツール、仕上げられたディテールを大切に、デジタル作品を設計・構築しています。",
      meta_title_people: "メンバー — Ice Tea Studio",
      meta_desc_people:
        "Ice Tea Studio を支える人々をご紹介します。開発者、デザイナー、そしてまだ温まっている空席もあります。",
      nav_aria: "メイン",
      nav_home: "ホーム",
      nav_people: "メンバー",
      lang_aria: "言語",
      since: "Since 2023",
      scroll_about: "About へスクロール",
      about_title: "About",
      about_kicker: "私たちについて",
      about_p1:
        "Ice Tea Studio は 2023 年設立のインディペンデント・スタジオです。きれいなインターフェース、小さなツール、仕上げられたディテールを大切に、デジタル作品を設計・構築しています。",
      about_p2_html:
        'このウェブサイトは公式のホームです。背後にいる<a href="people.html">メンバー</a>をご覧ください。フィードバックやご質問は <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a> まで。公開コードは <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a> にあります。',
      projects_title: "プロジェクト",
      project_ardel_desc: "ネイティブスタイルのオールインワン Minecraft ランチャー。",
      project_ardel_notice: "近日公開。しばらくお待ちください。",
      project_cingem_desc: "友人向けのシンプルな P2P チャットツール。",
      project_cingem_notice: "申し訳ありません。このツールは内部利用専用です。",
      project_trovanto_desc: "シークレットブラウザー。",
      project_trovanto_notice: "初期ビルド完了 — 現在プライベートベータ中です。",
      projects_more: "その他…",
      powered_prefix: "Powered by",
      people_kicker: "コアチーム",
      people_title: "メンバー",
      people_lead: "作品の背後にいる人々と、まだ温まっているいくつかの席。",
      role_flame: "創設者 & リードデベロッパー",
      role_cinder: "スタジオマスコット / インスピレーションディレクター",
      open_seat: "空席",
      open_seat_role: "選挙活動中 · コーヒー生産中",
    },
    // Mild Microsoft-style Chinese: formal, a bit stiff, still readable
    "zh-CN": {
      meta_title_home: "Ice Tea Studio — 官方网站",
      meta_desc_home:
        "Ice Tea Studio 是一家成立于 2023 年的独立工作室。我们精心设计并构建数字作品——简洁的界面、小型工具以及完善的细节。",
      meta_title_people: "人员 — Ice Tea Studio",
      meta_desc_people:
        "了解 Ice Tea Studio 背后的人员——开发人员、设计人员，以及仍在筹备中的开放席位。",
      nav_aria: "主要导航",
      nav_home: "主页",
      nav_people: "人员",
      lang_aria: "语言",
      since: "自 2023 年起",
      scroll_about: "滚动到“关于”",
      about_title: "关于",
      about_kicker: "我们是谁",
      about_p1:
        "Ice Tea Studio 是一家成立于 2023 年的独立工作室。我们精心设计并构建数字作品——简洁的界面、小型工具以及完善的细节。",
      about_p2_html:
        '本网站是我们的官方主页。了解背后的<a href="people.html">人员</a>。如需反馈或提问，请发送邮件至 <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>。公共代码位于 <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>。',
      projects_title: "项目",
      project_ardel_desc: "原生风格的一体化 Minecraft 启动器。",
      project_ardel_notice: "即将推出。请继续关注。",
      project_cingem_desc: "面向好友的简单 P2P 聊天工具。",
      project_cingem_notice: "抱歉，此工具仅供内部使用。",
      project_trovanto_desc: "一款无痕浏览器。",
      project_trovanto_notice: "早期版本已完成，正在内测中。",
      projects_more: "以及更多…",
      powered_prefix: "由以下技术提供支持",
      people_kicker: "核心团队",
      people_title: "人员",
      people_lead: "作品背后的人员——以及几个仍在预热的席位。",
      role_flame: "创始人兼首席开发人员",
      role_cinder: "工作室吉祥物 / 灵感总监",
      open_seat: "开放席位",
      open_seat_role: "竞选中 · 制作咖啡中",
    },
    "zh-Hant": {
      meta_title_home: "Ice Tea Studio — 官方網站",
      meta_desc_home:
        "Ice Tea Studio 是成立於 2023 年的獨立工作室。我們用心設計並打造數位作品——簡潔的介面、小型工具，以及完善的細節。",
      meta_title_people: "成員 — Ice Tea Studio",
      meta_desc_people:
        "認識 Ice Tea Studio 背後的成員——開發者、設計師，以及仍在籌備中的開放席位。",
      nav_aria: "主要導覽",
      nav_home: "首頁",
      nav_people: "成員",
      lang_aria: "語言",
      since: "自 2023 年起",
      scroll_about: "捲動至關於",
      about_title: "關於",
      about_kicker: "我們是誰",
      about_p1:
        "Ice Tea Studio 是成立於 2023 年的獨立工作室。我們用心設計並打造數位作品——簡潔的介面、小型工具，以及完善的細節。",
      about_p2_html:
        '本網站是我們的官方首頁。認識背後的<a href="people.html">成員</a>。如需回饋或提問，請寄信至 <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>。公開程式碼位於 <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>。',
      projects_title: "專案",
      project_ardel_desc: "原生風格的一站式 Minecraft 啟動器。",
      project_ardel_notice: "即將推出。請持續關注。",
      project_cingem_desc: "給朋友用的簡單 P2P 聊天工具。",
      project_cingem_notice: "抱歉，此工具僅供內部使用。",
      project_trovanto_desc: "一款無痕瀏覽器。",
      project_trovanto_notice: "早期版本已完成，正在內測中。",
      projects_more: "以及更多…",
      powered_prefix: "技術提供",
      people_kicker: "核心團隊",
      people_title: "成員",
      people_lead: "作品背後的人們——以及幾個仍在暖身的席位。",
      role_flame: "創辦人暨首席開發者",
      role_cinder: "工作室吉祥物 / 靈感總監",
      open_seat: "開放席位",
      open_seat_role: "競選中 · 製作咖啡中",
    },
    ru: {
      meta_title_home: "Ice Tea Studio — Официальный сайт",
      meta_desc_home:
        "Ice Tea Studio — независимая студия, основанная в 2023 году. Мы проектируем и создаём цифровые продукты с вниманием к деталям: чистые интерфейсы, небольшие инструменты и законченная отделка.",
      meta_title_people: "Команда — Ice Tea Studio",
      meta_desc_people:
        "Познакомьтесь с людьми за Ice Tea Studio — разработчиками, дизайнерами и открытыми местами, которые ещё готовятся.",
      nav_aria: "Основная навигация",
      nav_home: "Главная",
      nav_people: "Команда",
      lang_aria: "Язык",
      since: "С 2023 года",
      scroll_about: "Перейти к разделу «О нас»",
      about_title: "О нас",
      about_kicker: "Кто мы",
      about_p1:
        "Ice Tea Studio — независимая студия, основанная в 2023 году. Мы проектируем и создаём цифровые продукты с вниманием к деталям: чистые интерфейсы, небольшие инструменты и законченная отделка.",
      about_p2_html:
        'Этот сайт — наш официальный дом. Познакомьтесь с <a href="people.html">командой</a>. Для отзывов или вопросов пишите на <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>. Открытый код — на <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>.',
      projects_title: "Проекты",
      project_ardel_desc: "Нативный универсальный лаунчер Minecraft.",
      project_ardel_notice: "Скоро. Следите за обновлениями.",
      project_cingem_desc: "Простой P2P-чат для друзей.",
      project_cingem_notice: "Извините, этот инструмент только для внутреннего использования.",
      project_trovanto_desc: "Браузер в режиме инкогнито.",
      project_trovanto_notice: "Ранняя сборка готова — сейчас закрытое тестирование.",
      projects_more: "И ещё…",
      powered_prefix: "Работает на",
      people_kicker: "Основная команда",
      people_title: "Команда",
      people_lead: "Люди за работой — и пара мест, которые ещё прогреваются.",
      role_flame: "Основатель и ведущий разработчик",
      role_cinder: "Талисман студии / директор по вдохновению",
      open_seat: "Открытое место",
      open_seat_role: "Идёт кампания · Варим кофе",
    },
    hi: {
      meta_title_home: "Ice Tea Studio — आधिकारिक वेबसाइट",
      meta_desc_home:
        "Ice Tea Studio 2023 में स्थापित एक स्वतंत्र स्टूडियो है। हम साफ़ इंटरफ़ेस, छोटे टूल और पूर्ण विवरण के साथ डिजिटल काम डिज़ाइन और बनाते हैं।",
      meta_title_people: "लोग — Ice Tea Studio",
      meta_desc_people:
        "Ice Tea Studio के पीछे के लोगों से मिलें—डेवलपर, डिज़ाइनर, और अभी भी तैयार हो रहे खुले स्थान।",
      nav_aria: "मुख्य नेविगेशन",
      nav_home: "होम",
      nav_people: "लोग",
      lang_aria: "भाषा",
      since: "2023 से",
      scroll_about: "परिचय पर स्क्रॉल करें",
      about_title: "परिचय",
      about_kicker: "हम कौन हैं",
      about_p1:
        "Ice Tea Studio 2023 में स्थापित एक स्वतंत्र स्टूडियो है। हम साफ़ इंटरफ़ेस, छोटे टूल और पूर्ण विवरण के साथ डिजिटल काम डिज़ाइन और बनाते हैं।",
      about_p2_html:
        'यह वेबसाइट हमारा आधिकारिक घर है। इसके पीछे के <a href="people.html">लोगों</a> से मिलें। प्रतिक्रिया या प्रश्नों के लिए <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a> पर लिखें। सार्वजनिक कोड <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a> पर है।',
      projects_title: "प्रोजेक्ट",
      project_ardel_desc: "नेटिव-स्टाइल ऑल-इन-वन Minecraft लॉन्चर।",
      project_ardel_notice: "जल्द आ रहा है। जुड़े रहें।",
      project_cingem_desc: "दोस्तों के लिए एक सरल P2P चैट टूल।",
      project_cingem_notice: "क्षमा करें, यह टूल केवल आंतरिक उपयोग के लिए है।",
      project_trovanto_desc: "एक प्राइवेट ब्राउज़र।",
      project_trovanto_notice: "प्रारंभिक बिल्ड पूरा — अभी बंद बीटा में।",
      projects_more: "और भी…",
      powered_prefix: "संचालित द्वारा",
      people_kicker: "मुख्य टीम",
      people_title: "लोग",
      people_lead: "काम के पीछे के दिमाग—और कुछ सीटें जो अभी गर्म हो रही हैं।",
      role_flame: "संस्थापक और प्रमुख डेवलपर",
      role_cinder: "स्टूडियो शुभंकर / प्रेरणा निदेशक",
      open_seat: "खुली सीट",
      open_seat_role: "अभियान जारी · कॉफ़ी बन रही है",
    },
    "en-meow": {
      meta_title_home: "meow meow — meow~",
      meta_desc_home: "meow meow meow, meow meow meow~ meow! meow, meow, meow...",
      meta_title_people: "meow — meow",
      meta_desc_people: "meow meow meow—meow, meow, and meow~?",
      nav_aria: "meow",
      nav_home: "meow",
      nav_people: "meow~",
      lang_aria: "meow?",
      since: "meow 2023~",
      scroll_about: "meow↓",
      about_title: "meow",
      about_kicker: "meow meow?",
      about_p1: "meow meow meow, meow meow~! meow—meow, meow, and meow.",
      about_p2_html:
        'meow meow. Meet the <a href="people.html">meow</a>! Write to <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>~ Code lives on <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>!',
      projects_title: "meow",
      project_ardel_desc: "meow meow Minecraft meow~",
      project_ardel_notice: "meow...! meow~",
      project_cingem_desc: "meow P2P meow~",
      project_cingem_notice: "meow... this meow is internal only!",
      project_trovanto_desc: "meow browser~",
      project_trovanto_notice: "meow done, now meowing!",
      projects_more: "meow meow...",
      powered_prefix: "meow by",
      people_kicker: "meow team",
      people_title: "meow",
      people_lead: "meows behind the meow—and seats still warming~",
      role_flame: "meow & meow!",
      role_cinder: "meow mascot / meow director~",
      open_seat: "open meow~",
      open_seat_role: "campaigning · brewing meow!",
    },
    "zh-meow": {
      meta_title_home: "喵喵喵 — 喵~",
      meta_desc_home: "喵喵喵喵，喵喵喵喵喵~ 喵！喵喵，喵喵，喵喵喵……",
      meta_title_people: "喵 — 喵喵喵",
      meta_desc_people: "喵喵喵喵喵——喵、喵，还有喵~？",
      nav_aria: "喵",
      nav_home: "喵",
      nav_people: "喵~",
      lang_aria: "喵？",
      since: "喵 2023~",
      scroll_about: "喵↓",
      about_title: "喵",
      about_kicker: "喵喵？",
      about_p1: "喵喵喵喵喵喵，喵喵喵~！喵喵——喵、喵，还有喵喵喵。",
      about_p2_html:
        '喵喵喵喵。<a href="people.html">喵</a>！喵喵喵 <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>~ 喵喵在 <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>！',
      projects_title: "喵喵",
      project_ardel_desc: "喵喵喵喵 Minecraft 喵~",
      project_ardel_notice: "喵……！喵~",
      project_cingem_desc: "喵喵 P2P 喵喵~",
      project_cingem_notice: "喵……此喵仅供喵用！",
      project_trovanto_desc: "喵喵浏览器~",
      project_trovanto_notice: "喵喵完成，正在喵中！",
      projects_more: "喵喵喵…",
      powered_prefix: "喵 by",
      people_kicker: "喵喵队",
      people_title: "喵",
      people_lead: "喵喵背后的喵——还有几个还在喵的喵~",
      role_flame: "喵喵 & 喵喵喵！",
      role_cinder: "喵吉祥物 / 喵灵感~",
      open_seat: "喵位以待~",
      open_seat_role: "喵选中 · 喵啡产出中！",
    },
  };

  const pageKind = () =>
    document.body.classList.contains("page-people") ? "people" : "home";

  const normalize = (value) => {
    if (!value) return DEFAULT_LANG;
    if (SUPPORTED.includes(value)) return value;
    const lower = String(value).toLowerCase();
    if (
      lower === "zh-tw" ||
      lower === "zh-hk" ||
      lower === "zh-hant" ||
      lower.includes("hant")
    ) {
      return "zh-Hant";
    }
    if (lower.startsWith("zh")) return "zh-CN";
    if (lower.startsWith("ja")) return "ja";
    if (lower.startsWith("es")) return "es";
    if (lower.startsWith("ru")) return "ru";
    if (lower.startsWith("hi")) return "hi";
    if (lower === "zh-meow" || lower === "zh_meow") return "zh-meow";
    if (lower === "en-meow" || lower === "en_meow") return "en-meow";
    if (lower === "meow" || lower.includes("miao") || lower === "nya") return "zh-meow";
    return DEFAULT_LANG;
  };

  const htmlLang = (code) => {
    if (code === "zh-CN" || code === "zh-meow") return "zh-CN";
    if (code === "zh-Hant") return "zh-Hant";
    if (code === "ja") return "ja";
    if (code === "es") return "es";
    if (code === "ru") return "ru";
    if (code === "hi") return "hi";
    if (code === "en-meow") return "en";
    return "en";
  };

  const ogLocale = (code) => {
    if (code === "zh-CN" || code === "zh-meow") return "zh_CN";
    if (code === "zh-Hant") return "zh_Hant";
    if (code === "ja") return "ja_JP";
    if (code === "es") return "es_ES";
    if (code === "ru") return "ru_RU";
    if (code === "hi") return "hi_IN";
    if (code === "en-meow") return "en_US";
    return "en_US";
  };

  const readStored = () => {
    try {
      return normalize(localStorage.getItem(STORAGE_KEY));
    } catch {
      return DEFAULT_LANG;
    }
  };

  const writeStored = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  };

  let lang = readStored();

  const t = (key) => dict[lang]?.[key] ?? dict.en[key] ?? key;

  const applyMeta = () => {
    const kind = pageKind();
    const titleKey = kind === "people" ? "meta_title_people" : "meta_title_home";
    const descKey = kind === "people" ? "meta_desc_people" : "meta_desc_home";
    const title = t(titleKey);
    const desc = t(descKey);

    document.title = title;
    document.documentElement.lang = htmlLang(lang);

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", desc);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", desc);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", desc);
    setMeta('meta[property="og:locale"]', "content", ogLocale(lang));
  };

  const apply = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-notice-key]").forEach((el) => {
      const key = el.getAttribute("data-notice-key");
      if (!key) return;
      el.setAttribute("data-notice", t(key));
    });

    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const code = btn.getAttribute("data-lang");
      const active = code === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const meowActive = lang === "en-meow" || lang === "zh-meow";
    document.querySelectorAll(".lang-switch__meow-toggle").forEach((btn) => {
      btn.classList.toggle("is-active", meowActive);
      btn.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".lang-switch__meow-menu").forEach((menu) => {
      menu.hidden = true;
    });
    document.querySelectorAll(".lang-switch__meow").forEach((wrap) => {
      wrap.classList.toggle("is-open", false);
      wrap.classList.toggle("is-active", meowActive);
    });

    applyMeta();
    document.documentElement.dataset.lang = lang;
  };

  const setLang = (next) => {
    lang = normalize(next);
    writeStored(lang);
    apply();
  };

  const closeMeowMenus = () => {
    document.querySelectorAll(".lang-switch__meow").forEach((wrap) => {
      wrap.classList.remove("is-open");
      const toggle = wrap.querySelector(".lang-switch__meow-toggle");
      const menu = wrap.querySelector(".lang-switch__meow-menu");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (menu) menu.hidden = true;
    });
  };

  const bindSwitcher = () => {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-lang");
        if (!next) return;
        setLang(next);
        closeMeowMenus();
      });
    });

    document.querySelectorAll(".lang-switch__meow-toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = toggle.closest(".lang-switch__meow");
        const menu = wrap?.querySelector(".lang-switch__meow-menu");
        if (!wrap || !menu) return;
        const willOpen = menu.hidden;
        closeMeowMenus();
        if (willOpen) {
          menu.hidden = false;
          wrap.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target.closest(".lang-switch__meow")) return;
      closeMeowMenus();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMeowMenus();
    });
  };

  window.ITS_I18N = { t, getLang: () => lang, setLang, apply };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindSwitcher();
      apply();
    });
  } else {
    bindSwitcher();
    apply();
  }
})();
