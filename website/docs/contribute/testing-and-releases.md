# Testing and releases

## Local checks

Run the intended application checks from the repository root:

```bash
npm run check
npm run build
cargo fmt --check
cargo clippy -- -D warnings
cargo test --workspace
```

At the current baseline, `npm run check` and `cargo test --workspace` fail for existing application issues described in [development setup](development-setup.md). Record those results separately; do not mask them by changing application code while updating the site.

Validate documentation independently:

```bash
npm ci --prefix website
npm run build --prefix website
```

## Documentation deployment

`.github/workflows/docs.yml` builds the Docusaurus site on documentation pull requests. On pushes to `main`, it deploys `website/build` to the Cloudflare Pages project named `grid-screen-docs` and smoke-tests `https://grid-screen.enolalab.com/`.

## Application release workflow

`.github/workflows/release.yml` runs for pushed tags matching `v*`. It installs Linux dependencies, builds with Tauri, and uploads any generated `.deb` and `.AppImage` bundles to the matching GitHub Release. The repository has no tag in this checkout, so this configuration must not be read as evidence of an available release.
