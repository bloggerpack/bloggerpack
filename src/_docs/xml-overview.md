<!--
@@@title:Overview@@@
@@@description:Blogger XML.@@@
@@@section:XML@@@
@@@subsection:None@@@
-->

# Overview

Blogger XML.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml</span>
    </div>
  </div>
</figure>


## Blogger version

We uses layouts version `3`:

```html
<html b:layoutsVersion='3'>
  ...
</html>
```

We uses gadget version `2`:

```html
<html b:defaultwidgetversion='2'>
  ...
</html>

<b:widget version='2'>
  ...
</b:widget>
```


## Scoped CSS

You can create Sass/CSS files in `src/_xml`, the Sass/CSS files will be automatically concatenated, compiled, and minified into `src/tmp/css/xml-sass.css` (Sass files) and `src/tmp/css/xml-css.css` (CSS files).

When using this feature, its CSS will apply to elements of the current file/component only. This means the element and its CSS must be set specifically.

Example:

Component 1

```html
# component-1.xml

<div class='component-1-element'>
  ...
</div>
```

```scss
# component-1.scss

.component-1-element {
  ...
}
```

Component 2

```html
# component-2.xml

<div class='component-2-element'>
  ...
</div>
```

```scss
# component-2.scss

.component-2-element {
  ...
}
```

### Sass example

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
            ├── component-3.scss
            ├── component-3.xml
            ├── component-4.scss
            └── component-4.xml
```

The styles in `folder-1/*.scss` and `folder-2/*.scss` will be available in the `src/tmp/css/xml-sass.css`.

#### Variables, functions, and mixins

You can add local and/or global variables, functions, and mixins. The name of the variables, functions, and mixins must be unique to avoid override by another Sass files in the `src/_xml`.

##### Local example

Example local variables:

```scss
# src/_xml/folder-1/component-1.scss

$component-1-color: #fff !default;
$component-1-bg:    #000 !default;

.component-1-element {
  color: $component-1-color;
  background-color: $component-1-bg;
}
```

##### Global example

Create a new file `_global.scss` in `src/_xml`. In this new file add variables, functions, and mixins. Functions must come first, then variables, and then mixins.

Example global variables:

```scss
# src/_xml/_global.scss

$color: #fff !default;
$bg:    #000 !default;
```

```scss
# src/_xml/folder-1/component-2.scss

.component-2-element {
  color: $color;
  background-color: $bg;
}
```

#### Import

You can also import variables, functions, and mixins from `src/_scss`, or import Sass files from Node.js module.

```scss
# src/_xml/_global.scss

@import "./src/_scss/file-name";
```

### CSS example

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
            ├── component-3.css
            ├── component-3.xml
            ├── component-4.css
            └── component-4.xml
```

The styles in `folder-1/*.css` and `folder-2/*.css` will be available in the `src/tmp/css/xml-css.css`.


## Code guide

### Comments and organization

```html
<b:comment>
#############################################################################
Heading 1
############################################################################# </b:comment>
↓
<b:comment>### Heading 1.1 ###</b:comment>
↓
<div>
  .........
</div>
↓
<b:comment>### Heading 1.2 ###</b:comment>
↓
<div>
  .........
</div>
↓
↓
#############################################################################
Heading 2
############################################################################# </b:comment>
↓
<b:comment>### Heading 2.1 ###</b:comment>
↓
<b:comment>=== Heading 2.1.1 ===</b:comment>
<div>
  .........
</div>
<b:comment>=== Heading 2.1.2 ===</b:comment>
<div>
  .........
</div>
↓
<b:comment>### Heading 2.2 ###</b:comment>
↓
<div>
  <b:comment>=== Heading 2.2.1 ===</b:comment>
  <div>
    .........
  </div>
  <b:comment>=== Heading 2.2.2 ===</b:comment>
  <div>
    <b:comment>=== Heading 2.2.2.1 ===</b:comment>
    <div>
      .........
    </div>
    <b:comment>=== Heading 2.2.2.2 ===</b:comment>
    <div>
      .........
    </div>
  </div>
</div>
↓
<b:comment>### Heading 2.3 ###</b:comment>
↓
<div>
  ↓
  <b:comment>### Heading 2.3.1 ###</b:comment>
  ↓
  <div>
    .........
  </div>
  ↓
  <b:comment>### Heading 2.3.2 ###</b:comment>
  ↓
  <b:comment>=== Heading 2.3.2.1 ===</b:comment>
  <div>
    .........
  </div>
  <b:comment>=== Heading 2.3.2.2 ===</b:comment>
  <div>
    <b:comment>=== Heading 2.3.2.2.1 ===</b:comment>
    <div>
      .........
    </div>
    <b:comment>=== Heading 2.3.2.2.2 ===</b:comment>
    <div>
      .........
    </div>
  </div>
</div>
```

### `<b:section>` and `<b:widget>`

`<b:section>`:

- Classes and IDs are named using the format `b-section-{name}`.
- Use `name` attribute for naming the section.

`<b:widget>`:

- Always use `locked`, `title`, `version`, and `visible` attribute.

Example:

```html
<b:section class='b-section-header-nav' id='b-section-header-nav' name='Header nav'>
  <b:widget id='HTML1' locked='false' title='HTML/JavaScript' type='HTML' version='2' visible='true'>
    ...
  </b:widget>
</b:section>
```
