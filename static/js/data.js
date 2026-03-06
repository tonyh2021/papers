/**
 * Paragraph block display: plain uses p, list uses ul/li
 * @typedef {"plain" | "list"} ParagraphStyle
 *
 * Single paragraph: optional style, defaults to block-level paragraphStyle
 * @typedef {{
 *   text: string;
 *   style?: ParagraphStyle;
 * }} Paragraph
 *
 * @typedef {{ src: string; caption?: string }} Video
 * @typedef {{ src: string; caption?: string }} Image
 *
 * Unified content block: shared by intro / section / conclusion.
 * Rendering: show video when present; when paragraphs exist use p or ul/li per paragraphStyle.
 * @typedef {{
 *   title?: string;
 *   paragraphs?: Paragraph[];
 *   paragraphStyle?: ParagraphStyle;
 *   video?: Video;
 *   image?: Image;
 * }} ContentBlock
 *
 * @typedef {{
 *   intros: ContentBlock[];
 *   sections: ContentBlock[];
 *   conclusion: ContentBlock;
 * }} Content
 */

const paper = {
  metadata: {
    title: "This is a title",
    description: "This is a description",
    url: "https://tonyhx2021.github.io/papers/",
  },
  navbar: {
    home_link: "https://example.com",
    more_research: [
      {
        name: "Research 1",
        link: "https://example.com/research-1",
      },
      {
        name: "Research 2",
        link: "https://example.com/research-2",
      },
    ],
  },
  affiliations: [
    { number: "1", name: "University of Example" },
    { number: "2", name: "Another University" },
  ],
  authors: [
    {
      name: "John Doe",
      affiliation: { number: "1" },
      links: {
        website: "https://johndoe.com",
      },
    },
    {
      name: "Jane Smith",
      affiliation: { number: "2" },
    },
  ],
  link_items: [
    {
      name: "Paper",
      link: "https://example.com/paper.pdf",
      icon: "fas fa-file-pdf",
    },
    {
      name: "Arxiv",
      link: "https://arxiv.org/abs/xxx",
      icon: "ai ai-arxiv",
    },
    {
      name: "Video",
      link: "https://youtube.com/xxx",
      icon: "fab fa-youtube",
    },
    {
      name: "Code",
      link: "https://github.com/xxx",
      icon: "fab fa-github",
    },
    {
      name: "Dataset",
      link: "https://example.com/dataset",
      icon: "fa-solid fa-database",
    },
  ],
  content: {
    intros: [
      {
        title: "Abstract",
        paragraphs: [
          {
            text: "This is the abstract of the paper. It provides a brief overview of the research and its significance.",
          },
        ],
      },
      {
        title: "Key Contributions",
        paragraphs: [
          { text: "First key contribution" },
          { text: "Second key contribution" },
          { text: "Third key contribution" },
        ],
        paragraphStyle: "list",
      },
    ],
    sections: [
      {
        title: "Architecture",
        image: {
          src: "./static/images/sample.jpg",
          caption: "Figure 1 — Architecture",
        },
        paragraphs: [
          { text: "The architecture consists of..." },
        ],
      },
      {
        title: "Experiments",
        image: {
          src: "./static/images/sample.jpg",
          caption: "Figure 2 — Experiments",
        },
        paragraphs: [
          { text: "Our experiments show that..." },
        ],
      },
      {
        title: "Case Study",
        image: {
          src: "./static/images/sample.jpg",
          caption: "Figure 3 — Case Study",
        },
        paragraphs: [
          { text: "In this case study, we demonstrate..." },
        ],
      },
    ],
    conclusion: {
      title: "Conclusion",
      paragraphs: [
        { text: "In conclusion, our work demonstrates..." },
      ],
    },
  },
  bibtex: `@article{xxx,
    author    = {xxx},
    title     = {xxx},
    journal   = {xxx},
    year      = {xxx},
  }`,
};
