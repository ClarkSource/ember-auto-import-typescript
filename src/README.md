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
[ember-cli-typescript]: https://github.com/typed-ember/ember-cli-typescript

## Installation

For apps:

```bash
ember install ember-auto-import ember-auto-import-typescript
```

For addons & engines:

```bash
ember install -S ember-auto-import ember-auto-import-typescript
```

### Patching

This addon requires
[PR #249 "feat(splitter): add `.ts` extension to resolver"][pr-249]. There's not
been a new release since the PR got merged. This means you need to patch
ember-auto-import yourself. I suggest to use [`patch-package`][patch-package]
with the [`ember-auto-import+1.5.3.patch`][patch-file].

[pr-249]: https://github.com/ef4/ember-auto-import/pull/249
[patch-package]: https://github.com/ds300/patch-package#readme
[patch-file]: /patches/ember-auto-import+1.5.3.patch
