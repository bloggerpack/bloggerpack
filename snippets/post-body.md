# About

The content of the post.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Default

```html
<!-- wrapper (if needed) --><div class='wrapper-class-name' expr:id='"PostBody_" + data:widget.instanceId + "_" + data:post.id'>
  <data:post.body/>
<!-- /wrapper (if needed) --></div>
```
