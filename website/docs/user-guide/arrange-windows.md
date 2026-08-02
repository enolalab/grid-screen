# Arrange windows

The Arrange view contains a window catalogue, layout canvas, and detail panel. Pointer drag events identify the zone under the cursor and assign the dragged window ID to that zone.

Selecting Arrange sends only three values to the Rust command: the selected layout ID, selected screen ID, and the zone-to-window assignment map. The Rust orchestrator then:

1. Finds the saved layout and screen.
2. Computes zone rectangles from the saved layout.
3. Validates all assignments before invoking the platform adapter.
4. Restores minimized windows, accounts for frame extents, and invokes the active adapter's geometry path for each window.

On X11, this is the only intended arrangement path, not verified working movement. The adapter returns success after its send and flush calls, but its current client message uses `_NET_WM_STATE` rather than a valid `_NET_MOVERESIZE_WINDOW` geometry message. A successful command therefore does not demonstrate that a window manager applied geometry, and windows may not move.

## Sliders

The Arrange detail panel exposes ratio, gap, and margin controls as session overrides for canvas display. The arrange IPC request contains a layout ID rather than those override values, so slider changes are **not transported to Rust** and do not alter the geometry applied by Arrange.
