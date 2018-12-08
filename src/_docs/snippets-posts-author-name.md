<!--
@@@title:Author name@@@
@@@description:Name of the profile of the post author.@@@
@@@section:Snippets@@@
@@@subsection:Posts@@@
-->

# Author name

Name of the profile of the post author.


## Default

```html
<!-- Author name -->
<b:if cond='data:post.author'>
  <span><data:post.author.name/></span>
</b:if>
```


## Fallback

```html
<!-- Author name -->
<b:if cond='data:post.author'>
  <span><data:post.author.name/></span>
<b:else/><!-- fallback -->
  <span>Anonymous</span>
</b:if>
```


## Anchors

```html
<!-- Author name -->
<b:if cond='data:post.author'>
  <b:if cond='data:post.author.profileUrl'>
    <a expr:href='data:post.author.profileUrl' expr:title='data:messages.visitProfile'>
      <b:attr name='b:whitespace' value='remove'/>
      <data:post.author.name/>
    </a>
  <b:else/><!-- no profileUrl -->
    <span><data:post.author.name/></span>
  </b:if>
</b:if>
```

**+ Fallback**

```html
<!-- Author name -->
<b:if cond='data:post.author'>
  <b:if cond='data:post.author.profileUrl'>
    <a expr:href='data:post.author.profileUrl' expr:title='data:messages.visitProfile'>
      <b:attr name='b:whitespace' value='remove'/>
      <data:post.author.name/>
    </a>
  <b:else/><!-- no profileUrl -->
    <span><data:post.author.name/></span>
  </b:if>
<b:else/><!-- fallback -->
  <span>Anonymous</span>
</b:if>
```
