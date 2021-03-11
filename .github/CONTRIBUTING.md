# Contributing to Bloggerpack

The bloggerpack repo is a [monorepo](https://en.wikipedia.org/wiki/Monorepo) which leverages [Lerna](https://github.com/lerna/lerna) for dependency and release management.

## Get started

To begin, please fork the project, clone your fork, configure the remotes, and install dependencies:

```bash
# 1. Fork the project

# 2. Clone your fork of the repo into the current directory
$ git clone https://github.com/<your-username>/bloggerpack.git

# 3. Navigate to the newly cloned directory
$ cd bloggerpack

# 4. Assign the original repo to a remote called "upstream"
$ git remote add upstream https://github.com/bloggerpack/bloggerpack.git

# 5. Install dependencies
$ npm ci && npm run bootstrap
```

## Commands

### Using npm scripts

Our [package.json](../package.json) includes the following commands for develop the project:

| Command | Description |
| ------- | ----------- |
| `npm run test` | Lint, tests, and build all packages. |
| `npm run lint` | Lint JS files. |
| `npm run bloggerpack` | Tests and build Bloggerpack. |
| `npm run starters` | Tests and build all starter themes. |
| `npm run plugins` | Tests and build all plugins. |

You may need to run specific command, please see our [package.json](../package.json) or run `npm run` to see all the npm scripts.

### Adding dependencies

Install `<package>` in `dependencies`:

```bash
$ npx lerna add <package> --scope=<name> --no-bootstrap
```

or install `<package>` in `devDependencies`:

```bash
$ npx lerna add <package> --scope=<name> --dev --no-bootstrap
```

and then:

```bash
$ npm run bootstrap
```

Where `<package>` is the name of the NPM package you wish to add, and `<name>` is the proper name of the Bloggerpack's packages (e.g., `@bloggerpack/starter-create`).

## Pull requests

1. Read [get started](#get-started) and [commands](#commands) above.

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout main
   git pull upstream main
   ```

3. Create a new topic branch to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. [Test and build](#using-npm-scripts) your changes.

5. Commit your changes.

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. Open a Pull Request with a clear title and description against the `main` branch.
