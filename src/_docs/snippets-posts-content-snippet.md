<!--
@@@title:Posts content snippet@@@
@@@section:Snippets@@@
-->

# Posts content snippet

Snippet of the post's content.

### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Short

```html
<!-- Snippet -->
<b:if cond='data:post.hasJumpLink'>
  <data:post.body/>
<b:else/>
  <data:post.snippets.short/>
</b:if>
```


## Long

```html
<!-- Snippet -->
<b:if cond='data:post.hasJumpLink'>
  <data:post.body/>
<b:else/>
  <data:post.snippets.long/>
</b:if>
```


## Custom

```html
<!-- Snippet -->
<b:if cond='data:post.hasJumpLink'>
  <data:post.body/>
<b:else/>
  <b:eval expr='snippet(data:post.snippets.long, { length: 150, links: false, linebreaks: false, ellipsis: true })'/>
</b:if>
```
