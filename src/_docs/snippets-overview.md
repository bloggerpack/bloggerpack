<!--
@@@title:Overview@@@
@@@section:Snippets@@@
-->

# Snippets

Library of commonly used snippets for Blogger.


## Wrapper

### Without fallback

```html
<b:loop values='data:posts' var='post'>

  <!-- Title -->
  <b:if cond='data:post.title'>
    <h1 class='wrapper'> <!-- the wrapper is inside conditional tags -->
      <data:post.title/>
    </h1>
  </b:if>

  <!-- Author name -->
  <b:if cond='data:post.author'>
    <div class='wrapper'> <!-- the wrapper is inside conditional tags -->
      <span><data:post.author.name/></span>
    </div>
  </b:if>

</b:loop>
```

### With fallback

```html
<b:loop values='data:posts' var='post'>
  
  <!-- Title -->
  <h1 class='wrapper'> <!-- the wrapper is outside conditional tags -->
    <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
  </h1>

  <!-- Author name -->
  <div class='wrapper'> <!-- the wrapper is outside conditional tags -->
    <b:if cond='data:post.author'>
      <span><data:post.author.name/></span>
    <b:else/><!-- fallback -->
      <span>Anonymous</span>
    </b:if>
  </div>

</b:loop>
```
