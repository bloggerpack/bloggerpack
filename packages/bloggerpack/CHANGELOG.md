# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.3.0](https://github.com/bloggerpack/bloggerpack/compare/bloggerpack@1.2.0...bloggerpack@1.3.0) (2021-09-27)


### Bug Fixes

* Avoid errors when using relative path ([0a74092](https://github.com/bloggerpack/bloggerpack/commit/0a74092eb687744479b6d59b55850e294e016f83))


### Features

* **deps:** Bump dependencies ([655018e](https://github.com/bloggerpack/bloggerpack/commit/655018e593ba3ee892c75fb3b462e62d92d8cfee))
* Migrate Sass compiler to use Dart Sass ([74972e8](https://github.com/bloggerpack/bloggerpack/commit/74972e8c398f91ffed610c41396d9a230534f367))





# [1.2.0](https://github.com/bloggerpack/bloggerpack/compare/bloggerpack@1.1.1...bloggerpack@1.2.0) (2021-07-01)


### Bug Fixes

* fix skin src ([340fe01](https://github.com/bloggerpack/bloggerpack/commit/340fe010f25b915ec2a8180a13c3d5849b1e7a4a))


### Features

* **deps:** Bump dependencies ([886391f](https://github.com/bloggerpack/bloggerpack/commit/886391fcad6cde8bffa1e1152b0faf88d9578567))
* use rollup globals ([59546da](https://github.com/bloggerpack/bloggerpack/commit/59546da33e724e2a156dabe11237caa54a84413f))





## [1.1.1](https://github.com/bloggerpack/bloggerpack/compare/bloggerpack@1.1.0...bloggerpack@1.1.1) (2021-04-13)


### Bug Fixes

* **sass:** revert tilde. The `~` is mandatory and marks the import path as module. ([03a5040](https://github.com/bloggerpack/bloggerpack/commit/03a5040284673b746bc5c4f1f2dd975c8c0c598e))





# [1.1.0](https://github.com/bloggerpack/bloggerpack/compare/bloggerpack@1.0.0...bloggerpack@1.1.0) (2021-04-13)


### Bug Fixes

* fix indentation on `{% asset %}` tag output ([c98299f](https://github.com/bloggerpack/bloggerpack/commit/c98299fdff20d6bcf68cf0cd6e62dffbabcdaa42))
* **sass:** import module without tilde `~` to be consistent with skin and js ([fffe751](https://github.com/bloggerpack/bloggerpack/commit/fffe751e1505d40a2145e1642f030d2be32e596f))


### Features

* change `.stylelintrc` to `.stylelintrc.json` ([7076e09](https://github.com/bloggerpack/bloggerpack/commit/7076e09218fa77e8a16ae4f3c5c9a38b49eb47d4))
* **deps:** Bump dependencies ([663f6d7](https://github.com/bloggerpack/bloggerpack/commit/663f6d76299c6297a0a27d05c06ef899d9f1b277))
* added ability to create multiple source files for Sass, Skin and JS ([b54193d](https://github.com/bloggerpack/bloggerpack/commit/b54193d5fc7fbd82bcc981f63e957ad1733d9289))
* change template extension from `.njk` to `.xml` ([93cacd4](https://github.com/bloggerpack/bloggerpack/commit/93cacd4ae561b1bad98b117ac1ac95339fe6ec95))
* change template, sass, skin, and js tag to match Blogger style ([47b84b6](https://github.com/bloggerpack/bloggerpack/commit/47b84b6ac6768e7ee12a7173ea7a3dab95adb8db))
* **template:** drop auto-tag on `asset`, use block tag instead ([a4a4910](https://github.com/bloggerpack/bloggerpack/commit/a4a491051015fe2d8f8cc07434481c01e87cbb7c))
* move compiled `sass`, `skin`, and `js` to their source folder ([90f7f94](https://github.com/bloggerpack/bloggerpack/commit/90f7f9445930494246f3cf28e36afebefee5fb0b))
* update plugin to use standard theme structure and add special extension ([ac8ab78](https://github.com/bloggerpack/bloggerpack/commit/ac8ab78c0d21273d6303b7d7919f7f3e3495264f))
* update skin to use postcss-easy-import ([cb864ec](https://github.com/bloggerpack/bloggerpack/commit/cb864ec36d7caefa2ee070df395424625a2a2367))





# 1.0.0 (2021-02-01)

**Note:** Version bump only for package bloggerpack





## 0.0.1 (2021-02-01)

**Note:** Version bump only for package bloggerpack
