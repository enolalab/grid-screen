# Arrange windows

The Arrange view contains a window catalogue, layout canvas, and detail panel. Pointer drag events identify the zone under the cursor and assign the dragged window ID to that zone.

Selecting Arrange sends only three values to the Rust command: the selected layout ID, selected screen ID, and the zone-to-window assignment map. The Rust orchestrator then:

1. Finds the saved layout and screen.
2. Computes zone rectangles from the saved layout.
3. Validates all assignments before moving any window.
4. Restores minimized windows, accounts for frame extents, and asks the active platform adapter to move and resize each window.

On X11, this uses the adapter's EWMH request path. A successful command means the adapter accepted and flushed the request; window managers remain responsible for applying it.

## Sliders

The Arrange detail panel exposes ratio, gap, and margin controls as session overrides for canvas display. The arrange IPC request contains a layout ID rather than those override values, so slider changes are **not transported to Rust** and do not alter the geometry applied by Arrange.
