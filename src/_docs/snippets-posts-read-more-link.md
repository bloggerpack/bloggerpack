<!--
@@@title:Posts read more link@@@
@@@section:Snippets@@@
-->

# Posts read more link

Link to the full post.

### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Default

```html
<!-- Read more -->
<b:if cond='data:post.hasJumpLink'>
  <div>
    <a b:whitespace='remove' expr:href='fragment(data:post.url, "more")' role='button'>
      <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
      <data:blog.jumpLinkMessage/>
    </a>
  </div>
<b:else/>
  <b:if cond='data:post.snippets'>
    <div>
      <a b:whitespace='remove' expr:href='data:post.url' role='button'>
        <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
        <data:messages.keepReading/>
      </a>
    </div>
  </b:if>
</b:if>
```
