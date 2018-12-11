<!--
@@@title:CSS@@@
@@@description:Put XML file and its styles together.@@@
@@@section:XML@@@
@@@subsection:None@@@
-->

# CSS

You can create Sass/CSS files in `src/_xml` folder (put XML file and its styles together). The files will be automatically concatenated and compiled into `src/tmp/css/xml-sass.css` (Sass files) and `src/tmp/css/xml-css.css` (CSS files), the files is also minified.


## Sass example

```plaintext
[root project directory]
└── src/
    └── _xml/
        ├── folder-1/
        │   ├── component-1.scss
        │   ├── component-1.xml
        │   ├── component-2.scss
        │   └── component-2.xml
        └── folder-2/
            ├── component-1.scss
            ├── component-1.xml
            ├── component-2.scss
            └── component-2.xml
```

The styles in `folder-1/*.scss` and `folder-2/*.scss` will be available in the `src/tmp/css/xml-sass.css`.

### Variables, functions, and mixins

You can add local and/or global variables, functions, and mixins. The variables, functions, and mixins name must be unique to avoid override by another Sass files in the `src/_xml`.

#### Local example

Example local variables:

```scss
src/_xml/folder-1/component-1.scss

$component-1-color: #fff !default;
$component-1-bg:    #000 !default;

.element {
  color: $component-1-color;
  background-color: $component-1-bg;
}
```

#### Global example

Create a new file `_global.scss` in `src/_xml`.

Example global variables:

```scss
src/_xml/_global.scss

$color: #fff !default;
$bg:    #000 !default;
```

```scss
src/_xml/folder-1/component-2.scss

.element {
  color: $color;
  background-color: $bg;
}
```

### Import

You can also import variables, functions, and mixins from `src/_scss`.

```scss
src/_xml/_global.scss

@import "./src/_scss/custom";
@import "./src/_scss/functions";
@import "./src/_scss/variables";
@import "./src/_scss/mixins";
```


## CSS example

```plaintext
[root project directory]
└── src/
    └── _xml/
        ├── folder-1/
        │   ├── component-1.css
        │   ├── component-1.xml
        │   ├── component-2.css
        │   └── component-2.xml
        └── folder-2/
            ├── component-1.css
            ├── component-1.xml
            ├── component-2.css
            └── component-2.xml
```

The styles in `folder-1/*.css` and `folder-2/*.css` will be available in the `src/tmp/css/xml-css.css`.
