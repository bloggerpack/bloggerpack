| [Download](https://github.com/bloggerpack/bloggerpack/releases/download/v1.0.0-beta.5/blank-(bloggerpack-1.0.0-beta.5).zip) | [Preview](https://bp-blank.blogspot.com/) |
| --- | --- |

Once downloaded, unzip the compressed folder and than rename the folder (e.g., `my-awesome-theme`).

Now, you can open your project folder:

```bash
cd my-awesome-theme
```

Run `npm install` to install dependencies.

Once the installation is done, you can run some built-in commands:

- `npm run build` - Build the theme.
- `npm run watch` - Watches the source files and automatically building them whenever you save.

Don't forget to configure:

- [Browserslist](https://github.com/browserslist/browserslist) in `package.json`
- `src/config/banner.txt`
- `src/config/data.json`

You can configure `bloggerpack.config.js` to change the default folder structure. Before you start, you need to remove `dist` and `src/@dist` folder manually. Make sure to edit `path/to/file` in template files, too.
