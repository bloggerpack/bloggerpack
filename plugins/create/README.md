# @bloggerpack/plugin-create

> Plugin for creating new Bloggerpack plugin.

## Installation

Replace `<name>` below with the name of your plugin.

```bash
npx bloggerpack-create bloggerpack-plugin-<name> -s npm -t @bloggerpack/plugin-create
```

Once the plugin is created, navigate to the root `bloggerpack-plugin-<name>` directory and run `npm install` to install dependencies.

Once the installation is done, you can run some built-in commands:

- `npm run build` - Build the plugin.
- `npm run watch` - Watches the source files and automatically building them (in development mode) whenever you save.

You can now start to create your awesome Bloggerpack plugin. You can start by edit `package.json`.

Don't forget to write installation and usage guide in `README.md`.

## Plugin package name

- Note that the `name` in `package.json` is required.
- And the `name` must start with `bloggerpack-plugin-*` or `@org-name/bloggerpack-plugin-*`<br>
  (e.g. `bloggerpack-plugin-recent-posts` or `@org-name/bloggerpack-plugin-recent-posts`).

## Documentation

- [Bloggerpack](https://github.com/bloggerpack/bloggerpack/tree/main/packages/bloggerpack)
- [bloggerpack-create](https://github.com/bloggerpack/bloggerpack/tree/main/packages/bloggerpack-create)

## Changelog

See [CHANGELOG](https://github.com/bloggerpack/bloggerpack/blob/main/plugins/create/CHANGELOG.md).
