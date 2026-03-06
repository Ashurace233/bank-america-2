# How to Change the Logo

The site logo appears in the header on every page. To use your own logo:

## Option 1: Replace the file (easiest)

1. **Use the correct filename:** `logo.png` (or `logo.svg`)
2. **Put your file in the `public` folder:**  
   `bank-of-dreams-main/public/logo.png`
3. **Refresh the site.** The app loads `logo.png` first; no code change needed.

Recommended: **PNG or SVG with transparent background**. Suggested height about 32–40px (width can be auto).

## Option 2: Use a different filename

1. Add your image to `public/`, e.g. `public/my-logo.png`.
2. In the code, set the logo path to your file:
   - **`src/components/SiteLogo.tsx`** – change:
     - `const LOGO_URL = "/logo.png"` → `const LOGO_URL = "/my-logo.png"`
   - **`src/components/PublicLayout.tsx`** – if it uses a local `LOGO_URL`, change it to `"/my-logo.png"` or use `<SiteLogo />` from `SiteLogo.tsx`.
   - **`src/components/DashboardLayout.tsx`** – same as above.
   - **`src/pages/Login.tsx`** – same as above.

## If the logo doesn’t show

- Check that the file is in **`public`**, not `src`. Files in `public` are served from the root (e.g. `/logo.png`).
- If the image has a dark/black background, it might blend into the page. Use a **transparent background** or a white-background logo for best results.
- The app falls back to **`/boa-logo.svg`** if `logo.png` fails to load. Ensure `public/boa-logo.svg` exists if you want a fallback.

## How to increase or decrease the logo size

The logo size is controlled by the **className** passed to `<SiteLogo />`.

- **Where to change it:**
  - **Public pages (home, banking, etc.):** `src/components/PublicLayout.tsx` — find `<SiteLogo className="h-10 object-contain" />` and change `h-10` (e.g. `h-12` for bigger, `h-8` for smaller).
  - **Logged-in header:** `src/components/DashboardLayout.tsx` — find `<SiteLogo className="h-9 object-contain" />` and change `h-9` (e.g. `h-10` or `h-12` for bigger).
  - **Login page:** `src/pages/Login.tsx` — find `<SiteLogo className="h-8 object-contain" />` and change `h-8`.

- **Tailwind height classes:** `h-6` (24px), `h-8` (32px), `h-9` (36px), `h-10` (40px), `h-12` (48px). Keep `object-contain` so the image keeps its proportions.

## Summary

| Goal              | Action                                              |
|-------------------|-----------------------------------------------------|
| Use my own logo   | Put `logo.png` (or `logo.svg`) in `public/`         |
| Different name    | Put file in `public/`, set `LOGO_URL` to `/filename` in `SiteLogo.tsx` (and any other place that defines the logo path). |
| Fix invisible logo| Use transparent or light-background image; keep file in `public/`. |
| **Change logo size** | Edit the `className` on `<SiteLogo />` in PublicLayout, DashboardLayout, or Login (e.g. `h-10` → `h-12` for larger). |
