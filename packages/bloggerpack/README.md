# Bloggerpack

> A tool for develop Blogger theme.

## Getting started

### Features

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- Sass and ES6+
- CSS and JS linter
- CSS and JS minification
- and more

### Usage

Use [starter themes](https://github.com/bloggerpack/bloggerpack/tree/main/starters) for quick start.

### Folder structure

```text
.
├── dist/ (g)
|   └── theme.xml <---------------------------+
├── src/                                      |
|   ├── js/                                   |
|   |   ├── dist/ (g)                         |
|   |   |   └── script.js <-------+           |
|   |   ├── js-in-template/ (g)   |           |
|   |   └── index.js >------------^           |
|   ├── sass/                                 |
|   |   ├── dist/ (g)                         |
|   |   |   └── style.css <-----------+       |
|   |   ├── sass-in-template/ (g)     |       |
|   |   └── index.scss >--------------^       |
|   ├── skin/                                 |
|   |   ├── dist/ (g)                         |
|   |   |   └── style.css <---------------+   |  # (<-) = Compiled
|   |   ├── skin-in-template/ (g)         |   |  # (>-) = Source
|   |   └── index.css >-------------------^   |  # (c)  = Config file
|   └── index.xml >---------------------------^  # (g)  = Auto-generated
├── .browserslistrc   (c)
├── .eslintrc.json    (c)
├── .stylelintrc.json (c)
├── banner.txt        (c)
├── data.json         (c)
└── package.json      (c)
```

#### Config files

##### `.browserslistrc`

The config to share target browsers. Learn more about [Browserslist](https://github.com/browserslist/browserslist).

##### `.eslintrc.json`

The default config is recommended, but if you want to change the config you can read the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

##### `.stylelintrc.json`

The default config is recommended, but if you want to change the config you can read the [Stylelint docs](https://stylelint.io/user-guide/configure).

##### `banner.txt`

The header for compiled Sass, Skin and JS. You can access data from `data.json` using `<%= data.keyName %>`, you can also access data from `package.json` using `<%= pkg.keyName %>`.

##### `data.json`

Store your theme config in this file. This is Nunjucks template context, which means it can be accessed in template using `{{ data.keyName }}`. [Learn more](#template-variables).

##### `package.json`

Use this file to manage and install Bloggerpack and other packages. You also will need to add [Bloggerpack commands and tasks](#bloggerpack-commands).

### Bloggerpack commands

Define Bloggerpack commands and tasks to build and develop Bloggerpack theme.

The commands and tasks are defined in the `scripts` property of `package.json`.

#### Basic example

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

#### Available flags

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

## Concepts

### Template

We uses [Nunjucks](https://mozilla.github.io/nunjucks/templating.html) for its template engine. File extension for template files is `.xml`.

#### Source

- Index file: `src/index.xml`
- Compiled to: `dist/theme.xml`

#### Paths

- `./example.xml` - Relative to file's directory.
- `../example.xml` - Relative to file's parent directory.
- `example.xml` - Relative to the `index.xml` directory.

#### Template tag

Wrap the markup with `<bp:template>` tag in `.xml` files.

```njk
<bp:template>
  <p>example</p>
</bp:template>
```

Note: The template tag is always required.

#### Template variables

You can use variables from [`data.json`](#datajson) using `{{ data.keyName }}` and you can also use variables from [`package.json`](#packagejson) using `{{ pkg.keyName }}`.

###### Example

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

file.xml:

```njk
<bp:template>
  <p>{{ data.myVar }}</p>
  <p>{{ pkg.name }}</p>
</bp:template>
```

Output:

```html
<p>Value of myVar</p>
<p>my-awesome-theme</p>
```

#### Including template

**Do not use** the default Nunjucks `{% include %}` tag, use `{% template %}` tag instead.

src/example-dir/example.xml:

```njk
<bp:template>
  <div>
    <p>example</p>
  </div>
</bp:template>
```

src/index.xml:

```njk
<bp:template>
  <div>
    {% template "./example-dir/example.xml" %}
  </div>
</bp:template>
```

Output:

```html
<div>
  <div>
    <p>example</p>
  </div>
</div>
```

###### Including template from node modules

You can also include template from node modules:

```njk
<bp:template>
  {% template "package-name/path/to/file.xml" %}
</bp:template>
```

Learn how to create plugin for Bloggerpack by reading [this section](#creating-plugins) below.

#### Including assets

Use `{% asset %}` tag to include compiled [Sass](#sass), [Skin](#skin), [JS](#js), and other CSS and JS assets.

Note: You must use the `{% asset %}` tag to prevent assets from being prettied.

##### Usage example

```njk
{% asset %}
  <style>
  .element {
    display: block;
  }
  </style>
{% endasset %}
```

With files:

```njk
{% asset %}
  <style>
  {% asset "./path/to/file1.css" %}
  {% asset "./path/to/file2.css" %}
  </style>
{% endasset %}
```

##### Examples

Normal CSS:

```njk
{% asset %}
  <b:if cond='!data:view.isLayoutMode'>
  <style>
  {% asset "./sass/dist/style.css" %}
  </style>
  </b:if>
{% endasset %}
```

Skin CSS:

```njk
{% asset %}
  <b:if cond='!data:view.isLayoutMode'>
  <b:skin>
  <![CDATA[
  {% asset "./skin/dist/style.css" %}
  ]]>
  </b:skin>
  </b:if>
{% endasset %}
```

Layout Mode CSS:

```njk
{% asset %}
  <b:if cond='data:view.isLayoutMode'>
  <b:template-skin>
  <![CDATA[
  body#layout {}
  ]]>
  </b:template-skin>
  </b:if>
{% endasset %}
```

JS:

```njk
{% asset %}
  <script>
  //<![CDATA[
  {% asset "./js/dist/script.js" %}
  //]]>
  </script>
{% endasset %}
```

##### Including assets from node modules

You can also include assets from node modules:

```njk
{% asset %}
  <b:if cond='!data:view.isLayoutMode'>
  <style>
  {% asset "package-name/path/to/file.css" %}
  </style>
  </b:if>
{% endasset %}
```

#### Extending template

Use Nunjucks `{% extends %}` tag. See [Nunjucks template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

src/layout.xml:

```njk
<bp:template>
  <header>
    {% block header %}{% endblock %}
  </header>

  <main>
    {% block main %}{% endblock %}
  </main>

  <footer>
    {% block footer %}{% endblock %}
  </footer>
</bp:template>
```

src/index.xml:

```njk
<bp:template>
  {% extends "./layout.xml" %}

  {% block header %}
  This is header content.
  {% endblock %}

  {% block main %}
  This is main content.
  {% endblock %}

  {% block footer %}
  This is footer content.
  {% endblock %}
</bp:template>
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

### Sass

Write your styles with [Sass](https://sass-lang.com/). You can also import Sass package from node modules.

#### Source

- Index file: `src/sass/index.scss`
- Compiled to: `src/sass/dist/style.css`

#### Partialize

**Do not write styles in `src/sass/index.scss` directly.** Add a new file (e.g., `_my-component.scss`) within `src/sass/` and than import the file to `src/sass/index.scss`:

Note: You can omit the `_` prefix and the `.scss` extension.

```scss
@import "./my-component";
```

It also support glob imports:

```scss
@import "./dir/**/*.scss";
```

Import from node modules:

```scss
@import "package-name"; // node_modules/package-name/<index.scss>
@import "package-name/dir/file"; // node_modules/package-name/dir/file.scss

// @import "package-name/dir/**/*.scss";
// Glob import is not supported. You don't need glob import inside node_modules.
```

#### Sass-in-Template

You can write Sass for specific template in the template file directly using `<bp:sass>` tag.

```njk
<bp:template>
  <h1 class='example'>Example</h1>
</bp:template>

<bp:sass>
$heading-color: #fff !default;

.example {
  color: $heading-color;
}
</bp:sass>
```

The styles within the tag would be automatically extracted to `src/sass/sass-in-template` folder.

### Skin

Skin is CSS that support Blogger's skin variables to allow your theme to be able to customize through the Blogger theme designer.

#### Source

- Index file: `src/skin/index.css`
- Compiled to: `src/skin/dist/style.css`

Note: The compiled skin is not minified, so it can be customizable in the Blogger code editor.

#### Partialize

**Do not write styles in `src/skin/index.css` directly.** Add a new file (e.g., `_my-component.css`) within `src/skin/` and than import the file to `src/skin/index.css`:

Note: You can omit the `_` prefix and the `.css` extension.

```css
@import "./my-component";
```

It also support glob imports:

```css
@import "./dir/**/*.css";
```

Import from node modules:

```css
@import "package-name"; /* node_modules/package-name/<index.css> */
@import "package-name/dir/file"; /* node_modules/package-name/dir/file.css */
@import "package-name/dir/**/*.css"; /* glob inside node_modules/package-name/dir */
```

#### Skin-in-Template

You can write skin CSS for specific template in the template file directly using `<bp:skin>` tag.

```njk
<bp:template>
  <h1 class='example'>Example</h1>
</bp:template>

<bp:skin>
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
</bp:skin>
```

The styles within the tag would be automatically extracted to `src/skin/skin-in-template` folder.

### JS

The JavaScript. You can write your script with ES6+ and you can also import package from node modules.

#### Source

- Index file: `src/js/index.js`
- Compiled to: `src/js/dist/script.js`

#### Partialize

**Do not write scripts in `src/js/index.js` directly.** Add a new file (e.g., `my-script.js`) within `src/js/` and than import the file to `src/js/index.js`:

Note: You can omit the `.js` extension.

```js
import './my-script';
```

It also support glob imports:

```js
import './dir/**/*.js';
```

Import from node modules:

```js
import 'package-name'; // node_modules/package-name/<index.js>
```

```js
import square from 'package-name/lib/math'; // node_modules/package-name/lib/math.js

console.log(square(5));
```

```js
// import 'package-name/dir/**/*.js';
// Glob import is not supported. You don't need glob import inside node_modules.
```

#### JS-in-Template

You can write JavaScript for specific template in the template file directly using `<bp:js>` tag.

```njk
<bp:template>
  <h1 class='example' id='example'>Example</h1>
</bp:template>

<bp:js>
const example = document.getElementById('example');
</bp:js>
```

The JavaScript within the tag would be automatically extracted to `src/js/js-in-template` folder.

## Creating theme variants

You may want to create a variants of theme with shared components, CSS and JS.

To create a variant of theme, just create a file named `src/index-<name>.xml`, `src/sass/index-<name>.scss`, `src/skin/index-<name>.css` and `src/js/index-<name>.js`.

- The `src/index-<name>.xml` would be compiled to `dist/theme-<name>.xml`.
- The `src/sass/index-<name>.scss` would be compiled to `src/sass/dist/style-<name>.css`.
- The `src/skin/index-<name>.css` would be compiled to `src/skin/dist/style-<name>.css`.
- The `src/js/index-<name>.js` would be compiled to `src/js/dist/script-<name>.js`.

Example:

```text
.
├── dist/
|   ├── theme.xml <-------------------------------+
|   ├── theme-one-column.xml <--------------------|--+
|   └── theme-offcanvas.xml <---------------------|--|--+
└── src/                                          |  |  |
    ├── js/                                       |  |  |
    |   ├── dist/                                 |  |  |
    |   |   ├── script.js <--------------+        |  |  |
    |   |   ├── script-one-column.js <---|--+     |  |  |
    |   |   └── script-offcanvas.js <----|--|--+  |  |  |
    |   ├── index.js >-------------------^  |  |  |  |  |
    |   ├── index-one-column.js >-----------^  |  |  |  |
    |   └── index-offcanvas.js >---------------^  |  |  |
    ├── sass/                                     |  |  |
    |   ├── dist/                                 |  |  |
    |   |   ├── style.css <--------------+        |  |  |
    |   |   ├── style-one-column.css <---|--+     |  |  |
    |   |   └── style-offcanvas.css <----|--|--+  |  |  |
    |   ├── index.scss >-----------------^  |  |  |  |  |
    |   ├── index-one-column.scss >---------^  |  |  |  |
    |   └── index-offcanvas.scss >-------------^  |  |  |
    ├── skin/                                     |  |  |
    |   ├── dist/                                 |  |  |
    |   |   ├── style.css <--------------+        |  |  |
    |   |   ├── style-one-column.css <---|--+     |  |  |
    |   |   └── style-offcanvas.css <----|--|--+  |  |  |
    |   ├── index.css >------------------^  |  |  |  |  |
    |   ├── index-one-column.css >----------^  |  |  |  |
    |   └── index-offcanvas.css >--------------^  |  |  |
    ├── index.xml >-------------------------------^  |  |
    ├── index-one-column.xml >-----------------------^  |
    └── index-offcanvas.xml >---------------------------^
```

## Creating plugins

You just need to write Bloggerpack [template](#template) in a file or use [@bloggerpack/plugin-create](https://github.com/bloggerpack/bloggerpack/tree/main/plugins/create).

Example `my-plugin.xml`:

```njk
<bp:template>
  <div class='my-component' id='myComponent'>
    ...
  </div>
</bp:template>
```

Use `.bloggerpack.xml` extension to support [Sass-in-Template](#sass-in-template), [Skin-in-Template](#skin-in-template), and [JS-in-Template](#js-in-template).

`my-plugin.bloggerpack.xml`:

```njk
<bp:template>
  <div class='my-component' id='myComponent'>
    ...
  </div>
</bp:template>

<bp:sass>
.my-component {
  ...
}
</bp:sass>

<bp:skin>
.my-component {
  ...
}
</bp:skin>

<bp:js>
const myComponent = document.getElementById('myComponent');
</bp:js>
```

**Note**: You can still use Sass-in-Template, Skin-in-Template, and JS-in-Template without `.bloggerpack.xml` extension, but the assets will not be extracted to the user's theme.

### Sharing plugins

Use the `bloggerpack-plugin` keyword within your `package.json` and GitHub topics.

### Learn more

Learn how to **include template from node modules** by reading [this section](#including-template-from-node-modules) above.

Learn how to create **npm package** by reading its [documentation](https://docs.npmjs.com/getting-started/).

### Official plugins

[Bloggerpack plugins](https://github.com/bloggerpack/bloggerpack/tree/main/plugins)

## Creating starters

You can use [@bloggerpack/starter-create](https://github.com/bloggerpack/bloggerpack/tree/main/starters/create) to create a new starter theme for Bloggerpack.

### Sharing starters

Use the `bloggerpack-starter` keyword within your `package.json` and GitHub topics.

### Official starters

[Bloggerpack starters](https://github.com/bloggerpack/bloggerpack/tree/main/starters)

## Changelog

See [CHANGELOG](https://github.com/bloggerpack/bloggerpack/blob/main/packages/bloggerpack/CHANGELOG.md).
