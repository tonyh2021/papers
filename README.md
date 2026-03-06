# Papers

This is the repository that contains source code for the [Papers](https://tonyhx2021.github.io/papers) template.

## About

This website is built using the Handlebars templating engine and Bulma CSS. You can quickly generate an academic paper page by editing the data in `static/js/data.js`; the page updates without changing the HTML.

Design inspiration: [Nerfies](https://nerfies.github.io).

## Deployment (GitHub Pages)

The site must be built before deployment so that `<meta>`, `<title>`, and Open Graph tags are filled from `data.js`. Use **GitHub Actions** as the Pages source, not “Deploy from a branch”:

1. Repo **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**
3. Each push to `main` will run the workflow, build `dist/`, and deploy that as the site

If you use “Deploy from a branch”, the live site serves the raw template and link previews will show `{{paper.metadata.title}}` etc.

## Structure

- **`index.html`** — Handlebars template and layout.
- **`static/js/data.js`** — Paper data. Main fields:
  - `metadata` — `title`, `description`, `url` (canonical URL for Open Graph)
  - `authors` — name, `affiliation.number`, optional `equal_contribution`, optional `links.website`
  - `affiliations` — `number`, `name`
  - `link_items` — name, link, icon (e.g. `fas fa-file-pdf`, `ai ai-arxiv`)
  - **`content`** — intros, sections, and conclusion all use the same **ContentBlock** shape:
    - **`content.intros`** — array of blocks. Each block: optional `title`, optional `video` `{ src, caption? }`, optional `paragraphs` (array of `{ text }`), optional `paragraphStyle: "list"` (default is plain `<p>`)
    - **`content.sections`** — array of blocks. Each block: `title`, optional `image` `{ src, caption? }`, optional `paragraphs` (array of `{ text }`)
    - **`content.conclusion`** — one block: `title`, `paragraphs` (array of `{ text }`)
  - `bibtex` — BibTeX string

  JSDoc types in `data.js` define `Paragraph`, `ParagraphStyle`, `Video`, `Image`, `ContentBlock`, and `Content` for editor support.

- **`static/js/index.js`** — Template render and Handlebars helpers.
- **`static/css/`** — Styles (Bulma + `index.css`). ContentBlock media uses `.content-block-media` and `.content-block-caption`.
- **`static/images/`** — Figures and assets.
- **`static/videos/`** — Optional; put video files here and reference as `video: { src: "./static/videos/…", caption: "…" }` in an intro block.

Optional: `navbar` with `home_link` and `more_research` (array of `{ name, link }`) to show the top nav.

## Recent updates

- **ContentBlock**: Intros, sections, and conclusion share one block shape. Use `paragraphs: [{ text: "…" }]` everywhere; set `paragraphStyle: "list"` for bullet lists. Images/videos use `{ src, caption? }`. No more `type`/`text`/`items`/`image_name`; see `data.js` for the full structure and JSDoc types.
- **Typography & layout**: Body font size 16px, line-height 1.7; section text in Georgia; consistent heading sizes; content max-width via `--content-width`; code/figcaption at 14px.
- **Conclusion block**: Conclusion is `{ title, paragraphs }` with `paragraphs` as an array of `{ text }`.

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
