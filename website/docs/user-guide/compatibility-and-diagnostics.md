# Compatibility and diagnostics

## Platform status

| Environment | Window enumeration | Arrangement |
| --- | --- | --- |
| X11 | Yes, through EWMH client-list lookup with a root-window fallback | Intended only; actual movement is unverified and may not work |
| Wayland | Read-only top-level enumeration when the helper returns data | No |
| No display adapter | Mock data path | No meaningful desktop arrangement |

The X11 adapter reports XRandR unavailable because extension detection is deferred. It creates a single screen from the X server root and should not be read as support for selecting independent monitor outputs.

### X11 geometry protocol limitation

`X11Adapter::move_resize_window` builds its `ClientMessageEvent` with `_NET_WM_STATE` at `src-tauri/src/x11_adapter.rs:376-381`, rather than a valid `_NET_MOVERESIZE_WINDOW` geometry message. X11 is therefore the intended and only adapter path for arrangement, but actual move/resize behavior is unverified and may not work. The method can return success after sending and flushing that invalid geometry message without showing that the window manager moved a window.

## Diagnostics

The Rust app initializes diagnostics inside the configuration directory and exposes a `get_diagnostics` command for capability information. The Settings view presents the corresponding status fields. When diagnosing an arrangement failure, first account for the X11 geometry protocol limitation above, then verify that the session is X11, the selected window remains present, and the window manager allows both move and resize.

Wayland arrangement failure is expected, not a diagnostic fault.
