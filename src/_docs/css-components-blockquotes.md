<!--
@@@title:Blockquotes@@@
@@@description:Simple CSS for blockquotes.@@@
@@@section:CSS@@@
@@@subsection:Components@@@
-->

# Blockquotes

Simple CSS for blockquotes.

<figure>
  <div class="doc-badges">
    <div class="doc-badge">
      <span class="doc-badge-item">Source</span>
      <span class="doc-badge-item doc-badge-item-info">src/_scss/_blockquotes.scss</span>
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


## Examples

<div class="doc-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
</div>

```html
<blockquote class='blockquote'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

### Naming a source

<div class="doc-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</div>

```html
<blockquote class='blockquote'>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class='blockquote-footer'>Someone famous in <cite title='Source Title'>Source Title</cite></footer>
</blockquote>
```
