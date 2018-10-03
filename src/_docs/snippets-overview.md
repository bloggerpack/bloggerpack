<!--
@@@title:Overview@@@
@@@section:Snippets@@@
-->

# Snippets

Library of commonly used snippets for Blogger.


## Blogger version

We uses layouts version `3`:

```html
<html b:layoutsVersion='3'>
  ...
</html>
```

We uses gadget version `2`:

```html
<html b:defaultwidgetversion='2'>
  ...
</html>

<b:widget version='2'>
  ...
</b:widget>
```


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
