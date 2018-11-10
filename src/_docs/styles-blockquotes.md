<!--
@@@title:Blockquotes@@@
@@@section:Styles@@@
-->

# Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class='blockquote'>` around any HTML as the quote.


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
