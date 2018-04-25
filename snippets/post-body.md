# Post body

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
<div expr:id='"PostBody_" + data:widget.instanceId + "_" + data:post.id'>
  <data:post.body/>
</div>
```
