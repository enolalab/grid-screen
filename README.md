# Grid Screen

<div align="center">

**A lightning-fast window arranger for Linux X11. Drag windows into zones, click arrange.**

[![Rust](https://img.shields.io/badge/rust-1.96+-orange.svg)](https://www.rust-lang.org)
[![Tauri](https://img.shields.io/badge/tauri-2.0-blue.svg)](https://tauri.app)
[![Svelte](https://img.shields.io/badge/svelte-5.0-ff3e00.svg)](https://svelte.dev)

</div>

---

## What is Grid Screen?

Grid Screen lets you arrange your desktop windows into **zones** — predefined screen splits like two columns, three columns, or a main area with a sidebar. Instead of manually dragging and resizing every window, you **drag window cards onto a visual canvas** and click **Arrange**. All selected windows snap into place at once.

Built for **general desktop users** who want a tidy workspace without learning tiling window managers or memorizing keyboard shortcuts.

## Features

- **5 built-in presets** — Two Columns, Three Columns, Focus + Stack, Main + Sidebar, 3 Wide Center
- **Drag-and-drop canvas** — assign windows to zones visually before applying
- **Customizable layouts** — create and persist two- or three-zone layouts
- **X11 arrangement path** — select the available X11 root screen and submit assigned windows; actual movement is currently unverified
- **Zero network** — no telemetry, no analytics, no cloud. Everything stays on your machine
- **Lightweight** — idle CPU <1%, written in Rust

## Installation

### Download

The repository is configured to build `.AppImage` and `.deb` bundles for pushed version tags. Check [GitHub Releases](https://github.com/enolalabs/grid-screen/releases) for published artifacts; this repository checkout does not establish that one is available.

### Requirements

- **Linux** with an **X11** session (Xorg).
- A window manager with **EWMH** support (GNOME, KDE Plasma, Xfce — most modern WMs work).

> **Wayland users:** the current Wayland adapter is read-only. It can enumerate some top-level windows but cannot arrange them.

## Usage

### Arrange Windows

1. Open Grid Screen. The **Arrange** tab shows your running windows on the left.
2. **Choose a screen** and **layout** from the toolbar.
3. **Drag window cards** from the catalog into the zones on the canvas.
4. Click **Arrange N windows**. All assigned windows are submitted for placement.

### Create Custom Layouts

1. Go to the **Layouts** tab.
2. Click **New Layout**.
3. Give it a name, choose two or three zones, and save.
4. Switch to Arrange and select your layout.

### Settings

- **Snap modifier & behavior** — stored, but not connected to native snapping
- **Start at Login** — stored, but does not create an autostart entry
- **Minimize to Tray** — can hide the window on close; tray lifecycle is not implemented
- **System Status** — view adapter-reported session and EWMH data

## Development

### Prerequisites

- [Rust](https://rustup.rs) 1.96+
- [Node.js](https://nodejs.org) 20+
- Linux system dependencies for Tauri:
  ```bash
  sudo apt install libwebkit2gtk-4.1-dev libappindicator3-dev \
    librsvg2-dev patchelf libx11-dev libxrandr-dev
  ```

### Setup

```bash
git clone https://github.com/enolalabs/grid-screen.git
cd grid-screen
npm install
```

### Run in development

```bash
npm run tauri dev
```

### Build for production

```bash
npm run tauri build
```

Produces `.deb` and `.AppImage` in `src-tauri/target/release/bundle/`.

### Project Structure

```
grid-screen/
├── src/                    # Svelte UI
│   ├── components/         # 25 UI components
│   ├── lib/
│   │   ├── stores/         # 8 Svelte stores
│   │   ├── commands.ts     # Tauri IPC wrapper
│   │   └── events.ts       # Rust → Svelte event listeners
│   └── App.svelte          # Root component with tab routing
├── src-tauri/              # Rust application core
│   └── src/
│       ├── main.rs         # Tauri entry point & lifecycle
│       ├── app_shell.rs    # Tauri commands (bootstrap, arrange, save)
│       ├── layout_engine.rs    # Zone rectangle computation
│       ├── arrange_orchestrator.rs  # Validate-then-move pipeline
│       ├── platform_adapter.rs     # OS abstraction trait
│       ├── x11_adapter.rs         # X11/EWMH/XRandR integration
│       ├── config_store.rs        # Atomic JSON persistence
│       ├── window_catalog.rs      # Window eligibility filtering
│       └── diagnostics.rs         # File-based logging
├── shared-types/           # Rust ↔ TypeScript type definitions
├── mockups/                # UI design mockups (dark, light, pro)
└── docs/                   # Design specs & implementation plans
```

### Architecture

```
Svelte UI (webview)
     ↕ Tauri IPC (typed commands + events)
Rust application core
     ↕ PlatformAdapter trait
X11 adapter (EWMH; XRandR detection is deferred)
```

The Rust core handles platform communication, layout computation, and config persistence. The Svelte webview handles drag-and-drop state, canvas rendering, and user input. X11 is the only intended movement path, but its actual move/resize behavior is unverified; the Wayland adapter is read-only.

### Tech Stack

| Layer | Technology |
|---|---|
| Desktop shell | [Tauri 2](https://tauri.app) |
| Application core | [Rust](https://www.rust-lang.org) |
| UI framework | [Svelte 5](https://svelte.dev) + [TypeScript](https://www.typescriptlang.org) |
| X11 integration | [x11rb](https://crates.io/crates/x11rb) with EWMH window metadata |
| Config persistence | JSON in `~/.config/grid-screen/` |
| Logging | [tracing](https://crates.io/crates/tracing) |
| Drag-and-drop | Pointer-event-based (custom implementation) |

## Contributing

Contributions are welcome! Here's how to get started:

1. **Check the issues** — look for `good-first-issue` or `help-wanted` labels
2. **Read the docs** — design specs and implementation plans are in `docs/`
3. **Pick a task** — comment on the issue to claim it
4. **Follow the code style** — Rust: `cargo fmt` + `cargo clippy`; Svelte: `npm run lint`
5. **Write tests** — Rust: `cargo test`; UI: verify component renders correctly
6. **Open a PR** — keep it focused, reference the issue, include screenshots for UI changes

### Key areas for contributions

- **X11 adapter hardening** — real window enumeration, EWMH move/resize, edge cases
- **Wayland support** — implement `PlatformAdapter` for Wayland compositors
- **Modifier-assisted snap** — drag real system windows into zones with a modifier key
- **Accessibility** — keyboard navigation, screen reader support, ARIA
- **Testing** — integration tests, X11 test suite, property-based geometry tests
