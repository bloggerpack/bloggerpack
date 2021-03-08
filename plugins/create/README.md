# @bloggerpack/plugin-create

> Plugin for creating new [Bloggerpack](https://github.com/bloggerpack/bloggerpack/tree/main/packages/bloggerpack) plugin.

## Installation

Replace `<awesome>` below with the name of your plugin.

```bash
npx bloggerpack-create bloggerpack-plugin-<awesome> -x=npm -s="@bloggerpack/plugin-create"
```

Once the installation is done:

- Run `npm install` to install dependencies
- You can start by edit `package.json` and `README.md`
- Read the [Bloggerpack](https://github.com/bloggerpack/bloggerpack/tree/main/packages/bloggerpack) documentation

## Plugin package name

Note that the `name` in `package.json` is required,<br>
and the `name` must start with `bloggerpack-plugin-*` or `@org-name/bloggerpack-plugin-*`<br>
(e.g. `bloggerpack-plugin-recent-posts` or `@org-name/bloggerpack-plugin-recent-posts`).
