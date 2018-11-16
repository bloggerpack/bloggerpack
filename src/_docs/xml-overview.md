<!--
@@@title:Overview@@@
@@@section:XML@@@
-->

# Overview

Blogger XML.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_xml</span>
    </div>
    <div class="doc-badge">
      <span class="doc-badge-item">Compiled version</span>
      <span class="doc-badge-item doc-badge-item-danger">None</span>
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
