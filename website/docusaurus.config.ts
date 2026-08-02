import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Grid Screen",
  tagline: "Linux desktop window arrangement, documented from source",
  favicon: "img/logo.svg",
  url: "https://grid-screen.enolalab.com",
  baseUrl: "/",
  organizationName: "enolalab",
  projectName: "grid-screen",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/enolalab/grid-screen/edit/main/website/",
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/logo.svg",
    navbar: {
      title: "Grid Screen",
      logo: { alt: "Grid Screen", src: "img/logo.svg" },
      items: [
        { to: "/", label: "Docs", position: "left" },
        { href: "https://enolalab.com", label: "Enolalab", position: "right" },
        { href: "https://github.com/enolalab/grid-screen", label: "GitHub", position: "right" },
        { href: "https://github.com/enolalab/grid-screen/releases", label: "Releases", position: "right" },
        { href: "https://enolalab.com/catalogue", label: "Catalogue", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            { label: "Getting started", to: "/getting-started/requirements" },
            { label: "Limitations", to: "/contribute/roadmap-and-limitations" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "GitHub", href: "https://github.com/enolalab/grid-screen" },
            { label: "Releases", href: "https://github.com/enolalab/grid-screen/releases" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enolalab.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
