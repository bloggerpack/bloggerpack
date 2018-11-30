<!--
@@@title:Read more link@@@
@@@description:Link to the full post.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Read more link

Link to the full post.


## Default

```html
<!-- Read more -->
<b:if cond='data:post.hasJumpLink'>
  <a b:whitespace='remove' expr:href='fragment(data:post.url, "more")' role='button'>
    <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
    <data:blog.jumpLinkMessage/>
  </a>
<b:else/>
  <b:if cond='data:post.snippets'>
    <a b:whitespace='remove' expr:href='data:post.url' role='button'>
      <b:attr expr:value='data:post.title ? data:post.title : ""' name='title'/>
      <data:messages.keepReading/>
    </a>
  </b:if>
</b:if>
```
