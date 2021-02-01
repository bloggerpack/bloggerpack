# @bloggerpack/plugin-hello-world ([Preview](https://bp-plugin-hello-world.blogspot.com))

> Hello world plugin for [Bloggerpack](https://github.com/bloggerpack/bloggerpack/tree/main/packages/bloggerpack).

## Installation

```bash
npm install @bloggerpack/plugin-hello-world --save
```

## Usage

Hello components:

```njk
{% import "@bloggerpack/plugin-hello-world/template/hello.njk" as hello %}

{{ hello.myNameIs('Your Name') }}
```

Bloggerpack GitHub:

```njk
{% template "@bloggerpack/plugin-hello-world/template/bloggerpack-github.njk" %}
```
