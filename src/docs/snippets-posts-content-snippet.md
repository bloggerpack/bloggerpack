<!--
@@@title:Posts content snippet@@@
@@@section:Snippets@@@
-->

# Posts content snippet

Snippet of the post's content.

##### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Short

```html
<div expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <data:post.snippets.short/>
  </b:if>
</div>
```


## Long

```html
<div expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <data:post.snippets.long/>
  </b:if>
</div>
```


## Custom

```html
<div expr:id='"PostSnippet_" + data:widget.instanceId + "_" + data:post.id'>
  <b:if cond='data:post.hasJumpLink'>
    <data:post.body/>
  <b:else/>
    <b:eval expr='snippet(data:post.snippets.long, { length: 150, links: false, linebreaks: false, ellipsis: true })'/>
  </b:if>
</div>
```
