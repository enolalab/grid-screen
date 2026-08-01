# Settings

Settings are stored and reloaded locally. The UI can persist the following values:

- `snap_enabled` and `snap_modifier` (`Shift`, `Ctrl`, `Alt`, or `Super`)
- `autostart_enabled`
- `minimize_to_tray`
- Default gap and margin values through **Save as Defaults**

## Effective behavior

`minimize_to_tray` is consulted by the close-request handler: when true, the application prevents the close and hides its window. This is not evidence of a complete system-tray lifecycle; no tray-menu behavior is documented here.

The remaining values are persisted but are not connected to native behavior in the codebase:

- Modifier snap has no platform event transport or window-snapping implementation.
- `autostart_enabled` does not create or manage an autostart entry.
- Default gap and margin are saved, but layout geometry comes from the selected layout's own gap and margin values.

The System Status section displays session type, EWMH status, window manager name, XRandR availability, workspace, and connected-screen text reported by the active adapter. It is diagnostic output, not a guarantee of multi-monitor support.
