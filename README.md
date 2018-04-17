# Blogger Starter

A starter theme for Blogger.


## Table of contents

- [Getting started](#getting-started)
- [Snippets](#snippets)
- [Contributing](#contributing)
- [License](#license)


## Getting started

### Download

Choose one of the following options:

- [Download the latest release.](#)
- Clone the repo: `git clone https://github.com/igoynawamreh/blogger-starter.git`

### Build tools

Blogger-Starter uses [Grunt](https://gruntjs.com/) for its build system.

#### Installing Grunt

1. [Download and install Node.js](https://nodejs.org/download/), which we use to manage our dependencies.
2. Install `grunt-cli` globally with `npm install -g grunt-cli`.
3. Navigate to the root `/blogger-starter/` directory, then run `npm install`. npm will look at the `package.json` file and automatically install the necessary local dependencies listed there.

#### Available Grunt commands

Our `Gruntfile.js` includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt` | `grunt` compiles and minifies CSS and JavaScript, and creates the `/dist` directory with compiled theme. |
| `grunt watch` | Watches the source files and automatically building them whenever you save. |


## Snippets

Library of commonly used snippets for Blogger.

### Posts

- [Title](snippets/post-title.md) - Title of the post.
- [Author name](snippets/post-author-name.md) - Name of the profile of the post author.
- [Author photo](snippets/post-author-photo.md) - Photo of the profile of the post author.
- [Date](snippets/post-date.md) - Date of the post.
- [Labels](snippets/post-labels.md) - Labels of the post.
- [Comments link](snippets/post-comments-link.md) - Link to the comments on the post.
- [Read more link](snippets/post-read-more-link.md) - Link to the full post.
- [Sharing](snippets/post-sharing.md) - The share buttons for the post.
- [Featured image](snippets/post-featured-image.md) - The featured image for the post.
- [Body](snippets/post-body.md) - The content of the post.
- [Snippet](snippets/post-snippet.md) - Snippet of the post's content.


## Contributing

Have a suggestion or bug fix? Open a pull request or issue.


## License

Licensed under [MIT](LICENSE).
