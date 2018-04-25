# Post read more link

Link to the full post.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Default

```html
<b:if cond='data:post.hasJumpLink'>
  <div expr:id='"More_" + data:widget.instanceId + "_" + data:post.id'>
    <a b:whitespace='remove' expr:href='fragment(data:post.url, "more")' role='button'>
      <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
      <data:blog.jumpLinkMessage/>
    </a>
  </div>
<b:else/>
  <b:if cond='data:post.snippets'>
    <div expr:id='"More_" + data:widget.instanceId + "_" + data:post.id'>
      <a b:whitespace='remove' expr:href='data:post.url' role='button'>
        <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
        <data:messages.keepReading/>
      </a>
    </div>
  </b:if>
</b:if>
```
