<!--
@@@title:Title@@@
@@@description:Title of the post.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Title

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
  <a expr:href='data:post.link ?: data:post.url'>
    <b:attr name='b:whitespace' value='remove'/>
    <data:post.title/>
  </a>
</b:if>
```

**+ Fallback**

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <a expr:href='data:post.link ?: data:post.url'>
    <b:attr name='b:whitespace' value='remove'/>
    <data:post.title/>
  </a>
<b:else/><!-- fallback -->
  <a expr:href='data:post.link ?: data:post.url'>
    <b:attr name='b:whitespace' value='remove'/>
    <data:messages.noTitle/>
  </a>
</b:if>
```
