<!-- Copilot / AI agent instructions for the `wooing` repo -->
# Copilot instructions — wooing (student webdev exercises)

This repository is a collection of small, static web exercises (HTML/CSS/JS) organized by day. The goal for an AI coding agent is to make small, focused edits to individual exercises without changing global layout or unrelated days.

Quick contract for AI edits
- Inputs: a specific exercise folder/file (e.g. `day09/ex02/index.html`, `day09/ex02/main.css`, `day09/ex02/index.js`).
- Outputs: minimal, well-scoped changes that leave other day folders and the root `index.html` unchanged.
- Error modes: breaking relative paths, renaming files without updating references, changing global styles that alter unrelated pages.

Key files and patterns (examples)
- Root entry: `index.html` — main landing page (do not change unless requested).
- Per-day folders: `day01/`, `day02/`, ..., `day09/` — each contains one or more exercises.
  - Single-file exercises sometimes live as `exNN.html` (e.g. `day02/ex01.html`).
  - Multi-file exercises use a folder with `index.html`, `index.js` and `main.css` (e.g. `day09/ex02/index.html`, `day09/ex02/index.js`, `day09/ex02/main.css`).
- Tests: `test/test01.html` — standalone manual test page.
- Repo README: `readme.md` (contains author metadata only).

Conventions to follow
- Edit only files inside the target exercise folder. For example, to change styling in exercise 2 of day 9, edit `day09/ex02/main.css` and `day09/ex02/index.js` only.
- Use relative paths exactly as written in each `index.html`. Many pages reference `index.js` and `main.css` by filename (no `./` prefix). Keep links relative and local.
- Do not add build tools or new dependencies to the repo unless the user explicitly asks. This is a static site — prefer simple changes.

Dev / preview workflow (no build)
- These are static pages; preview by opening the HTML file in a browser or run a short-lived local server. Examples (PowerShell):

```powershell
# Serve current folder at http://localhost:8000
python -m http.server 8000
# Or, if Node.js is available, from repo root:
# npx http-server . -p 8000
```

Debugging tips
- Use browser DevTools console for JS errors and the Network tab to verify static file paths.
- If an exercise fails to load CSS/JS, check `index.html` for the script/link tags and ensure their filenames match the files in the folder.
- Keep changes minimal: avoid global CSS selector edits that may affect other days.

Commit and PR guidance for AI agents
- Make focused commits with a single purpose. Use commit subject format: `fix(day09/ex02): <short description>` or `feat(day03): <short description>`.
- Do not modify files outside the targeted day/exercise folder unless the task explicitly requires a global change.

Examples of good edits
- Small styling tweak: change color or layout in `day09/ex02/main.css`.
- Bugfix: fix a DOM selector in `day09/ex02/index.js` to match an element in `day09/ex02/index.html`.

What not to do
- Don't introduce build steps, package manifests, or bundlers without explicit instruction.
- Don't rename files referenced by HTML without updating the references.

If anything is unclear or you need permission to make a cross-cutting change (for example, modify `index.html` or add a tool), ask the repo owner before proceeding.

---
If you'd like, I can: (a) expand this with per-day quick notes (if you want exercises summarized), or (b) add basic smoke tests that open an exercise and check that linked CSS/JS are served.
