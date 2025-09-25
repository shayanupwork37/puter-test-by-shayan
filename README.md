# Puter.js Chat Demo (Generated from prompt.md) 

This is a minimal open-source demo chat application that calls `puter.ai.chat()` from the browser.

## Hosted on Puter Link
https://test-by-shayan.puter.site/

## What I used
- **Prompt source**: the uploaded `prompt.md` documentation you provided. :contentReference[oaicite:0]{index=0}
- **AI tool used to generate this project**: **GPT-5 Thinking mini (this assistant)** — I used the uploaded `prompt.md` to generate the code here directly in this environment.

## How I completed the task
1. Downloaded and reviewed the `prompt.md` file provided.  
2. Used an AI tool (GPT-5 Thinking mini) to generate a simple AI chat web app using **Puter.js**.  
3. Created a `README.md`, `LICENSE` (MIT), and the required source files.  
4. Hosted and tested the app through Puter’s **Dev Center → Website** option, confirming that messages work after authentication.  
5. Prepared the repo files for GitHub publishing so the project can be verified.  

## Files
- `index.html` — static single-page demo (includes Puter.js script).
- `styles.css` — minimal styling.
- `main.js` — frontend logic that calls `puter.ai.chat()`.
- `prompt.md` — the original prompt/documentation you provided (included for traceability).
- `LICENSE` — MIT license.

## Notes & Issues encountered
1. I generated this project locally using the `prompt.md` you uploaded; I did **not** call an external AI agent (Claude/Gemini/ChatGPT) because this environment cannot run third-party AI tools or publish to GitHub on your behalf.  
2. The prompt documentation requires including a link to `https://developer.puter.com` in the footer — this is included in `index.html` as **Powered by Puter**. :contentReference[oaicite:1]{index=1}  
3. `puter.ai.chat()` may require the user to be signed into Puter or for the app to be registered and hosted via Puter for full access/authentication. If you see permission/auth errors, try signing into Puter in your browser or hosting the page with Puter hosting (`puter.hosting.create()` / `puter.apps.create()`).  
4. **Known issue — first request error:**  
   - On the very first message after load, the API may return:  
     ```json
     { "message": "Missing authentication token.", "code": "token_missing" }
     ```  
   - This happens because the Puter session token isn’t ready yet.  
   - After login/session sync, subsequent requests work fine.  
   - Workaround: Sign in at [puter.com](https://puter.com) before using the app and retry if the first request fails.  
5. I could not publish a GitHub repository from this environment; you must push the generated files to your own GitHub account (instructions below).  

## How to run locally
1. Unzip the archive (if zipped) or copy files into a folder.
2. Open `index.html` in a modern browser.
3. Type a message and press Enter.

> If `puter.ai.chat()` returns an authentication error, sign into Puter in the same browser session and try again.

## How to publish to GitHub
```bash
git init
git add .
git commit -m "Initial commit — Puter.js chat demo (from prompt.md)"
# Create a GitHub repo (replace <your-username>)
gh repo create puterjs-chat --public --source=. --remote=origin --push
# OR manually create a repo on github.com and push:
git remote add origin https://github.com/<your-username>/puterjs-chat.git
git push -u origin main
