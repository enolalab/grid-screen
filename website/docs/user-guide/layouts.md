# Layouts

The Layouts view lists persisted layouts and can create, select, save, or delete layouts. New layouts have a 1 to 64 character name, two or three zones, and a named CSS-grid-like column pattern.

The current creation dialog offers these patterns:

- Two zones: `1fr 1fr`, `3fr 1fr`, `1fr 3fr`, `2fr 1fr`
- Three zones: `1fr 1fr 1fr`, `2fr 1fr 1fr`, `1fr 2fr 1fr`, `1fr 1fr 2fr`

The saved `LayoutType` supports `preset` and `saved`, although the current new-layout dialog creates `preset`-typed records. Layout validation accepts two or three zones, ratios from 10 through 90, gaps up to 40px, and margins up to 60px.

See [presets and geometry](../reference/presets-and-geometry.md) for the layouts seeded on first launch.
