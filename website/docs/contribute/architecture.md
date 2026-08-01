# Architecture

Grid Screen separates the Svelte webview from a Rust application core.

```text
Svelte components and stores
  -> src/lib/commands.ts Tauri IPC wrapper
  -> src-tauri/src/app_shell.rs command handlers
  -> shared-types/src/lib.rs request and response contracts
  -> layout engine and platform adapter
  -> X11 or Wayland adapter
```

`commands.ts` defines the webview calls for bootstrap data, windows, layouts, settings, arrangement, and diagnostics. `app_shell.rs` owns the Tauri command boundary, loads persistence, gathers screens/windows, and passes arrangement requests onward.

`shared-types/src/lib.rs` is the Rust source of the serializable IPC shapes, including `Layout`, `Settings`, `ArrangeRequest`, `ArrangeResult`, and adapter capability data.

`layout_engine.rs` turns a persisted layout plus a screen work area into zone rectangles and validates layout bounds. `arrange_orchestrator.rs` performs all-assignment validation before issuing adapter moves, restores minimized windows, and adjusts requested geometry for frame extents. `platform_adapter.rs` defines the abstraction used by X11, Wayland, and tests.

The platform boundary is intentionally important: only the X11 adapter can currently move windows. The Wayland adapter supplies read-only window data and reports arrangement as unsupported.
