# Compatibility and diagnostics

## Platform status

| Environment | Window enumeration | Arrangement |
| --- | --- | --- |
| X11 | Yes, through EWMH client-list lookup with a root-window fallback | Yes, requests EWMH move/resize operations |
| Wayland | Read-only top-level enumeration when the helper returns data | No |
| No display adapter | Mock data path | No meaningful desktop arrangement |

The X11 adapter reports XRandR unavailable because extension detection is deferred. It creates a single screen from the X server root and should not be read as support for selecting independent monitor outputs.

## Diagnostics

The Rust app initializes diagnostics inside the configuration directory and exposes a `get_diagnostics` command for capability information. The Settings view presents the corresponding status fields. When diagnosing an arrangement failure, first verify that the session is X11, the selected window remains present, and the window manager allows both move and resize.

Wayland arrangement failure is expected, not a diagnostic fault.
