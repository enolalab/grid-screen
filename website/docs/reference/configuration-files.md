# Configuration files

Grid Screen resolves its configuration directory as:

```text
$XDG_CONFIG_HOME/grid-screen
```

If `XDG_CONFIG_HOME` is unset, it uses:

```text
$HOME/.config/grid-screen
```

The directory is created with mode `0700`. Settings and layouts are stored in `settings.json` and `layouts.json`; after a successful write, each file is set to mode `0600`.

Writes use a temporary file, read-back validation, and rename. Existing settings or layout files are copied to numbered backups, retaining up to five generations. The schema version is currently `1`; older configurations load with a warning.

`layouts.json` is seeded with built-in layouts only when it is empty. Existing layouts are not replaced.
