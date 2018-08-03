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

<a href="{{ docs.links.download }}">Download source</a>

### Contents

Once downloaded, you’ll see something like this:

```plaintext
{{ rootDirname }}
├── dist
│   ├── bundle
│   ├── docs
│   ├── skin
│   └── theme.xml
└── src
    ├── _docs
    ├── _includes
    ├── _js
    ├── _scss
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
      <td>The <code>dist</code> folder includes precompiled files. We provide compiled theme (<code>theme.xml</code>), compiled and minified CSS and JS (<code>bundle.css</code> and <code>bundle.js</code>), as well as compiled and minified documentation files.</td>
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
      <td>The source code for JavaScript (<code>dist/bundle/bundle.js</code>).</td>
    </tr>
    <tr>
      <td><code style="white-space: nowrap;">src/_scss</code></td>
      <td>The source code for CSS (<code>dist/bundle/bundle.css</code>).</td>
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
| `grunt dist` | `grunt dist` creates the `/dist` directory with compiled files. |
| `grunt watch` | Watches the source files and automatically building them whenever you save. |


## Local documentation

You can run the documentation locally via Grunt commands:

1. From the root `/{{ rootDirname }}` directory, run `grunt docs-serve` in the command line.
2. Open `http://localhost:9001` in your browser.
