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
  - `content.intros` — array of intro blocks: `type` `"abstract"` (use `text`) or `"contributions"` (use `items`), plus `title`
  - `content.sections` — title, optional `image`, `image_name`, optional `text`
  - `content.conclusion` — `title`, `paragraphs` (array of strings)
  - `bibtex` — BibTeX string
- **`static/js/index.js`** — Template render and Handlebars helpers.
- **`static/css/`** — Styles (Bulma + `index.css`).
- **`static/images/`** — Figures and assets.

Optional: `navbar` with `home_link` and `more_research` (array of `{ name, link }`) to show the top nav.

## Recent updates

- **Typography & layout**: Body font size 16px, line-height 1.7; section text in Georgia; consistent heading sizes; content max-width 760px; code/figcaption at 14px.
- **Conclusion block**: Conclusion is now an object `{ title, paragraphs }` so the section heading is configurable.
- **Intro block key**: Intro blocks use `content.intros` (replacing the previous `intro_blocks` key).

## Website License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
