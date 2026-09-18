/* =====================================================================
   script.js — Hanin AlFurati Data Analytics Portfolio
   =====================================================================
   طريقة التعديل السريعة:
   1) عدّلي بيانات التواصل والباقات والمشاريع كلها داخل SITE_CONFIG
      وPROJECTS_DATA و SERVICES_DATA أدناه فقط — لا حاجة للمس بقية الملف.
   2) لتفعيل استقبال نموذج الطلب مباشرة إلى بريدك، أنشئي حسابًا مجانيًا
      على https://formspree.io واستبدلي SITE_CONFIG.formspreeEndpoint
      برابط الفورم الخاص بك (مشروح بالتفصيل في README.md).
   3) لإضافة مشروع جديد: انسخي أي عنصر داخل PROJECTS_DATA وعدّلي قيمه.
   4) لإضافة صورة حقيقية لمشروع: ضعي رابط الصورة في حقل image (مثلاً
      "images/projects/my-project.jpg") وسيظهر تلقائيًا بدل الأيقونة.
   ===================================================================== */

/* ---------- 1) الإعدادات العامة القابلة للتعديل ---------- */
const SITE_CONFIG = {
  // رقم التواصل الظاهر في الموقع (بصيغة دولية تبدأ ب +966)
  phoneDisplay: "+966 54 421 4495",
  // رقم واتساب بدون + وبدون صفر البداية (مثال: 9665XXXXXXXX)
  whatsappNumber: "966544214495",
  email: "hi@dirah.sa",
  linkedin: "https://www.linkedin.com/in/hanin-alfurati-6a0170168",
  // اتركيه فارغًا لتعطيل الإرسال المباشر عبر Formspree (سيبقى واتساب يعمل دائمًا)
  formspreeEndpoint: "",
};

const WHATSAPP_DEFAULT_TEXT = {
  ar: "مرحباً حنين، أرغب في الاستفسار عن خدمة تحليل البيانات وتصميم تقارير Power BI",
  en: "Hello Hanin, I would like to ask about data analytics and Power BI dashboard services",
};

/* ---------- 2) بيانات المشاريع (دراسات الحالة) ---------- */
/* image: اتركيه كما هو (اسم ملف) لحين توفر صورة حقيقية — سيظهر مكانه
   أيقونة احترافية بدون أي نص أو مسار ظاهر للزائر. بعد رفع الصورة الحقيقية
   بنفس المسار، ستحل محل الأيقونة تلقائيًا. */
const PROJECTS_DATA = [
  {
    id: "facility-health",
    category: "facilities",
    image: "projects/project-01-facilities/cover.jpg",
    name: { ar: "لوحة صحة وأداء إدارة المرافق", en: "Facility Management Health & Performance Dashboard" },
    field: { ar: "إدارة المرافق", en: "Facilities Management" },
    sector: { ar: "إدارة المرافق والتشغيل والصيانة", en: "Facilities Management & O&M" },
    problem: {
      ar: "لوحة Power BI لقياس صحة وأداء منشأة إدارة مرافق وربط الأداء التشغيلي بالتكاليف والمخاطر وجودة الخدمة، لدعم اتخاذ القرار التنفيذي بدلاً من الاعتماد على تقارير متفرقة.",
      en: "A Power BI dashboard measuring a facility's health and performance, linking operations to cost, risk, and service quality to support executive decisions instead of scattered manual reports.",
    },
    dataNature: {
      ar: "بيانات أوامر عمل وتذاكر صيانة وأصول وميزانية تشغيلية، مجمّعة من عدة ملفات Excel شهرية غير متسقة الأعمدة.",
      en: "Work-order, maintenance-ticket, asset, and operating-budget data, gathered from several monthly Excel files with inconsistent columns.",
    },
    analysisSteps: {
      ar: [
        "تجميع وتوحيد الملفات الشهرية وتنظيف الأعمدة المتكررة والقيم الناقصة",
        "بناء نموذج بيانات يربط الأصول بالأقسام (كهرباء، ميكانيكا، مدني، مضخات، تنسيق مواقع، خدمات عامة)",
        "تصميم مؤشر Facility Health Index مركّب من عدة مؤشرات فرعية",
        "كتابة معادلات DAX لمقارنة الميزانية الفعلية بالمخططة ومراقبة SLA",
      ],
      en: [
        "Consolidating and cleaning monthly files, fixing inconsistent columns and missing values",
        "Building a data model linking assets to departments (electrical, mechanical, civil, pumps, landscaping, general services)",
        "Designing a composite Facility Health Index from several sub-indicators",
        "Writing DAX measures to compare actual vs. planned budget and monitor SLA",
      ],
    },
    tools: ["Power BI", "DAX", "Excel"],
    metrics: [
      { ar: "Facility Health Index", en: "Facility Health Index" },
      { ar: "SLA", en: "SLA" },
      { ar: "Budget vs Actual", en: "Budget vs Actual" },
    ],
    systems: ["Electrical", "Mechanical", "Civil", "Pumps", "Landscaping", "General Services"],
    recommendations: {
      ar: "التوصية بإعادة ترتيب أولويات الصيانة الوقائية للأنظمة ذات المؤشر الأضعف، ومراجعة بنود الميزانية الأعلى انحرافًا بصورة دورية.",
      en: "Recommended re-prioritizing preventive maintenance for systems with the weakest index scores, and reviewing the highest-variance budget lines on a recurring basis.",
    },
  },
  {
    id: "education-employment",
    category: "hr",
    image: "projects/project-02-education/cover.jpg",
    name: { ar: "تحليل التوافق بين التعليم والتوظيف", en: "Education & Employment Alignment Analysis" },
    field: { ar: "تحليل أعمال", en: "Business Analytics" },
    sector: { ar: "التعليم وسوق العمل", en: "Education & Labor Market" },
    problem: {
      ar: "تحليل يربط مخرجات التعليم باحتياجات سوق العمل في السعودية، ويقيس جاهزية الخريجين والتوظيف وفجوات العرض والطلب بين التخصصات.",
      en: "An analysis linking education outputs to Saudi labor-market needs, measuring graduate readiness and supply–demand gaps across specializations.",
    },
    dataNature: {
      ar: "بيانات أعداد خريجين حسب التخصص والمنطقة، مقارنة ببيانات طلب سوق العمل على نفس التخصصات.",
      en: "Graduate counts by specialization and region, compared against labor-market demand data for the same specializations.",
    },
    analysisSteps: {
      ar: [
        "تنظيف وتوحيد بيانات التخصصات من مصادر مختلفة التسمية",
        "بناء نموذج بيانات يربط الخريجين بالتخصصات والمناطق وفرص التوظيف",
        "تصميم مؤشر الجاهزية الوظيفية ومقارنته بفجوة الطلب لكل تخصص",
      ],
      en: [
        "Cleaning and standardizing specialization data from inconsistently labeled sources",
        "Building a data model linking graduates to specializations, regions, and employment opportunities",
        "Designing an employability index and comparing it to the demand gap per specialization",
      ],
    },
    tools: ["Power BI", "DAX", "Data Modeling"],
    metrics: [
      { ar: "إجمالي الخريجين", en: "Total Graduates" },
      { ar: "مؤشر الجاهزية الوظيفية", en: "Employability Index" },
      { ar: "فجوة الطلب", en: "Demand Gap" },
    ],
    systems: [],
    recommendations: {
      ar: "توجيه أثر التحليل نحو التخصصات ذات فجوة الطلب الأعلى لدعم قرارات القبول والتوجيه المهني.",
      en: "Directed analysis findings toward specializations with the highest demand gap to support admission and career-guidance decisions.",
    },
  },
  {
    id: "hajj-operations",
    category: "operations",
    image: "projects/project-03-hajj/cover.jpg",
    name: { ar: "لوحة عمليات الحج والبعثات", en: "Hajj Operations & Missions Dashboard" },
    field: { ar: "العمليات الميدانية", en: "Field Operations" },
    sector: { ar: "الحج والعمليات الميدانية", en: "Hajj & Field Operations" },
    problem: {
      ar: "نظام متابعة وتحليل للعمليات الميدانية والبعثات خلال موسم الحج لدعم الجاهزية التشغيلية ومراقبة الرحلات والمخاطر وجودة التنفيذ عبر 5 قطاعات و14 بعثة دولية.",
      en: "A tracking and analysis system for field operations and missions during Hajj season, supporting readiness and risk monitoring across 5 operational sectors and 14 international missions.",
    },
    dataNature: {
      ar: "بيانات جاهزية تشغيلية ورحلات وبعثات مجمّعة يوميًا من فرق ميدانية متعددة.",
      en: "Daily operational-readiness, trip, and mission data collected from multiple field teams.",
    },
    analysisSteps: {
      ar: [
        "توحيد البيانات اليومية الواردة من القطاعات الخمسة",
        "تصميم مؤشرات جاهزية ما قبل المغادرة وربطها بالمخاطر المحتملة",
        "بناء لوحة متابعة تفاعلية لكل بعثة على حدة وللصورة العامة",
      ],
      en: [
        "Consolidating daily data submitted by the five sectors",
        "Designing pre-departure readiness indicators linked to potential risks",
        "Building an interactive dashboard for each mission and for the overall picture",
      ],
    },
    tools: ["Power BI", "Excel", "KPI Design"],
    metrics: [
      { ar: "5 قطاعات تشغيلية", en: "5 Operational Sectors" },
      { ar: "14 بعثة دولية", en: "14 International Missions" },
      { ar: "الجاهزية قبل المغادرة", en: "Pre-Departure Readiness" },
    ],
    systems: [],
    recommendations: {
      ar: "اعتماد اللوحة كمرجع يومي لقرارات الجاهزية بدلاً من التقارير الورقية المتأخرة.",
      en: "The dashboard was adopted as the daily reference for readiness decisions instead of delayed paper-based reports.",
    },
  },
  {
    id: "materials-verification",
    category: "facilities",
    image: "projects/project-04-materials/cover.jpg",
    name: { ar: "تحقق صرف المواد وأوامر العمل", en: "Materials Consumption & Work Order Verification" },
    field: { ar: "إدارة المرافق", en: "Facilities Management" },
    sector: { ar: "إدارة المرافق والمشتريات", en: "Facilities Management & Procurement" },
    problem: {
      ar: "تحليل يربط المواد المصروفة بالتذاكر وأوامر العمل والأقسام، مع آلية للتحقق من استخدام المواد ووجود عمل فعلي يبرر الصرف، لضبط الهدر وتسريب الموارد.",
      en: "An analysis linking consumed materials to tickets, work orders, and departments, verifying that consumption matches actual work — to control waste and resource leakage.",
    },
    dataNature: {
      ar: "سجلات صرف مواد وتذاكر صيانة وأوامر عمل من نظام إدارة المرافق، مع فروقات في الترميز بين الأنظمة.",
      en: "Material-issue logs, maintenance tickets, and work orders from the facilities management system, with coding mismatches between systems.",
    },
    analysisSteps: {
      ar: [
        "مطابقة سجلات صرف المواد بأوامر العمل والتذاكر المرتبطة",
        "كتابة معادلات DAX لاحتساب نسبة التأكيد وحالات عدم المطابقة",
        "تصميم تقرير استثنائي يبرز المواد المصروفة دون تذكرة",
      ],
      en: [
        "Matching material-issue records against related work orders and tickets",
        "Writing DAX measures to calculate the confirmation rate and mismatch cases",
        "Designing an exception report highlighting materials issued without a ticket",
      ],
    },
    tools: ["Power BI", "DAX", "Data Cleaning"],
    metrics: [
      { ar: "نسبة التأكيد", en: "Confirmation Rate" },
      { ar: "مواد دون تذكرة", en: "Materials Without Ticket" },
      { ar: "حالات عدم المطابقة", en: "Mismatch Cases" },
    ],
    systems: [],
    recommendations: {
      ar: "التوصية بربط إلزامي بين طلب الصرف وأمر العمل مستقبلاً لمنع تكرار حالات عدم المطابقة.",
      en: "Recommended making a mandatory link between issue requests and work orders going forward, to prevent recurring mismatch cases.",
    },
  },
  {
    id: "project-budget-manpower",
    category: "operations",
    image: "projects/project-05-budget/cover.jpg",
    name: { ar: "تحليل ميزانية وقوى عاملة المشروع", en: "Project Budget & Manpower Analysis" },
    field: { ar: "إدارة المشاريع", en: "Project Management" },
    sector: { ar: "إدارة المشاريع والمرافق", en: "Project & Facilities Management" },
    problem: {
      ar: "تحليل تكلفة مشروع إدارة مرافق وحساب القوى العاملة المطلوبة بالاعتماد على المساحة والغرف والحمامات ومستويات الخدمة، لدعم تسعير العروض واتخاذ قرارات التوظيف.",
      en: "A cost analysis for a facilities project, calculating required manpower based on area, rooms, bathrooms, and service levels — supporting bid pricing and staffing decisions.",
    },
    dataNature: {
      ar: "بيانات مساحات ومرافق المبنى، ومعدلات إنتاجية القوى العاملة، وبيانات ميزانية فعلية ومخططة.",
      en: "Building area and facility data, workforce productivity rates, and actual vs. planned budget data.",
    },
    analysisSteps: {
      ar: [
        "بناء نموذج يحسب القوى العاملة المطلوبة وفق معايير الخدمة المعتمدة",
        "ربط التكلفة المحسوبة بالميزانية الفعلية لاحتساب الانحراف",
        "تصميم مؤشر التكلفة لكل متر مربع لتسهيل المقارنة بين المشاريع",
      ],
      en: [
        "Building a model calculating required manpower per approved service standards",
        "Linking calculated cost to actual budget to compute variance",
        "Designing a cost-per-square-meter indicator to ease comparison across projects",
      ],
    },
    tools: ["Power BI", "Excel", "Data Modeling"],
    metrics: [
      { ar: "تكلفة القوى العاملة", en: "Manpower Cost" },
      { ar: "الميزانية مقابل الفعلي", en: "Budget vs Actual" },
      { ar: "التكلفة لكل متر مربع", en: "Cost per m²" },
    ],
    systems: [],
    recommendations: {
      ar: "استخدام مؤشر التكلفة لكل متر مربع كمرجع أساسي عند تسعير المشاريع المشابهة مستقبلاً.",
      en: "The cost-per-square-meter indicator was adopted as the primary reference when pricing similar future projects.",
    },
  },
];

/* ---------- 3) الخدمات (تُستخدم لتمرير اسم الخدمة تلقائيًا لنموذج الطلب) ---------- */
/* sub: قائمة نقاط فرعية اختيارية توضّح تفاصيل الخدمة — لا تُضاف خدمة تدريب هنا. */
const SERVICES_DATA = [
  {
    id: "needs-assessment-meeting",
    ar: "اجتماع تحليل الاحتياج وتحديد المتطلبات",
    en: "Needs Assessment & Requirements Meeting",
    sub: [
      { ar: "فهم أهداف العمل والمشكلة الفعلية قبل البدء بأي تحليل", en: "Understanding business goals and the real problem before any analysis begins" },
      { ar: "تحديد نطاق العمل والمخرجات المتوقعة بدقة", en: "Precisely defining scope and expected deliverables" },
    ],
  },
  {
    id: "data-cleaning",
    ar: "تنظيف وتجهيز البيانات",
    en: "Data Cleaning and Preparation",
    sub: [
      { ar: "معالجة البيانات الناقصة والمكررة والأخطاء", en: "Handling missing, duplicate, and erroneous data" },
      { ar: "توحيد صيغ الأعمدة والتصنيفات بين الملفات", en: "Standardizing column formats and categories across files" },
    ],
  },
  {
    id: "data-modeling",
    ar: "بناء نموذج البيانات",
    en: "Data Modeling",
    sub: [
      { ar: "ربط الجداول ومصادر البيانات المتعددة", en: "Linking multiple tables and data sources" },
      { ar: "تصميم نموذج منظم وقابل للتوسع مستقبلاً", en: "Designing a structured, future-scalable model" },
    ],
  },
  {
    id: "kpi-design",
    ar: "تصميم مؤشرات الأداء KPI",
    en: "KPI Design and Performance Tracking",
    sub: [
      { ar: "تحديد المؤشرات المناسبة لطبيعة عملك", en: "Selecting KPIs that fit your business" },
      { ar: "مقارنة الأداء الفعلي بالمستهدف والفترات السابقة", en: "Comparing actual vs. target and prior periods" },
    ],
  },
  {
    id: "dax-development",
    ar: "كتابة وتصحيح معادلات DAX",
    en: "DAX Development and Troubleshooting",
    sub: [
      { ar: "بناء معادلات جديدة لاحتياجات تحليلية محددة", en: "Building new measures for specific analytical needs" },
      { ar: "مراجعة وتصحيح معادلات حالية بها مشكلات أو بطء", en: "Reviewing and fixing existing measures with issues or slow performance" },
    ],
  },
  {
    id: "facilities-analytics",
    ar: "تحليل بيانات إدارة المرافق",
    en: "Facilities Management Analytics",
    sub: [
      { ar: "تحليل الأصول وأوامر العمل والتذاكر والصيانة الوقائية", en: "Analyzing assets, work orders, tickets, and preventive maintenance" },
      { ar: "تحليل المواد والموردين والميزانية ومؤشرات SLA", en: "Analyzing materials, vendors, budget, and SLA indicators" },
    ],
  },
  {
    id: "power-bi-dashboards",
    ar: "إنشاء تقارير ولوحات Power BI",
    en: "Power BI Dashboard Development",
    sub: [
      { ar: "تصميم لوحات معلومات تفاعلية جاهزة لعرضها على الإدارة", en: "Designing interactive dashboards ready for management review" },
      { ar: "متابعة الأداء والمبيعات والتكاليف والعمليات والميزانيات", en: "Tracking performance, sales, costs, operations, and budgets" },
    ],
  },
  {
    id: "dashboard-improvement",
    ar: "مراجعة وتحسين تقارير Power BI الحالية",
    en: "Power BI Dashboard Review & Improvement",
    sub: [
      { ar: "مراجعة نموذج البيانات والمعادلات والأداء", en: "Reviewing the data model, formulas, and performance" },
      { ar: "تحسين التصميم وتجربة المستخدم دون إعادة البناء من الصفر", en: "Improving design and UX without rebuilding from scratch" },
    ],
  },
  {
    id: "report-automation",
    ar: "أتمتة التقارير الدورية",
    en: "Recurring Report Automation",
    sub: [
      { ar: "تقليل الوقت المستغرق في تحديث التقارير يدويًا", en: "Reducing time spent updating reports manually" },
      { ar: "إعداد آلية تحديث بيانات دورية ومنظمة", en: "Setting up a recurring, organized data-refresh process" },
    ],
  },
];

/* ---------- 4) اللغة | Language switching ---------- */
const LANG_KEY = "haninPortfolioLang";
const THEME_KEY = "haninPortfolioTheme";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "ar";
}

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  const toggle = document.querySelector(".lang-toggle");
  if (toggle) toggle.textContent = lang === "ar" ? "AR | EN" : "EN | AR";
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* المتصفح قد يمنع التخزين، لا مشكلة */ }
}

function initLang() {
  applyLang(getLang());
  const toggle = document.querySelector(".lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      applyLang(getLang() === "ar" ? "en" : "ar");
    });
  }
}

/* ---------- 5) الوضع الداكن | Dark mode ---------- */
function applyTheme(theme) {
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }
}

/* ---------- 6) قائمة الجوال | Mobile nav ---------- */
function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ---------- 7) روابط التواصل الديناميكية ---------- */
function initContactLinks() {
  document.querySelectorAll("[data-tel-link]").forEach((el) => {
    el.href = `tel:${SITE_CONFIG.phoneDisplay.replace(/\s+/g, "")}`;
  });
  document.querySelectorAll("[data-phone-text]").forEach((el) => {
    el.textContent = SITE_CONFIG.phoneDisplay;
  });
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${SITE_CONFIG.email}`;
    if (el.dataset.emailText !== undefined) el.textContent = SITE_CONFIG.email;
  });
  document.querySelectorAll("[data-linkedin-link]").forEach((el) => {
    el.href = SITE_CONFIG.linkedin;
  });
  document.querySelectorAll("[data-wa-link]").forEach((el) => {
    const lang = getLang();
    const text = encodeURIComponent(el.dataset.waText || WHATSAPP_DEFAULT_TEXT[lang]);
    el.href = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
  });
}

/* ---------- 8) زر العودة للأعلى | Back to top ---------- */
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 480);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- 9) الأسئلة المتكررة | FAQ accordion ---------- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      item.closest(".faq-list").querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });
}

/* ---------- 10) عرض المزيد من الخدمات ---------- */
function initServicesToggle() {
  const btn = document.querySelector(".services-toggle-btn");
  const more = document.querySelector(".services-more");
  if (!btn || !more) return;
  btn.addEventListener("click", () => {
    more.classList.toggle("show");
    const isShown = more.classList.contains("show");
    btn.textContent = isShown
      ? (getLang() === "ar" ? "إخفاء الخدمات" : "Show Less")
      : (getLang() === "ar" ? "جميع الخدمات" : "All Services");
  });
}

/* ---------- 11) عنصر بصري بديل احترافي (بدون أي نص مؤقت أو مسار ملف) ---------- */
/* تُستخدم هذه الدالة في كل مكان يحتاج صورة لم تُرفع بعد: بطاقات المشاريع،
   نبذة عني، الشهادات، ومعرض صور دراسة الحالة. تعرض أيقونة أنيقة متسقة مع
   الهوية البصرية دون كتابة أي مسار ملف أو تعليمة للزائر. */
function mediaPlaceholderHTML(iconType) {
  const icons = {
    photo: '<circle cx="12" cy="8" r="4"></circle><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"></path>',
    chart: '<path d="M4 20V10"></path><path d="M10 20V4"></path><path d="M16 20v-7"></path><path d="M22 20v-12"></path>',
    cert: '<circle cx="12" cy="9" r="6"></circle><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"></path>',
    report: '<rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M8 8h8M8 12h8M8 16h5"></path>',
  };
  return `<span class="media-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[iconType] || icons.report}</svg></span>`;
}

/* ---------- 12) بطاقة مشروع (HTML) ---------- */
function projectCardHTML(p) {
  const lang = getLang();
  return `
  <div class="card project-card" data-category="${p.category}">
    <div class="project-thumb">
      <span class="badge">${p.field[lang]}</span>
      ${mediaPlaceholderHTML("chart")}
    </div>
    <div class="project-body">
      <h3>${p.name[lang]}</h3>
      <p class="problem">${p.problem[lang]}</p>
      <div class="project-tags">${p.tools.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project-metrics">
        ${p.metrics.slice(0, 3).map((m) => `<div><b>${lang === "ar" ? "•" : "•"}</b>${m[lang]}</div>`).join("")}
      </div>
      <div class="project-actions">
        <a class="btn btn-outline on-light btn-sm" href="project-details.html?id=${p.id}">${lang === "ar" ? "عرض المشروع" : "View Project"}</a>
        <a class="btn btn-primary btn-sm" href="request-service.html?similarTo=${p.id}">${lang === "ar" ? "اطلب مشروعًا مشابهًا" : "Request a Similar Project"}</a>
      </div>
    </div>
  </div>`;
}

/* ---------- 13) شبكة المشاريع + الفلترة (index.html) ---------- */
function initProjectsGrid() {
  const grid = document.querySelector("#projectsGrid");
  if (!grid) return;

  function render(filter) {
    const items = filter === "all" ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === filter);
    grid.innerHTML = items.map(projectCardHTML).join("");
  }
  render("all");

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.filter);
    });
  });

  // إعادة الرسم عند تبديل اللغة حتى تظهر النصوص بلغتها الصحيحة
  document.querySelector(".lang-toggle")?.addEventListener("click", () => {
    const active = document.querySelector(".filter-btn.active");
    render(active ? active.dataset.filter : "all");
  });
}

/* ---------- 14) صفحة دراسة الحالة (project-details.html) ---------- */
function initProjectDetails() {
  const root = document.querySelector("#caseStudyRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || PROJECTS_DATA[0].id;
  const project = PROJECTS_DATA.find((p) => p.id === id) || PROJECTS_DATA[0];

  function renderCase() {
    const lang = getLang();
    document.title = `${project.name[lang]} | Hanin AlFurati`;
    root.innerHTML = `
      <div class="page-hero">
        <div class="container">
          <span class="section-eyebrow" style="color:var(--color-accent)">${project.field[lang]}</span>
          <h1>${project.name[lang]}</h1>
          <p>${project.problem[lang]}</p>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="case-toc">
            <a href="#c-problem">${lang === "ar" ? "المشكلة" : "Problem"}</a>
            <a href="#c-data">${lang === "ar" ? "طبيعة البيانات" : "Data Nature"}</a>
            <a href="#c-steps">${lang === "ar" ? "خطوات التحليل" : "Analysis Steps"}</a>
            <a href="#c-kpi">${lang === "ar" ? "المؤشرات" : "KPIs"}</a>
            <a href="#c-tools">${lang === "ar" ? "الأدوات" : "Tools"}</a>
            <a href="#c-gallery">${lang === "ar" ? "صور المشروع" : "Screenshots"}</a>
            <a href="#c-recommend">${lang === "ar" ? "النتائج والتوصيات" : "Results & Recommendations"}</a>
          </div>

          <div class="case-kpis">
            ${project.metrics.map((m) => `<div class="case-kpi"><b>${lang === "ar" ? "مؤشر" : "KPI"}</b><span>${m[lang]}</span></div>`).join("")}
          </div>

          <div class="case-section" id="c-problem">
            <h2>${lang === "ar" ? "القطاع والمشكلة" : "Sector & Problem"}</h2>
            <p class="case-sector-tag">${project.sector ? project.sector[lang] : project.field[lang]}</p>
            <p>${project.problem[lang]}</p>
          </div>
          <div class="case-section" id="c-data">
            <h2>${lang === "ar" ? "طبيعة البيانات" : "Nature of the Data"}</h2>
            <p>${project.dataNature ? project.dataNature[lang] : ""}</p>
            ${project.systems.length ? `<div class="project-tags">${project.systems.map((s) => `<span>${s}</span>`).join("")}</div>` : ""}
          </div>
          <div class="case-section" id="c-steps">
            <h2>${lang === "ar" ? "خطوات التحليل" : "Analysis Steps"}</h2>
            <ul class="case-steps-list">
              ${(project.analysisSteps ? project.analysisSteps[lang] : []).map((s) => `<li>${s}</li>`).join("")}
            </ul>
          </div>
          <div class="case-section" id="c-kpi">
            <h2>${lang === "ar" ? "مؤشرات الأداء المستخدمة" : "KPIs Used"}</h2>
            <div class="project-tags">${project.metrics.map((m) => `<span>${m[lang]}</span>`).join("")}</div>
          </div>
          <div class="case-section" id="c-tools">
            <h2>${lang === "ar" ? "الأدوات المستخدمة" : "Tools Used"}</h2>
            <div class="project-tags">${project.tools.map((t) => `<span>${t}</span>`).join("")}</div>
          </div>
          <div class="case-section" id="c-gallery">
            <h2>${lang === "ar" ? "صور المشروع" : "Project Screenshots"}</h2>
            <div class="case-gallery">
              <div class="shot">${mediaPlaceholderHTML("report")}</div>
              <div class="shot">${mediaPlaceholderHTML("report")}</div>
            </div>
          </div>
          <div class="case-section" id="c-recommend">
            <h2>${lang === "ar" ? "النتائج والتوصيات" : "Results & Recommendations"}</h2>
            <p>${project.recommendations ? project.recommendations[lang] : ""}</p>
          </div>

          <div class="text-center" style="margin-top:40px">
            <a class="btn btn-primary" href="request-service.html?similarTo=${project.id}">${lang === "ar" ? "اطلب مشروعًا مشابهًا" : "Request a Similar Project"}</a>
          </div>
        </div>
      </section>`;
    initContactLinks();
  }

  renderCase();
  document.querySelector(".lang-toggle")?.addEventListener("click", renderCase);
}

/* ---------- 15) نموذج طلب الخدمة (request-service.html) ---------- */
function initRequestForm() {
  const form = document.querySelector("#requestForm");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");
  const similarTo = params.get("similarTo");
  const serviceSelect = form.querySelector("#field-service");

  if (serviceSelect) {
    SERVICES_DATA.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = getLang() === "ar" ? s.ar : s.en;
      if (s.id === serviceParam) opt.selected = true;
      serviceSelect.appendChild(opt);
    });
  }
  if (similarTo) {
    const project = PROJECTS_DATA.find((p) => p.id === similarTo);
    const descField = form.querySelector("#field-description");
    if (project && descField && !descField.value) {
      const lang = getLang();
      descField.value =
        lang === "ar"
          ? `أرغب في مشروع مشابه لـ "${project.name.ar}".`
          : `I would like a project similar to "${project.name.en}".`;
    }
  }

  const statusEl = form.querySelector(".form-status");

  function buildWhatsAppMessage() {
    const lang = getLang();
    const get = (id) => (form.querySelector(`#${id}`)?.value || "").trim();
    const lines =
      lang === "ar"
        ? [
            "مرحبًا حنين،",
            "أرغب في طلب خدمة تحليل بيانات.",
            `الاسم: ${get("field-name")}`,
            `الجهة/الشركة: ${get("field-company")}`,
            `القطاع: ${get("field-sector")}`,
            `الخدمة المطلوبة: ${form.querySelector("#field-service")?.selectedOptions[0]?.textContent || ""}`,
            `هدف التقرير: ${get("field-goal")}`,
            `نوع ملفات البيانات: ${get("field-datatype")}`,
            `عدد مصادر البيانات: ${get("field-sources-count")}`,
            `يوجد تقرير حالي؟: ${form.querySelector("#field-existing")?.selectedOptions[0]?.textContent || ""}`,
            `عدد المستخدمين المتوقع: ${get("field-users")}`,
            `الموعد المطلوب: ${get("field-delivery-date")}`,
            `الميزانية التقريبية: ${get("field-budget")}`,
            `وصف المشروع: ${get("field-description")}`,
            `وسيلة التواصل المفضلة: ${form.querySelector("#field-contact-method")?.selectedOptions[0]?.textContent || ""}`,
          ]
        : [
            "Hello Hanin,",
            "I would like to request a data analytics service.",
            `Name: ${get("field-name")}`,
            `Company/Entity: ${get("field-company")}`,
            `Sector: ${get("field-sector")}`,
            `Requested Service: ${form.querySelector("#field-service")?.selectedOptions[0]?.textContent || ""}`,
            `Report Goal: ${get("field-goal")}`,
            `Data File Type: ${get("field-datatype")}`,
            `Number of Data Sources: ${get("field-sources-count")}`,
            `Existing Dashboard?: ${form.querySelector("#field-existing")?.selectedOptions[0]?.textContent || ""}`,
            `Expected User Count: ${get("field-users")}`,
            `Expected Delivery Date: ${get("field-delivery-date")}`,
            `Approximate Budget: ${get("field-budget")}`,
            `Project Description: ${get("field-description")}`,
            `Preferred Contact Method: ${form.querySelector("#field-contact-method")?.selectedOptions[0]?.textContent || ""}`,
          ];
    return lines.join("\n");
  }

  form.querySelector("#sendWhatsappBtn")?.addEventListener("click", () => {
    const text = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`, "_blank");
  });

  // التحقق من نوع ملف عينة البيانات (اختياري) — منع أي صيغ تنفيذية أو خطرة
  const ALLOWED_FILE_EXT = [".csv", ".xlsx", ".xls", ".txt", ".pdf", ".png", ".jpg", ".jpeg"];
  const fileInput = form.querySelector("#field-datasample");
  fileInput?.addEventListener("change", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    const nameLower = file.name.toLowerCase();
    const isAllowed = ALLOWED_FILE_EXT.some((ext) => nameLower.endsWith(ext));
    if (!isAllowed) {
      fileInput.value = "";
      statusEl.className = "form-status error";
      statusEl.textContent =
        getLang() === "ar"
          ? "صيغة الملف غير مسموحة. الصيغ المقبولة: CSV, Excel, TXT, PDF, PNG, JPG."
          : "This file type isn't allowed. Accepted types: CSV, Excel, TXT, PDF, PNG, JPG.";
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!SITE_CONFIG.formspreeEndpoint) {
      statusEl.className = "form-status error";
      statusEl.textContent =
        getLang() === "ar"
          ? "الإرسال المباشر غير مُفعّل بعد. يرجى استخدام زر (إرسال عبر واتساب) بالأسفل."
          : "Direct submission isn't enabled yet. Please use the WhatsApp button below.";
      return;
    }
    try {
      const res = await fetch(SITE_CONFIG.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        statusEl.className = "form-status success";
        statusEl.textContent =
          getLang() === "ar"
            ? "تم استلام طلبك بنجاح. سيتم التواصل معك خلال يوم إلى يومي عمل."
            : "Your request has been received. You'll hear back within 1–2 business days.";
        form.reset();
      } else {
        throw new Error("submit_failed");
      }
    } catch (err) {
      statusEl.className = "form-status error";
      statusEl.textContent = getLang() === "ar" ? "حدث خطأ أثناء الإرسال، جرّبي زر واتساب." : "Something went wrong. Please try the WhatsApp button.";
    }
  });
}

/* ---------- 16) نقطة البداية | Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLang();
  initNavToggle();
  initContactLinks();
  initBackToTop();
  initFaq();
  initServicesToggle();
  initProjectsGrid();
  initProjectDetails();
  initRequestForm();

  // إعادة ربط روابط التواصل عند تبديل اللغة (لأن نص رسالة واتساب يتغيّر)
  document.querySelector(".lang-toggle")?.addEventListener("click", initContactLinks);
});
