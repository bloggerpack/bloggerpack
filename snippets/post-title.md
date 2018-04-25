# Post title

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
  <h1>
    <data:post.title/>
  </h1>
</b:if>
```

### No title message

```html
<h1>
  <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
</h1>
```

### Anchors

```html
<b:if cond='data:post.title'>
  <h1>
    <a expr:href='data:post.link ? data:post.link : data:post.url'>
      <data:post.title/>
    </a>
  </h1>
</b:if>
```

##### + No title message

```html
<h1>
  <a expr:href='data:post.link ? data:post.link : data:post.url'>
    <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/>
  </a>
</h1>
```
