<!--
@@@title:Getting started@@@
@@@section:None@@@
-->

# Getting started

Learn how to compile the source code, builds the theme and documentation, and more.


## Introduction

### Quick start

Download the source and try to apply the precompiled theme (`dist/theme.xml`) to your blog. Customize and builds the theme and documentation to suit your needs.

### Download

<a href="{{ docs.links.download }}">Download source</a> | [Step by Step Tutorial](#step-by-step-tutorial)

### Contents

Once downloaded, you’ll see something like this:

```plaintext
{{ rootDirname }}
├── dist
│   ├── docs
│   └── theme.xml
└── src
    ├── _css
    ├── _docs
    ├── _includes
    ├── _js
    ├── _scss
    ├── dist
    ├── config.base.json
    ├── config.docs.json
    ├── config.theme.json
    └── theme.xml
```

<table>
  <thead>
    <tr>
      <th>File / Directory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code style="white-space: nowrap;">dist</code></td>
      <td>The <code>/dist</code> folder includes precompiled theme, as well as compiled and minified documentation files.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src</code></td>
      <td>These are the source code that will be compiled into <code>/dist</code>.</td>
    </tr>
    <tr>
      <td rowspan="3"><code style="white-space: nowrap;">src/_css</code></td>
      <td>The source code for CSS (<code>src/dist/css</code>).</td>
    </tr>
    <tr>
      <td>Styles in <code style="white-space: nowrap;">skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:skin&gt;</code> tag. You can use the <a href="https://support.google.com/blogger/answer/46871">skin variables</a>.</td>
    </tr>
    <tr>
      <td>Styles in <code style="white-space: nowrap;">template-skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:template-skin&gt;</code> tag.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_docs</code></td>
      <td>The source code for documentation (<code>dist/docs</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_includes</code></td>
      <td>The partials that can be mixed and matched by your theme. [Read partials docs](#partials)</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_js</code></td>
      <td>The source code for JavaScript (<code>src/dist/bundle/bundle.js</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_scss</code></td>
      <td>The source code for CSS (<code>src/dist/bundle/bundle.css</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/dist</code></td>
      <td>`src/_css`, `src/_scss` and `src/_js` need to be compiled, we compile it into this directory, then we include it in `src/theme.xml`.</td>
    </tr>
    <tr>
      <td>
        <div><code style="white-space: nowrap;">src/config.base.json</code></div>
        <div><code style="white-space: nowrap;">src/config.docs.json</code></div>
        <div><code style="white-space: nowrap;">src/config.theme.json</code></div>
      </td>
      <td>Stores configuration data. [Read configuration docs](#configuration)</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/theme.xml</code></td>
      <td>The main file for the theme.</td>
    </tr>
    <tr>
      <td>Other files/folders</td>
      <td>Beyond that, any other included file and directory provides support for packages, license information, and development.</td>
    </tr>
  </tbody>
</table>


## Tooling setup

We uses [Grunt](https://gruntjs.com/) for its build system. To use our build system, you’ll need the source files and Node. Follow these steps:

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install `grunt-cli` globally with `npm install -g grunt-cli`.
3. Navigate to the root `/{{ rootDirname }}` directory and run `npm install` to install our local dependencies listed in `package.json`.

When completed, you’ll be able to run the various commands provided from the command line.


## Using Grunt commands

Our `Gruntfile.js` includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | `grunt` creates the `/dist` directory with compiled files. |
| `grunt watch` | Watches the source files and automatically building them whenever you save. |
| `grunt release` | Same as `grunt` plus it zip your theme and the source. |

### Local documentation

You can run the documentation locally via Grunt commands:

1. From the root `/{{ rootDirname }}` directory, run `grunt docs-serve` in the command line.
2. Open `http://localhost:9001` in your browser.


## Templating

We uses [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake) for creating modular files in order to ease the process while in development.

### Partials

By default, the partial files are stored in `src/_includes` directory.

Here is the grunt-bake tag that can be used to include the partial in `_includes/file.ext`:

```html
// Relative to the file
<!--(bake _includes/file.ext)-->

// Relative to the `src` path
<!--(bake /_includes/file.ext)-->
```

### Configuration

There is three configuration file for stores configuration data:

1. `src/config.base.json`
2. `src/config.docs.json`
3. `src/config.theme.json`

You can access the data in: 

- `src/theme.xml` (or any other `.xml` file that included in this file)
- `src/_css`
- `src/_scss`
- `src/_js`
- `src/_docs`

Here is how to access the data:

- `config.base.json` - access the data using <code>&lbrace;&lbrace; base.dataName &rbrace;&rbrace;</code>
- `config.docs.json` - access the data using <code>&lbrace;&lbrace; docs.dataName &rbrace;&rbrace;</code>
- `config.theme.json` - access the data using <code>&lbrace;&lbrace; theme.dataName &rbrace;&rbrace;</code>

Example:

```json
config.theme.json

{
  "example": "Lorem ipsum dolor sit amet"
}
```

<!--(bake-start _process="false")-->
```html
your-file.xml

<p>{{ theme.example }}.</p>
```
<!--(bake-end)-->

```html
Output:

<p>Lorem ipsum dolor sit amet.</p>
```

### Learn more

Learn more about using grunt-bake by reading its [documentation](https://github.com/MathiasPaumgarten/grunt-bake).


## Sass

Utilize our source Sass files to take advantage of variables, functions, mixins, and more.

> From the beginning, we adopted [Bootstrap](https://getbootstrap.com/)'s code guidelines as a convention for writing our Sass/CSS. We also utilize several useful Bootstrap's variables, functions, mixins, and components.

### File structure

```plaintext
your-project/
└── src/
    └── _scss/
        ├── blogger/
        ├── _custom.scss
        └── **/*.scss
```

<table>
  <thead>
    <tr>
      <th>File / Directory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code style="white-space: nowrap;">blogger/</code></td>
      <td>Styles for custom gadgets (<code style="white-space: nowrap;">src/_includes/defaultmarkups/</code>). This styles doesn't use any variables, functions and mixins. This styles also doesn't depend on <a href="css-base.html"><code>_base.scss</code></a>.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">_custom.scss</code></td>
      <td>Copy variables from `_variables.scss` to this file to override default values without modifying source files.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">\*\*/*.scss</code></td>
      <td>Other sass files are variables, functions, mixins and components.</td>
    </tr>
  </tbody>
</table>

### Sass options

You can find and customize these variables for key global options in `_variables.scss`.

| Variable | Values | Description |
| --- | --- | --- |
| `$enable-rounded` | `true` (default) or `false` | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows` | `true` or `false` (default) | Enables predefined `box-shadow` styles on various components. |
| `$enable-transitions` | `true` (default) or `false` | Enables predefined `transition`s on various components. |

### Modify variables and maps

Every Sass variable includes the `!default` flag allowing you to override the variable’s default value in `_custom.scss` without modifying source code.

Just like Sass variables, all Sass maps include the `!default` flag and can be overridden and extended.

```scss
_custom.scss

// Customize options
$enable-rounded: false;

// Variable overrides
$body-color:  #fff;
$body-bg:     #000;

// Modify map
$theme-colors: (
  "primary": #000
);

// Add to map
$theme-colors: (
  "custom-color": #900
);
```

### Functions

We utilizes several Sass functions in `_functions.scss`.

#### Color maps

Functions for getting values from the color maps.

```scss
// Retrieve color Sass maps
@function theme-color($key: "primary") {
  @return map-get($theme-colors, $key);
}
```

```scss
// Example to pick one color from a Sass map

.custom-element {
  background-color: theme-color("dark");
}
```

#### Color contrast

The color contrast function, `color-yiq`. It utilizes the [YIQ color space](https://en.wikipedia.org/wiki/YIQ) to automatically return a light (`#fff`) or dark (`#111`) contrast color based on the specified base color.

```scss
// Color contrast
@function color-yiq($color) {
  $r: red($color);
  $g: green($color);
  $b: blue($color);

  $yiq: (($r * 299) + ($g * 587) + ($b * 114)) / 1000;

  @if ($yiq >= $yiq-contrasted-threshold) {
    @return $yiq-text-dark;
  } @else {
    @return $yiq-text-light;
  }
}
```

```scss
// Example

$bg: #000;

.custom-element {
  color: color-yiq(#000); // returns `color: #fff`
  background-color: #000;
}

.custom-element2 {
  color: color-yiq($bg); // returns `color: #fff`
  background-color: $bg;
}
```

### Responsive breakpoints

[Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) for creating sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

#### Breakpoint up

CSS:

```css
/* Extra small devices (portrait phones, less than 576px) */
/* No media query for `xs` since this is the default */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
```

Sass mixins:

```scss
// No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example: Hide starting at `min-width: 0`, and then show at the `sm` breakpoint
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
```

#### Breakpoint down

Media queries that go in the other direction (the given screen size or smaller).

CSS:

```css
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { ... }

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) { ... }

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) { ... }

/* Extra large devices (large desktops) */
/* No media query since the extra-large breakpoint has no upper bound on its width */
```

Sass mixins:

```scss
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
// No media query necessary for xl breakpoint as it has no upper bound on its width

// Example: Style from medium breakpoint and down
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
```

#### Breakpoint only

Media queries for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

CSS:

```css
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { ... }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { ... }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { ... }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { ... }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { ... }
```

Sass mixins:

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
```

#### Breakpoint between

Similarly, media queries may span multiple breakpoint widths.

CSS:

```css
/* Example */
/* Apply styles starting from medium devices and up to extra large devices */
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
```

Sass mixins:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

### Remove default Sass

You can remove default styles and write your own styles. To do that, remove all `*.scss` except `index.scss` and `blogger/`. Then, create your own `.scss` file and then import it in `index.scss`.

If you remove the default styles, you also must remove its documentation. If you create your own styles, you also must create its documentation.


## Best practices

### Step by Step Tutorial

The goal of this tutorial is to take you from having some development experience to building your first theme.

<details>
  <summary>1. Download and setup</summary>
  <div>
    <p>[Download the source](#download). Extract downloaded source file (`zip`) and then rename `/{{ rootDirname }}` to the name of your theme.</p>

    <p>Run through the [tooling setup](#tooling-setup) above to use our build system.</p>

    <p><strong>Change, build, and preview:</strong></p>

    <ol>
      <li>Change the source</li>
      <li>Run `grunt` to build your changes</li>
      <li>To preview your changes, apply the new compiled theme (<code>dist/theme.xml</code>) to your blog</li>
      <li>Repeat.</li>
    </ol>
  </div>
</details>

<details>
  <summary>2. Configuration and customization</summary>
  <div>
    <ul>
      <li>Configure theme: `src/config.theme.json`.</li>
      <li>Configure docs: `src/config.docs.json`.</li>
    </ul>

    <p>All important text and links in the theme, CSS, JS and documentation is taken from configuration data, such as theme name, version number and more. So, you only need to change it in the configuration file.</p>

    <p>You can also customize the docs to suit your needs.</p>
  </div>
</details>

<details>
  <summary>3. Update README</summary>
  <p>Update `README.md` for your theme.</p>
</details>

<details>
  <summary>4. Publish</summary>
  <div>
    <p>After you have finished everything, it's time to share your theme to the world.</p>

    <ul>
      <li>Run `grunt release`, this command will generate a `zip` file, that file is the release of your theme.</li>
      <li>Share your theme (the `zip` file) to the world.</li>
    </ul>
  </div>
</details>

### Create a new starter theme

You might want to create a new starter theme. For example, adding new features, adding a CSS framework or completely rewrite theme and styles. Follow these steps:

**Add config to `src/config.base.json`:**

```json
{
  "1": {
    ...
  },
  "2": {
    "name": "Starter Theme Name",
    "version": "1.0.0",
    "date": "2017-2018",
    "homepage": "https://example.com/starter-theme-name",
    "author": {
      "name": "Your Name",
      "url": "https://example.com"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/example/starter-theme-name.git"
    },
    "license": {
      "name": "MIT",
      "url": "https://github.com/example/starter-theme-name/blob/master/LICENSE"
    }
  }
}
```

**Update banner in `src/_css/skin.css`:**

<!--(bake-start _process="false")-->
```css
/* ==========================================================================
   Theme details
   ========================================================================== */

/*!
 * Name            : {{ theme.name }}
 * Version         : {{ theme.version }}
 * Date            : {{ theme.date }}
 * Homepage        : {{ theme.homepage }}
 * Author Name     : {{ theme.author.name }}
 * Author URL      : {{ theme.author.url }}
 * Repository Type : {{ theme.repository.type }}
 * Repository URL  : {{ theme.repository.url }}
 * License         : {{ theme.license.name }}
 * License URL     : {{ theme.license.url }}
 * Based on {{ base.2.name }}
 */

/*!
 * {{ base.2.name }} v{{ base.2.version }} ({{ base.2.homepage }})
 * Copyright {{ base.2.date }} {{ base.2.author.name }} ({{ base.2.author.url }})
 * Licensed under {{ base.2.license.name }} ({{ base.2.license.url }})
 * Based on {{ base.1.name }}
 */

/*!
 * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})
 * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})
 * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})
 */
```
<!--(bake-end)-->

**Update banner in `src/_scss/index.scss`:**

<!--(bake-start _process="false")-->
```css
/*!
 * {{ theme.name }} v{{ theme.version }}
 * Based on {{ base.2.name }}
 */

/*!
 * {{ base.2.name }} v{{ base.2.version }} ({{ base.2.homepage }})
 * Copyright {{ base.2.date }} {{ base.2.author.name }} ({{ base.2.author.url }})
 * Licensed under {{ base.2.license.name }} ({{ base.2.license.url }})
 * Based on {{ base.1.name }}
 */

/*!
 * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})
 * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})
 * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})
 */
```
<!--(bake-end)-->

**Update banner in `Gruntfile.js`:**

<!--(bake-start _process="false")-->
```js
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    banner: '/*!\n' +
            ' * {{ theme.name }} v{{ theme.version }}\n' +
            ' * Based on {{ base.2.name }}\n' +
            ' */\n' +
            '/*!\n' +
            ' * {{ base.2.name }} v{{ base.2.version }} ({{ base.2.homepage }})\n' +
            ' * Copyright {{ base.2.date }} {{ base.2.author.name }} ({{ base.2.author.url }})\n' +
            ' * Licensed under {{ base.2.license.name }} ({{ base.2.license.url }})\n' +
            ' * Based on {{ base.1.name }}\n' +
            ' */\n' +
            '/*!\n' +
            ' * {{ base.1.name }} v{{ base.1.version }} ({{ base.1.homepage }})\n' +
            ' * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})\n' +
            ' * Licensed under {{ base.1.license.name }} ({{ base.1.license.url }})\n' +
            ' */\n',

    ...
  });
};
```
<!--(bake-end)-->

**Update banner in `src/_docs/assets/css/docs.css` and `src/_docs/assets/js/docs.js`:**

<!--(bake-start _process="false")-->
```css
/*!
 * {{ theme.name }} Docs
 * Based on {{ base.2.name }}
 */

/*!
 * {{ base.2.name }} Docs ({{ base.2.homepage }})
 * Copyright {{ base.2.date }} {{ base.2.author.name }} ({{ base.2.author.url }})
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 * Based on {{ base.1.name }}
 */

/*!
 * {{ base.1.name }} Docs ({{ base.1.homepage }})
 * Copyright {{ base.1.date }} {{ base.1.author.name }} ({{ base.1.author.url }})
 * Licensed under the Creative Commons Attribution 3.0 Unported License (https://creativecommons.org/licenses/by/3.0)
 */
```
<!--(bake-end)-->

**Remove and/or add styles:** [see above](#remove-default-sass).

**Update documentation:** customize the docs to suit your needs.


## Code guide

### XML: Comments and organization

```html
<b:comment>
#############################################################################
Heading 1
############################################################################# </b:comment>
↓
<b:comment>### Heading 1.1 ###</b:comment>
↓
<div>
  .........
</div>
↓
<b:comment>### Heading 1.2 ###</b:comment>
↓
<div>
  .........
</div>
↓
↓
#############################################################################
Heading 2
############################################################################# </b:comment>
↓
<b:comment>### Heading 2.1 ###</b:comment>
↓
<b:comment>=== Heading 2.1.1 ===</b:comment>
<div>
  .........
</div>
<b:comment>=== Heading 2.1.2 ===</b:comment>
<div>
  .........
</div>
↓
<b:comment>### Heading 2.2 ###</b:comment>
↓
<div>
  <b:comment>=== Heading 2.2.1 ===</b:comment>
  <div>
    .........
  </div>
  <b:comment>=== Heading 2.2.2 ===</b:comment>
  <div>
    <b:comment>=== Heading 2.2.2.1 ===</b:comment>
    <div>
      .........
    </div>
    <b:comment>=== Heading 2.2.2.2 ===</b:comment>
    <div>
      .........
    </div>
  </div>
</div>
↓
<b:comment>### Heading 2.3 ###</b:comment>
↓
<div>
  ↓
  <b:comment>### Heading 2.3.1 ###</b:comment>
  ↓
  <div>
    .........
  </div>
  ↓
  <b:comment>### Heading 2.3.2 ###</b:comment>
  ↓
  <b:comment>=== Heading 2.3.2.1 ===</b:comment>
  <div>
    .........
  </div>
  <b:comment>=== Heading 2.3.2.2 ===</b:comment>
  <div>
    <b:comment>=== Heading 2.3.2.2.1 ===</b:comment>
    <div>
      .........
    </div>
    <b:comment>=== Heading 2.3.2.2.2 ===</b:comment>
    <div>
      .........
    </div>
  </div>
</div>
```

### XML: `<b:section>` and `<b:widget>`

`<b:section>`:

- Classes and IDs are named using the format `b-section-{name}`.
- Use `name` attribute for naming the section.

`<b:widget>`:

- Always use `locked`, `title`, `version`, and `visible` attribute.

Example:

```html
<b:section class='b-section-header-nav' id='b-section-header-nav' name='Header nav'>
  <b:widget id='HTML1' locked='false' title='HTML/JavaScript' type='HTML' version='2' visible='true'>
    ...
  </b:widget>
</b:section>
```

### CSS: Comments and organization

```css
/* ==========================================================================
   Heading 1
   ========================================================================== */
↓
.example {}
↓
/**
 * Sub-heading or description
 */
↓
.example {}
↓
/** Another sub-heading **/
↓
.example {}
↓
/* Basic comment */
.example {}
↓
/* Heading 1.2
   ========================================================================== */
↓
.example {}
↓
/**
 * Sub-heading or description
 */
↓
.example {}
↓
/** Another sub-heading **/
↓
.example {}
↓
/* Basic comment */
.example {}
↓
/* Heading 1.2.1
   ========================================= */
↓
.example {}
↓
/**
 * Sub-heading or description
 */
↓
.example {}
↓
/** Another sub-heading **/
↓
.example {}
↓
/* Basic comment */
.example {}
↓
/* ==========================================================================
   Heading 2
   ========================================================================== */
↓
.example {}
```
