<h3 align="center">Bloggerpack</h3>

<p align="center">
  A tool for develop Blogger theme.
  <br>
  <br>
  <a href="#getting-started">Getting started</a>
  ·
  <a href="#concepts">Concepts</a>
  ·
  <a href="#creating-theme-variants">Creating theme variants</a>
  ·
  <a href="#creating-plugins">Creating plugins</a>
  ·
  <a href="#changelog">Changelog</a>
</p>

---

<h3 align="center">Getting started</h3>

<p align="center">
  <a href="#features">Features</a>
  ·
  <a href="#usage">Usage</a>
  ·
  <a href="#folder-structure">Folder structure</a>
  ·
  <a href="#bloggerpack-commands">Bloggerpack commands</a>
</p>

---

## Features

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- Sass and ES6+
- CSS and JS linter
- CSS and JS minification
- and more

## Usage

Use [starter themes](https://github.com/bloggerpack/bloggerpack/tree/main/starters) for quick start.

## Folder structure

```text
.
├── dist/ (g)
|   └── theme.xml <---------------------------+
├── src/                                      |
|   ├── dist/ (g)                             |
|   |   ├── js.js <---------------+           |
|   |   ├── sass.css <------------|---+       |
|   |   └── skin.css <------------|---|---+   |
|   ├── js/                       │   |   |   |
|   |   ├── js-in-template/ (g)   |   |   |   |
|   |   └── index.js ------------>|   |   |   |
|   ├── sass/                         |   |   |
|   |   ├── sass-in-template/ (g)     |   |   |
|   |   └── index.scss -------------->|   |   |
|   ├── skin/                             |   |
|   |   ├── skin-in-template/ (g)         |   |
|   |   └── index.css ------------------->|   |
|   ├── template/                             |  # (<-) = Compiled
|   |   ├── my-template.njk                   |  # (->) = Source
|   |   └── another-template.njk              |  # (c)  = Config file
|   ├── index.njk --------------------------->|  # (g)  = Auto-generated
|   └── layout.njk
├── .browserslistrc (c)
├── .eslintrc.json  (c)
├── .stylelintrc    (c)
├── banner.txt      (c)
├── data.json       (c)
└── package.json    (c)
```

### Config files

#### `.browserslistrc`

The config to share target browsers. Learn more about [Browserslist](https://github.com/browserslist/browserslist).

#### `.eslintrc.json`

The default config is recommended, but if you want to change the config you can read the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

#### `.stylelintrc`

The default config is recommended, but if you want to change the config you can read the [Stylelint docs](https://stylelint.io/user-guide/configure).

#### `banner.txt`

The header for compiled Sass, Skin and JS. You can access data from `data.json` using `<%= data.keyName %>`, you can also access data from `package.json` using `<%= pkg.keyName %>`.

#### `data.json`

Store your theme config in this file. This is Nunjucks template context, which means it can be accessed in template using `{{ data.keyName }}`. [Learn more](#template-variables).

#### `package.json`

Use this file to manage and install Bloggerpack and other packages. You also will need to add [Bloggerpack commands and tasks](#bloggerpack-commands).

### Folder structure for plugin

The folder structure for plugin is a little different:

- Move `sass`, `skin`, `js` and `template` folder to root project directory.
- Rename `index.njk` to `preview.njk` and move it to `template` folder.

See [hello-world](https://github.com/bloggerpack/bloggerpack/tree/main/plugins/hello-world) plugin for example.

## Bloggerpack commands

Define Bloggerpack commands and tasks to build and develop Bloggerpack theme.

The commands and tasks are defined in the `scripts` property of `package.json`.

### Basic example

package.json

```json
{
  "scripts": {
    "build": "bloggerpack --mode production",
    "watch": "bloggerpack --mode development --watch"
  }
}
```

You’ll be able to run:

- `npm run build` - Build the theme.
- `npm run watch` - Watches the source files and automatically building them (in development mode) whenever you save.

### Available flags

| Flag | Description |
| ---- | ----------- |
| `--mode` | `production` or `development` (no minification) |
| `--no-sass` | Exclude Sass from compilation. |
| `--no-sass-lint` | Disable Sass linter. |
| `--no-skin` | Exclude Skin from compilation. |
| `--no-skin-lint` | Disable Skin linter. |
| `--no-js` | Exclude JS from compilation. |
| `--no-js-lint` | Disable JS linter. |
| `--watch` | Watches the source files and automatically building them whenever you save. |
| `--gulpfile` | Custom gulpfile. |
| `--cwd` | Custom CWD. |

---

<h3 align="center">Concepts</h3>

<p align="center">
  <a href="#template">Template</a>
  ·
  <a href="#sass">Sass</a>
  ·
  <a href="#skin">Skin</a>
  ·
  <a href="#js">JS</a>
</p>

---

## Template

We uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for its template engine. File extension for template files is `.njk`.

### Source

- Index file: `src/index.njk`
- Compiled to: `dist/theme.xml`

### Paths

- `./example.njk` - Relative to file's directory.
- `../example.njk` - Relative to file's parent directory.
- `example.njk` - Relative to the `index.njk` directory.

### Template tag

Wrap the markup with `<template to='bp:template'>` tag in `.njk` files.

```njk
<template to='bp:template'>
  <p>example</p>
</template>
```

Note: The template tag is always required.

### Template variables

You can use variables from [`data.json`](#datajson) using `{{ data.keyName }}` and you can also use variables from [`package.json`](#packagejson) using `{{ pkg.keyName }}`.

##### Example

data.json:

```json
{
  "myVar": "Value of myVar"
}
```

package.json:

```json
{
  "name": "my-awesome-theme"
}
```

file.njk:

```njk
<template to='bp:template'>
  <p>{{ data.myVar }}</p>
  <p>{{ pkg.name }}</p>
</template>
```

Output:

```html
<p>Value of myVar</p>
<p>my-awesome-theme</p>
```

### Including template

**Do not use** the default Nunjucks `{% include %}` tag, use `{% template %}` tag instead.

src/example-dir/example.njk:

```njk
<template to='bp:template'>
  <div>
    <p>example</p>
  </div>
</template>
```

src/index.njk:

```njk
<template to='bp:template'>
  <div>
    {% template "./example-dir/example.njk" %}
  </div>
</template>
```

Output:

```html
<div>
  <div>
    <p>example</p>
  </div>
</div>
```

##### Including template from node modules

You can also include template from node modules:

```njk
<template to='bp:template'>
  {% template "package-name/path/to/file.njk" %}
</template>
```

Learn how to create plugin for Bloggerpack by reading [this section](#creating-plugins) below.

### Including assets

Use `{% asset %}` tag to include compiled [Sass](#sass), [Skin](#skin), [JS](#js), and other CSS and JS assets.

Note: You must use the `{% asset %}` tag to prevent assets from being prettied.

##### Auto style tag

```njk
{% asset type="style", "./path/to/file.css" %}
```

Output:

```html
<b:if cond='!data:view.isLayoutMode'>
<style>
...
</style>
</b:if>
```

##### Auto skin tag

```njk
{% asset type="skin", "./path/to/file.css" %}
```

Output:

```html
<b:if cond='!data:view.isLayoutMode'>
<b:skin>
<![CDATA[
...
]]>
</b:skin>
</b:if>
```

##### Auto script tag

```njk
{% asset type="script", "./path/to/file.js" %}
```

Output:

```html
<script>
//<![CDATA[
...
//]]>
</script>
```

##### Block tag

```njk
{% asset %}
  <b:if cond='!data:view.isLayoutMode'>
  <style>
  .element {
    display: block;
  }
  </style>
  </b:if>
{% endasset %}

{% asset %}
  <script>
  //<![CDATA[
  console.log('Hello');
  //]]>
  </script>
{% endasset %}
```

##### Block tag with files

Use `<% asset %>` tag.

```njk
{% asset %}
  <b:if cond='!data:view.isLayoutMode'>
  <style>
  <% asset "./path/to/file1.css" %>
  <% asset "./path/to/file2.css" %>
  </style>
  </b:if>
{% endasset %}

{% asset %}
  <script>
  //<![CDATA[
  <% asset "./path/to/file1.js" %>
  <% asset "./path/to/file2.js" %>
  //]]>
  </script>
{% endasset %}
```

##### Including assets from node modules

You can also include assets from node modules:

```njk
{% asset type="style", "package-name/path/to/file.css" %}
```

### Extending template

Use Nunjucks `{% extends %}` tag. See [Nunjucks template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

src/layout.njk:

```njk
<template to='bp:template'>
  <header>
    {% block header %}{% endblock %}
  </header>

  <main>
    {% block main %}{% endblock %}
  </main>

  <footer>
    {% block footer %}{% endblock %}
  </footer>
</template>
```

src/index.njk:

```njk
<template to='bp:template'>
  {% extends "./layout.njk" %}

  {% block header %}
  This is header content.
  {% endblock %}

  {% block main %}
  This is main content.
  {% endblock %}

  {% block footer %}
  This is footer content.
  {% endblock %}
</template>
```

Output:

```html
<header>
  This is header content.
</header>

<main>
  This is main content.
</main>

<footer>
  This is footer content.
</footer>
```

## Sass

Write your styles with [Sass](https://sass-lang.com/). You can also import Sass package from node modules.

### Source

- Index file: `src/sass/index.scss`
- Compiled to: `src/dist/sass.css`

### Partialize

**Do not write styles in `src/sass/index.scss` directly.** Add a new file (e.g., `_my-component.scss`) within `src/sass/` and than import the file to `src/sass/index.scss`.

```scss
@import "my-component";
```

It also support glob imports:

```scss
@import "dir/**/*.scss";
```

Import from node modules:

```scss
@import "~package-name/path/to/scss-file";
```

### Sass-in-Template

You can write Sass for specific template in the template file directly using `<style to='bp:sass'>` tag.

```njk
<template to='bp:template'>
  <h1 class='example'>Example</h1>
</template>

<style to='bp:sass'>
$heading-color: #fff !default;

.example {
  color: $heading-color;
}
</style>
```

The styles within the tag would be automatically extracted to `src/sass/sass-in-template` folder.

## Skin

Skin is CSS that support Blogger's skin variables to allow your theme to be able to customize through the Blogger theme designer.

### Source

- Index file: `src/skin/index.css`
- Compiled to: `src/dist/skin.css`

Note: The compiled skin is not minified, so it can be customizable in the Blogger code editor.

### Partialize

**Do not write styles in `src/skin/index.css` directly.** Add a new file (e.g., `my-component.css`) within `src/skin/` and than import the file to `src/skin/index.css`.

```css
@import "my-component";
```

It also support glob imports:

```css
@import "dir/**/*.css";
```

### Skin-in-Template

You can write skin CSS for specific template in the template file directly using `<style to='bp:skin'>` tag.

```njk
<template to='bp:template'>
  <h1 class='example'>Example</h1>
</template>

<style to='bp:skin'>
/*
<Variable name="heading.color"
    description="Heading color"
    type="color"
    default="#ffffff"
    value="#ffffff"/>
*/

.example {
  color: $(heading.color);
}
</style>
```

The styles within the tag would be automatically extracted to `src/skin/skin-in-template` folder.

## JS

The JavaScript. You can write your script with ES6+ and you can also import package from node modules.

### Source

- Index file: `src/js/index.js`
- Compiled to: `src/dist/js.js`

### Partialize

**Do not write scripts in `src/js/index.js` directly.** Add a new file (e.g., `util.js`) within `src/js/` and than import the file to `src/js/index.js`.

```js
import './util';
```

It also support glob imports:

```js
import 'dir/**/*.js';
```

Import from node modules:

```js
import 'package-name';
import x from 'package-name';
```

### JS-in-Template

You can write JavaScript for specific template in the template file directly using `<script to='bp:js'>` tag.

```njk
<template to='bp:template'>
  <h1 class='example' id='example'>Example</h1>
</template>

<script to='bp:js'>
const example = document.getElementById('example');
</script>
```

The JavaScript within the tag would be automatically extracted to `src/js/js-in-template` folder.

---

## Creating theme variants

You may want to create a variants of theme with shared components and styles, and it can even be completely different.

To create a theme variant, just create a file named `index-*.njk` in `src` folder (e.g., `src/index-variant-name.njk`).

The `src/index-*.njk` would be compiled to `dist/theme-*.xml`.

Example:

```text
.
├── dist/
|   ├── theme.xml <------------+
|   ├── theme-one-column.xml <-|---+
|   └── theme-offcanvas.xml <--|---|---+
└── src/                       |   |   |
    ├── index.njk ------------>|   |   |
    ├── index-one-column.njk ----->|   |
    └── index-offcanvas.njk ---------->|
```

---

## Creating plugins

You just need to write Bloggerpack's [Template](#template), [Sass](#sass), [Skin](#skin), and [JS](#js) in a file with `.njk` extension.

Example `my-plugin.njk`:

```njk
<template to='bp:template'>
  <div class='my-component' id='myComponent'>
    ...
  </div>
</template>

<style to='bp:sass'>
.my-component {
  ...
}
</style>

<style to='bp:skin'>
.my-component {
  ...
}
</style>

<script to='bp:js'>
const myComponent = document.getElementById('myComponent');
</script>
```

The Sass, Skin, and JS are optional.

You can also create a standard `.scss`, `.css` and `.js` files and tell your user to import the files.

### Plugin package name

Plugin package names must start with `bloggerpack-plugin-*` or `@org-name/bloggerpack-plugin-*` to automatically extract the Sass, Skin, and JS in template; and to make Bloggerpack works as it should.

### Learn more

Learn how to **include template from node modules** by reading [this section](#including-template-from-node-modules) above. Read [this section](#including-assets-from-node-modules) to **include CSS and JS from node modules**.

Learn how to create **npm package** by reading its [documentation](https://docs.npmjs.com/getting-started/).

### Official plugins

[Bloggerpack plugins](https://github.com/bloggerpack/bloggerpack/tree/main/plugins)

---

## Changelog

See [CHANGELOG](https://github.com/bloggerpack/bloggerpack/blob/main/packages/bloggerpack/CHANGELOG.md).
