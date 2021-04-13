# @bloggerpack/plugin-hello-world

> Hello world plugin for Bloggerpack. [Demo](https://bp-plugin-hello-world.blogspot.com/).

## Installation

```bash
npm install @bloggerpack/plugin-hello-world --save
```

## Usage

Hello components:

```njk
{% import "@bloggerpack/plugin-hello-world/src/hello.bloggerpack.xml" as hello %}

{{ hello.greetings('Name') }}
```

Bloggerpack GitHub:

```njk
{% template "@bloggerpack/plugin-hello-world/src/github.bloggerpack.xml" %}
```
