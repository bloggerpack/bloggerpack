<!--
@@@title:Getting started@@@
@@@description:Learn how to compile the source code, builds the theme and documentation, and more.@@@
@@@section:None@@@
-->

# Getting started

Learn how to compile the source code, builds the theme and documentation, and more.


## Introduction

### Quick start

Download and try to apply the precompiled theme (`dist/theme.xml`) to your blog.

### Download

<a class="doc-button" href="{{ docs.downloadUrl }}">Download</a>

### Contents

Once downloaded, unzip the compressed folder and you’ll see something like this:

```plaintext
[root project directory]
├── dist
│   ├── docs
│   └── theme.xml
└── src
    ├── _docs
    ├── _js
    ├── _scss
    ├── _xml
    ├── tmp
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
      <td>The <code>dist</code> folder includes precompiled theme, as well as compiled and minified documentation files.</td>
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
      <td><code style="white-space: nowrap;">src/_js</code></td>
      <td>The source code for JavaScript (<code>src/tmp/js/bundle.js</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_scss</code></td>
      <td>The source code for CSS (<code>src/tmp/css/bundle.css</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_xml</code></td>
      <td>The Blogger XML that can be mixed and matched by your theme.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/tmp</code></td>
      <td>CSS and JS are compiled into this folder.</td>
    </tr>
    <tr>
      <td>
        <div><code style="white-space: nowrap;">src/config.base.json</code></div>
        <div><code style="white-space: nowrap;">src/config.docs.json</code></div>
        <div><code style="white-space: nowrap;">src/config.theme.json</code></div>
      </td>
      <td>Configuration data.</td>
    </tr>
    <tr>
      <td rowspan="3">
        <div><code style="white-space: nowrap;">src/skin.css</code></div>
        <div><code style="white-space: nowrap;">src/template-skin.css</code></div>
      </td>
    </tr>
    <tr>
      <td>The main stylesheet. Styles in <code style="white-space: nowrap;">skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:skin&gt;</code> tag. You can use the <a href="https://support.google.com/blogger/answer/46871">skin variables</a>.</td>
    </tr>
    <tr>
      <td>Styles in <code style="white-space: nowrap;">template-skin.css</code> are defined within the <code style="white-space: nowrap;">&lt;b:template-skin&gt;</code> tag.</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/theme.xml</code></td>
      <td>The main file for the theme. All the compiled CSS and JS, and the XML partials will be included in this file.</td>
    </tr>
    <tr>
      <td>Other files/folders</td>
      <td>Beyond that, any other included file and directory provides support for packages, license information, and development.</td>
    </tr>
  </tbody>
</table>

### Step by Step Tutorial

The goal of this tutorial is to take you from having some development experience to building your first theme.

0. Download. Once downloaded, unzip the compressed folder and rename `{{ rootDirname }}-dist` to your project name.
1. Run through the [tooling setup](#tooling-setup) below to use our build system.
2. Configure theme `src/config.theme.json`.
3. Configure docs `src/config.docs.json`.
   - Important: change `title` (docs title) and `downloadUrl` (URL to download your theme).
4. Customize the theme and documentation to suit your needs.
5. Run `grunt` to build your changes.
6. To preview your changes, apply the new compiled theme (`dist/theme.xml`) to your blog. Reload the local documentation in your browser to preview documentation changes.
7. Done? (**Yes**: next) / (**No**: back to number `2`).
8. Edit `src/_docs/getting-started.md`: remove this section (Step by Step Tutorial).
9. Update `README.md` for your theme.
10. Version control: You can use [Git](https://git-scm.com) for your theme development (this is not required, but will help to manage changes to source code over time).
    1. `git init`
    2. `git add .`
    3. `git commit -m "Initial commit"`
    4. Push to [GitHub](https://github.com) or other services for Git.
11. To release your theme, run `grunt release`, this command will compile the source and zip your theme and the source (exclude: `.git`, `.zip`, `node_modules`).
12. Share or sell your theme (the `zip` file).
13. You can publish your theme documentation (`dist/docs`) to [GitHub Pages](https://pages.github.com) or other services.


## Tooling setup

We uses [Grunt](https://gruntjs.com/) for its build system. To use our build system, you’ll need the source files and Node. Follow these steps:

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install `grunt-cli` globally with `npm install -g grunt-cli`.
3. Navigate to the root project directory and run `npm install` to install our local dependencies listed in `package.json`.

When completed, you’ll be able to run the various commands provided from the command line.


## Using Grunt commands

Our `Gruntfile.js` includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | `grunt` creates the `dist` directory with compiled files. |
| `grunt watch` | Watches the source files and automatically building them whenever you save. |
| `grunt release` | Same as `grunt` plus it zip your theme and the source (exclude: `.git`, `.zip`, `node_modules`). |

### Local documentation

You can run the documentation locally via Grunt commands:

1. From the root project directory, run `grunt docs-serve` in the command line.
2. Open `http://localhost:9001` in your browser.

Or open `dist/docs/index.html` in your browser.


## Templating

We uses [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake) for creating modular files in order to ease the process while in development.

### Partials

For example, the grunt-bake tag that can be used to include the partial in `src/_xml/file.xml`:

```html
src/theme.xml

// Relative to the file
<!--(bake _xml/file.xml)-->

// Relative to the "src" path
<!--(bake /_xml/file.xml)-->
```

### Configuration

Configuration data:

1. `src/config.base.json`
2. `src/config.docs.json`
3. `src/config.theme.json`

You can access the data in: 

- `src/theme.xml`
- `src/skin.css`
- `src/template-skin.css`
- `src/_xml`
- `src/_scss`
- `src/_js`
- `src/_docs`

Access the data:

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
