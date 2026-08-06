(() => {
  const STORAGE_KEY = "its-lang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "es", "fr", "pt", "ru", "hi", "ja", "zh-CN", "zh-Hant"];

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
      animal_hint: "Dear animal visitors: please switch the language to Japanese.",
      animal_gate_title: "Enter the animal key",
      animal_gate_error: "Incorrect key",
      animal_gate_submit: "Confirm",
      people_kicker: "Core team",
      people_title: "People",
      people_lead: "The minds behind the work—and a couple of seats still warming up.",
      role_flame: "Founder & Lead Developer",
      role_cinder: "Studio Mascot / Inspiration Director",
      open_seat: "Open seat",
      open_seat_role: "Campaigning · Producing Coffee",
      cookie_notice: "This site stores your language choice locally. Cloudflare may set cookies for security and delivery.",
      cookie_accept: "Got it",
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
      animal_hint: "Queridos visitantes animales: cambien el idioma a japonés.",
      animal_gate_title: "Introduzca la clave animal",
      animal_gate_error: "Clave incorrecta",
      animal_gate_submit: "Confirmar",
      people_kicker: "Equipo principal",
      people_title: "Personas",
      people_lead: "Las mentes detrás del trabajo, y un par de asientos que aún se están calentando.",
      role_flame: "Fundador y desarrollador principal",
      role_cinder: "Mascota del estudio / Director de inspiración",
      open_seat: "Asiento abierto",
      open_seat_role: "En campaña · Produciendo café",
      cookie_notice: "Este sitio guarda su idioma localmente. Cloudflare puede establecer cookies de seguridad y entrega.",
      cookie_accept: "Entendido",
    },
    fr: {
      meta_title_home: "Ice Tea Studio — Site officiel",
      meta_desc_home:
        "Ice Tea Studio est un studio indépendant fondé en 2023. Nous concevons et construisons des travaux numériques avec soin : interfaces propres, petits outils et détails aboutis.",
      meta_title_people: "Personnes — Ice Tea Studio",
      meta_desc_people:
        "Rencontrez les personnes derrière Ice Tea Studio : développeurs, designers et places encore en préparation.",
      nav_aria: "Principal",
      nav_home: "Accueil",
      nav_people: "Personnes",
      lang_aria: "Langue",
      since: "Depuis 2023",
      scroll_about: "Aller à À propos",
      about_title: "À propos",
      about_kicker: "Qui nous sommes",
      about_p1:
        "Ice Tea Studio est un studio indépendant fondé en 2023. Nous concevons et construisons des travaux numériques avec soin : interfaces propres, petits outils et détails aboutis.",
      about_p2_html:
        'Ce site est notre maison officielle. Rencontrez les <a href="people.html">personnes</a> derrière. Pour vos retours ou questions, écrivez à <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>. Le code public est sur <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>.',
      projects_title: "Projets",
      project_ardel_desc: "Un lanceur Minecraft tout-en-un de style natif.",
      project_ardel_notice: "Bientôt disponible. Restez à l’écoute.",
      project_cingem_desc: "Un outil de chat P2P simple pour les amis.",
      project_cingem_notice: "Désolé, cet outil est réservé à un usage interne.",
      project_trovanto_desc: "Un navigateur en navigation privée.",
      project_trovanto_notice: "Build précoce terminée — actuellement en bêta privée.",
      projects_more: "Et plus…",
      powered_prefix: "Propulsé par",
      animal_hint: "Chers visiteurs animaux : veuillez passer la langue en japonais.",
      animal_gate_title: "Entrez la clé animale",
      animal_gate_error: "Clé incorrecte",
      animal_gate_submit: "Confirmer",
      people_kicker: "Équipe principale",
      people_title: "Personnes",
      people_lead: "Les esprits derrière le travail — et quelques places encore en chauffe.",
      role_flame: "Fondateur et développeur principal",
      role_cinder: "Mascotte du studio / Directeur de l’inspiration",
      open_seat: "Place ouverte",
      open_seat_role: "En campagne · Production de café",
      cookie_notice: "Ce site enregistre votre langue localement. Cloudflare peut déposer des cookies pour la sécurité et la diffusion.",
      cookie_accept: "Compris",
    },
    pt: {
      meta_title_home: "Ice Tea Studio — Site oficial",
      meta_desc_home:
        "Ice Tea Studio é um estúdio independente fundado em 2023. Projetamos e construímos trabalho digital com cuidado: interfaces limpas, pequenas ferramentas e detalhes finalizados.",
      meta_title_people: "Pessoas — Ice Tea Studio",
      meta_desc_people:
        "Conheça as pessoas por trás do Ice Tea Studio: desenvolvedores, designers e assentos abertos ainda em preparação.",
      nav_aria: "Principal",
      nav_home: "Início",
      nav_people: "Pessoas",
      lang_aria: "Idioma",
      since: "Desde 2023",
      scroll_about: "Ir para Sobre",
      about_title: "Sobre",
      about_kicker: "Quem somos",
      about_p1:
        "Ice Tea Studio é um estúdio independente fundado em 2023. Projetamos e construímos trabalho digital com cuidado: interfaces limpas, pequenas ferramentas e detalhes finalizados.",
      about_p2_html:
        'Este site é o nosso lar oficial. Conheça as <a href="people.html">pessoas</a> por trás dele. Para feedback ou perguntas, escreva para <a href="mailto:feedback@ice-tea.top">feedback@ice-tea.top</a>. O código público está no <a href="https://github.com/Ice-Tea-Studio" rel="noopener noreferrer" target="_blank">GitHub</a>.',
      projects_title: "Projetos",
      project_ardel_desc: "Um launcher Minecraft tudo-em-um de estilo nativo.",
      project_ardel_notice: "Em breve. Fique atento.",
      project_cingem_desc: "Uma ferramenta simples de chat P2P para amigos.",
      project_cingem_notice: "Desculpe, esta ferramenta é apenas para uso interno.",
      project_trovanto_desc: "Um navegador anônimo.",
      project_trovanto_notice: "Build inicial concluída — agora em beta privada.",
      projects_more: "E mais…",
      powered_prefix: "Com tecnologia",
      animal_hint: "Caros visitantes animais: mudem o idioma para japonês.",
      animal_gate_title: "Digite a chave animal",
      animal_gate_error: "Chave incorreta",
      animal_gate_submit: "Confirmar",
      people_kicker: "Equipe principal",
      people_title: "Pessoas",
      people_lead: "As mentes por trás do trabalho — e alguns assentos ainda aquecendo.",
      role_flame: "Fundador e desenvolvedor líder",
      role_cinder: "Mascote do estúdio / Diretor de inspiração",
      open_seat: "Assento aberto",
      open_seat_role: "Em campanha · Produzindo café",
      cookie_notice: "Este site guarda o seu idioma localmente. A Cloudflare pode definir cookies de segurança e entrega.",
      cookie_accept: "Entendi",
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
      animal_hint: "動物のお客様へ：言語を日本語に切り替えてください。",
      animal_gate_title: "動物キーを入力してください",
      animal_gate_error: "キーが正しくありません",
      animal_gate_submit: "確認",
      people_kicker: "コアチーム",
      people_title: "メンバー",
      people_lead: "作品の背後にいる人々と、まだ温まっているいくつかの席。",
      role_flame: "創設者 & リードデベロッパー",
      role_cinder: "スタジオマスコット / インスピレーションディレクター",
      open_seat: "空席",
      open_seat_role: "選挙活動中 · コーヒー生産中",
      cookie_notice: "このサイトは言語設定を端末に保存します。Cloudflare がセキュリティと配信のために Cookie を設定する場合があります。",
      cookie_accept: "了解",
    },
    // Mild Microsoft-style Simplified Chinese: formal, slightly stiff, still readable.
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
      animal_hint: "欢迎各位动物访客将语言切换为日语",
      animal_gate_title: "请输入动物密钥",
      animal_gate_error: "密钥不正确",
      animal_gate_submit: "确认",
      people_kicker: "核心团队",
      people_title: "人员",
      people_lead: "作品背后的人员——以及几个仍在预热的席位。",
      role_flame: "创始人兼首席开发人员",
      role_cinder: "工作室吉祥物 / 灵感总监",
      open_seat: "开放席位",
      open_seat_role: "竞选中 · 制作咖啡中",
      cookie_notice: "本网站会在本地保存您的语言偏好。Cloudflare 可能会设置用于安全与内容分发的 Cookie。",
      cookie_accept: "知道了",
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
      animal_hint: "歡迎各位動物訪客將語言切換為日語",
      animal_gate_title: "請輸入動物密鑰",
      animal_gate_error: "密鑰不正確",
      animal_gate_submit: "確認",
      people_kicker: "核心團隊",
      people_title: "成員",
      people_lead: "作品背後的人們——以及幾個仍在暖身的席位。",
      role_flame: "創辦人暨首席開發者",
      role_cinder: "工作室吉祥物 / 靈感總監",
      open_seat: "開放席位",
      open_seat_role: "競選中 · 製作咖啡中",
      cookie_notice: "本網站會在本機儲存您的語言偏好。Cloudflare 可能會設定用於安全與內容傳遞的 Cookie。",
      cookie_accept: "知道了",
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
      animal_hint: "Уважаемые гости-животные: переключите язык на японский.",
      animal_gate_title: "Введите животный ключ",
      animal_gate_error: "Неверный ключ",
      animal_gate_submit: "Подтвердить",
      people_kicker: "Основная команда",
      people_title: "Команда",
      people_lead: "Люди за работой — и пара мест, которые ещё прогреваются.",
      role_flame: "Основатель и ведущий разработчик",
      role_cinder: "Талисман студии / директор по вдохновению",
      open_seat: "Открытое место",
      open_seat_role: "Идёт кампания · Варим кофе",
      cookie_notice: "Сайт сохраняет выбранный язык локально. Cloudflare может устанавливать cookie для безопасности и доставки.",
      cookie_accept: "Понятно",
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
      animal_hint: "प्रिय पशु आगंतुकों: कृपया भाषा जापानी में बदलें।",
      animal_gate_title: "पशु कुंजी दर्ज करें",
      animal_gate_error: "गलत कुंजी",
      animal_gate_submit: "पुष्टि करें",
      people_kicker: "मुख्य टीम",
      people_title: "लोग",
      people_lead: "काम के पीछे के दिमाग—और कुछ सीटें जो अभी गर्म हो रही हैं।",
      role_flame: "संस्थापक और प्रमुख डेवलपर",
      role_cinder: "स्टूडियो शुभंकर / प्रेरणा निदेशक",
      open_seat: "खुली सीट",
      open_seat_role: "अभियान जारी · कॉफ़ी बन रही है",
      cookie_notice: "यह साइट आपकी भाषा पसंद स्थानीय रूप से सहेजती है। सुरक्षा और डिलीवरी के लिए Cloudflare कुकीज़ सेट कर सकता है।",
      cookie_accept: "समझ गया",
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
    if (lower.startsWith("fr")) return "fr";
    if (lower.startsWith("pt")) return "pt";
    if (lower.startsWith("ru")) return "ru";
    if (lower.startsWith("hi")) return "hi";
    if (
      lower === "zh-meow" ||
      lower === "en-meow" ||
      lower === "meow" ||
      lower.includes("miao") ||
      lower === "nya"
    ) {
      return DEFAULT_LANG;
    }
    return DEFAULT_LANG;
  };

  const htmlLang = (code) => {
    if (code === "zh-CN") return "zh-CN";
    if (code === "zh-Hant") return "zh-Hant";
    if (code === "ja") return "ja";
    if (code === "es") return "es";
    if (code === "fr") return "fr";
    if (code === "pt") return "pt";
    if (code === "ru") return "ru";
    if (code === "hi") return "hi";
    return "en";
  };

  const ogLocale = (code) => {
    if (code === "zh-CN") return "zh_CN";
    if (code === "zh-Hant") return "zh_Hant";
    if (code === "ja") return "ja_JP";
    if (code === "es") return "es_ES";
    if (code === "fr") return "fr_FR";
    if (code === "pt") return "pt_BR";
    if (code === "ru") return "ru_RU";
    if (code === "hi") return "hi_IN";
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
  // Unlocked by animal easter egg — in-memory only.
  let meowOn = false;

  // One onomatopoeia per locale; strings are rewritten at apply-time (no duplicate dicts).
  const MEOW_UNIT = {
    en: "meow",
    es: "miau",
    fr: "miaou",
    pt: "miau",
    ru: "мяу",
    hi: "म्याउ",
    ja: "にゃ",
    "zh-CN": "喵",
    "zh-Hant": "喵",
  };

  const MEOW_KEEP =
    /Ice Tea Studio|FlameGemini|CinderZero|Minecraft|GitHub|Ardel|CinGem|Trovanto|Cloudflare|feedback@ice-tea\.top|https?:\/\/[^\s"'<>]+|\d+/gi;

  const MEOW_WORD =
    /[A-Za-zÀ-ÖØ-öø-ÿ]+|[\u0400-\u04FF]+|[\u0900-\u097F]+|[\u3040-\u30FFゝゞー]+|[\u4E00-\u9FFF々〇]+/g;

  const meowify = (raw) => {
    if (!meowOn || raw == null) return raw;
    const unit = MEOW_UNIT[lang] || "meow";
    const join = lang === "ja" || lang.startsWith("zh") ? "" : " ";

    return String(raw).replace(/(<[^>]+>)|([^<]+)/g, (all, tag, text) => {
      if (tag) return tag;
      const kept = [];
      let s = text.replace(MEOW_KEEP, (m) => {
        kept.push(m);
        return `\uE000${kept.length - 1}\uE001`;
      });
      s = s.replace(MEOW_WORD, (w) => {
        const n = Math.max(1, Math.min(5, Math.ceil(w.length / (join ? 4 : 1))));
        return Array.from({ length: n }, () => unit).join(join);
      });
      return s.replace(/\uE000(\d+)\uE001/g, (_, i) => kept[+i]);
    });
  };

  const t = (key) => meowify(dict[lang]?.[key] ?? dict.en[key] ?? key);

  const setMeow = (on) => {
    meowOn = !!on;
    apply();
  };

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

  const closeLangMenus = () => {
    document.querySelectorAll(".lang-switch").forEach((wrap) => {
      wrap.classList.remove("is-open");
      const toggle = wrap.querySelector(".lang-switch__toggle");
      const menu = wrap.querySelector(".lang-switch__menu");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (menu) menu.hidden = true;
    });
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

    document.querySelectorAll(".lang-switch__option[data-lang]").forEach((btn) => {
      const code = btn.getAttribute("data-lang");
      const active = code === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    document.querySelectorAll(".lang-switch__toggle").forEach((btn) => {
      btn.setAttribute("aria-label", t("lang_aria"));
    });

    closeLangMenus();
    applyMeta();
    document.documentElement.dataset.lang = lang;
  };

  const setLang = (next) => {
    lang = normalize(next);
    writeStored(lang);
    apply();
  };

  const bindSwitcher = () => {
    document.querySelectorAll(".lang-switch__option[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.getAttribute("data-lang");
        if (next) window.ITS_I18N.setLang(next);
      });
    });

    document.querySelectorAll(".lang-switch__toggle").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const wrap = toggle.closest(".lang-switch");
        const menu = wrap?.querySelector(".lang-switch__menu");
        if (!wrap || !menu) return;
        const willOpen = menu.hidden;
        closeLangMenus();
        if (willOpen) {
          menu.hidden = false;
          wrap.classList.add("is-open");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target.closest(".lang-switch")) return;
      closeLangMenus();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLangMenus();
    });
  };

  window.ITS_I18N = {
    t,
    getLang: () => lang,
    setLang,
    apply,
    setMeow,
    isMeow: () => meowOn,
  };

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
