#!/usr/bin/env node
/**
 * Build script: reads paper.metadata from static/js/data.js, replaces
 * {{paper.metadata.*}} in index.html with actual values, outputs to dist/
 * for GitHub Pages deployment. Usage: node build.js
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname);
const dataJsPath = path.join(root, "static", "js", "data.js");
const indexPath = path.join(root, "index.html");
const distPath = path.join(root, "dist");

// Get paper from data.js (no require; data.js uses const paper = ...)
const dataJs = fs.readFileSync(dataJsPath, "utf8");
const getPaper = new Function(dataJs + "; return paper;");
const paper = getPaper();

function escapeHtml(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const title = escapeHtml(paper.metadata.title);
const description = escapeHtml(paper.metadata.description);
const url = paper.metadata.url ? String(paper.metadata.url) : "";

let indexHtml = fs.readFileSync(indexPath, "utf8");
indexHtml = indexHtml
  .replace(/\{\{paper\.metadata\.title\}\}/g, title)
  .replace(/\{\{paper\.metadata\.description\}\}/g, description)
  .replace(/\{\{paper\.metadata\.url\}\}/g, url);

if (!fs.existsSync(distPath)) fs.mkdirSync(distPath, { recursive: true });
fs.writeFileSync(path.join(distPath, "index.html"), indexHtml, "utf8");

// Copy static to dist/static
const staticSrc = path.join(root, "static");
const staticDest = path.join(distPath, "static");
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
copyDir(staticSrc, staticDest);

console.log("Build done: dist/index.html has real <meta> and <title>.");
