---
slug: /
---

# Grid Screen

Grid Screen is a Linux desktop application for placing selected windows into named layout zones. This site documents the behavior implemented in the repository, including its current platform boundaries.

## What is implemented

- On **X11**, the application enumerates eligible windows and provides the only intended adapter path for arrangement. Actual window movement is unverified and may not work because of the current X11 protocol message limitation.
- Five layouts are seeded for a new configuration: Two Columns, Three Columns, Focus + Stack, Main + Sidebar, and 3 Wide Center.
- Layouts and settings are persisted as local JSON files with owner-only permissions.

## Read this first

Arrangement is not a cross-platform feature. X11 is the intended and only adapter path for arrangement, but its actual movement is unverified and may not work. The Wayland adapter can enumerate top-level windows when its helper is available, but is read-only: every window is marked non-movable and arrangement is disabled.

Start with [requirements](getting-started/requirements.md), then follow the [first arrangement](getting-started/first-arrangement.md) guide. See [roadmap and limitations](contribute/roadmap-and-limitations.md) before relying on settings or display behavior that is not yet wired end-to-end.
