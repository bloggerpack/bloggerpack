<!--
@@@title:Getting started@@@
@@@section:None@@@
-->

# Getting started

Learn how to compile the source code, builds the theme and documentation, and more.


## Welcome

### Quick start

Download the source and try to apply the precompiled theme (`dist/theme.xml`) to your blog. Customize and builds the theme and documentation to suit your needs.

### Download

<a href="{{ docs.links.download }}">Download source</a> | [Best practices](#best-practices)

### Contents

Once downloaded, you’ll see something like this:

```plaintext
{{ rootDirname }}
├── dist
│   ├── docs
│   └── theme.xml
└── src
    ├── _docs
    ├── _includes
    ├── _js
    ├── _scss
    ├── dist
    ├── config.base.json
    ├── config.docs.json
    ├── config.theme.json
    ├── skin.css
    ├── template-skin.css
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
      <td>The <code>dist</code> folder includes precompiled theme (<code>theme.xml</code>), as well as compiled and minified documentation files.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src</code></td>
      <td>These are the source code that will be compiled into <code>dist</code>.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_docs</code></td>
      <td>The source code for documentation (<code>dist/docs</code>).</td>
    </tr>
    <tr>
      <td rowspan="2"><code style="white-space: nowrap;">src/_includes</code></td>
      <td>The partials that can be mixed and matched by your theme.</td>
    </tr>
    <tr>
      <td>
        <div>The grunt-bake tag:</div>
        <div style="white-space: nowrap;"><code style="white-space: nowrap;">&lt;!--(bake _includes/file.ext)--&gt;</code> - relative</div>
        <div style="white-space: nowrap;"><code style="white-space: nowrap;">&lt;!--(bake /_includes/file.ext)--&gt;</code> - absolute</div>
        <div style="white-space: nowrap;">can be used to include the partial in <code style="white-space: nowrap;">_includes/file.ext</code>.</div>
      </td>
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
      <td>`src/skin.css`, `src/template-skin.css`, `_scss` and `_js` need to be compiled, we compile it into this directory, then we include it in `src/theme.xml`.</td>
    </tr>
    <tr>
      <td rowspan="2">
        <div><code style="white-space: nowrap;">src/config.base.json</code></div>
        <div><code style="white-space: nowrap;">src/config.docs.json</code></div>
        <div><code style="white-space: nowrap;">src/config.theme.json</code></div>
      </td>
      <td>Stores configuration data.</td>
    </tr>
    <tr>
      <td>
        <div style="white-space: nowrap;"><code style="white-space: nowrap;">config.base.json</code> - you can access the data using <code style="white-space: nowrap;">&lbrace;&lbrace; base.data &rbrace;&rbrace;</code>.</div>
        <div style="white-space: nowrap;"><code style="white-space: nowrap;">config.docs.json</code> - you can access the data using <code style="white-space: nowrap;">&lbrace;&lbrace; docs.data &rbrace;&rbrace;</code>.</div>
        <div style="white-space: nowrap;"><code style="white-space: nowrap;">config.theme.json</code> - you can access the data using <code style="white-space: nowrap;">&lbrace;&lbrace; theme.data &rbrace;&rbrace;</code>.</div>
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        <div><code style="white-space: nowrap;">src/skin.css</code></div>
        <div><code style="white-space: nowrap;">src/template-skin.css</code></div>
      </td>
      <td>Styles in <code style="white-space: nowrap;">skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:skin&gt;</code> tag. You can use the <a href="https://support.google.com/blogger/answer/46871" target="_blank">skin variables</a>.</td>
    </tr>
    <tr>
      <td>Styles in <code style="white-space: nowrap;">template-skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:template-skin&gt;</code> tag.</td>
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


## Sass

Utilize our source Sass files to take advantage of variables, maps, mixins, and more.

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
      <td>Styles for custom gadgets (<code style="white-space: nowrap;">src/_includes/defaultmarkups/</code>). This styles doesn't use any variables, functions, or mixins. This styles also doesn't depend on <a href="css-base.html"><code>_base.scss</code></a>.</td>
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

### Sass options

You can find and customize these variables for key global options in `src/_scss/_variables.scss` file.

| Variable | Values | Description |
| --- | --- | --- |
| `$enable-rounded` | `true` (default) or `false` | Enables predefined `border-radius` styles on various components. |
| `$enable-shadows` | `true` or `false` (default) | Enables predefined `box-shadow` styles on various components. |
| `$enable-transitions` | `true` (default) or `false` | Enables predefined `transition`s on various components. |

### Functions

We utilizes several Sass functions in `src/_scss/_functions.scss`.

**Functions for getting values from the color maps:**

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

**Color contrast:**

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

### Remove default Sass

You can remove default styles and write your own styles. To do that, remove all `src/_scss/*.scss` except `index.scss` and `blogger/`. Then, create your own `.scss` file and then import in `index.scss`.

If you remove the default styles, you also must remove its documentation. If you create your own styles, you also must create its documentation.


## Best practices

### Basic

Basic steps to create a theme.

<details>
  <summary>1. Download</summary>
  <p>[Download the source](#download). Extract downloaded source file (`zip`) and then rename `/{{ rootDirname }}` to the name of your theme.</p>
</details>

<details>
  <summary>2. Configurations and customization</summary>
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

**Update banner in `src/skin.css`:**

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

**Update documentation:** update whatever you want.


## Code guide

### XML: Layouts and gadget version

Layouts version: `3`

```html
<html b:layoutsVersion='3'>
  ...
</html>
```

Gadget version: `2`

```html
<html b:defaultwidgetversion='2'>
  ...
</html>

<b:widget version='2'>
  ...
</b:widget>
```

### XML: Comments and organization

```html
<b:comment>
#############################################################################
Heading 1
############################################################################# </b:comment>
↓
<b:comment>### Heading 1.1 ###</b:comment>
↓
<b:comment>=== Heading 1.1.1 ===</b:comment>
<div>...</div>
↓
<b:comment>=== Heading 1.1.2 ===</b:comment>
<div>...</div>
↓
↓
#############################################################################
Heading 2
############################################################################# </b:comment>
↓
<b:comment>### Heading 2.1 ###</b:comment>
↓
<div>...</div>
↓
<b:comment>### Heading 2.2 ###</b:comment>
↓
<div>
  <b:comment>=== Heading 2.2.1 ===</b:comment>
  <div>...</div>
↓
  <b:comment>=== Heading 2.2.2 ===</b:comment>
  <div>
    <b:comment>= Heading 2.2.2.1 =</b:comment>
    <div>...</div>
↓
    <b:comment>= Heading 2.2.2.2 =</b:comment>
    <div>...</div>
  </div>
</div>
```

### XML: `<b:section>` and `<b:widget>`

`<b:section>`:

- Classes and IDs are named using the format `b-section-{name}`.
- Use `name` attribute for naming the section.

`<b:widget>`:

- Always use `title`, `version`, and `visible` attribute.

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
