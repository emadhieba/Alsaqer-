# Alsaqer African Automobile Club – Landing Site (Angular 17+)

Landing site for **Alsaqer African Automobile Club (نادي الصقر الإفريقي للسيارات)**, built with **Angular 17+ (standalone components)** and **TailwindCSS**, with RTL support and full Arabic content.

All typography uses the **Cairo** Google Font, and the primary brand colors are **black & gold**.

---

## 1. Install dependencies – `npm install`

From the project root:

```bash
npm install
```

This installs Angular, TailwindCSS, and all required packages.

---

## 2. Run locally – `ng serve`

After installation completes:

```bash
npx ng serve
```

Then open:

```text
http://localhost:4200/
```

The site runs in RTL mode by default, with a fixed navigation bar and the following pages:

- `/` Home
- `/services` Our Services
- `/about` About the Club
- `/contact` Contact Us

---

## 3. Change the WhatsApp number

The current WhatsApp number is:

```text
201069822661
```

To change it:

1. Open the project in VS Code or Cursor.
2. Search for:

```text
201069822661
```

3. Update the number in all results (found in WhatsApp buttons in `navbar`, `home`, `services`, `contact`, and the floating WhatsApp button).

You can also update the WhatsApp link directly if needed:

```text
https://wa.me/201069822661
```

Replace it with your new number in the same international format (without the `+` sign).

---

## 4. Replace the logo

Logo file paths:

```text
src/assets/images/logo.png
src/assets/images/logo-dark.png
```

To replace the logo:

1. Prepare your image file(s) in `png` format (one file for both, or separate versions).
2. Name the files:
   - `logo.png`
   - `logo-dark.png`
3. Copy them to:

```text
src/assets/images/
```

Usage:

- `logo.png` — used in the hero section and some intro areas.
- `logo-dark.png` — used in the footer on the dark background.

---

## 5. Add a real Google Maps embed

On the **Contact Us** page, there is a map section with a ready-made `iframe` in:

```text
src/app/app/pages/contact/contact/contact.html
```

In the last section you will find a comment in the code:

```html
<!-- Replace src with your actual Google Maps embed link -->
<iframe
  ...
  src="https://www.google.com/maps/embed?pb=..."
></iframe>
```

### Steps:

1. Open Google Maps and locate your actual address.
2. Click **Share**, then **Embed a map**.
3. Copy the `src` URL from the embed code Google provides.
4. Paste that URL as the `src` value in the `iframe`.

---

## 6. Production build – `ng build`

To create a production build:

```bash
npx ng build
```

The deployable files will be output to:

```text
dist/
```

You can deploy the contents of the generated app folder (usually `dist/alsaqer-club`) to any web server (Nginx, Apache, or a static hosting service).

---

### Quick technical notes

- **TailwindCSS** is configured with custom colors:
  - `gold.DEFAULT = #C9A84C`
  - `gold.light = #e8c96e`
  - `gold.dark = #a8893c`
  - `dark.DEFAULT = #0d0d0d`
  - `dark.card = #1a1a1a`
  - `dark.border = #2a2a2a`
- The default font is **Cairo**, loaded via `src/styles.css`.
- The floating WhatsApp button can be edited in:
  - `src/app/app/components/whatsapp-button/whatsapp-button/whatsapp-button.html`
