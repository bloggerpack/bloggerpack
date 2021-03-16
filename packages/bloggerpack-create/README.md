# bloggerpack-create

> Create Bloggerpack based theme using command line and starter template as a head start.

## Usage

```bash
$ npx bloggerpack-create <project-directory> [options]
```

Don't use a global installation of `bloggerpack-create`, always uses the latest version using `npx bloggerpack-create`.

### Options

| Options | Alias | Type | Description |
| ------- | ----- | ---- | ----------- |
| `--source` | `-s` | string | Set source: `npm`, `git` or `archive`. |
| `--template` | `-t` | string | Set starter template. |
| `--help` | `-h` | boolean | Show help. |
| `--version` | `-v` | boolean | Show version number. |

### Examples

#### npm

```bash
$ npx bloggerpack-create <project-directory> -s npm -t <package>

# Latest version
$ npx bloggerpack-create project-name -s npm -t package-name
# Latest version with scoped package
$ npx bloggerpack-create project-name -s npm -t @org-name/package-name

# Latest 1.x.x
$ npx bloggerpack-create project-name -s npm -t package-name@1
$ npx bloggerpack-create project-name -s npm -t @org-name/package-name@1

# Latest 1.2.x
$ npx bloggerpack-create project-name -s npm -t package-name@1.2
$ npx bloggerpack-create project-name -s npm -t @org-name/package-name@1.2

# Specific version
$ npx bloggerpack-create project-name -s npm -t package-name@1.2.3
$ npx bloggerpack-create project-name -s npm -t @org-name/package-name@1.2.3
```

#### git

```bash
$ npx bloggerpack-create <project-directory> -s git -t <git-host>:<user>/<repo>#<branch|tag>

# Branch
$ npx bloggerpack-create project-name -s git -t github:username/repo-name#main
$ npx bloggerpack-create project-name -s git -t gitlab:username/repo-name#master

# Tag
$ npx bloggerpack-create project-name -s git -t github:username/repo-name#v1.0.0
$ npx bloggerpack-create project-name -s git -t gitlab:username/repo-name#v1.0.0
```

#### archive

```bash
$ npx bloggerpack-create project-name -s archive -t https://example.com/awesome-starter.zip
```

#### Show version number

```bash
$ npx bloggerpack-create --version
```

#### Show help

```bash
$ npx bloggerpack-create --help
```

You can run this command to see all options and examples.

## Starters and plugins

See our [starters](https://github.com/bloggerpack/bloggerpack/tree/main/starters) and [plugins](https://github.com/bloggerpack/bloggerpack/tree/main/plugins), or you can find a list of available starters and plugins by searching for `bloggerpack` on [GitHub](https://github.com/topics/bloggerpack) or [npm](https://www.npmjs.com/search?q=keywords%3Abloggerpack).

## Changelog

See [CHANGELOG](https://github.com/bloggerpack/bloggerpack/blob/main/packages/bloggerpack-create/CHANGELOG.md).
