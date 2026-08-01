# Installation

Grid Screen is built as a Tauri desktop application. The repository's release workflow is configured to create `.deb` and `.AppImage` artifacts when a `v*` tag is pushed. It does not establish that a release is currently published.

For a source checkout:

```bash
git clone https://github.com/enolalab/grid-screen.git
cd grid-screen
npm install
npm run tauri dev
```

See [development setup](../contribute/development-setup.md) for Rust, Node, and Linux package prerequisites. The app's production bundle command is:

```bash
npm run tauri build
```

When the bundle completes, Tauri is configured to target Debian and AppImage bundles under `src-tauri/target/release/bundle/`.
