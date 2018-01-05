# About

Title of the post.


## Usage

```html
<b:loop values='data:posts' var='post'>
  [snippet]
</b:loop>
```


## Snippet

### Default

```html
<b:if cond='data:post.title'>
  <!-- wrapper (if needed) --><h1 class='wrapper-class-name'>
    <data:post.title/>
  <!-- /wrapper (if needed) --></h1>
</b:if>
```

### No title message

```html
<!-- wrapper (if needed) --><h1 class='wrapper-class-name'>
  <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
<!-- /wrapper (if needed) --></h1>
```

### Anchors

```html
<b:if cond='data:post.title'>
  <!-- wrapper (if needed) --><h1 class='wrapper-class-name'>
    <a class='title-link-class-name' expr:href='data:post.link ? data:post.link : data:post.url'>
      <data:post.title/>
    </a>
  <!-- /wrapper (if needed) --></h1>
</b:if>
```

##### + No title message

```html
<!-- wrapper (if needed) --><h1 class='wrapper-class-name'>
  <a class='title-link-class-name' expr:href='data:post.link ? data:post.link : data:post.url'>
    <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
  </a>
<!-- /wrapper (if needed) --></h1>
```
