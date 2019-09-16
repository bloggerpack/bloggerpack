# Bloggerpack

> A starter theme for [Blogger](https://blogger.com/).

[Preview](https://bloggerpack-v1-y8f7d5.blogspot.com/)
·
[Wrapblogger](https://wrapblogger.github.io/)

## Table of contents

- [Getting started](#getting-started)
  - [Specification](#specification)
  - [Step by Step Tutorial](#step-by-step-tutorial)
  - [User configuration](#user-configuration)
  - [Using npm to install packages](#using-npm-to-install-packages)
- [Directory structure](#directory-structure)
- [Build tools](#build-tools)
  - [Tooling setup](#tooling-setup)
  - [Using Grunt commands](#using-grunt-commands)
- [Templating](#templating)
  - [Include](#include)
  - [Configuration](#configuration)
  - [Organization](#organization)
- [Contributing](#contributing)
- [Changelog](#changelog)
  - [Should I update my Bloggerpack based theme?](#should-i-update-my-bloggerpack-based-theme)
- [License](#license)

## Getting started

### Specification

- Default layouts version: `<html b:layoutsVersion='3'>`
- Default gadgets version: `<html b:defaultwidgetversion='2'>`
- Default comments system: [Discus](https://discus.com/)

### Step by Step Tutorial

1. Download and setup (replace `my-awesome-theme` below with the name of your theme):<br><br>
   ```bash
   $ git clone --single-branch --branch v1.0 https://github.com/wrapblogger/bloggerpack.git my-awesome-theme
   $ cd my-awesome-theme
   $ rm -rf .git                # remove git
   $ npm install                # install dependencies
   $ npm install -g grunt-cli   # install grunt-cli
   $ grunt                      # build
   ```
   Read more about [tooling setup](#build-tools).
2. Configure `src/config.json`.
3. See our [Blogger code snippets](https://wrapblogger.github.io/blogger-snippets/) for reference.
4. Make an awesome Blogger theme.
5. Run [`grunt`](#using-grunt-commands) to build your changes.
6. To preview theme changes, upload the new compiled theme (`dist/theme.xml`) to your blog.<br>
   Done? (**Yes**: next) / (**No**: back to number `2`).
7. Update `README.md` for your theme.
8. Run [`grunt release`](#using-grunt-commands) to release your theme.
9. Use [Git](https://git-scm.com/) for version control (this is not required, but will help to manage changes to source code):<br><br>
   ```bash
   $ git init
   $ git add .
   $ git commit -m "Initial commit"
   ```
   Push to [GitHub](https://github.com/) or other services.
10. Upload your theme (`dist/theme.xml`) to your blog or share your theme (the generated zip file).

### User configuration

- src/theme.xml => find `name='customAllHeadContent'` to configure metadata.
- src/theme.xml => find `name='disqusConfig'` to configure Disqus shortname.

### Using npm to install packages

#### Example to install [Font Awesome](https://fontawesome.com/) via npm

```bash
$ npm install @fortawesome/fontawesome-free --save
```

Import Font Awesome JavaScript to `src/_js/index.js`:

```js
import FontAwesome from '~/node_modules/@fortawesome/fontawesome-free/js/all';

export {
  FontAwesome
}
```

#### Example to install [Bootstrap](https://getbootstrap.com/) via npm

```bash
$ npm install bootstrap jquery popper.js --save
```

Import Bootstrap styles to `src/_scss/index.scss`:

```scss
@import "./src/custom";
@import "./node_modules/bootstrap/scss/bootstrap"; // <=
@import "functions";
@import "variables";
@import "mixins";
// ...
```

Import Bootstrap JavaScript to `src/_js/index.js`:

```js
import Bootstrap from 'bootstrap';

export {
  Bootstrap
}
```

Notes:

- You need to remove `src/_plugins/bootstrap-grid`
- Configure `.browserslistrc` to match with [Bootstrap's .browserslistrc](https://github.com/twbs/bootstrap/blob/master/.browserslistrc)

## Directory structure

The directory structure looks something like this:

```plaintext
.
├── dist/
│   ├── css/
│   ├── js/
│   └── theme.xml
├── src/
│   ├── _defaultmarkups/
│   ├── _js/
│   ├── _plugins/
│   ├── _scss/
│   ├── _views/
│   ├── config.json
│   ├── custom.scss
│   ├── defaultmarkups.xml
│   ├── skin.css
│   ├── template-skin.css
│   └── theme.xml
├── .browserslistrc
├── .editorconfig
├── .stylelintrc
└── Gruntfile.js
```

### dist/

Precompiled theme.

### src/

The theme source code that will be compiled into `dist/`.

### src/\_defaultmarkups and src/defaultmarkups.xml

Default markups are most useful if you have a section of code that you want to re-use in several different places, or only include in certain circumstances.

- Create a new file in `src/_defaultmarkups` to add default markups
- Write the content inside a `b:includable` to define a section of code
- [Include](#include) the file to `src/defaultmarkups.xml` within the `Common` type or gadget type `b:defaultmarkup` tag
- Use `b:include` wherever you want it to appear

You can also create default markups in [`src/_plugins`](#src_plugins) for external resources. You need to add it to `src/defaultmarkups.xml`, too.

### src/\_js

The source code for main JavaScript that will be compiled into `dist/js/main.js`. You can use `ES2015`.

### src/\_plugins

External resources: markups, CSS, JavaScript, and others.

### src/\_scss

The source code for main CSS that will be compiled into `dist/css/main.css`.

### src/\_views

The views: layouts, components and more.

### src/config.json

A config file to gives you a lot of flexibility. [Learn more](#configuration)

### src/custom.scss

Copy variables from `src/_scss/**/*.scss`, `src/_views/**/*.scss`, `src/_defaultmarkups/**/*.scss` and `src/_plugins/**/*.scss` to this file to override default values without modifying source files.

### src/skin.css and src/template-skin.css

Styles in `skin.css` are defined within the `<b:skin>` tag. Styles in `template-skin.css` are defined within the `<b:template-skin>` tag.

CSS within `<b:skin>` is used for blog look, while CSS within `<b:template-skin>` is used for template look in layout editor.

Use `skin.css` to re-create existing styles using skin variables to be able to override through the Blogger's theme designer.

### src/theme.xml

This is the main file for the theme. All the source will be included in this file. This file will be compiled into `dist/theme.xml`.

### .browserslistrc

[Browserslist](https://github.com/browserslist/browserslist) is a config to share target browsers between different front-end tools.

We uses Autoprefixer (included in our build process) to automatically add vendor prefixes to some CSS properties at build time.

We maintain the list of browsers supported through Autoprefixer in this file.

### .editorconfig

Editor preferences for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.

### .stylelintrc

[Stylelint](https://stylelint.io/) helps to enforce the consistent code and prevents you from making errors in your stylesheets.

CSS property order: we uses [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) by default.

### Gruntfile.js

The build tools.

### Other files/folders

Beyond that, any other included file and directory provides support for packages, license information, and development.

## Build tools

We uses [Grunt](https://gruntjs.com/) for its build system. To use our build system, you’ll need the source files and Node.

### Tooling setup

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install `grunt-cli` globally with `npm install -g grunt-cli`.
3. Navigate to the root theme directory and run `npm install` to install dependencies listed in `package.json`.

When completed, you’ll be able to run the various commands provided from the command line.

### Using Grunt commands

Our `Gruntfile.js` includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | `grunt` creates the `dist` directory with compiled files. |
| `grunt watch` | Watches the source files and automatically building them whenever you save. |
| `grunt release` | Run `grunt release` to release your theme, this command will compile the source and zip the root theme directory (exclude: `.git`, `.zip`, `node_modules`). The zip file is named using the format `[theme name]-[theme version].zip`, you can find the file in the root theme directory. |

## Templating

We uses [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake) for creating modular files in order to ease the process while in development.

Learn more about using grunt-bake by reading its [documentation](https://github.com/MathiasPaumgarten/grunt-bake).

### Include

For example, the grunt-bake tag that can be used to include `src/_views/foo.xml` into `src/_views/bar.xml`.

```plaintext
.
└── src/
    └── _views/
        ├── foo.xml
        └── bar.xml
```

Relative to the file:

```html
# src/_views/bar.xml

<!--(bake foo.xml)-->
```

Relative to the `src` path:

```html
# src/_views/bar.xml

<!--(bake /_views/foo.xml)-->
```

### Configuration

The `src/config.json`.

You can access the config values by using:

```html
{{ config.* }}
```

You can access the config values in:

- `src/**/*.xml`
- `src/**/*.scss`
- `src/**/*.css`
- `src/**/*.js`

Example:

```json
# src/config.json

{
  "x": {
    "y": "z"
  },
  "example": "Lorem ipsum dolor sit amet."
}
```

```html
# src/_views/foo.xml

{{ config.x.y }}
<p>{{ config.example }}</p>
```

```html
# Output

z
<p>Lorem ipsum dolor sit amet.</p>
```

### Organization

You can create `.xml`, `.scss`, `.css`, `.js`, and `.md` files in the `src/_views`, `src/_defaultmarkups` and `src/_plugins`.

Example:

```plaintext
.
└── src/
    └── _views/
        ├── header.part/
        ├── header.js
        ├── header.md
        ├── header.scss (or header.css)
        └── header.xml
```

| Files | Description |
| --- | --- |
| `header.xml` | The header markup. |
| `header.scss` | Styles for header element. |
| `header.js` | JavaScript for header element. |
| `header.md` | Documentation for header. |
| `header.part/` | You can create separate markup for header in this folder, then [include](#include) the separate markup to `header.xml`. |

#### Notation for Sass/CSS and JavaScript files in `src/_views`, `src/_defaultmarkups` and `src/_plugins`

- The Sass/CSS and JavaScript files will be **automatically concatenated and compiled** into `dist/css/main.css` (Sass/CSS files) and `dist/js/main.js` (JavaScript files).
- Add exclamation mark (`!`) to the filename if you want to ignore Sass/CSS and JavaScript files for auto concatenation (e.g., `!foo.scss`, `!foo.css`, `!foo.js`).
- You can use Sass variables, functions, and mixins from `src/_scss` in Sass files.
- You can import JavaScript utilities from `src/_js` in JavaScript files (path: `~/src/_js/filename`).

## Contributing

Have a suggestion or bug fix? Open a pull request or issue.

## Changelog

Details changes for each release are documented in the [release notes](https://github.com/wrapblogger/bloggerpack/releases).

### Should I update my Bloggerpack based theme?

Bloggerpack is the starting point for a new theme. When you used it to create a theme you just created a brand new theme using Bloggerpack as a head start.

There isn't really even anything to update. At this point it has become your theme and it doesn't depend on Bloggerpack.

If you see an update to Bloggerpack that you would like to implement on your own Bloggerpack based theme, then you will need to inspect the change and figure out how to manually implement it on your own theme, and you'll need to approach these changes case by case.

## License

Licensed under [MIT](LICENSE.md).
