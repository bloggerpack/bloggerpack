# Post author name

Name of the profile of the post author.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Default

```html
<b:if cond='data:post.author'>
  <span><data:post.author.name/></span>
</b:if>
```

### Fallback

```html
<b:if cond='data:post.author'>
  <span><data:post.author.name/></span>
<b:else/><!-- fallback -->
  <span>Anonymous</span>
</b:if>
```

### Anchors

```html
<b:if cond='data:post.author'>
  <b:if cond='data:post.author.profileUrl'>
    <a b:whitespace='remove' expr:href='data:post.author.profileUrl' expr:title='data:messages.visitProfile'>
      <data:post.author.name/>
    </a>
  <b:else/><!-- no profileUrl -->
    <span><data:post.author.name/></span>
  </b:if>
</b:if>
```

##### + Fallback

```html
<b:if cond='data:post.author'>
  <b:if cond='data:post.author.profileUrl'>
    <a b:whitespace='remove' expr:href='data:post.author.profileUrl' expr:title='data:messages.visitProfile'>
      <data:post.author.name/>
    </a>
  <b:else/><!-- no profileUrl -->
    <span><data:post.author.name/></span>
  </b:if>
<b:else/><!-- fallback -->
  <span>Anonymous</span>
</b:if>
```
