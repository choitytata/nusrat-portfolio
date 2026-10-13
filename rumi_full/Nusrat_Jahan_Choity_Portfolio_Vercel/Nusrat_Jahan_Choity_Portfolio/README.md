# Nusrat Jahan Choity — Interactive Portfolio

A static, Vercel-ready pixel-art portfolio. No database or environment variables are required.

## Run locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

You can also open `dist/index.html` directly, although the local server is recommended.

## Add project thumbnails

Put six JPG images inside `dist/assets/projects/` using these exact names:

- `paradox.jpg`
- `shodai-ghor.jpg`
- `drain-sense.jpg`
- `nlp-classifier.jpg`
- `social-navigation.jpg`
- `pet-adoption.jpg`

Recommended size: 1200 × 675 pixels (16:9). Until an image is added, the portfolio automatically shows the included placeholder artwork.

## Edit content

- Main portfolio copy and links: `dist/index.html`
- Experience card interactions: `dist/app.js`
- Colors, layout and responsive design: `dist/styles.css`
- Character artwork: `dist/assets/characters.png`
- Downloadable CV: `dist/assets/Nusrat-Jahan-Choity-CV.docx`

## Deploy with Vercel

### Vercel website

1. Upload this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep Framework Preset as **Other**.
4. The Output Directory is already configured as `dist` in `vercel.json`.
5. Select **Deploy**.

### Vercel CLI

1. Run `npm install -g vercel`.
2. Run `vercel` inside this folder.
3. Follow the prompts. Use `dist` as the output directory if asked.
4. Run `vercel --prod` when ready for production.


## Updated interactive modes (October 2026)

The landing page has **Story Mode** and **Game Mode**. Story Mode opens the original five portfolio chapters with a playable mini Remi companion at the bottom of the page. Game Mode also exposes the mini platformer on the start page and keeps it available while browsing the chapters. Use **Left/Right Arrow** to move and **Up Arrow/Space** to jump; on mobile, use the on-screen buttons. Boxes and gaps are hazards, and you have three hearts. **RESET** restarts the mini game. Game progress is deliberately independent of your portfolio's chapter navigation.

The outfit buttons change clothing pixels only. The original hair, skin, face and other artwork remain unchanged. All three artwork variants are stored in `dist/assets/characters/remi-*.png` and are generated from the original character sprite.

The bottom-right sound toggle plays an original synthesized chiptune using Web Audio, without external MP3 files. Audio begins only after the user clicks **SOUND: OFF**.

### Start on Windows (VS Code PowerShell)

Open the **inner** `Nusrat_Jahan_Choity_Portfolio` folder containing `package.json`, then:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed in the terminal (usually `http://localhost:3000`). No build command is needed: Vercel deploys the existing `dist` directory. Do not upload `node_modules` to source control.
