<!--
@@@title:Getting started@@@
@@@section:None@@@
-->

# Getting started

Learn how to compile the source code, builds the theme and documentation, and more.


## Download

<a href="{{ docs.links.download }}">Download source</a>

### Contents

Once downloaded, you’ll see something like this:

```plaintext
{{ rootDirname }}/
├── dist/
│   ├── bundle/
│   ├── docs/
│   ├── skin/
│   └── theme.xml
└── src/
    ├── _defaultmarkups/
    ├── _includes/
    ├── _scss/
    ├── _widgets/
    ├── docs/
    ├── config.base.json
    ├── config.docs.json
    ├── config.theme.json
    ├── index.js
    ├── index.scss
    ├── index.xml
    ├── skin.css
    └── template-skin.css
```


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
