# Development setup

## Prerequisites

- Rust 1.96 or newer.
- Node.js 20 or newer. CI uses Node 22.
- Linux packages required by the current Tauri, X11, and bundle configuration:

```bash
sudo apt-get update
sudo apt-get install -y \
  libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf \
  libx11-dev libxrandr-dev
```

## Install and run

```bash
npm install
npm run tauri dev
```

Build the web frontend with `npm run build`, or build a desktop bundle with `npm run tauri build`.

## Current validation baseline

The product checkout currently has known pre-existing validation failures that are not repaired by the documentation site:

- `npm run check` is blocked by missing generated shared-type bindings and an existing implicit-`any` error.
- `cargo test --workspace` is blocked by the missing frontend `dist` directory and Rust import errors.

Run them to observe the baseline, but do not treat those failures as documentation regressions. The independent documentation validation is `npm run build --prefix website`.
