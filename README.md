# JavaScript Image Gallery

## Files
- `index.html`: page structure and image event handlers
- `style.css`: layout and styling
- `script.js`: `upDate()` and `undo()` functions

## Run locally
Open `index.html` in a browser. The images are loaded from Unsplash, so an internet connection is needed for the photos.

## Publish with GitHub Pages
1. Create a **Public** repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/(root)`, then save.
5. Wait for deployment and open the published URL.

## What the JavaScript does
- `upDate(previewPic)` logs the event and image details, updates the preview text with the image's `alt` text, and changes the preview background.
- `undo()` clears the background image and restores the original message.
- Mouse and keyboard focus events are both supported.
