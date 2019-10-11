# ember-auto-import-typescript

This addon patches the [ember-auto-import][ember-auto-import]
[config][ember-auto-import-config] to enable the direct `import` of `.ts` files
without an additional build / publish step in between. This is useful for
extracting business logic / utils into their own packages in
[monorepos][workspaces].
It's like [`ember-cli-typescript`][ember-cli-typescript], but for regular npm
packages.

[ember-auto-import]: https://github.com/ef4/ember-auto-import
[ember-auto-import-config]: https://github.com/ef4/ember-auto-import#customizing-build-behavior
[workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/

## Installation

For apps:

```bash
ember install ember-auto-import
```

For addons & engines:

```bash
ember install -S ember-auto-import
```
