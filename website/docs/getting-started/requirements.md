# Requirements

## Runtime

- Linux desktop session.
- **X11/Xorg** for window movement and resizing.
- A window manager that exposes the EWMH properties used by Grid Screen.

The X11 adapter uses EWMH window metadata and `_NET_WORKAREA`. It currently models the X server's root screen as one `ScreenInfo`; it does not implement multi-monitor XRandR output discovery.

## Wayland

Wayland is not an arrangement target. The Wayland adapter may list top-level windows through its foreign-toplevel helper, but reports those windows as not movable or resizable. The arrange operation therefore fails validation, and its adapter returns `Window arrangement not supported on Wayland` if called directly.

Use an X11 session for arrangements. Do not treat an XWayland application inside a Wayland session as supported X11 arrangement.
