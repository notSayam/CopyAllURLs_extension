# Tab URL Copier

A simple Chrome extension that copies URLs from all your open tabs with a single click.

## Features

- Copy URLs from all open Chrome tabs instantly
- Choose from multiple output formats:
  - Plain text URLs (one per line)
  - Markdown links with page titles
  - HTML links with page titles
- Easy to use with a simple popup interface

## Installation Guide

### Step 1: Download the Extension Files

1. Create a new folder on your computer named "TabURLCopier"
2. Create the following files in that folder:
   - `manifest.json`
   - `popup.html`
   - `popup.js`
   - Create or add three icons:
     - `icon16.png` (16×16 pixels)
     - `icon48.png` (48×48 pixels)
     - `icon128.png` (128×128 pixels)

For icons, you can use any simple images or colored squares with the right dimensions.

### Step 2: Install the Extension in Chrome

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked"
5. Select your "TabURLCopier" folder
6. The extension should now appear in your extensions list and browser toolbar

## How to Use

1. Click the Tab URL Copier icon in your Chrome toolbar
2. In the popup, select your preferred format:
   - Plain URLs
   - Markdown Links
   - HTML Links
3. Click "Copy All Tab URLs"
4. All URLs are now copied to your clipboard and displayed in the text area
5. Paste the URLs wherever you need them

## Troubleshooting

If the extension doesn't appear in your toolbar:
- Check that Developer mode is enabled
- Try reloading the extension
- Pin the extension to your toolbar by right-clicking the extension icon in the menu

If URLs aren't being copied:
- Make sure you've granted the extension permission to access tabs
- Try reopening Chrome and the extension

## Notes

- This extension requires the "tabs" permission to access the URLs of your open tabs
- The extension works in the current Chrome window only
- No data is sent to any external servers
