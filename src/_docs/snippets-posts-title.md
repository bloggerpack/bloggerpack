<!--
@@@title:Posts title@@@
@@@section:Snippets@@@
-->

# Posts title

Title of the post.


## Default

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <data:post.title/>
</b:if>
```


## Fallback

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <data:post.title/>
<b:else/><!-- fallback -->
  <data:messages.noTitle/>
</b:if>
```


## Anchors

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <a b:whitespace='remove' expr:href='data:post.link ?: data:post.url'>
    <data:post.title/>
  </a>
</b:if>
```

**+ Fallback**

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <a b:whitespace='remove' expr:href='data:post.link ?: data:post.url'>
    <data:post.title/>
  </a>
<b:else/><!-- fallback -->
  <a b:whitespace='remove' expr:href='data:post.link ?: data:post.url'>
    <data:messages.noTitle/>
  </a>
</b:if>
```
