# Presets and geometry

On a configuration with no saved layouts, Grid Screen seeds these five presets. Each starts with a 10px gap and 16px margin.

| Preset | Zones | Shape |
| --- | ---: | --- |
| Two Columns | 2 | Equal columns, ratio 50 |
| Three Columns | 3 | Equal columns |
| Focus + Stack | 3 | Two-thirds left pane, two stacked right panes |
| Main + Sidebar | 2 | Three-quarters main pane, ratio 75 |
| 3 Wide Center | 3 | Equal-width geometry in the current engine |

The layout engine subtracts outer margins and inter-zone gaps from the screen work area. Two-zone layouts with a ratio use that ratio. A three-zone layout with rows uses the Focus + Stack geometry. All other layouts use equal-width columns based on the zone count.

The engine currently does not use every saved column string as geometry input. In particular, its equal-column fallback means `3 Wide Center` is persisted with `1fr 2fr 1fr` but is not rendered as a wider center zone by the Rust geometry calculation.
