# First arrangement

1. Start Grid Screen in an X11 session.
2. In **Arrange**, select the available screen and a layout.
3. Drag a window card from the catalogue onto a numbered zone on the canvas.
4. Repeat for the windows you want to place.
5. Select **Arrange _N_ Windows**.

The app validates every assignment before invoking its arrangement path. A stale window, an invalid zone index, or a window that is not movable or resizable causes the request to fail before the adapter is called. Minimized windows are restored before the adapter is invoked. On X11, the subsequent geometry operation is unverified and may not move a window; see [compatibility and diagnostics](../user-guide/compatibility-and-diagnostics.md).

Use **Clear All** to remove the in-memory zone assignments. It does not delete layouts or settings.
