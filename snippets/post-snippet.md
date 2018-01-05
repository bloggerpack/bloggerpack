# About

Snippet of the post's content.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Short

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name' expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <data:post.snippets.short/>
  </b:if>
<!-- /wrapper (if needed) --></div>
```

### Long

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name' expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <data:post.snippets.long/>
  </b:if>
<!-- /wrapper (if needed) --></div>
```

### Custom

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name' expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <b:eval expr='snippet(data:post.snippets.long, { length: 150, links: false, linebreaks: false, ellipsis: true })'/>
  </b:if>
<!-- /wrapper (if needed) --></div>
```
