# Chandrasekar A — Developer Portfolio

A responsive React + Vite portfolio with a CSS 3D floating laptop hero, scroll reveals, project cards, experience timeline, skills, and recruiter-focused contact links.

## Requirements
- Node.js 18 or newer (Node.js 20 LTS recommended)
- VS Code (or another editor)
- Internet connection for Google Fonts; the site otherwise uses local CSS and components.

## Run locally
1. Extract the ZIP.
2. Open the extracted `chandrasekar-portfolio` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy to Netlify
- Push the project to your own GitHub repository.
- In Netlify, import the repository.
- Build command: `npm run build`
- Publish directory: `dist`

## Add your profile photo later
The current hero uses a custom CSS 3D laptop scene and does not pretend the laptop image is your portrait. To add a portrait, create `public/images/profile.jpg` and add a portrait element in `src/App.jsx` where you want it. Use your own photo only.

## Resume download
Place your latest PDF at:
`public/Chandrasekar_A_Python_FullStack_Resume.pdf`

The hero's Download Resume button points to that path. If the PDF is not present, add it before sharing the portfolio.

## Important customization before applying
- Confirm that the experience dates and descriptions match your final resume.
- Add verified repository/demo URLs to project cards only when ready.
- The contact button uses `mailto:`. The Copy Email button uses the browser clipboard when permitted.
- The site does not currently submit contact form data to a server.
- Do not publish secrets, private credentials, or API keys.
