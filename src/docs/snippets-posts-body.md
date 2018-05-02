<!--
@@@title:Posts body@@@
@@@section:Snippets@@@
-->

# Posts body

The content of the post.

##### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Default

```html
<div expr:id='"PostBody_" + data:widget.instanceId + "_" + data:post.id'>
  <data:post.body/>
</div>
```
