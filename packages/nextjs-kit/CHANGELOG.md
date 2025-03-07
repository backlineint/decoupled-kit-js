# @pantheon-systems/nextjs-kit

## 1.7.6-canary.0

### Patch Changes

- 15f644e9: Update dependencies

## 1.7.5

### Patch Changes

- 5cf51bed: Upgraded `vitest`

## 1.7.5-canary.0

### Patch Changes

- 5cf51bed: Upgraded `vitest`

## 1.7.4

### Patch Changes

- 368c8e09: [nextjs-kit] Restructure bundle to enable the use of package
  components in RSC.

## 1.7.4-canary.0

### Patch Changes

- 368c8e09: [nextjs-kit] Restructure bundle to enable the use of package
  components in RSC.

## 1.7.3

### Patch Changes

- aea5653d: Fixed package.json exports field and updated build and file
  structure in line with our other packages
- 5a786d0a: Use tsup for bundle - vite was not properly externalizing some
  packages leading to errors in the bundle
- 0cb2a7ac: Use next/compat/router to work around issues with useRouter in next
  13.4.x
- e0f1a510: Added React types to devDependencies

## 1.7.3-canary.3

### Patch Changes

- e0f1a510: Added React types to devDependencies

## 1.7.3-canary.2

### Patch Changes

- 5a786d0a: Use tsup for bundle - vite was not properly externalizing some
  packages leading to errors in the bundle

## 1.7.3-canary.1

### Patch Changes

- 0cb2a7ac: Use next/compat/router to work around issues with useRouter in next
  13.4.x

## 1.7.3-canary.0

### Patch Changes

- aea5653d: Fixed package.json exports field and updated build and file
  structure in line with our other packages

## 1.7.2

### Patch Changes

- f50164f8: Updated dependencies
- ed3e4f07: Bug fix for an invalid src prop error expierenced in dev mode.

## 1.7.2-canary.0

### Patch Changes

- f50164f8: Updated dependencies
- ed3e4f07: Bug fix for an invalid src prop error expierenced in dev mode.

## 1.7.1

### Patch Changes

- eb8e3f5: Update config package route.

## 1.7.1-canary.0

### Patch Changes

- eb8e3f5: Update config package route.

## 1.7.0

### Minor Changes

- 41221dc: React 18 and Next 13 updates

## 1.7.0-canary.0

### Minor Changes

- 41221dc: React 18 and Next 13 updates

## 1.6.0

### Minor Changes

- 276c9d2: Removed type predicates from exports. Added some types that were
  missing to exports. Update some TSDoc comments.
- b5fae1d: Added Preview Ribbon component to be shared inside Next starters

### Patch Changes

- a529abf: Replaced `vite-plugin-dts` with `@rollup/plugin-typescript` for type
  bundling

## 1.6.0-canary.2

### Minor Changes

- 276c9d2: Removed type predicates from exports. Added some types that were
  missing to exports. Update some TSDoc comments.

## 1.6.0-canary.1

### Patch Changes

- a529abf: Replaced `vite-plugin-dts` with `@rollup/plugin-typescript` for type
  bundling

## 1.6.0-canary.0

### Minor Changes

- b5fae1d: Added Preview Ribbon component to be shared inside Next starters

## 1.5.0

### Minor Changes

- 824a01b: Modified the contentWithImage component on Next-Kit to remove the
  paddings and it now accepts a class as prop for the content wrapper
- b4eb5ea: Refactor content with image component

## 1.5.0-canary.0

### Minor Changes

- 824a01b: Modified the contentWithImage component on Next-Kit to remove the
  paddings and it now accepts a class as prop for the content wrapper
- b4eb5ea: Refactor content with image component

## 1.4.0

### Patch Changes

- 178d9c9: Revert block editor alignment options.
- 936b1b5: Fixed a className in the paginator component
- b3fd47c: Update Recipe component to use tailwindcss prefix

## 1.4.0-canary.2

### Patch Changes

- 178d9c9: Revert block editor alignment options.

## 1.4.0-canary.1

### Minor Changes

- 86ec3f2: Modified the contentWithImage component on Next-Kit to remove the
  paddings and it now accepts a class as prop for the content wrapper
- 19259ac: Modified every component on the Wordpress-Kit tailwind plugin to
  respect the full width options. Added base utilities on tailwind plugin to
  modify headings and paragraphs width.

### Patch Changes

- 936b1b5: Fixed a className in the paginator component

## 1.3.1-canary.0

### Patch Changes

- b3fd47c: Update Recipe component to use tailwindcss prefix

## 1.3.0

### Minor Changes

- 74ce69e: Upgraded `next` to v12.3.1
- 4c2761b: Add pagination for posts and pages in next-wordpress-starter

### Patch Changes

- aea42f5: Fix types field in package.json

## 1.3.0-canary.1

### Minor Changes

- 4c2761b: Add pagination for posts and pages in next-wordpress-starter

## 1.3.0-canary.0

### Minor Changes

- 74ce69e: Upgraded `next` to v12.3.1

### Patch Changes

- aea42f5: Fix types field in package.json

## 1.2.0

### Minor Changes

- 8b9cb28: Added ContentWithImage component to be used for a WP Post or Drupal
  Article
- c36d501: Add Recipe Component into nextjs-kit
- 6671402: Added the prefix option in the tailwindcss config so the styles
  generated from nextjs-kit will not override default tailwindcss classes in a
  project
- c6e0a77: Added a Grid and withGrid Higher Order Component

## 1.2.0-canary.1

### Minor Changes

- c6e0a77: Added a Grid and withGrid Higher Order Component

## 1.2.0-canary.0

### Minor Changes

- 6671402: Added the prefix option in the tailwindcss config so the styles
  generated from nextjs-kit will not override default tailwindcss classes in a
  project

### Patch Changes

- 8b9cb28: Added ContentWithImage component to be used for a WP Post or Drupal
  Article
- c36d501: Add Recipe Component into nextjs-kit

## 1.1.0

### Minor Changes

- 547ee6e: Added Paginator component, added TSDoc comments to exported types and
  interfaces

### Patch Changes

- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.
- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 1.1.0-canary.2

### Patch Changes

- ee835e8: Update prettierrc and reformat spaces -> tabs for accessibility

## 1.1.0-canary.1

### Minor Changes

- 547ee6e: Added Paginator component, added TSDoc comments to exported types and
  interfaces

## 1.0.1-canary.0

### Patch Changes

- 66aeea3: Upgraded next to latest version, changed starter kits to build and
  start using standalone output mode.

## 1.0.0

### Major Changes

- 598f7ca: ## Breaking Change

  Fixed published bundle so that it includes types and necessary css. To
  upgrade, if you were importing from a subpath like
  `@pantheon-systems/nextjs-kit/sortChar`, remove the subpath so you are
  importing from `@pantheon-systems/nextjs-kit` instead.

  For components, exports are now named and also no longer using subpaths.

  To use styles exported from the `nextjs-kit`, import
  `@patheon-systems/nextjs-kit/style.css` into your `_app.jsx` file

### Patch Changes

- 0158d9d: Added `sortChar` and `sortDate` helper functions

## 1.0.0-canary.1

### Major Changes

- 598f7ca: ## Breaking Change

  Fixed published bundle so that it includes types and necessary css. To
  upgrade, if you were importing from a subpath like
  `@pantheon-systems/nextjs-kit/sortChar`, remove the subpath so you are
  importing from `@pantheon-systems/nextjs-kit` instead.

  For components, exports are now named and also no longer using subpaths.

  To use styles exported from the `nextjs-kit`, import
  `@patheon-systems/nextjs-kit/style.css` into your `_app.jsx` file

## 0.1.1-canary.0

### Patch Changes

- 0158d9d: Added `sortChar` and `sortDate` helper functions
