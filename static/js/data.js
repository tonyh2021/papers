const paper = {
  metadata: {
    title: "This is a title",
    description: "This is a description",
    keywords: ["This", "Is", "A", "Keyword"],
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
        type: "abstract",
        title: "Abstract",
        text: "This is the abstract of the paper. It provides a brief overview of the research and its significance.",
      },
      {
        type: "contributions",
        title: "Key Contributions",
        items: [
          "First key contribution",
          "Second key contribution",
          "Third key contribution",
        ],
      },
    ],
    sections: [
      {
        title: "Architecture",
        image: "./static/images/sample.jpg",
        image_name: "Figure 1 — Architecture",
        text: "The architecture consists of...",
      },
      {
        title: "Experiments",
        image: "./static/images/sample.jpg",
        image_name: "Figure 2 — Experiments",
        text: "Our experiments show that...",
      },
      {
        title: "Case Study",
        image: "./static/images/sample.jpg",
        image_name: "Figure 3 — Case Study",
        text: "In this case study, we demonstrate...",
      },
    ],
    conclusion: {
      title: "Conclusion",
      paragraphs: ["In conclusion, our work demonstrates..."],
    },
  },
  bibtex: `@article{xxx,
    author    = {xxx},
    title     = {xxx},
    journal   = {xxx},
    year      = {xxx},
  }`,
};
