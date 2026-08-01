import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "Getting started",
      items: ["getting-started/requirements", "getting-started/installation", "getting-started/first-arrangement"],
    },
    {
      type: "category",
      label: "User guide",
      items: ["user-guide/arrange-windows", "user-guide/layouts", "user-guide/settings", "user-guide/compatibility-and-diagnostics"],
    },
    {
      type: "category",
      label: "Reference",
      items: ["reference/presets-and-geometry", "reference/configuration-files", "reference/supported-platforms"],
    },
    {
      type: "category",
      label: "Contribute",
      items: ["contribute/development-setup", "contribute/architecture", "contribute/testing-and-releases", "contribute/roadmap-and-limitations"],
    },
  ],
};

export default sidebars;
