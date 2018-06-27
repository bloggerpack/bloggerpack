<!--
@@@title:Posts title@@@
@@@section:Snippets@@@
-->

# Posts title

Title of the post.

##### Usage

```html
<b:loop values='data:posts' var='post'>
  ...
</b:loop>
```


## Default

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <h1>
    <data:post.title/>
  </h1>
</b:if>
```


## No title message

```html
<!-- Title -->
<h1>
  <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
</h1>
```


## Anchors

```html
<!-- Title -->
<b:if cond='data:post.title'>
  <h1>
    <a b:whitespace='remove' expr:href='data:post.link ?: data:post.url'>
      <data:post.title/>
    </a>
  </h1>
</b:if>
```

##### + No title message

```html
<!-- Title -->
<h1>
  <a b:whitespace='remove' expr:href='data:post.link ?: data:post.url'>
    <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
  </a>
</h1>
```
