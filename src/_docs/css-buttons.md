<!--
@@@title:Buttons@@@
@@@section:CSS@@@
-->

# Buttons

Custom button styles.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/_buttons.scss</span>
    </div>
    <div class="doc-badge">
      <span class="doc-badge-item">Variables</span>
      <span class="doc-badge-item doc-badge-item-success">Yes</span>
    </div>
    <div class="doc-badge">
      <span class="doc-badge-item">Depend on Base CSS</span>
      <span class="doc-badge-item doc-badge-item-success">Yes</span>
    </div>
  </div>
</figure>


## Button tags

<div class="doc-example">
  <a class="button button-primary" href="#" role="button">Link</a>
  <button class="button button-primary" type="button">Button type button</button>
  <button class="button button-primary" type="submit">Button type submit</button>
  <input class="button button-primary" type="button" value="Input type button">
  <input class="button button-primary" type="submit" value="Input type submit">
  <input class="button button-primary" type="reset" value="Input type reset">
</div>

```html
<a class='button button-primary' href='#' role='button'>Link</a>
<button class='button button-primary' type='button'>Button type button</button>
<button class='button button-primary' type='submit'>Button type submit</button>
<input class='button button-primary' type='button' value='Input type button'/>
<input class='button button-primary' type='submit' value='Input type submit'/>
<input class='button button-primary' type='reset' value='Input type reset'/>
```


## Style

### Normal

<div class="doc-example">
  <button class="button" type="button">Default</button>
  <button class="button button-primary" type="button">Primary</button>
  <button class="button button-secondary" type="button">Secondary</button>
  <button class="button button-light" type="button">Light</button>
  <button class="button button-dark" type="button">Dark</button>
</div>

```html
<button class='button' type='button'>Default</button>
<button class='button button-primary' type='button'>Primary</button>
<button class='button button-secondary' type='button'>Secondary</button>
<button class='button button-light' type='button'>Light</button>
<button class='button button-dark' type='button'>Dark</button>
```

### Active state

<div class="doc-example">
  <button class="button active" type="button">Default</button>
  <button class="button button-primary active" type="button">Primary</button>
  <button class="button button-secondary active" type="button">Secondary</button>
  <button class="button button-light active" type="button">Light</button>
  <button class="button button-dark active" type="button">Dark</button>
</div>

```html
<button class='button active' type='button'>Default</button>
<button class='button button-primary active' type='button'>Primary</button>
<button class='button button-secondary active' type='button'>Secondary</button>
<button class='button button-light active' type='button'>Light</button>
<button class='button button-dark active' type='button'>Dark</button>
```

### Disabled state

<div class="doc-example">
  <button class="button" type="button" disabled>Default</button>
  <button class="button button-primary" type="button" disabled>Primary</button>
  <button class="button button-secondary" type="button" disabled>Secondary</button>
  <button class="button button-light" type="button" disabled>Light</button>
  <button class="button button-dark" type="button" disabled>Dark</button>
</div>

```html
<button class='button' disabled='' type='button'>Default</button>
<button class='button button-primary' disabled='' type='button'>Primary</button>
<button class='button button-secondary' disabled='' type='button'>Secondary</button>
<button class='button button-light' disabled='' type='button'>Light</button>
<button class='button button-dark' disabled='' type='button'>Dark</button>
```

<div class="doc-example">
  <a class="button disabled" href="#" role="button">Default</a>
  <a class="button button-primary disabled" href="#" role="button">Primary</a>
  <a class="button button-secondary disabled" href="#" role="button">Secondary</a>
  <a class="button button-light disabled" href="#" role="button">Light</a>
  <a class="button button-dark disabled" href="#" role="button">Dark</a>
</div>

```html
<a class='button disabled' href='#' role='button'>Default</a>
<a class='button button-primary disabled' href='#' role='button'>Primary</a>
<a class='button button-secondary disabled' href='#' role='button'>Secondary</a>
<a class='button button-light disabled' href='#' role='button'>Light</a>
<a class='button button-dark disabled' href='#' role='button'>Dark</a>
```


## Button group

<div class="doc-example">
  <div class="button-group">
    <button class="button button-secondary" type="button">Button</button>
    <button class="button button-secondary" type="button">Button</button>
    <button class="button button-secondary" type="button">Button</button>
  </div>
</div>

```html
<div class='button-group'>
  <button class='button button-secondary' type='button'>Button</button>
  <button class='button button-secondary' type='button'>Button</button>
  <button class='button button-secondary' type='button'>Button</button>
</div>
```
