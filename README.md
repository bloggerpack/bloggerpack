<p align="center">
  <a href="https://github.com/bloggerpack/blogger-snippets">Blogger snippets</a>
  ·
  <a href="https://github.com/bloggerpack/plugins">Plugins</a>
</p>

---

<p align="center">
  <img src="logo.svg" alt="Bloggerpack logo" width="100" height="100">
</p>

<h3 align="center">Bloggerpack</h3>

<p align="center">
  A tool for develop Blogger theme.
  <br>
  <br>
  <a href="#getting-started">Getting started</a>
  ·
  <a href="#concepts">Concepts</a>
  ·
  <a href="#license">License</a>
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
</p>

---

## Features

- [Nunjucks](https://mozilla.github.io/nunjucks/)
- Sass and ES6+
- CSS and JS linter
- CSS and JS minification
- and more

## Usage

| [Download starter themes](starter) |
| ---------------------------------- |

## Folder structure

You can configure the folder structure in `bloggerpack.config.js`.

### Example

The `bloggerpack.config.js`:

```js
module.exports = {
  template: {
    src:  './src/index.njk',
    dist: './dist/theme.xml'
  },
  sass: {
    src:  './src/assets/sass/index.scss',
    dist: './src/@dist/sass/style.css'
  },
  skin: {
    src:  './src/assets/skin/index.css',
    dist: './src/@dist/skin/skin.css'
  },
  js: {
    src:  './src/assets/js/index.js',
    dist: './src/@dist/js/script.js'
  },
  configFile: {
    data:      './src/config/data.json',
    banner:    './src/config/banner.txt',
    stylelint: './src/config/.stylelintrc',
    eslint:    './src/config/.eslintrc.json'
  }
};
````

The folder structure:

```text
.
├── dist/
|   └── theme.xml <----------------------|
├── src/                                 |
|   ├── @dist/                           |
|   |   ├── sass/                        |
|   |   |   └── style.css <----------|   |
|   |   ├── js/                      |   |
|   |   |   └── script.js <------|   |   |
|   |   └── skin/                |   |   |
|   |       └── skin.css <---│   |   |   |
|   ├── assets/              │   |   |   |
|   |   ├── sass/            │   |   |   |
|   |   |   └── index.scss --|---|-->|   |
|   |   ├── js/              |   |       |
|   |   |   └── index.js ----|-->|       |
|   |   └── skin/            |           |
|   |       └── index.css -->|           |
|   ├── config/                          |
|   |   ├── .eslintrc.json               |
|   |   ├── .stylelintrc                 |
|   |   ├── banner.txt                   |
|   |   └── data.json                    |
|   ├── index.njk ---------------------->|
|   └── layout.njk
├── bloggerpack.config.js
└── package.json
```

### Config files

#### src/config/data.json

Store your theme config in this file. This is Nunjucks template context, which means it can be accessed in [template files](#template) using `{{ data.keyName }}`. You can also access data from `package.json` using `{{ pkg.keyName }}`. See [Nunjucks variables](https://mozilla.github.io/nunjucks/templating.html#variables).

#### src/config/banner.txt

The header for compiled CSS and JS. You can access data from `data.json` using `<%= data.keyName %>`.

Example:

```text
/*!
 * <%= data.theme.name %> v<%= data.theme.version %>
 */
```

#### src/config/.stylelintrc

The default config is recommended, but if you want to change the config you can read the [Stylelint docs](https://stylelint.io/user-guide/configure).

#### src/config/.eslintrc.json

The default config is recommended, but if you want to change the config you can read the [ESLint docs](https://eslint.org/docs/user-guide/configuring).

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

### Default config [#](#folder-structure)

- Index file: `src/index.njk`
- Compiled to: `dist/theme.xml`

### Template tag

Wrap the markup with `::template::`-`::endtemplate::` tag in `.njk` files.

```njk
::template::
<p>example</p>
::endtemplate::
```

### Including template

Do not use the default Nunjucks `{% include %}` tag, use `{% template "path/to/file.njk" %}` tag instead.

Note: the path is relative to the `index.njk` root directory.

src/example-dir/file1.njk:

```njk
::template::
<p>example</p>
::endtemplate::
```

src/example-dir/file2.njk:

```njk
::template::
<div>
  {% template "example-dir/file1.njk" %}
</div>
::endtemplate::
```

src/index.njk:

```njk
::template::
{% template "example-dir/file2.njk" %}
::endtemplate::
```

Output (`dist/theme.xml`):

```html
<div>
  <p>example</p>
</div>
```

### Including template from node modules

You can also include template from node modules:

```njk
::template::
{% template type="module", "package-name/path/to/file.njk" %}
::endtemplate::
```

If you want to create package for Bloggerpack, below is example of `package-name/path/to/file.njk`:

```njk
::template::
Template here
::endtemplate::

::sass::
CSS for the template here
::endsass::

::skin::
Skin for the template here
::endskin::

::js::
JS for the template here
::endjs::
```

[Sass](#sass-in-template), [Skin](#skin-in-template), and [JS](#js-in-template) are optional.

### Including assets

Use `{% asset type="skin|style|script", "path/to/file" %}` tag for including compiled [Sass](#sass), [Skin](#skin), [JS](#js), and other CSS and JS assets.

```njk
::template::
<head>
  {# CSS/Sass first #}
  {% asset type="style", "@dist/sass/style.css" %}
  {# Skin #}
  {% asset type="skin", "@dist/skin/skin.css" %}
</head>
<body>
  ...

  {# JS #}
  {% asset type="script", "@dist/js/script.js" %}
</body>
::endtemplate::
```

Manual tag:

```njk
{%
  asset
    tag_start="<b:if cond='!data:view.isLayoutMode'><style>",
    "path/to/file.css",
    tag_end="</style></b:if>"
%}

{%
  asset
    tag_start="<script>//<![CDATA[",
    "path/to/file.js",
    tag_end="//]]></script>"
%}
```

Block tag:

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

Block tag with multiple files:

```njk
{% asset %}
<b:if cond='!data:view.isLayoutMode'>
<style>
{% asset "path/to/file1.css" %}
{% asset "path/to/file2.css" %}
</style>
</b:if>
{% endasset %}

{% asset %}
<script>
//<![CDATA[
{% asset "path/to/file1.js" %}
{% asset "path/to/file2.js" %}
//]]>
</script>
{% endasset %}
```

### Extending template

Wrap everything with `{% parent %}`-`{% endparent %}` tag, and then use Nunjucks `{% extends "" %}` tag. See [Nunjucks template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance).

src/layout.njk:

```njk
{% parent %}

::template::
<header>
  {% block header %}{% endblock %}
</header>

<main>
  {% block main %}{% endblock %}
</main>

<footer>
  {% block footer %}{% endblock %}
</footer>
::endtemplate::

{% endparent %}
```

src/index.njk:

```njk
::template::
{% extends "layout.njk" %}

{% block header %}
This is header content.
{% endblock %}

{% block main %}
This is main content.
{% endblock %}

{% block footer %}
This is footer content.
{% endblock %}
::endtemplate::
```

## Sass

Write your styles with [Sass](https://sass-lang.com/). You can also import Sass package from node modules.

### Default config [#](#folder-structure)

- Index file: `src/assets/sass/index.scss`
- Compiled to: `src/@dist/sass/style.css`

### Partialize

Do not write styles in `index.scss` directly. Add a new file (e.g., `_my-component.scss`) within `src/assets/sass/` and than import the file to `index.scss` using `@import "my-component";`.

### Sass-in-Template

You can write CSS for specific template in the template file directly using `::sass::`-`::endsass::` tag.

```njk
::template::
<h1 class='example'>Example</h1>
::endtemplate::

::sass::
$heading-color: #fff !default;

.example {
  color: $heading-color;
}
::endsass::
```

The styles within the tag would be automatically extracted to `src/assets/sass/_auto-extract.scss`.

## Skin

Skin is CSS that support Blogger's skin variables to allow your theme to be able to customize through the Blogger theme designer.

### Default config [#](#folder-structure)

- Index file: `src/assets/skin/index.css`
- Compiled to: `src/@dist/skin/skin.css`

### Partialize

Do not write styles in `index.css` directly. Add a new file (e.g., `my-component.css`) within `src/assets/skin/` and than import the file to `index.css` using `@import "my-component.css";`.

### Skin-in-Template

You can write skin CSS for specific template in the template file directly using `::skin::`-`::endskin::` tag.

```njk
::template::
<h1 class='example'>Example</h1>
::endtemplate::

::skin::
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
::endskin::
```

The styles within the tag would be automatically extracted to `src/assets/skin/auto-extract.css`.

## JS

The JavaScript. You can write your script with ES6+ and you can also import package from node modules.

### Default config [#](#folder-structure)

- Index file: `src/assets/js/index.js`
- Compiled to: `src/@dist/js/script.js`

### Partialize

Do not write scripts in `index.js` directly. Add a new file (e.g., `util.js`) within `src/assets/js/` and than import the file to `index.js` using `import './util';`.

### JS-in-Template

You can write JavaScript for specific template in the template file directly using `::js::`-`::endjs::` tag.

```njk
::template::
<h1 class='example' id='example'>Example</h1>
::endtemplate::

::js::
var example = document.getElementById('example');
::endjs::
```

The JavaScript within the tag would be automatically extracted to `src/assets/js/auto-extract.js`.

---

## Changelog

See [CHANGELOG](https://github.com/bloggerpack/bloggerpack/blob/master/CHANGELOG.md).

## License

Licensed under [MIT](https://github.com/bloggerpack/bloggerpack/blob/master/LICENSE).
