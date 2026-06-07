# نادي الصقر الإفريقي للسيارات – موقع تعريفي (Angular 17+)

Landing site for **نادي الصقر الإفريقي للسيارات – The African Falcon Automobile Club**, built with **Angular 17+ (standalone components)** and **TailwindCSS**, RTL and fully Arabic.

All typography uses the **Cairo** Google Font and the primary brand colors are **black & gold**.

---

## 1. تثبيت الحزم – `npm install`

من جذر المشروع:

```bash
npm install
```

سيقوم هذا الأمر بتثبيت Angular و TailwindCSS وجميع الحزم المطلوبة.

---

## 2. تشغيل المشروع محلياً – `ng serve`

بعد اكتمال التثبيت:

```bash
npx ng serve
```

ثم انتقل إلى:

```text
http://localhost:4200/
```

الموقع يعمل بوضع RTL افتراضياً، مع شريط تنقل ثابت، وصفحات:

- `/` الرئيسية
- `/services` خدماتنا
- `/about` عن النادي
- `/contact` تواصل معنا

---

## 3. تغيير رقم واتساب

رقم واتساب الحالي هو:

```text
201069822661
```

لتغييره:

1. افتح المشروع في VS Code أو Cursor.
2. نفّذ بحثاً عن النص:

```text
201069822661
```

3. عدّل الرقم في جميع النتائج (يوجد في أزرار واتساب في `navbar`, `home`, `services`, `contact`, و زر واتساب العائم).

يمكنك أيضاً تعديل رابط واتساب مباشرة (إن أردت):

```text
https://wa.me/201069822661
```

إلى رقمك الجديد بنفس الصيغة الدولية (بدون +).

---

## 4. استبدال الشعار (Logo)

مسار ملفات الشعار:

```text
src/assets/images/logo.png
src/assets/images/logo-dark.png
```

لاستبدال الشعار:

1. جهّز ملفي صورة (أو نسخة واحدة تستخدمها لكليهما) بصيغة `png`.
2. سمِّ الملفات بنفس الأسماء:
   - `logo.png`
   - `logo-dark.png`
3. انسخها إلى المجلد:

```text
src/assets/images/
```

يُستخدم:

- `logo.png` في الهيرو وبعض أقسام التعريف.
- `logo-dark.png` في الفوتر على الخلفية الداكنة.

---

## 5. إضافة خريطة Google Maps الحقيقية

في صفحة **تواصل معنا**، يوجد قسم خريطة مع `iframe` جاهز في:

```text
src/app/app/pages/contact/contact/contact.html
```

داخل القسم الأخير سترى تعليقاً في الكود:

```html
<!-- Replace src with your actual Google Maps embed link -->
<iframe
  ...
  src="https://www.google.com/maps/embed?pb=..."
></iframe>
```

### الخطوات:

1. افتح Google Maps وحدد موقعك الفعلي.
2. من القائمة اختر "مشاركة" ثم "تضمين خريطة" (Embed Map).
3. انسخ رابط الـ `src` من كود التضمين الذي تعطيك إياه Google.
4. الصق هذا الرابط مكان قيمة `src` الحالية في الـ `iframe`.

---

## 6. بناء المشروع للإنتاج – `ng build`

لبناء نسخة إنتاجية (Production build):

```bash
npx ng build
```

الملفات الجاهزة للنشر ستظهر في:

```text
dist/
```

يمكنك نشر محتويات مجلد التطبيق الناتج (عادةً `dist/alsaqer-club`) على أي خادم ويب (Nginx, Apache، أو خدمة استضافة ملفات ثابتة).

---

### ملاحظات تقنية سريعة

- تم تفعيل **TailwindCSS** مع الألوان المخصصة:
  - `gold.DEFAULT = #C9A84C`
  - `gold.light = #e8c96e`
  - `gold.dark = #a8893c`
  - `dark.DEFAULT = #0d0d0d`
  - `dark.card = #1a1a1a`
  - `dark.border = #2a2a2a`
- الخط الافتراضي هو **Cairo** عبر `src/styles.css`.
- زر واتساب العائم يمكن تعديله في:
  - `src/app/app/components/whatsapp-button/whatsapp-button/whatsapp-button.html`
