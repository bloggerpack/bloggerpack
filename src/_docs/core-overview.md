<!--
@@@title:Overview@@@
@@@section:Core Template@@@
-->

# Overview


## Layouts and gadget version

We use layouts version `3`:

```html
<html b:layoutsVersion='3'>
  ...
</html>
```

We use gadget version `2`:

```html
<html b:defaultwidgetversion='2'>
  ...
</html>

<b:widget version='2'>
  ...
</b:widget>
```


## Styles and settings

### `<b:section>` and `<b:widget>`

`<b:section>`:

- Classes and IDs are named using the format `b-section-{name}`.
- Use `name` attribute for naming the section.

`<b:widget>`:

- Always use `title`, `version`, and `visible` attribute.

Example:

```html
<b:section class='b-section-header-nav' id='b-section-header-nav' name='Header nav'>
  <b:widget id='HTML1' locked='false' title='HTML/JavaScript' type='HTML' version='2' visible='true'>
    ...
  </b:widget>
</b:section>
```

### Comments and organization

Blogger XML:

```html
<b:comment>
#############################################################################
Heading 1
############################################################################# </b:comment>

<b:comment>### Heading 1.1 ###</b:comment>

<b:comment>=== Heading 1.1.1 ===</b:comment>
<div>...</div>

<b:comment>=== Heading 1.1.2 ===</b:comment>
<div>...</div>


#############################################################################
Heading 2
############################################################################# </b:comment>

<b:comment>### Heading 2.1 ###</b:comment>

<div>...</div>

<b:comment>### Heading 2.2 ###</b:comment>

<div>
  <b:comment>=== Heading 2.2.1 ===</b:comment>
  <div>...</div>

  <b:comment>=== Heading 2.2.2 ===</b:comment>
  <div>
    <b:comment>= Heading 2.2.2.1 =</b:comment>
    <div>...</div>

    <b:comment>= Heading 2.2.2.2 =</b:comment>
    <div>...</div>
  </div>
</div>
```

CSS (`.css`):

```css
/* ==========================================================================
   Heading 1
   ========================================================================== */

...

/**
 * Sub-heading or description
 */

...

/** Another sub-heading **/

...

/* Basic comment */
...

/* Heading 1.2
   ========================================================================== */

...

/**
 * Sub-heading or description
 */

...

/** Another sub-heading **/

...

/* Basic comment */
...

/* Heading 1.2.1
   ========================================= */

...

/**
 * Sub-heading or description
 */

...

/** Another sub-heading **/

...

/* Basic comment */
...
```
