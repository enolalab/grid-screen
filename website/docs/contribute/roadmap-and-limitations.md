# Roadmap and limitations

This page records the distinction between UI or type-level intent and behavior currently implemented in the platform path.

## Current limitations

- X11 is the only adapter that moves windows.
- Wayland window data is read-only and arrangement is disabled.
- X11 uses one root-screen representation. Multi-monitor XRandR output discovery and selection are not implemented.
- The UI's ratio, gap, and margin sliders remain session overrides and are not sent in the arrange request.
- Modifier snap settings persist, but there is no native drag/modifier transport or snap implementation.
- Autostart settings persist, but no autostart integration is implemented.
- Closing can hide the window when `minimize_to_tray` is enabled, but a complete tray lifecycle is not implemented or documented.
- Existing application checks have the baseline failures listed in [development setup](development-setup.md).

## Contributions

Useful follow-on work includes making the IPC contract generated and checked, completing the X11 move protocol and monitor model, and designing native Wayland arrangement only where compositor protocols permit it. Any capability claim should be verified through the corresponding adapter and end-to-end command path.
