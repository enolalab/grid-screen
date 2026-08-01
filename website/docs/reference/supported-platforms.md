# Supported platforms

Grid Screen targets Linux desktop environments. The build configuration creates Debian and AppImage bundle targets, but packaging configuration is not a guarantee that an artifact has been released.

## X11

X11 is the only intended adapter path for move/resize. It connects using `$DISPLAY`, enumerates windows from `_NET_CLIENT_LIST` (or a root-tree fallback), filters ineligible window types, and uses EWMH-related window metadata. Its actual geometry movement is unverified and may not work; see [compatibility and diagnostics](../user-guide/compatibility-and-diagnostics.md).

The current implementation has one root-screen representation and deferred XRandR extension detection. It does not implement XRandR multi-monitor discovery or per-output arrangement.

## Wayland

Wayland is explicitly read-only. Its adapter may enumerate foreign top-level windows but marks them as non-movable and non-resizable. It cannot restore or move a window, and its move/resize method returns an error. Native Wayland arrangement is not implemented.
