# موقع حنين الفراتي | Hanin AlFurati Data Analytics Portfolio

موقع إلكتروني ثنائي اللغة (عربي/إنجليزي) بدون Backend، مبني بـ HTML وCSS وJavaScript خالص، جاهز للنشر المجاني على GitHub Pages.

---

## 1) تشغيل الموقع محليًا (على جهازك)

لا يحتاج الموقع أي تثبيت. فقط:

1. افتحي مجلد المشروع.
2. انقري نقرًا مزدوجًا على ملف `index.html` ليُفتح في المتصفح.

أو (أفضل، لتجربة أقرب للواقع، خصوصًا إن استخدمتِ VS Code):

1. ثبّتي إضافة **Live Server** في VS Code.
2. افتحي مجلد المشروع في VS Code.
3. اضغطي بزر الفأرة الأيمن على `index.html` واختاري **Open with Live Server**.

---

## 2) إنشاء Repository في GitHub

1. سجّلي الدخول إلى [github.com](https://github.com).
2. اضغطي **New repository**.
3. اسم المستودع المقترح: `hanin-alfurati-portfolio` (أو أي اسم تفضّلينه).
4. اختاري **Public**.
5. لا تُفعّلي إضافة README أو .gitignore تلقائيًا (الملفات جاهزة لديك).
6. اضغطي **Create repository**.

---

## 3) رفع الملفات

### الطريقة الأسهل (بدون سطر أوامر):
1. من صفحة المستودع الجديد، اضغطي **uploading an existing file**.
2. اسحبي جميع ملفات ومجلدات المشروع (بما فيها `assets`، `images`، `projects`، `documents`).
3. اكتبي رسالة Commit مثل: `رفع الموقع لأول مرة`.
4. اضغطي **Commit changes**.

### عبر سطر الأوامر (Git):
```bash
cd hanin-alfurati-portfolio
git init
git add .
git commit -m "رفع الموقع لأول مرة"
git branch -M main
git remote add origin https://github.com/USERNAME/hanin-alfurati-portfolio.git
git push -u origin main
```
استبدلي `USERNAME` باسم حسابك على GitHub.

---

## 4) تفعيل GitHub Pages

1. داخل صفحة المستودع، اذهبي إلى **Settings**.
2. من القائمة الجانبية اختاري **Pages**.
3. تحت **Build and deployment** > **Source** اختاري **Deploy from a branch**.
4. اختاري Branch: `main` والمجلد: `/ (root)`.
5. اضغطي **Save**.

---

## 5) الحصول على رابط الموقع النهائي

بعد دقيقة أو دقيقتين من الحفظ، سيظهر في نفس صفحة **Pages** رابط بالشكل:

```
https://USERNAME.github.io/hanin-alfurati-portfolio/
```

هذا هو رابط موقعك الجاهز للمشاركة في LinkedIn والسيرة الذاتية.

---

## 6) تغيير معلومات التواصل (الأهم)

كل بيانات التواصل مجمّعة في **مكان واحد فقط**: أعلى ملف `script.js`، داخل الكائن `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  phoneDisplay: "+966 5X XXX XXXX",   // رقم الجوال الظاهر في الموقع
  whatsappNumber: "9665XXXXXXXX",     // رقم واتساب بصيغة دولية بدون + وبدون صفر البداية
  email: "example@email.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  formspreeEndpoint: "",              // اُنظري القسم 12 أدناه
};
```

عدّلي القيم الأربع الأولى فقط، واحفظي الملف. كل الأزرار (اتصال، واتساب، بريد، LinkedIn) في كل صفحات الموقع ستتحدّث تلقائيًا.

---

## 7) كيفية إنشاء رابط واتساب

لا حاجة لإنشائه يدويًا — بمجرد وضع رقمك في `SITE_CONFIG.whatsappNumber`، يبني `script.js` رابط واتساب تلقائيًا بالصيغة:

```
https://wa.me/[رقمك]?text=[رسالة مُعدّة مسبقًا]
```

إن أردتِ صياغة رسالة الواتساب الافتراضية بنفسك، عدّلي `WHATSAPP_DEFAULT_TEXT` أسفل `SITE_CONFIG` في نفس الملف.

---

## 8) تغيير البريد الإلكتروني وLinkedIn

نفس مكان القسم 6 — غيّري `email` و`linkedin` داخل `SITE_CONFIG` في `script.js`.

---

## 9) إضافة مشروع جديد (دراسة حالة)

كل المشاريع مصدرها كائن واحد اسمه `PROJECTS_DATA` في `script.js`. لإضافة مشروع:

1. انسخي عنصرًا كاملًا من `PROJECTS_DATA` (من `{` إلى `}`).
2. الصقيه قبل القوس الأخير `]` من نفس المصفوفة.
3. عدّلي القيم:
   - `id`: معرّف فريد بالإنجليزية بدون مسافات (يُستخدم في الرابط).
   - `category`: واحدة من `facilities` / `operations` / `hr` (تُستخدم في فلترة المشاريع).
   - `image`: مسار صورة الغلاف داخل مجلد `projects/`.
   - `name` / `field` / `problem`: نص عربي (`ar`) وإنجليزي (`en`).
   - `tools`: قائمة الأدوات المستخدمة.
   - `metrics`: أبرز 2-3 مؤشرات.
4. احفظي الملف — سيظهر المشروع تلقائيًا في شبكة المشاريع بالصفحة الرئيسية، وستُنشأ له صفحة دراسة حالة تلقائيًا عبر الرابط:
   `project-details.html?id=المعرّف-الذي-اخترتِه`

---

## 10) تغيير صور المشاريع

1. أنشئي مجلدًا فرعيًا لكل مشروع داخل `projects/` (موجودة مسبقًا لأول 5 مشاريع).
2. ضعي صورة الغلاف وأي صور تقرير داخله.
3. حدّثي مسار `image` الخاص بالمشروع في `PROJECTS_DATA` داخل `script.js`.
4. لصور دراسة الحالة التفصيلية، استبدلي عناصر `<div class="shot">` النائبة داخل قسم `case-gallery` في `initProjectDetails()` بوسم `<img>` حقيقي يشير لمسار الصورة.

**تنبيه مهم:** لا تضعي أي صورة تحتوي بيانات عميل حقيقية أو حساسة (اسم شركة، أرقام مالية، شعارات بدون إذن) — راجعي `privacy.html`.

---

## 11) إضافة السيرة الذاتية (CV)

1. ضعي ملف الـ PDF داخل مجلد `documents/` (مثلًا `documents/Hanin-AlFurati-CV.pdf`).
2. أضيفي رابطًا له في أي مكان تريدينه، مثال:
   ```html
   <a href="documents/Hanin-AlFurati-CV.pdf" target="_blank">تحميل السيرة الذاتية</a>
   ```
3. **لا** يُرفع أي CV أو ملف يحتوي بيانات شخصية لعميل إلى GitHub — فقط سيرتك الذاتية أنتِ، وبموافقتك.

---

## 12) ربط نموذج الطلب بخدمة استقبال بريد (Formspree)

الموقع بدون Backend، لذلك نموذج "طلب خدمة" يحتاج خدمة خارجية مجانية لاستقبال الطلبات في بريدك:

1. أنشئي حسابًا مجانيًا على [formspree.io](https://formspree.io).
2. أنشئي **New Form** واربطيه ببريدك الإلكتروني.
3. انسخي رابط الـ Endpoint الذي يعطيكِ إياه Formspree (يشبه `https://formspree.io/f/xxxxxxx`).
4. الصقيه داخل `script.js`:
   ```js
   formspreeEndpoint: "https://formspree.io/f/xxxxxxx",
   ```
5. احفظي وارفعي التحديث إلى GitHub.

إلى أن تُفعّلي هذه الخطوة، سيبقى زر **"إرسال عبر واتساب"** يعمل دائمًا كبديل فوري بدون أي إعداد.

---

## 13) ربط Google Analytics لاحقًا (اختياري)

1. أنشئي خاصية على [analytics.google.com](https://analytics.google.com) واحصلي على كود القياس (Measurement ID) بالشكل `G-XXXXXXX`.
2. أضيفي داخل وسم `<head>` في كل صفحة (`index.html`، `privacy.html`... إلخ) الكود الذي يوفّره Google مباشرة قبل `</head>`.

---

## 14) إضافة نطاق Domain خاص لاحقًا (اختياري)

1. اشتري نطاقًا (مثل `haninalfurati.com`) من أي مزوّد.
2. من إعدادات DNS للنطاق، أضيفي سجل CNAME يشير إلى `USERNAME.github.io`.
3. في GitHub، اذهبي إلى **Settings > Pages > Custom domain** واكتبي النطاق.
4. فعّلي **Enforce HTTPS** بعد ظهور الخيار.

---

## ملاحظات ختامية مهمة

- لا يوجد أي مفتاح API أو معلومة سرية داخل ملفات الموقع.
- لا تُرفع بيانات عملاء حقيقية إلى GitHub تحت أي ظرف — راجعي `privacy.html`.
- كل الأرقام في قسم الإنجازات وكل الشهادات المعروضة هي فقط ما تم تزويدي به؛ عند تحديثها استبدليها بأرقام معتمدة وموثّقة فقط.
- بنية الملفات:

```
hanin-alfurati-portfolio/
├── index.html              (الصفحة الرئيسية — كل الأقسام الرئيسية)
├── request-service.html    (نموذج طلب خدمة)
├── project-details.html    (قالب دراسة حالة موحّد لكل المشاريع)
├── privacy.html            (سياسة الخصوصية)
├── terms.html               (شروط الخدمة)
├── style.css                (كل الأنماط والألوان والخطوط)
├── script.js                 (بيانات المشاريع/الخدمات + كل التفاعلات)
├── assets/                   (خطوط وأيقونات)
├── images/                   (صورة شخصية، Hero، Open Graph، شهادات)
├── projects/                 (صور كل مشروع)
└── documents/                (السيرة الذاتية عند إضافتها)
```
